// Home.tsx
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Member from './Member';
import { useRouter } from 'next/router';
import { getGroupMembers } from '@/apis/group';
import { useUser } from '@/hook/useUser';

interface Member {
  id: number;
  name: string;
  profileImageUrl: string;
}

const Home = () => {
  const router = useRouter();
  const { currentGroup, user, setAccessToken } = useUser();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const token = user.accessToken || localStorage.getItem('accessToken');
    if (user.accessToken === "" && token) {
      setAccessToken(token);
    }

    const fetchData = async () => {
      if (token) {
        const response = await getGroupMembers(currentGroup || 1, token);
        if (response) {
          setMembers(response);
        }
      }
    };
    fetchData();
  }, [currentGroup, setAccessToken, user.accessToken]);

  const handleExpelMember = (id: number) => {
    setMembers(prevMembers => prevMembers.filter(member => member.id !== id));
  };

  return (
    <Box sx={centerAlignBoxStyle}>
      <Box sx={memberBoxStyle}>
        {Array.isArray(members) && members.map(member => (
          <Member
            key={member.id}
            id={member.id}
            profile={member.profileImageUrl}
            name={member.name}
            onExpel={handleExpelMember}
          />
        ))}
      </Box>
    </Box>
  );
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
