import { Box } from "@mui/material";

interface LayoutProps {
    children: React.ReactNode;
  }

const Layout:  React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex', 
      justifyContent: 'center', 
      bgcolor: '#EFDCD4',
      }}>
      <Box sx={{
        width: {xs: '100%', sm: '600px'}, 
        height: '100vh', 
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;