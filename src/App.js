import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/feedbackStats'
import Feedbackform from './components/Feedbackform'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

  

function App () {
   
            return (
     <>
     <FeedbackProvider>
        <Router>
            <Header />
                <div className="container">
                <Routes>
                    <Route path='/' exact element={
                        <>
                        <Feedbackform />
                        <FeedbackStats />
                        <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
                <AboutIconLink />
                </div>
        </Router>
    </FeedbackProvider>
     </>
    )
}

export default App  