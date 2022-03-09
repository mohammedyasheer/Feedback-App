import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>    
            <p>This project is a React app to leave a feedback to a product or service.</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to='/'>Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage