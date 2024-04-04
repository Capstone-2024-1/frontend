import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface IngredientContainerProps {
  english: string;
  korean: string;
  children?: React.ReactNode;
  depth: number;
}

const IngredientContainer: React.FC<IngredientContainerProps> = ({ english, korean, children, depth }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = () => {
    console.log(open);
    setOpen(!open);
  }
  return (
    <Box sx={containerStyle}>
      <span>
        {english} ({korean}){depth} 
        {
        (depth === 0 || depth === 1) && 
        <Box sx={{width: '10px', height:'10px', bgcolor: 'yellow'}} onClick={handleToggle}/>
        }
      </span>
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
  // paddingLeft: '1rem',
}