import React from 'react';
import {Pressable, View, ViewStyle, TextStyle} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import {Text} from '../Text';
import {colors} from '../../../theme/colors';
import {styles} from './ActionButton.styles';

export interface ActionButtonProps {
  label: string;
  isActive: boolean;
  icon?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function ActionButton({
  label,
  isActive,
  icon,
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
        <View style={styles.buttonContent}>
          {icon && (
            <Icon name={icon as any} size={14} color={colors.textInverse} style={styles.icon} />
          )}
          <Text preset="label" style={[styles.buttonText, textStyle]}>
            {label}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

