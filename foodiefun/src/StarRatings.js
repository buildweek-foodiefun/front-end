import React from 'react'
import StarRatings from './react-star-ratings'

class StarRatings extends Component {
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
    }