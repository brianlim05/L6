import React from 'react';
import { View, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Logo({ title, imageSource, value, onChange }) {
    return (
        <View style={{ marginTop: 25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center', marginBottom: 10 }}>
                {title}
            </Text>

            <Image
                source={imageSource}
                style={{ width: 350, height: 200, alignSelf: 'center', resizeMode: 'contain' }}
            />

            <Picker
                selectedValue={value}
                onValueChange={onChange}
            >
                <Picker.Item label="Left" value="left" />
                <Picker.Item label="Right" value="right" />
            </Picker>
        </View>
    );
}
