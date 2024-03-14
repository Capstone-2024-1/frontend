import { Box } from "@mui/material";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <Box sx={{
      display: 'flex', 
      justifyContent:'center', 
      bgcolor: '#EFDCD4'
      }}>
      <Box sx={{
        width: {xs: '100%', sm: '600px'}, 
        height: '100vh', 
        bgcolor: 'white',
        display: 'flex',
        justifyContent:'center',
        }}>
        <Main/>
      </Box>
    </Box>
  );
}
