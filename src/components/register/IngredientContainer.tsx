import { Box, FormControl, FormControlLabel, Radio } from "@mui/material";
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
  const handleArrow = () => {
    if(open)return `url(/images/arrow-down.png)`;
    else return `url(/images/arrow-left.png)`;
  }
  return (
    <Box sx={containerStyle}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', alignItems: 'center', paddingRight: '10px'}}>
        <Box sx={{width: '10px', height: '10px', bgcolor: 'yellow',}}></Box>
          {english} ({korean}) 
        </Box>
        {
        (depth === 0 || depth === 1 && children) && 
        <Box sx={{
          backgroundImage: handleArrow(),
          width: '30px', height: '30px', backgroundPosition: 'center'}}
          onClick={handleToggle}/>
        }
        
      </Box>
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