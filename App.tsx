import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, createBox, createText } from '@shopify/restyle';
import theme, { Theme } from "./src/components/Theme";

import Card from "./src/components/Card";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const App = ()=> {



  return (
    <ThemeProvider theme={theme}>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        alignItems="center"
        justifyContent="center">
        <Card
          title={"mxkaske"}
          subtitle={"my very first blog post"}
          imgSrc={require("./assets/Avatar.png")}
          date={"today"}
        />
        <StatusBar style="auto" />
      </Box>
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