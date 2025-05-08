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

  textPoppinsRegular8: {
    fontSize: figmaFontSize(8),
    fontFamily: fonts.PoppinsRegular,
    color: colors.secondary,
  },

  textPoppinsMedium12: {
    fontSize: figmaFontSize(12),
    fontFamily: fonts.PoppinsMedium,
    color: colors.white,
  },

};

export default typography;
