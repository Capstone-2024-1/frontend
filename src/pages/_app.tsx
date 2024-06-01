import AppLayout from "@/components/layout/AppLayout";
import { UserProvider } from "@/contexts/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// MUI 테마 생성
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // 사용자 정의 글꼴 설정
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </UserProvider>
    </ThemeProvider>
  );
}
