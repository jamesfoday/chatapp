import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';


const backgroundImage = require('../assets/images/background.png');


const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

const Start = ({ navigation }) => {
    const [name, setName] = useState('');
    const [bgColor, setBgColor] = useState(colors[0]);

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <Text style={styles.title}>ChatApp</Text>
            <View style={styles.box}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Your Name"
                />
                <Text style={styles.subtitle}>Choose Background Color</Text>
                <View style={styles.colorOptions}>
                    {colors.map((color) => (
                        <TouchableOpacity
                            key={color}
                            style={[
                                styles.colorCircle,
                                { backgroundColor: color },
                                bgColor === color && styles.selected,
                            ]}
                            onPress={() => setBgColor(color)}
                        />
                    ))}
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Chat', { name, bgColor })}
                >
                    <Text style={styles.buttonText}>Start Chatting</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

// Styles based on the design spec
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        fontWeight: '600',
        color: '#FFF',
        alignSelf: 'center',
        marginBottom: 20,
    },
    box: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    input: {
        borderColor: '#757083',
        borderWidth: 1,
        width: '100%',
        padding: 10,
        fontSize: 16,
        color: '#757083',
        fontWeight: '300',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#757083',
        fontWeight: '300',
        marginBottom: 10,
    },
    colorOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 20,
    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    selected: {
        borderWidth: 2,
        borderColor: '#000',
    },
    button: {
        backgroundColor: '#757083',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default Start;
