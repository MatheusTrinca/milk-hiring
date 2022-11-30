import { Dimensions } from 'react-native';

export default {
  colors: {
    primary: '#46a0cd',
    secondary: '#ff4500',
    tertiary: '#00ab77',
    danger: '#ff2525',
    success: 'green',
    dark: '#121214',
    light: '#f1f1f1',
    gray: '#a8a8b3',
  },
  fonts: {
    regular: 'Roboto_400Regular', //400
    medium: 'Roboto_500Medium', //500
    bold: 'Roboto_700Bold', // 700
  },
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
