import { StyleSheet } from 'react-native';
import colors from './colors';
import typography from './typography';
import { figmaWidth, figmaHeight, figmaFontSize } from '../utils/figmaHelpers';
import fonts from './fonts';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: figmaWidth(40),  
        paddingVertical: figmaHeight(33),  
        backgroundColor: colors.background,
      },
      inputContainer1: {
        width: '100%',
        backgroundColor: colors.inputBackground,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: figmaHeight(15),
        paddingHorizontal: figmaWidth(12),
      },
      Button1: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: figmaWidth(105),
        height: figmaHeight(32),
        marginBottom: figmaHeight(15),
      },
      
      

});

export default globalStyles;
