import React from 'react'

const MyParagraph = (props) => {
    console.log(props)
  return (
    <p>{props.show ? 'This is new' : ''}</p>
  )
}

export default MyParagraph