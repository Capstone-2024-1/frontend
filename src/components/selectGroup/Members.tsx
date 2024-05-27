import { getGroupMembers } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { getTempMemberList } from '@/utils/tempData';
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Member from './Member';

interface Member {
  id: number;
  name: string;
  profileImageUrl: string;
}

const Members = () => {
  const {currentGroup, user} = useUser();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await getGroupMembers((currentGroup ? currentGroup : 1), user.accessToken);
      if(response){
        setMembers(response);
      }else{
        setMembers(getTempMemberList);
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
}