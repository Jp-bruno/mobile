import { Center, Text } from "native-base";
import Button from "../components/Button";
import useAuth from '../hooks/useAuth'


import Logo from '../assets/logo.svg';

export default function SignIn() {
    const { signIn, isUserLoading } = useAuth();


    return (
        <Center flex={1} bgColor="gray.900" p={7}>
            <Logo width={212} height={40} />
            <Button title="Entrar com Google" iconName="google" type="SECONDARY" mt={12} onPress={signIn} isLoading={isUserLoading}/>
            <Text
                color="white"
                textAlign="center"
                mt={4}
            >
                Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}