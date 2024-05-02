import { Box, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Member from './Member'
import { useRouter } from 'next/router';
import { getGroupMembers } from '@/apis/group';
interface Member {
  id: number;
  name: string;
}
const Home = () => {
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([]);
  const groupName = Array.isArray(router.query.name) ? router.query.name[0] : router.query.name;
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const response = await getGroupMembers(groupName ? groupName : '대박');
  //     setMembers(response.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
    <Box sx={centerAlignBoxStyle}>
      <Box sx={memberBoxStyle}>
        {/* {members.map(member => (
          <Member
            key={member.id}
            profile={`/images/groupGrey.png`}
            name={member.name}
            />
        ))
        } */}
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
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