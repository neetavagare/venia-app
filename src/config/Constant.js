export const HeaderLabels = {
    //Header Texts
    manuItems: [
        {
            label: "Women",
            className: "text1"
        },
        {
            label: "Men",
            className: "text2"
        },
        {
            label: "Smart Gear",
            className: "text3"
        },
        {
            label: "Accessories",
            className: "text4"
        },

    ],

    // Cart_Product
    Product: [
        {
            id: 1,
            title: "Women Trouser",
            size: "Medium",
            color: "Khaki",
            price: 145.00,
            img: require(`../images/Product_Images/cloth.webp`),
        },
        {
            id: 2,
            title: "Sports Bra",
            size: "Medium",
            color: "Grey",
            price: 98.00,
            img: require(`../images/Product_Images/cloth2.webp`),
        },
    ],

    mainHeader: "VENIA",
}

// Header Icons
export const HeaderIcons = {
    searchIcon: "Search",
    userIcon: "User",
    shop_bagIcon: "ShopBag",
    plusCircle: "plus",
    minusCircle: "minus",
    downChevron: 'downarrow',
    insta: "insta",
    facebook: "facebook",
    twitter: "twitter",
    Lock: "lock",
    alignJustify: "alignjustify",
    star: 'star',
    Share: 'share-2',
    menuIcon: 'menu',
    Slider: 'slider',
    Uparrow: 'uparrow',
    Downarrow: 'down-arrow',
}

// Shop-Bag Carousel
export const RecentViewdata = [
    {
        imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        title: ' Navy Blue Bag',
        price: '37.00',
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        title: 'WoMen Top',
        price: '70.00',
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        title: ' Mens T-shirt',
        price: '90.00',
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        title: 'Women T-shirt',
        price: '120.00',
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        title: ' Women Braclet',
        price: '200.00',
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        title: 'Silver Ring',
        price: '90.00',
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        title: 'Acer LED',
        price: '200.00',
    },
    {
        imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        title: 'Men T-shirt',
        price: '140.00',
    }
]

//Filter of Listing Page 
export const Filters =
    [
        {
            optionName: "option",
            className: "filteroption"
        }
    ]

//Filter-Color
export const Color =
    [
        {
            backgroundcolor: "",
        }
    ]

export const Sizes = [{
    text: 'M',

},
{
    text: 'S',

},
{
    text: 'XL',

}
    ,
{
    text: 'L',

}
    ,
{
    text: 'XS',

}
]

// Size Filter Labels

export const SizeFilter = [{
    text: 'X-Small',

},
{
    text: 'Medium',

},
{
    text: 'Large',

}
    ,
{
    text: 'X-Large',

}
];

// Filter Options

export const StylesFilter = [{
    text: 'Outdoor',

},
{
    text: 'Casual',

},
{
    text: 'Active',

}
    ,
{
    text: 'Running',

}
    ,
{
    text: 'Outfits',

}
    ,
{
    text: 'Working',

}
]

// Brand Filter Option

export const BrandFilter = [{
    text: 'Calvin Klein',

},
{
    text: 'Dolce & Gottaboo',

},
{
    text: 'Miu Miu ',

}
    ,
{
    text: 'Prada',

}
    ,
{
    text: 'Rag & Bone',

}
    ,
{
    text: 'Gucci',

}
    ,
{
    text: 'Marni',

},
{
    text: 'Dior',

}
    ,
{
    text: 'Salvatore',

}
]

// Color Filter Option

export const ColorFilter = [
    {
        text: '#343434',

    },
    {
        text: '#2D9D78 ',

    },
    {
        text: '#FDBA5E',

    },
    {
        text: '#6408D3',

    },
    {
        text: '#FFFFFF',

    },
    ,
    {
        text: '#F9009A',

    },
    {
        text: '#f45c43',

    },
    {
        text: '#1F39FF'
    },
    {
        text: '#EB7327'
    }
]
export const APIBASE_URL = 'https://fakestoreapi.com';
export const CART_LOCAL_STORAGE_VALUE = "cartsData";
export const CART_EMPTY_MESSAGE = " Cart is empty. Please add product to cart. ";

export const DropDownOptions = [
    //Header Texts
    {
        value: "0",
        name: "Sort by Latest"
    },
    {
        value: "women's clothing",
        name: "Women"
    },
    {
        value: "men's clothing",
        name: "Men"
    },
    {
        value: "jewelery",
        name: "Jewelery"
    },
    {
        value: "electronics",
        name: "Electronics"
    },


]