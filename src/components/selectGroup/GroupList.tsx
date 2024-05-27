import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Group from './Group';
import { getGroupList } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { getTempGroupList } from '@/utils/tempData';

interface Group {
  id: number;
  name: string;
  imageUrl: string;
  peopleCount: number;
  creatorName: string;
};

const GroupList = () => {
  const {user} = useUser();
  const [groups, setGroups] = useState<Group[]>();
  useEffect(()=> {
    const fetchData = async () => {
      const data = await getGroupList(user.accessToken);
      setGroups(data);
    };
    fetchData();
  }, []);
  return (
    <Box sx={containerStyle}>
      {groups ? groups?.map(group=>(
        <Group
          key={group.id}
          id={group.id}
          profile={group.imageUrl!=="" ? group.imageUrl : `/images/groupGrey.png`}
          name={group.name}/>
      ))
      : (getTempGroupList).map(group=>(
        <Group
          key={group.id}
          id={group.id}
          profile={group.imageUrl!=="" ? group.imageUrl : `/images/groupGrey.png`}
          name={group.name}/>)
      )}
      {
        (getTempGroupList).map(group=>(
          <Group
            key={group.id}
            id={group.id}
            profile={group.imageUrl!=="" ? group.imageUrl : `/images/groupGrey.png`}
            name={group.name}/>)
        )
      }
    </Box>
  );
};

export default GroupList;

const containerStyle = {
  width: '100%',
  height: '100px',
  bgcolor: '#FFFFFF',
  overflowX: 'scroll', 
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
