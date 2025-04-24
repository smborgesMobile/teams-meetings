import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Groups } from "./src/screens/groups"
import { Loading } from "./src/components/loading"
import theme from './src/theme';


import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });



  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_700
      }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ?
          <Groups /> :
          <Loading />
        }
      </SafeAreaView>
    </ThemeProvider>
  );
}