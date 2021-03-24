import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider as ZenThemeProvider } from "@zendeskgarden/react-theming";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "antd/dist/antd.css";

import { ResetStyles } from "../../styling/reset";
import { GlobalStyles } from "../../styling/global";
import { theme } from "../../styling/theme";

const SetUp = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
      mutations: {
        onError: (error) => {
          console.log(`Something went wrong... ${error}`);
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ZenThemeProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ResetStyles />
          <Router>
            {children}
          </Router>
        </ThemeProvider>
      </ZenThemeProvider>
    </QueryClientProvider>
  );
};

export default SetUp;