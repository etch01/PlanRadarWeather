import React, { ReactNode } from 'react';
import {
  Text,
  StyleSheet,
  I18nManager,
  Platform,
  TextProps,
  TextStyle,
} from 'react-native';

interface TextComponentProps extends TextProps {
  children: ReactNode; // Ensures the component can receive children of any type (text, elements, etc.)
  style?: TextStyle | TextStyle[]; // Optional style or array of styles
}

const TextComponent: React.FC<TextComponentProps> = ({ children, style, ...props }) => {
  return (
    <Text {...props} style={[styles.generalStyles, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  generalStyles: {
      fontFamily: Platform.OS === 'ios' ? 'lato-regular' : 'Lato-Regular',
    //Use if there is RTL language
    // ...(I18nManager.isRTL &&
    //   Platform.OS === 'ios' && {
    //     textAlign: 'left',
    //   }),
  },
});

export default TextComponent;
