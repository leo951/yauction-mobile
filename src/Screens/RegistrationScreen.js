import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { AuthContainer } from '../components/AuthContainer';
import { TextButton } from '../components/TextButton';
import { IconButton } from '../components/IconButton';
import { Loading } from '../components/Loading';

//test 

import { Error } from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';



export function RegistrationScreen({navigation}) {

    const {register} = React.useContext(AuthContext)
    const [email, setEmail] = React.useState( 'util.mobile@gmail.com');
    const [password, setPassword] = React.useState( 'A123456789');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

	return (
        <AuthContainer>
            <IconButton 
            style={styles.closeIcon} 
            name={'close-circle-outline'}
            onPress={() => {
                navigation.pop();
            }}
            />
			<Heading style={styles.title}>REGISTRATION</Heading>
            <Error error={error}/>
            <Input style={styles.inputEmail} 
            placeholder={'Email'} 
            keyboardType={'email-address'} 
            value={email}
            onChangeText={setEmail}
            />
            <Input style={styles.inputPassword} 
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry 
            />
			<FilledButton 
            title={'Register'} 
            style={styles.loginButton} 
            onPress={async() => {
                try {
                    setLoading(true)
                    await register(email, password);
                    navigation.pop()
                } catch (error) {
                    setError(error.message)
                    setLoading(false)
                }
            }} />
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
    },
    closeIcon: {
        position: 'absolute',
        top: 60,
        right: 16,
    },
    email: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
    },
    inputEmail: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        marginVertical: 20,
        padding: 20,
        borderRadius: 8,
        marginHorizontal: 10
    },
    address: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 8,
    }
});
