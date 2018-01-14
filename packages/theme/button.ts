import { StyleSheet } from 'react-native'

import { mediumPad, largePad, verticalMargin, verticalMarginXS } from 'theme/include/spacing'
import { center } from 'theme/include/align'
import { radius } from 'theme/include/borders'
import { small, medium, large, wide, bold } from 'theme/include/fonts'
import { light, gray, danger, transparent, moneyGreen, aqua, darkGray } from 'theme/include/colors'

export default StyleSheet.create({
  button: {
    ...mediumPad,
    ...verticalMargin,
    backgroundColor: aqua,
    ...radius,
    minHeight: 40,
    minWidth: 45
  },
  icon: {
    position: 'absolute',
    padding: 5,
    top: 2,
    right: 4,
    fontSize: 22,
    color: light,
    backgroundColor: transparent
  },
  round: {
    borderRadius: 100
  },
  iconRound: {
    marginTop: 2,
    marginLeft: -4,
    padding: 5,
    fontSize: 22,
    width: 23,
    height: 23,
    backgroundColor: transparent
  },
  arrow: {
    height: 16,
    width: 16,
    paddingLeft: 10
  },
  danger: {
    backgroundColor: danger
  },
  buttonAlternate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAction: {
    backgroundColor: moneyGreen
  },
  text: {
    ...verticalMarginXS,
    ...medium,
    ...wide,
    ...center,
    color: light,
    paddingLeft: 10,
    paddingRight: 10
  },
  textAlternate: {
    ...verticalMarginXS,
    ...medium,
    ...wide,
    ...center,
    color: gray,
    paddingLeft: 10,
    paddingRight: 10
  },
  largeText: {
    ...large
  },
  smallText: {
    ...small
  },
  narrow: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingVertical: 0,
    minHeight: 20,
    minWidth: 25
  },
  fat: {
    paddingVertical: 10
  },
  wide: {
    paddingLeft: 30,
    paddingRight: 30
  },
  darkGray: {
    backgroundColor: darkGray
  }
} as any)
