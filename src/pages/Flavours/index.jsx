import React from 'react'
import ImageBlockSwitch from '../../components/ImageBlockSwitch'
import flatcookies from '../../assets/flatcookies.png'
import Form from '../../components/Form'

function Flavours() {
    return (
        <div>
            <ImageBlockSwitch 
                img={flatcookies}
                title="Our Flavours"
                para1="Classic chocolate chip"
                para2="White chocolate and raspberry"
                para3="Double chocolate"
                para4="Caramelised white chocolate and cherry"
                para5="Snickerdoodle"
                para6="Kinder bueno"
                name="Let's get cookies"
                path='../Shop'
            />
            <Form/>
        </div>
    )
}

export default Flavours
