const getRandomID = () => {
    return  Math.round((Math.round(Math.random() * 10000)  * (Math.floor(Math.random() * 1234))))
  }

const datalist = [
    { 
        id: 1,
        title: 'Кольцо с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_1.png',
        price: 12999,
        isSale: false,
    },
    {
        id: 2,
        title: 'Кольцо с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_2.png',
        price: 11999,
        isSale: false,
    },
    {
        id: 3,
        title: 'Кольцо с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_3.png',
        price: 8499,
        isSale: false,
    },
    {
        id: 4,
        title: 'Кольцо с цветными сапфирами',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_4.png',
        price: 10999,
        isSale: false,
    },
    {
        id: 5,
        title: 'Серьги с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_5.png',
        price: 15999,
        isSale: false,
    },
    {
        id: 6,
        title: 'Серьги с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_6.png',
        price: 11299,
        isSale: false,
    },
    {
        id: 7,
        title: 'Серьги с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_7.png',
        price: 10799,
        isSale: false,
    },
    {
        id: 8,
        title: 'Серьги с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_8.png',
        price: 16499,
        isSale: false,
    },
    {
        id: 9,
        title: 'Колье с бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_9.png',
        price: 13000,
        isSale: false,
    },
    {
        id: 10,
        title: 'Колье с бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_10.png',
        price: 8499,
        isSale: false,
    },
    {
        id: 11,
        title: 'Браслет с бриллиантами',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_11.png',
        price: 8999,
        isSale: false,
    },
    {
        id: 12,
        title: 'Серьги с выращенным бриллиантом',
        description: '',
        image: process.env.PUBLIC_URL + '/img/shop_item_12.png',
        price: 8999,
        isSale: false,
    },
    
];



export {datalist}