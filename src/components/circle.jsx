import React from 'react'

const Circle = (decoration, title, issue, explain) => {
  return (
    <div className={`${decoration?decoration:""}`}>
        <h1>{title ? title : "" }</h1>
        <h1>{issue ? issue : "" }</h1>
        <h1>{explain ? explain : "" }</h1>
    </div>
  )
}

export default Circle