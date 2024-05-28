import { Box } from "@mui/material";
import { useState } from "react";
import IngredientItem from "./IngredientItem";
import { useUser } from "@/hook/useUser";

interface IngredientContainerProps {
  english: string;
  korean: string;
  children?: React.ReactNode;
  depth: number;
  id: number;
  flatChildIds: number[];
}

const IngredientContainer: React.FC<IngredientContainerProps> = ({ english, korean, children, depth, id, flatChildIds }) => {
  const [open, setOpen] = useState<boolean>(false);

  const {user, addBanIngredient, removeBanIngredient} = useUser();
  const [check, setCheck] = useState<boolean>(false);

  const handleCheck = (id: number, flatChildIds: number[]) => {
    if (check) {
      // 체크 제거
      removeBanIngredient(id);
      flatChildIds.forEach(childId => removeBanIngredient(childId));
    } else {
      // 체크 추가
      addBanIngredient(id);
      flatChildIds.forEach(childId => addBanIngredient(childId));
    }
    setCheck(!check);
  }

  return (
    <Box sx={containerStyle}>
      <IngredientItem english={english} korean={korean} children={children} depth={depth} open={open} setOpen={setOpen} id={id} handleCheck={handleCheck} check={check} setCheck={setCheck} flatChildIds={flatChildIds}/>
      {open && children && <div>{children}</div>}
    </Box>
    );
};

export default IngredientContainer;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '95%',
  bgcolor: 'white',

  margin: '10px',
  padding: '1.5% 1% 0.5% 3%',
  borderRadius: '10px',
  font: 'Blinker',
  fontStyle: 'normal',
  fontSize: '1.125rem',
  fontWeight: '600',
  lineHeight: 'normal',
  color: 'black',
}