import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
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

  return (

    <Card>
      <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>

      <script src="js/addons/rating.js"></script>
      <Image className='photoOfOrder' src={props.tileData.photoOfOrder} wrapped ui={false} />

      <Card.Content>
        <Card.Header
          className='restaurantName'>{props.tileData.restaurantName}
        </Card.Header>

        <Card.Meta>
          <span className='dateOfVisit'>Date Visited:  {props.tileData.dateOfVisit}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='restaurantType'>Type of Food: {props.tileData.restaurantType}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='waitTime'> Wait Time: {props.tileData.waitTime} minutes</span>
        </Card.Meta>

        <Card.Meta>
          <span className='menuItem'>Item Ordered: {props.tileData.menuItem}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='price'> Price: {props.tileData.price}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='foodRating'>Food rating: {props.tileData.foodRating} Stars</span>
        </Card.Meta>

        <Card.Meta>
          <span className='comments'>Comments: {props.tileData.comments}</span>
        </Card.Meta>

      </Card.Content>
      <button className='delete-btn' onClick={() => deleteReview(props.tileData)}>delete</button>
      <Link to={`/edit/${props.tileData.id}`}><button className='edit-btn'>edit</button></Link>
    </Card>

  )
}

export default UserCard;