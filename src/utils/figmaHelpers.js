import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
// Set these to match your Figma frame dimensions
const FIGMA_WIDTH = 360;
const FIGMA_HEIGHT = 640;

/**
 * Convert Figma X-axis (width) pixel to percentage
 * @param {number} px - Figma pixel value
 * @returns {string} - percentage string for wp()
 */
export function figmaWidth(px) {
  const percent = (px / FIGMA_WIDTH) * 100;
  return wp(`${percent}%`);
}

/**
 * Convert Figma Y-axis (height) pixel to percentage
 * @param {number} px - Figma pixel value
 * @returns {string} - percentage string for hp()
 */
export function figmaHeight(px) {
  const percent = (px / FIGMA_HEIGHT) * 100;
  return hp(`${percent}%`);
}

/**
 * Convert Figma font size (px) to responsive font size
 */
export function figmaFontSize(px) {
  const percent = (px / FIGMA_HEIGHT) * 100;
  return RFPercentage(percent);
}
