import { createStitches } from '@stitches/react';

export const { styled , css } = createStitches({
  
  theme: {
    colors: {
      White: '#FFFFFF',
      DarkWhite: '#FCFCFD',
      DarkerWhite: '#F5F4F6',
      DarkestWhite: '#EBEAED',
      MostDarkestWhite: '#DEDCE1',

      Ink: '#170C3A',
      LightInk: '#8F8A9B',
      LighterInk: '#B1ADB9',
      LightestInk: '#C7C4CD',

      DarkerBlue: '#244AA8',
      DarkBlue: '#2F55CC',
      Blue: '#365DF0',
      LightBlue: '#9AAEF7',
      LighterBlue: '#B9C6FA',
      LightestBlue: '#CAD6FC',
      MostLightestBlue: '#E1E7FD',

      DarkerGreen: '#0E995D',
      DarkGreen: '#10B26C',
      Green: '#12DB89',
      LightGreen: '#88EDC4',
      LighterGreen: '#B7F7D8',
      LightestGreen: '#CFF9E6',
      MostLightestGreen: '#E7FBF3',

      DarkerRed: '#A53F3F',
      DarkRed: '#CC4C4C',
      Red: '#F95E5A',
      LightRed: '#FCAEAC',
      LighterRed: '#FCC6C5',
      LightestRed: '#FCD7D6',
      MostLightestRed: '#FEEFEE',

      DarkerYellow: '#996C2B',
      DarkYellow: '#D89C3A',
      Yellow: '#FFBB43',
      LightYellow: '#FFDDA1',
      LighterYellow: '#FFF8EC',

      DarkerPurple: '#353372',
      DarkPurple: '#4C4499',
      Purple: '#6554C0',
      LightPurple: '#B2A9DF',
      LighterPurple: '#EFEEF9',

      DarkerTeal: '#2497B2',
      DarkTeal: '#2BAFD8',
      Teal: '#30C3FC',
      LightTeal: '#98E1FE',
      LighterTeal: '#EAF9FF',
    },
    fonts: {
      sans: 'Inter, sans-serif',
    },
    fontSizes: {
      "BodySmallest": 16,
      "BodySmall": 18,
      "Body": 20,
      "Header 5": 24,
      "Header 4": 26,
      "Header 3": 30,
      "Header 2": 36,
      "Header 1": 42,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    radii: {
      1: 2,
      2: 4,
      3: 5,
      4: 8,
      round: '9999px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    mobile: '(max-width: 480px)',
    tablet: '(max-width: 768px)',
  },
});