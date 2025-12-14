import React from 'react'
import { Text,Button } from '../components/styledCM'
export default function AboutUs({ setPagee }) {
    return (
        <>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, necessitatibus debitis? Facilis optio eaque dolore expedita, doloremque, magni omnis inventore iure possimus consequatur totam aliquam at ipsum, libero blanditiis repellendus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, necessitatibus debitis? Facilis optio eaque dolore expedita, doloremque, magni omnis inventore iure possimus consequatur totam aliquam at ipsum, libero blanditiis repellendus.
            </Text>
            <Button onClick={setPagee}>Contact us</Button>
        </>
    )
}
