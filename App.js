// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, Alert } from 'react-native';
import Logo from './component/Logo';

export default function App() {
    // Name input
    const [name, setName] = useState('');

    // Logo answers
    const [looneyAns, setLooneyAns] = useState('left');
    const [monopolyAns, setMonopolyAns] = useState('left');
    const [kitkatAns, setKitkatAns] = useState('left');
    const [starbucksAns, setStarbucksAns] = useState('left');
    const [skechersAns, setSkechersAns] = useState('left');

    const handleSubmit = () => {
        // correct answers
        const correctAnswers = {
            looney: 'right',
            monopoly: 'right',
            kitkat: 'right',
            starbucks: 'right',
            skechers: 'right',
        };

        // count correct answers
        let score = 0;
        if (looneyAns === correctAnswers.looney) score++;
        if (monopolyAns === correctAnswers.monopoly) score++;
        if (kitkatAns === correctAnswers.kitkat) score++;
        if (starbucksAns === correctAnswers.starbucks) score++;
        if (skechersAns === correctAnswers.skechers) score++;

        // show results
        if (score === 5) {
            Alert.alert('Result', `Well done! ${name}`);
        } else if (score === 0) {
            Alert.alert('Result', `All wrong, ${name}! Try again!`);
        } else {
            Alert.alert('Result', `You can do better next time, ${name}!`);
        }
    };

    return (
        <ScrollView style={{ marginTop: 40, paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Logo Quiz</Text>

            <Text style={{ marginTop: 20 }}>What is your name?</Text>
            <TextInput
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 6, borderRadius: 4 }}
                onChangeText={setName}
                value={name}
            />

            <Text style={{ fontSize: 20, fontStyle: 'italic', marginTop: 30 }}>
                Guess which logo is the real logo
            </Text>

            <Logo
                title="Looney"
                imageSource={require('./img/looney.jpg')}
                value={looneyAns}
                onChange={setLooneyAns}
            />

            <Logo
                title="Monopoly"
                imageSource={require('./img/monopoly.jpg')}
                value={monopolyAns}
                onChange={setMonopolyAns}
            />

            <Logo
                title="KitKat"
                imageSource={require('./img/kitkat.jpg')}
                value={kitkatAns}
                onChange={setKitkatAns}
            />

            <Logo
                title="Starbucks"
                imageSource={require('./img/starbucks.png')}
                value={starbucksAns}
                onChange={setStarbucksAns}
            />

            <Logo
                title="Skechers"
                imageSource={require('./img/skechers.png')}
                value={skechersAns}
                onChange={setSkechersAns}
            />

            <View style={{ marginTop: 30, marginBottom: 50 }}>
                <Button title="Submit Answers" onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
}
