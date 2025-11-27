import React, { useCallback } from 'react';
import { View, TextInput } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import { colors } from '../../../theme/colors';
import { styles } from './SearchBar.styles';

export interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
}

export function SearchBar({
    value,
    onChangeText,
}: SearchBarProps) {

    const _onChangeText = useCallback((text: string) => {
        onChangeText(text.toLowerCase());
    }, [onChangeText]);

    return (
        <View style={styles.container}>
            <Icon name="search" size={16} color={colors.textSecondary} />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={_onChangeText}
                placeholder={"Search here..."}
                placeholderTextColor={colors.textSecondary}
            />
        </View>
    );
}


