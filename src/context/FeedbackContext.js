import { createContext, useState  } from "react";
import { v4 as uuidv4 } from 'uuid'

import feedbackData from '../data/feedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState(feedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback) => {
     
        newFeedback.id =  uuidv4()
        setFeedback([newFeedback,...feedback])
        console.log(newFeedback)
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?')) {   
            setFeedback(feedback.filter((item) => { return item.id !== id}))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback 
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext