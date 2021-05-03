import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { AuthContainer } from '../components/AuthContainer';
import { FilledButton } from '../components/FilledButton';
import { TextButton } from '../components/TextButton';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';



export function LoginScreen({navigation}) {

    const {login} = React.useContext(AuthContext)
    const [email, setEmail] = React.useState( 'util.mobile@gmail.com');
    const [password, setPassword] = React.useState( 'A123456789');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

	return (
        <AuthContainer>
			<Heading style={styles.title}>Login</Heading>
            <Error error={error}/>
			<Input style={styles.input} 
            placeholder={'Email'} 
            keyboardType={'email-address'} 
            value={email}
            onChangeText={setEmail}
            />
			<Input style={styles.input} 
            placeholder={'Password'} 
            secureTextEntry 
            value={password}
            onChangeText={setPassword}
            />
			<FilledButton 
            title={'Login'} 
            style={styles.loginButton} 
            onPress={async() => {
                try {
                    setLoading(true)
                    await login(email, password);
                } catch (error) {
                    setError(error.message)
                    setLoading(false)
                }
            }} />
            <TextButton 
            title={"Vous n'avez pas de compte ? Créez-en un maintenant"} 
            onPress={() => {
                navigation.navigate('Registration');
            }}/>
            <Loading loading={loading}/>
        </AuthContainer>
	);
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 48
	},
	input: {
		marginVertical: 8
	},
    loginButton: {
        marginVertical: 32,
    }
});
