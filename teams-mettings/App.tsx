import { Loading } from '@components/loading';
import { Groups } from '@screens/groups';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });



  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {!fontsLoaded ?
          <Groups /> :
          <Loading />
        }
      </SafeAreaView>
    </ThemeProvider>
  );
}