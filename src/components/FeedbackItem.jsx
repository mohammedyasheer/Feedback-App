import React from 'react'
import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (  
    <Card>   
        <div className="num-display">{item.rating}</div>
        <button className="edit">
        <FaEdit onClick={() => {editFeedback(item)}} color='purple'/></button>
        <button className="close">
          <FaTimes color='purple' onClick={() => deleteFeedback(item.id)}/>  
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
} 

export default FeedbackItem