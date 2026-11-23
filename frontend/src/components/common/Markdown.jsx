// Minimal, dependency-free Markdown renderer for CMS text (headings, lists,
// bold/italic, links, paragraphs). Renders React elements only – no raw HTML.
// "#" headings are demoted to <h2> so each page keeps a single <h1>.

function inline(text, keyPrefix) {
  const parts = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyPrefix}-${i++}`;
    if (tok.startsWith("**")) {
      parts.push(<strong key={key}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith("[")) {
      const [, label, href] = tok.match(/\[([^\]]+)\]\(([^)\s]+)\)/);
      const safe = /^(https?:|\/|tel:|mailto:|#)/i.test(href) ? href : "#";
      parts.push(
        <a key={key} href={safe} className="text-[#B8851F] underline">
          {label}
        </a>,
      );
    } else {
      parts.push(<em key={key}>{tok.slice(1, -1)}</em>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

const H = {
  1: "text-3xl font-bold text-[#3D1F0D] mt-10 mb-4",
  2: "text-3xl font-bold text-[#3D1F0D] mt-10 mb-4",
  3: "text-2xl font-semibold text-[#3D1F0D] mt-8 mb-3",
  4: "text-xl font-semibold text-[#3D1F0D] mt-6 mb-2",
};

export default function Markdown({ text = "", className = "" }) {
  const lines = String(text).replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let para = [];
  let list = null;

  const flushPara = () => {
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
    para = [];
  };
  const flushList = () => {
    if (list) blocks.push(list);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    const ul = line.match(/^[-*•]\s+(.*)$/);
    const ol = line.match(/^\d+[.)]\s+(.*)$/);
    if (!line) {
      flushPara();
      flushList();
    } else if (h) {
      flushPara();
      flushList();
      blocks.push({ type: "h", level: Math.min(h[1].length, 4), text: h[2] });
    } else if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((ul || ol)[1]);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();

  return (
    <div className={className}>
      {blocks.map((b, i) => {
        const k = `b${i}`;
        if (b.type === "h") {
          const Tag = b.level <= 2 ? "h2" : `h${b.level}`;
          return (
            <Tag key={k} className={H[b.level]}>
              {inline(b.text, k)}
            </Tag>
          );
        }
        if (b.type === "ul" || b.type === "ol") {
          const Tag = b.type;
          return (
            <Tag
              key={k}
              className={`${b.type === "ul" ? "list-disc" : "list-decimal"} pl-6 my-4 space-y-2 text-lg text-gray-600 leading-8`}
            >
              {b.items.map((it, j) => (
                <li key={`${k}-${j}`}>{inline(it, `${k}-${j}`)}</li>
              ))}
            </Tag>
          );
        }
        return (
          <p key={k} className="my-4 text-lg text-gray-600 leading-9">
            {inline(b.text, k)}
          </p>
        );
      })}
    </div>
  );
}
