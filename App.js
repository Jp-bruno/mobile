import { NativeBaseProvider, StatusBar, Text } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from './src/components/Loading'
import Routes from './src/routes/index'
import AuthContextProvider from './src/context/AuthContext';

import { THEME } from './src/styles/theme';


export default function App() {
  // const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <AuthContextProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="light-content"
        />
        {/* {
          fontsLoaded ?
            <Routes />
            :
            <Loading />
        } */}
        <Text>oi</Text>

      </NativeBaseProvider>
    </AuthContextProvider>

  );
}