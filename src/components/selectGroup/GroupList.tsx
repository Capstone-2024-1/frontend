import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Group from './Group';
import { getGroupList } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { getTempGroupList } from '@/utils/tempData';
import { getMyProfile } from '@/apis/my';

interface Group {
  id: number;
  name: string;
  imageUrl: string;
  peopleCount: number;
  creatorName: string;
};

interface My{
  nickName: string;
  profileImageUrl: string;
}

const GroupList = () => {
  const {user, setAccessToken} = useUser();
  const [groups, setGroups] = useState<Group[]>();
  const [me, setMe] = useState<My>();
  useEffect(()=> {
    const fetchData = async () => {
      let token = user.accessToken;
      if (token === "" || !token) {
        token = localStorage.getItem('accessToken') || "";
        setAccessToken(token);
      }
      const data = await getGroupList(token);
      setGroups(data);

      const myData = await getMyProfile(token);
      console.log(myData);
      setMe(myData);
    };
    fetchData();
  }, [user.accessToken]);
  return (
    <Box sx={containerStyle}>
      {
      me ?
      <Group id={-1} profile={me.profileImageUrl} name={me.nickName}/>
      :
      <Group id={-1} profile={`/images/groupGrey.png`} name={'junyewdd'}/>
      }
      {groups && groups?.map(group=>(
        <Group
          key={group.id}
          id={group.id}
          profile={group.imageUrl!=="" ? group.imageUrl : `/images/groupGrey.png`}
          name={group.name}/>
      ))}
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
