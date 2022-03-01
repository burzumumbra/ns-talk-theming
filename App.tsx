import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { default as theme, darkTheme, Box } from "./src/components/Theme";

import Card from "./src/components/Card";
import SVG from "./src/components/SVG";
import { BoxPrimary, BoxSecundary } from "./src/components/Boxes";


const App = ()=> {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Box padding="xxl" backgroundColor="mainBackground" flex={1}>
        <Box marginTop="m">
          <Switch
            value={darkMode}
            onValueChange={(value: boolean) => setDarkMode(value)}
          />
        </Box>
        <BoxPrimary />
        <BoxSecundary />
        <Box marginTop="m" flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
          <SVG/>
        </Box>
        <Box marginTop="m">
          <Card
            title={"mxkaske"}
            subtitle={"my very first blog post"}
            imgSrc={require("./assets/Avatar.png")}
            date={"today"}
          />
        </Box>
      </Box>
        

        <StatusBar style={darkMode ? "light" : "dark"} />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;