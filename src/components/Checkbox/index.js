import React, { useCallback } from 'react';
import styles from './styles';
import Text from '../Text';
import STYLES from '../../styles';
import Box from '../Box';

const Checkbox = ({ value, label, disabled, onChange }) => {
  let backgroundColor = 'white';
  if (value) {
    backgroundColor = STYLES.primaryColor;
  }
  if (disabled) {
    backgroundColor = STYLES.disableColor;
  }

  const _onChange = useCallback(
    val => {
      if (onChange) {
        return onChange(val);
      }
      return null;
    },
    [onChange],
  );

  return (
    <Box pressable disabled={disabled} onPress={() => _onChange(!value)}>
      <Box style={styles.container}>
        <Box
          style={[
            styles.box,
            {
              backgroundColor,
              borderColor: disabled ? STYLES.disableColor : STYLES.primaryColor,
            },
          ]}
        >
          {value && <Box style={styles.icon} />}
        </Box>
        <Text style={styles.label} fontSize={12} lineHeight={18}>
          {label}
        </Text>
      </Box>
    </Box>
  );
};

export default Checkbox;
