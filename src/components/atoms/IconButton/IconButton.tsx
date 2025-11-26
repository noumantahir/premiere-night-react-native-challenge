import React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import {styles} from './IconButton.styles';

export interface IconButtonProps extends Omit<PressableProps, 'style'> {
  name: string;
  size?: number;
  color?: string;
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
}

export function IconButton({
  name,
  size = 24,
  color = '#000',
  containerStyle,
  iconStyle,
  onPress,
  ...pressableProps
}: IconButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressed,
        containerStyle,
      ]}
      onPress={onPress}
      {...pressableProps}>
      <Icon name={name as any} size={size} color={color} style={iconStyle} />
    </Pressable>
  );
}

