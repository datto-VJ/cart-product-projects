var initialState = [
    {
        id:1,
        name:'Iphone 11',
        image: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/2132584444.jpeg',
        description : 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id:2,
        name:'Samsung Galaxy',
        image: 'https://www.xtmobile.vn/vnt_upload/product/07_2019/thumbs/(600x600)_crop_600_samsung_galaxy_a71_xanh.jpg',
        description : 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id:3,
        name:'Iphone 12',
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 13,
        rating: 5
    }
]

const products = (state=initialState,action)=>{
    switch(action.type){
        default : return [...state]
    }
}

export default products