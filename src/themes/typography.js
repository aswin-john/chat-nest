import { figmaWidth, figmaHeight, figmaFontSize } from '../utils/figmaHelpers';
import fonts from './fonts';
import colors from './colors';

const typography = {

  textRobotoMedium18: {
    fontSize: figmaFontSize(18),
    fontFamily: fonts.RobotoMedium,
    color: colors.black,
  },
  textPoppinsMedium18: {
    fontSize: figmaFontSize(18),
    fontFamily: fonts.PoppinsMedium,
    color: colors.primary,
  },

};

export default typography;
