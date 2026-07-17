import slugify from 'slugify';

function makeSlug(text){
    return slugify(text,{
        lower:true,
        strict:true,
        trim:true
    })
}

export default makeSlug;