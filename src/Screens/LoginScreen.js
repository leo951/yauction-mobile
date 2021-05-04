import React, { useState, useContext }  from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { AuthContainer } from '../components/AuthContainer';
import { FilledButton } from '../components/FilledButton';
import { TextButton } from '../components/TextButton';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';

export function LoginScreen({ navigation }) {

    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    return (
        <AuthContainer>
            <Heading style={styles.title}>Login</Heading>
            <Error error={error} />
            <TextInput style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'}
                onChangeText={email => setEmail(email)}
                defaultValue={email}
            />
            <TextInput style={styles.input}
                placeholder={'Password'}
                secureTextEntry
                onChangeText={password => setPassword(password)}
                defaultValue={password}
            />
            <FilledButton
                title={'Login'}
                style={styles.loginButton}
                onPress={async () => {
                    try {
                        await login(email, password);
                    } catch (error) {
                        setError(error.message)
                        console.log(error)
                    }
                }} />
            <TextButton
                title={"Vous n'avez pas de compte ? Créez-en un maintenant"}
                onPress={() => {
                    navigation.navigate('Registration')
                }} />
            <Loading />
        </AuthContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 40
    },
    input: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        marginVertical: 20,
        padding: 20,
        borderRadius: 8,
        marginVertical: 8
    },
    loginButton: {
        marginVertical: 32,
    }
});
