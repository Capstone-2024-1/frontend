import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react'
import GroupBox from './GroupBox';
import Buttons from './Buttons';
import { getGroupList } from '@/apis/group';
import CreateModal from './CreateModal';
import ParticipateModal from './ParticipateModal';
import { getTempGroupList } from '@/utils/tempData';
import { useUser } from '@/hook/useUser';
interface Group {
  id: number;
  name: string;
  imageUrl: string;
  peopleCount: number;
  creatorName: string;
};

const GroupList = () => {
  const {user} = useUser();
  const [click, setClick] = useState<boolean>(false);
  const [openParticipate, setOpenParticipate] = useState<boolean>(false);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [groups, setGroups] = useState<Group[]>();
  const handleAdd = () => {
    getGroupList(user.accessToken);
    return click ? 'images/add2.png' : 'images/add1.png';
  }
  const changeClick = () => {
    setClick(!click);
  };

  const handleParticipate = () => {
    setOpenParticipate(!openParticipate);
  };

  const handleCreate = () => {
    setOpenCreate(!openCreate);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroupList(user.accessToken);
      setGroups(data);
    };
    fetchData();
  },[openCreate, openParticipate]);

  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Box sx={textStyle}>
        My Group List
      </Box>
      {/* {groups ? groups?.map(group=>(
        <GroupBox
          key={group.id}
          id={group.id}
          profile={group.imageUrl!=="" ? group.imageUrl : `/images/groupGrey.png`}
          name={group.name}
          num={group.peopleCount}
          creater={group.creatorName}/>
      ))
      : (getTempGroupList).map(group=>(
        <GroupBox
          key={group.id}
          id={group.id}
          profile={group.imageUrl!=="" ? group.imageUrl : `/images/groupGrey.png`}
          name={group.name}
          num={group.peopleCount}
          creater={group.creatorName}/>)
      )} */}

      {groups && groups?.map(group=>(
        <GroupBox
          key={group.id}
          id={group.id}
          profile={group.imageUrl!=="" ? group.imageUrl : `/images/groupGrey.png`}
          name={group.name}
          num={group.peopleCount}
          creater={group.creatorName}/>
      ))}


      {click &&
        <Buttons handleParticipate={handleParticipate} handleCreate={handleCreate}/>
      }
      <CardMedia
            component="img"
            image={handleAdd()}
            title="profile"
            sx={imageStyle}
            onClick={changeClick}
            />
      {click && <Box sx={overlayStyle}/>}
      {openParticipate && <ParticipateModal modalOpen={openParticipate} handleClose={handleParticipate}/>}
      {openCreate && <CreateModal modalOpen={openCreate} handleClose={handleCreate}/>}
      
    </Box>
  )
}

export default GroupList;

const myStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  overflowY: 'scroll',
  overflowX: 'hidden',
  color: 'black',
};

const textStyle = {
  width: '100%',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '30px',
  fontFamily: 'pretendard',
  marginBottom: '30px',
};

const imageStyle = {
  width: '50px',
  position: 'absolute',
  bottom: 110,
  right: '5%',
  '@media (min-width: 560px)': {
    right: 'calc(50% - 230px)',
  },
  zIndex: 3,
};

const overlayStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bgcolor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
}