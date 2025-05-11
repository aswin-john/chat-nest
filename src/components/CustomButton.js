import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import globalStyles from '../themes/globalStyles';
import typography from '../themes/typography';

const CustomButton = ({
  label,
//   onPress,
  buttonStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
    //   onPress={onPress}
      style={[globalStyles.Button1, buttonStyle]}
    //   activeOpacity={0.8}
    >
      <Text style={[typography.textPoppinsMedium12, textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
