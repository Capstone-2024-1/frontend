import { Box, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Member from './Member'
import { useRouter } from 'next/router';
import { getGroupMembers } from '@/apis/group';
import { useUser } from '@/hook/useUser';
interface Member {
  id: number;
  name: string;
}
const Home = () => {
  const router = useRouter();
  const {currentGroup} = useUser();
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(()=>{
    const fetchData = async () => {
      const response = await getGroupMembers(currentGroup ? currentGroup : 1);
      if(response){
        
        setMembers(response);
        console.log(response);

      }
    };
    fetchData();
  }, [currentGroup]);

  return (
    <>
    <Box sx={centerAlignBoxStyle}>
      <Box sx={memberBoxStyle}>
        {Array.isArray(members) && members.map(member => (
          <Member
            key={member.id}
            profile={`/images/myBlack.png`}
            name={member.name}
            />
        ))
        }
        {/* <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/> */}
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