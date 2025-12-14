import { Form } from '../components/styledCM'
import React from 'react'
import { Input } from '../components/styledCM'

export default function ContactUs() {
  return (
    <Form onClick={e => e.preventDefault()}>
        <Input placeholder='name' style={{width:'200px'}} type='text' /><br />
        <Input placeholder='last name' style={{width:'200px'}} type='text' /><br />
        <Input placeholder='phone number' style={{width:'200px'}} type='number' /><br />
        <Input placeholder='email' style={{width:'200px'}} type='email' /><br />
        <Input type='submit' value={'contact us'}/>
    </Form>
  )
}
