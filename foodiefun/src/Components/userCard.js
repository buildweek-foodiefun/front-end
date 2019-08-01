import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import {axiosWithAuth} from '../utils/auth'
import "./userCard.css";


function UserCard (props){
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

  return(

    <Card>
      <Image className= 'photoOfOrder' src={props.tileData.photoOfOrder} wrapped ui={false} />
      
      <Card.Content>
        <Card.Header 
          className= 'restaurantName'>{props.tileData.restaurantName}
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

      
     
      <Link to={`/edit/${props.tileData.id}`}><button className='edit-btn'>Edit</button></Link>

      <button className='delete-btn' onClick={() => deleteReview(props.tileData)}>Delete</button>

    </Card>

  )
}

export default UserCard;

