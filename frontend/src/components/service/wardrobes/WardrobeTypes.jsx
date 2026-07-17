'use client';

import { motion } from 'framer-motion';

const WardrobeTypeCard = ({ icon, title, subtitle, image, link }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Icon Badge */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-amber-400/20 border border-amber-400 rounded-lg flex items-center justify-center text-amber-400 text-xl">
        {icon}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif text-amber-50 mb-2">{title}</h3>
        <p className="text-amber-100/60 text-sm mb-4">{subtitle}</p>
        <motion.a
          href={link}
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-amber-400 font-medium text-sm hover:text-amber-300 transition-colors"
        >
          Explore Designs <span>→</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const WardrobeTypes = () => {
  const wardrobes = [
    {
      id: 1,
      icon: '🚪',
      title: 'Sliding Wardrobes',
      subtitle: 'Elegant • Space-Saving',
      image: '/image/wardrobe_design17.webp',
      link: '#sliding',
    },
    {
      id: 2,
      icon: '📂',
      title: 'Hinged Wardrobes',
      subtitle: 'Classic • Versatile',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
      link: '#hinged',
    },
    {
      id: 3,
      icon: '👔',
      title: 'Walk-in Wardrobes',
      subtitle: 'Luxury • Personalized',
      image: 'https://images.unsplash.com/photo-1595614333819-ba4e1ca1a84d?w=600&h=600&fit=crop',
      link: '#walkin',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="wardrobes" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-serif text-amber-50 mb-6 font-light">
            Our Collections
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {wardrobes.map((wardrobe) => (
            <motion.div key={wardrobe.id} variants={itemVariants}>
              <WardrobeTypeCard {...wardrobe} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WardrobeTypes;