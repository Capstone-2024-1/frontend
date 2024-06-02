import { getGroupMembers } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Member from './Member';

interface Member {
  id: number;
  name: string;
  profileImageUrl: string;
}

const Members = () => {
  const {currentGroup, user, setAccessToken} = useUser();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      let token = user.accessToken;
      if (token === "" || !token) {
        token = localStorage.getItem('accessToken') || "";
        setAccessToken(token);
      }
      const response = await getGroupMembers((currentGroup ? currentGroup : 1), token);
      if(response){
        setMembers(response);
      }
    };
    fetchData();
  }, [currentGroup, user.accessToken]);

  return (
    <Box sx={containerStyle}>
      {
        currentGroup !== -1 &&
        Array.isArray(members) && members.map(member => (
            <Member
              key={member.id}
              profile={member.profileImageUrl}
              name={member.name}
              />
          ))
      }
    </Box>
  )
}

export default Members;

const containerStyle = {
  width: '100%',
  height: 'calc(100% - 100px)',
  bgcolor: '#FFFFFF',
  overflowY: 'scroll',
  color: 'black',
}