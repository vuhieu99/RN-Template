import STYLES from '@src/styles';
import React from 'react';
import { StyleSheet } from 'react-native';
import Box from '../Box';
import Text from '../Text';

const Button = ({
  type,
  label,
  subLabel,
  prefix,
  suffix,
  style,
  textStyle,
  subTextStyle,
  onPress,
  disabled,
  textBox,
  ...rest
}) => {
  return (
    <Box
      flexDirection="row"
      justify="center"
      align="center"
      style={StyleSheet.flatten([
        styles.buttonType(type),
        disabled && styles.buttonType('disabled'),
        style,
      ])}
      pressable
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      {prefix && <Box margin={[0, 0, 0, 5]}>{prefix}</Box>}
      {textBox ? (
        <Box width="70%">
          <Text
            style={StyleSheet.flatten([
              styles.textType(type),
              disabled && styles.textType('disabled'),
              textStyle,
            ])}
            numberOfLines={1}
          >
            {label}
          </Text>
        </Box>
      ) : (
        <Box align="center">
          <Text
            style={StyleSheet.flatten([
              styles.textType(type),
              disabled && styles.textType('disabled'),
              textStyle,
            ])}
            numberOfLines={1}
          >
            {label}
          </Text>
          {subLabel && (
            <Text
              style={StyleSheet.flatten([
                styles.textType(type),
                disabled && styles.textType('disabled'),
                subTextStyle,
              ])}
              numberOfLines={1}
            >
              {subLabel}
            </Text>
          )}
        </Box>
      )}
      {suffix && <Box>{suffix}</Box>}
    </Box>
  );
};

export default Button;

const styles = StyleSheet.create({
  textType: type => {
    const textDefault = {
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 1,
      fontFamily: 'Prompt-Regular',
    };
    switch (type) {
      case 'primary':
      case 'primary-square':
        return { ...textDefault, color: STYLES.light.secondary_color };
      case 'secondary':
      case 'secondary-square':
        return { ...textDefault, color: STYLES.light.primary_color };
      case 'disabled':
        return {
          ...textDefault,
          color: STYLES.light.disabled_text,
        };
      case 'link':
        return {
          ...textDefault,
          color: STYLES.light.primary_color,
          textDecorationLine: 'underline',
        };
      case 'default-square':
      default:
        return { ...textDefault };
    }
  },
  buttonType: type => {
    const defaultButtonStyle = {
      height: 44,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: STYLES.light.primary_color,
    };
    switch (type) {
      case 'primary':
        return {
          ...defaultButtonStyle,
          backgroundColor: STYLES.light.primary_color,
        };

      case 'primary-square':
        return {
          ...defaultButtonStyle,
          borderRadius: 4,
          backgroundColor: STYLES.light.primary_color,
        };
      case 'secondary':
        return {
          ...defaultButtonStyle,
          borderColor: STYLES.light.disabled_color,
          backgroundColor: STYLES.light.secondary_color,
        };
      case 'secondary-square':
        return {
          ...defaultButtonStyle,
          borderRadius: 4,
          borderColor: STYLES.light.disabled_color,
          backgroundColor: STYLES.light.secondary_color,
        };
      case 'disabled':
        return {
          ...defaultButtonStyle,
          borderWidth: 0,
          backgroundColor: STYLES.light.disabled_color,
        };
      case 'link':
        return {};
      case 'default-square':
        return {
          ...defaultButtonStyle,
          borderRadius: 4,
        };
      default:
        return {
          ...defaultButtonStyle,
        };
    }
  },
});
