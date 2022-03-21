import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Button, Image, TouchableWithoutFeedback, TextInput, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import CircleButton from '../../components/circleButton';

const picker = (props) => {
    const { actions, active, visible, onPressItem, onDone, onClose } = props;

    const [accountInput, setAccountInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const hardCodedLoginInfo = {
        account: "Nokia",
        password: "news",
    }

    const doLogin = () => {
        if (hardCodedLoginInfo.account == accountInput
            && hardCodedLoginInfo.password == passwordInput) {
            alert("login success")
            setAccountInput('')
            onDone()
        }
        else {
            alert("Wrong login info")
        }
    }

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                style={styles.modalOverlay}
                visible={visible}
                onRequestClose={() => onClose()}>
                <TouchableWithoutFeedback onPress={() => onClose()}>
                    <View style={styles.modalBackdrop} >
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <View style={styles.modalContent}>
                                <Text style={{ textAlign: 'center', fontSize: 32, margin: 10 }}>Login</Text>
                                <TextInput
                                    style={styles.input}
                                    minWidth="80%"
                                    autoCapitalize='none'
                                    placeholder='Account'
                                    backgroundColor="lightgrey"
                                    onChangeText={setAccountInput}
                                />
                                <TextInput
                                    style={styles.input}
                                    minWidth="80%"
                                    autoCapitalize='none'
                                    placeholder='Password'
                                    backgroundColor="lightgrey"
                                    secureTextEntry={true}
                                    onChangeText={setPasswordInput}
                                />
                                <CircleButton text='➤'
                                    size={35}
                                    color="#2196f3"
                                    textColor="white"
                                    margin={10}
                                    fontSize={20}
                                    style={styles.modalContentEnd}
                                    onPress={() => doLogin()}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    modalOverlay: {
    },
    modalBackdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, padding: 10
    },
    modalContent: {
        minWidth: "50%", backgroundColor: 'white', margin: 'auto', alignItems: 'center', elevation: 5
    },
    modalContentTop: { justifyContent: 'flex-start' },
    image: { width: '100%', aspectRatio: 2 / 1, backgroundColor: 'lightblue', elevation: 5, margin: 10, borderWidth: 0.5, borderColor: 'gray' },
    modalContentEnd: { alignSelf: 'flex-end', elevation: 5 },
    input: {
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 8,
    }
});


picker.propTypes = {
    visible: PropTypes.bool,
    onDone: PropTypes.func,
};

export default picker