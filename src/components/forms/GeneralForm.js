import React from 'react'
import IFrame from 'react-iframe'

class GeneralForm extends React.Component {
    render() {
        return (
            <div className='forms'>
            <IFrame url="https://docs.google.com/forms/d/e/1FAIpQLScLoGZTpo8ifvvA_40ybuCGJ4Aoc3idwyrOj7gUdd3HF-opuw/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0" />
            </div>
        )
    }
}

export default GeneralForm