import React from 'react';
import {Pressable, View, ViewStyle, TextStyle} from 'react-native';
import {Text} from '../Text';
import {styles} from './ActionButton.styles';

export interface ActionButtonProps {
  label: string;
  isActive: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function ActionButton({
  label,
  isActive,
  onPress,
  containerStyle,
  buttonStyle,
  textStyle,
}: ActionButtonProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          isActive && styles.buttonActive,
          pressed && styles.buttonPressed,
          buttonStyle,
        ]}
        onPress={onPress}>
        <Text preset="label" style={[styles.buttonText, textStyle]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

