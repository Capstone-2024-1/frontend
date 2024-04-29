import { useSearchParams } from 'next/navigation';
import React from 'react'

const Group = () => {
  const params = useSearchParams();
  const groupName = params.get('name');
  return (
    <div>{groupName}</div>
  )
}

export default Group