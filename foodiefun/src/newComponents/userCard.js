import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/auth'
import "./userInfo.css"

function UserCard(props) {
  // console.log("cardprops", props)
  const { setReviews } = props;
  // const deleteReview = data => {
  //   console.log(data.id);
  //   setReviews(reviews => [...reviews.filter(review => review.id !== data.id)]);
  // };

  const deleteReview = restaurant => {
    axiosWithAuth().delete(`https://foodiefun-api.herokuapp.com/api/reviews/${restaurant.id}`, restaurant)
      .then(res => {
        setReviews(reviews => [...reviews.filter(review => review.id !== restaurant.id)]);
      })
      .catch(err => {
        console.log('can not delete message', err)
      })
  }

  let PostData = [
    {
      "id": 1,
      "img": "https://www.thegrilledcheesetruck.com/wp-content/uploads/2017/03/gct-menu21-800x600.jpg"
    },
    {
      "id": 2,
      "img": "https://blueprint-api-production.s3.amazonaws.com/uploads/card/image/917437/3261d336-f53b-44a0-abdb-69792f60af66.jpg"
    },
    {
      "id": 3,
      "img": "https://tastychomps.com/wp-content/uploads/2019/06/P6150451-800x600.jpg"
    },
    {
      "id": 4,
      "img": "https://cdn.styleblueprint.com/wp-content/uploads/2019/07/SB-BHM-Food-Truck-Mustard-Seed-Food-Co-hot-mess-fries.jpg"
    },
    {
      "id": 5,
      "img": "https://snworksceo.imgix.net/cav/8ed1b226-a90d-4c2d-9216-99689efa4334.sized-1000x1000.jpg?w=800"
    },
    {
      "id": 6,
      "img": "https://www.whatsonnetwork.co.uk/uploads/800x600/e6e34f13ec62f43638b808feb55fab9e.jpg"
    },
    {
      "id": 7,
      "img": "https://news.wbfo.org/sites/wbfo/files/styles/medium/public/201907/table_food.jpg"
    },
    {
      "id": 8,
      "img": "https://craftcleaver.co.uk/wp-content/uploads/2017/10/sharing-platter-on-blue-square-angle-800x600.jpg"
    },
    {
      "id": 9,
      "img": "https://theculturetrip.com/wp-content/uploads/2015/12/800px-Hoppers_at_house_of_dosas.jpg"
    },
    {
      "id": 10,
      "img": "https://s3-prod.adage.com/s3fs-public/styles/800x600/public/80_ChickenMcNuggetHappyMeal.jpg"
    },
    {
      "id": 11,
      "img": "https://porteliotfestival.com/wp-content/uploads/2017/04/Port-Eliot-Festival-2017-294A3665-800x600.jpg"
    },
    {
      "id": 12,
      "img": "https://www.mykadhai.com/assets/images/img-4142-2000x1500-800x600.jpg"
    },
    {
      "id": 13,
      "img": "https://nwatravelguide.com/wp-content/uploads/2018/05/The-Hive-800x600.jpg"
    },
    {
      "id": 14,
      "img": "https://www.mjseatery.com/images/buritto.jpg"
    },
    {
      "id": 15,
      "img": "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg"
    }
  ]





  return (

    <Card>
      <div className="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
      <Image className='photoOfOrder' src={PostData} wrapped ui={false} />

      <Card.Content>
        <Card.Header
          className='restaurantName'>{props.tileData.restaurantName}
        </Card.Header>

        <Card.Meta>
          <span className='dateOfVisit'><b>Date Visited: </b> {props.tileData.dateOfVisit}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='restaurantType'><b>Type of Food: </b>{props.tileData.restaurantType}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='waitTime'><b>Wait Time: </b>{props.tileData.waitTime} minutes</span>
        </Card.Meta>

        <Card.Meta>
          <span className='menuItem'><b>Item Ordered: </b>{props.tileData.menuItem}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='price'><b>Price: $</b>{props.tileData.price}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='foodRating'><b>Food rating: </b>{props.tileData.foodRating} Stars</span>
        </Card.Meta>

        <Card.Meta>
          <span className='comments'><b>Comments: </b>{props.tileData.comments}</span>
        </Card.Meta>

      </Card.Content>



      <Link to={`/edit/${props.tileData.id}`}>
        <button className='edit-btn btn btn-bubble'>
          Edit
        </button></Link>

      <button className='delete-btn btn2 btn-bubble2'
        onClick={() => deleteReview(props.tileData)}>
        Delete
        </button>

    </Card >

  )
}

export default UserCard;
