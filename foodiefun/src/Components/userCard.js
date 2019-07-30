import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function UserCard (props){
  // console.log("cardprops", props)

  return(

    <Card>
      <Image className= 'photoOfOrder' src={props.tileData.photoOfOrder} wrapped ui={false} />
      
      <Card.Content>
        <Card.Header 
          className= 'restaurantName'>{props.tileData.restaurantName}
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
    </Card>

  )
}

export default UserCard;