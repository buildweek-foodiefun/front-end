//Important:
//price, waitTime and foodRating are integers, not strings. The database needs to receive every field in its correct format
//Also, the date, is a string as you are doing, but the format is ‘YYYY-MM-DD’

const mockarray = [
    {id: '3',
    restaurantName: 'Mcdonalds',
    restaurantType: 'Fast Food',
    menuItem: 'McDouble',
    comments: 'Greasy american classic!',
    waitTime: '5',
    photoOfOrder: 'https://2.bp.blogspot.com/-mVo2J0TfPKs/Uqo1ccZo9sI/AAAAAAAAZ0s/qPKvVRvk6SY/s1600/mcdonalds-bacon-mcdouble-02.JPG',
    price: '2',
    foodRating: '3',
    dateOfVisit: '7/29/2019'},

    {id: '4',
    restaurantName: 'Umaido',
    restaurantType: 'Japanese',
    menuItem: 'Ramen',
    comments: 'Amazing ramen with plentiful toppings',
    waitTime: '25',
    photoOfOrder: 'https://lh3.googleusercontent.com/1Tnd6sl_yA2U10Nc3GbGjQYfk_Yi0FDb9MkD_b97pSRk52LNIFBvoa4hA8-bwFU3qv755NYS=w600-h0',
    price: '$7.99',
    foodRating: '5',
    dateOfVisit: '7/11/2019'},

    {id: '5',
    restaurantName: 'Escorpion',
    restaurantType: 'Mexican',
    menuItem: 'Carne Asada Tacos',
    comments: 'The meat was a little dry and service was slow, but tasted good overall!',
    waitTime: '30',
    photoOfOrder: 'https://www.eatingonadime.com/wp-content/uploads/2018/05/easy-street-tacos.jpg',
    price: '$6.40',
    foodRating: '4',
    dateOfVisit: '6/05/2019'}
]

export default mockarray;