export const fontFamily = {
  displayBlack: 'DMSans_900Black',
  displayExtraBold: 'DMSans_800ExtraBold',
  displayBold: 'DMSans_700Bold',
  displaySemiBold: 'DMSans_600SemiBold',
  displayMedium: 'DMSans_500Medium',
  displayRegular: 'DMSans_400Regular',

  bodyBold: 'Inter_700Bold',
  bodySemiBold: 'Inter_600SemiBold',
  bodyMedium: 'Inter_500Medium',
  bodyRegular: 'Inter_400Regular',
};

export const fontsToLoad = {};

// sizes follow the web's scale, compressed for mobile viewports
export const type = {
  eyebrow: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  h1: {
    fontFamily: fontFamily.displayExtraBold,
    fontSize: 30,
    lineHeight: 36,
  },
  h2: {
    fontFamily: fontFamily.displayBold,
    fontSize: 24,
    lineHeight: 30,
  },
  h3: {
    fontFamily: fontFamily.displayBold,
    fontSize: 19,
    lineHeight: 25,
  },
  h4: {
    fontFamily: fontFamily.displaySemiBold,
    fontSize: 16,
    lineHeight: 22,
  },
  body: {
    fontFamily: fontFamily.bodyRegular,
    fontSize: 15,
    lineHeight: 23,
  },
  bodySmall: {
    fontFamily: fontFamily.bodyRegular,
    fontSize: 13,
    lineHeight: 19,
  },
  caption: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 14,
    letterSpacing: 0.2,
  },
};

export default type;
