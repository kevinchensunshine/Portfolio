//About sections: name, college, image, desc
export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'title',
        type: 'string'
        },
        {
        name: 'college',
        title: 'College',
        type: 'string'
        },
        {
        name: 'imageurl',
        title: 'ImgURL',
        type: 'image',
        options: {
            hotspot: true,
        }
        },
        {
        name: 'description',
        title: 'Description',
        type: 'string',
        },
    ],
    
}