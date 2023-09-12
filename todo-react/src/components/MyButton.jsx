import React from 'react'
import Button from 'react-bootstrap/Button';
const MyButton = ({primary,title,clickTrigger}) => {
  return (
    <>
      <Button variant={primary} className='mx-2' onClick={clickTrigger}>
      {" "}
      {title || "Button"}{" "}
        </Button>
    </>
  )
}

export default MyButton
