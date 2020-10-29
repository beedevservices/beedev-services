import React from 'react'
import IFrame from 'react-iframe'

class Form extends React.Component {
    render() {
        return (
            <div className='forms'>
            <IFrame url="https://docs.google.com/forms/d/e/1FAIpQLSeb_Vcc4El3ny93LX-LI2xFip0KJ2o5SK-fhvy3e9T3ycATwA/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0" />
            </div>
        )
    }
}

export default Form