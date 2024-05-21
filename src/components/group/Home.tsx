import { Box, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Member from './Member'
import { useRouter } from 'next/router';
import { getGroupMembers } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { getTempMemberList } from '@/utils/tempData';
interface Member {
  id: number;
  name: string;
  profileImageUrl: string;
}
const Home = () => {
  const router = useRouter();
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
  }, [currentGroup, members]);

  return (
    <>
    <Box sx={centerAlignBoxStyle}>
      <Box sx={memberBoxStyle}>
        {Array.isArray(members) && members.map(member => (
          <Member
            key={member.id}
            id={member.id}
            profile={member.profileImageUrl}
            name={member.name}
            />
        ))
        }
      </Box>
    </Box>
    </> 
  )
}

export default Home;

const memberBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: '85%',
};

const centerAlignBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};