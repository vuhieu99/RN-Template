import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import STYLES from '@src/styles';
import { normalizeOptions } from '@src/styles';

const Text = ({ style, children, margin, padding, type, ...rest }) => {
  const combinedStyle = [
    'size',
    'color',
    'lineHeight',
    'fontSize',
    'fontFamily',
    'fontWeight',
    'underline',
    'textAlign',
    'letterSpacing',
  ]
    .map(e => {
      if (!rest[e]) {
        return;
      }
      return styles[e](rest[e]);
    })
    .filter(e => e);

  return (
    <RNText
      style={StyleSheet.flatten([
        styles.default,
        margin && styles.margin(normalizeOptions(margin)),
        padding && styles.padding(normalizeOptions(padding)),
        type && styles.type(type),
        combinedStyle,
        style,
      ])}
      allowFontScaling={false}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Prompt-Regular',
    color: STYLES.primaryColor,
  },
  type: type => {
    if (type === 'error') {
      return {
        color: STYLES.errorColor,
        fontWeight: '300',
        fontSize: 11,
      };
    }
    if (type === 'link') {
      return {
        fontSize: 11,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
      };
    }
    if (type === 'text') {
      return {
        fontSize: STYLES.fontSize,
        color: STYLES.fontColor,
        fontWeight: 'normal',
      };
    }
    if (type === 'title') {
      return {
        fontSize: STYLES.titleSize,
        fontFamily: 'Prompt-SemiBold',
      };
    }
    if (type === 'semi_title') {
      return {
        fontSize: STYLES.sectionTitleSize,
        fontFamily: 'Prompt-SemiBold',
      };
    }
    if (type === 'subject') {
      return {
        fontFamily: 'Prompt-SemiBold',
      };
    }

    return {};
  },
  color: color => ({ color }),
  fontSize: size => ({ fontSize: size }),
  fontFamily: fontFamily => ({ fontFamily }),
  fontWeight: fontWeight => ({ fontWeight: `${fontWeight}` }),
  margin: ([top, left, bottom, right]) => ({
    marginTop: top,
    marginBottom: bottom,
    marginLeft: left,
    marginRight: right,
  }),
  padding: ([top, left, bottom, right]) => ({
    paddingTop: top,
    paddingBottom: bottom,
    paddingLeft: left,
    paddingRight: right,
  }),
  underline: () => ({
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  }),
  textAlign: textAlign => ({ textAlign }),
  lineHeight: lineHeight => ({ lineHeight }),
  letterSpacing: letterSpacing => ({ letterSpacing }),
  size: size => {
    switch (`${size}`) {
      case '12':
        return {
          lineHeight: 18,
          fontSize: 12,
        };
      case '10':
        return {
          fontSize: 10,
          lineHeight: 15,
        };
      case '13':
        return {
          fontSize: 13,
          lineHeight: 19,
        };
      case '14':
        return {
          fontSize: 14,
          lineHeight: 21,
        };
      case '16':
        return {
          fontSize: 16,
          lineHeight: 21,
        };
      case '20':
        return {
          fontSize: 20,
          lineHeight: 30,
        };
      case '22':
        return {
          fontSize: 22,
          lineHeight: 33,
        };
      default:
        return {
          fontSize: size,
        };
    }
  },
});
