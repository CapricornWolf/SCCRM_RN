/**
 * Created by Mavio on 2017/5/19.
 */

'use strict'
import React, {Component, PropTypes} from 'react'
import {
    Animated,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
    Button,
    Dimensions,
    Alert,
} from 'react-native'

const onLogin = () => {
    Alert.alert('Button has been pressed!');
}

export default class Login extends Component {
    constructor(props) {
        super(props)
        //TODO 
    }

    render() {
        return (
            <ScrollView>
                <Image source={require('./img/bg_login.png')} style={styles.content}>
                    <Image source={require('./img/ic_logo_login.png')} style={{height:95, resizeMode:'contain'}}/>
                    <Text style={[styles.textLarge, {marginBottom: 40}]}>智慧销售管理平台123</Text>

                    <View style={[styles.paddingHorizontal, styles.layoutHorizontal]}>
                        <Text style={styles.textNormal}>用户名</Text>
                        <TextInput
                            style={[styles.textNormal, styles.inputNormal]}
                            underlineColorAndroid="white"/>
                    </View>
                    <View style={[styles.paddingHorizontal, styles.layoutHorizontal]}>
                        <Text style={styles.textNormal}>密   码</Text>
                        <TextInput
                            style={[styles.textNormal, styles.inputNormal]}
                            underlineColorAndroid="white"/>
                    </View>

                    <Button
                        style={{marginTop: 40, width:100}}
                        onPress={onLogin}
                        title="登录"
                        color="#841584"
                    />
                </Image>
            </ScrollView>
        );
    }
}


let styles = StyleSheet.create({
    content: {
        resizeMode: 'stretch',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    paddingHorizontal: {
        paddingLeft: 16,
        paddingRight: 16,
    },

    layoutHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textNormal: {
        fontSize: 14,
        color: 'white',
    },
    textLarge: {
        fontSize: 18,
        color: 'white',
    },

    inputNormal: {
        padding: 8,
        flex: 1,
    },

});