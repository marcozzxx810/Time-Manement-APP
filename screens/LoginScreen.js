import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class LoginScreen extends Component {
    signInWithGoogleAsync = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                //androidClientId  : Your_ID,
                behavior :'web',
                iosClientId: '443380991930-aemu7o64qqgvvse50ql2m1eunk7iqtri.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });

            if(result.type == 'sucess'){
                return result.accessToken;
            } else {
                return { cancelled : true };
            }
        } catch(e) {
            return { error : true };
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in with google" onPress={ () => this.signInWithGoogleAsync()} />
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});