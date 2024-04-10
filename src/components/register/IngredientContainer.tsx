import { Box, FormControl, FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";
import IngredientItem from "./IngredientItem";

interface IngredientContainerProps {
  english: string;
  korean: string;
  children?: React.ReactNode;
  depth: number;
}

const IngredientContainer: React.FC<IngredientContainerProps> = ({ english, korean, children, depth }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box sx={containerStyle}>
      <IngredientItem english={english} korean={korean} children={children} depth={depth} open={open} setOpen={setOpen}/>
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
}