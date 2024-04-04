import { Box } from "@mui/material";

interface IngredientContainerProps {
  english: string;
  korean: string;
  children?: React.ReactNode;
}

const IngredientContainer: React.FC<IngredientContainerProps> = ({ english, korean, children }) => {
  return (
    <Box sx={containerStyle}>
      <span>{english} ({korean})</span>
        {children && <div>{children}</div>}
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
  padding: '1%',
  borderRadius: '10px',
  font: 'Blinker',
  fontStyle: 'normal',
  fontSize: '1.125rem',
  fontWeight: '600',
  lineHeight: 'normal',
  paddingLeft: '2rem',
}