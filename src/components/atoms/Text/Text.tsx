import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { styles } from './Text.styles';

export interface TextProps extends RNTextProps {
    preset?: 'heading' | 'subheading' | 'body' | 'label';
}

export function Text({
    preset = 'body',
    style,
    ...props
}: TextProps) {
    return (
        <RNText
            style={[styles.base, styles[preset], style]}
            {...props}
        />
    );
}

