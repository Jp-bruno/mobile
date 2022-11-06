import { createContext, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import api from '../services/api';

WebBrowser.maybeCompleteAuthSession();

export const AuthContext = createContext({})

export default function AuthContextProvider({ children }) {
    const [isUserLoading, setUserLoading] = useState(false);

    const [user, setUser] = useState({
        name: 'teste'
    });

    const [req, res, promptAsync] = Google.useAuthRequest({
        clientId: '598648328234-ah6jpg5ig0hrns1a42j4g0rcs2vfpb1c.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    });

    async function signIn() {
        try {
            setUserLoading(true)
            await promptAsync()
        } catch (error) {
            throw (error)
        } finally {
            setUserLoading(false)
        }
    }

    async function signInWithGoogle(access_token) {
        try {
            setUserLoading(true);

            const tokenResponse = await api.post('/users', { access_token })

            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;

            const userInfoResponse = await api.get('/me');

            setUser(() => userInfoResponse.data.user)

        } catch (error) {
            throw error
        } finally {
            setUserLoading(false);
        }
    }

    useEffect(() => {
        if (res?.type === 'success' && res.authentication.accessToken) {
            signInWithGoogle(res.authentication.accessToken)
        }
    }, [res])

    return (
        <AuthContext.Provider value={{
            signIn,
            user,
            isUserLoading
        }}>
            {children}
        </AuthContext.Provider>
    )

}