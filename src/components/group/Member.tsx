import React from 'react'

const Member = ({profile, name}: {profile:string, name: string}) => {
  return (
    <div>{name}</div>
  )
}

export default Member