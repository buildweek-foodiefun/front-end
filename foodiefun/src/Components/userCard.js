import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function UserCard (props){
  console.log("cardprops", props)

   return(

    <Card>
      <Image className= 'photoOfOrder' src={props.tileData.photoOfOrder} wrapped ui={false} />
      
      <Card.Content>
        <Card.Header 
          className= 'restaurantName'>{props.tileData.restaurantName}
        </Card.Header>

        <Card.Meta>
          <span className='dateOfVisit'>{props.tileData.dateOfVisit}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='restaurantType'>{props.tileData.restaurantType}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='waitTime'>{props.tileData.waitTime}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='menuItem'>{props.tileData.menuItem}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='price'>{props.tileData.price}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='foodRating'>{props.tileData.foodRating}</span>
        </Card.Meta>

        <Card.Meta>
          <span className='comments'>{props.tileData.comments}</span>
        </Card.Meta>

      </Card.Content>
    </Card>

  )
}

export default UserCard;