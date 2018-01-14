import { StyleSheet, Platform, Dimensions } from 'react-native'

import { radius } from 'theme/include/borders'
import { center } from 'theme/include/align'
import { wide, bold, lmedium, xlarge, large, medium, small, xsmall, monospace } from 'theme/include/fonts'
import { xxl, ml, l, m, s, xs, verticalMargin } from 'theme/include/spacing'
import { softGray, black, gray, white, moneyGreen, goodDark, danger, aqua, darkGray, lightGray, softAqua } from 'theme/include/colors'

const { width } = Dimensions.get('window')

export default StyleSheet.create({

  whiteBackground: {
    backgroundColor: white
  },
  list: {
    minHeight: 70,
    borderTopWidth: 1,
    borderTopColor: softGray,
    borderBottomWidth: 1,
    borderBottomColor: softGray,
    paddingTop: -5,
    paddingBottom: -5,
    paddingLeft: -15,
    paddingRight: -15
  },
  friendList: {
    borderTopColor: softAqua,
    borderBottomColor: softAqua
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  negativeMargin: {
    marginTop: -20,
  },
  balanceRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  balanceInfo: {
    ...bold,
    fontSize: 28,
    color: '#000',
    paddingTop: 8
  },
  address: {
    width: 150,
    ...monospace,
    ...xsmall,
    color: gray
  },
  emptyState: {
    ...verticalMargin,
    ...medium,
    ...center,
    color: gray
  },
  text: {
    ...bold
  },
  header: {
    ...medium
  },
  topText: {
    alignSelf: 'center',
    paddingTop: Platform.OS === 'ios' ? ml : m,
    paddingBottom: m,
    color: black,
    backgroundColor: white,
    ...lmedium,
    ...wide
  },
  title: {
    paddingLeft: xs,
    flex: 1,
    ...xsmall,
    marginTop: s
  },
  titledFact: {
    padding: xs,
    flex: 1,
    ...medium
  },
  paddedHeader: {
    paddingTop: xs,
    paddingBottom: xs,
    flex: 1,
    ...bold,
    ...medium
  },
  titledFactAmountGood: {
    padding: xs,
    flex: 1,
    ...bold,
    ...medium,
    color: moneyGreen
  },
  titledFactAmountDanger: {
    padding: xs,
    flex: 1,
    ...bold,
    ...medium,
    color: danger
  },
  largeFactAmount: {
    ...bold,
    fontSize: 54,
    color: black
  },
  largeFactAmountGood: {
    padding: xs,
    flex: 1,
    ...bold,
    ...large,
    color: darkGray
  },
  largeFactAmountDanger: {
    padding: xs,
    flex: 1,
    ...bold,
    ...large,
    color: danger
  },
  fact: {
    padding: xs,
    flex: 1,
    ...small,
    ...bold,
    ...verticalMargin
  },
  pendingTransaction: {
    borderColor: softGray,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingLeft: m,
    paddingRight: m,
    paddingTop: s,
    paddingBottom: m - xs
  },
  pendingTransactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  friendRow: {
    borderColor: softAqua,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingLeft: m,
    paddingRight: m,
    paddingTop: s,
    paddingBottom: m - xs
  },
  memoRow: {
    flexDirection: 'row',
    maxWidth: width * 0.5,
    flexWrap: 'wrap'
  },
  recentTransaction: {
    ...radius,
    paddingLeft: m,
    paddingRight: m,
    paddingTop: s,
    paddingBottom: m - xs,
    ...verticalMargin
  },
  transactionIcon: {
    position: 'absolute',
    color: gray,
    top: 5,
    right: 3,
    zIndex: 1,
    ...large
  },
  settingsBackground: {
    position: 'absolute',
    top: 0,
    right: 30,
    backgroundColor: aqua,
    height: 25,
    width: 25
  },
  settingsTriangleLeft: {
    position: 'absolute',
    top: 0,
    right: 55,
    width: 15,
    height: 0,
    borderBottomColor: aqua,
    borderBottomWidth: 25,
    borderLeftWidth: 15,
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  settingsTriangleRight: {
    position: 'absolute',
    top: 0,
    right: 15,
    width: 15,
    height: 0,
    borderTopColor: aqua,
    borderTopWidth: 25,
    borderLeftWidth: 0,
    borderRightWidth: 15,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  balance: {
    color: black,
    ...bold,
    ...small
  },
  friends: {
    color: black,
    ...small
  },
  friendsArrow: {
    marginLeft: 5,
    marginTop: 3,
    height: 15,
    width: 15
  },
  newTransactionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titledPending: {
    color: aqua,
    ...bold,
    ...medium,
    maxWidth: width * 0.5
  },
  pendingIcon: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  recentIcon: {
    width: 30,
    height: 30,
    marginRight: 15
  },
  pendingMemo: {
    color: aqua,
    ...medium,
    maxWidth: width * 0.5
  },
  pendingAmount: {
    color: aqua,
    ...large
  },
  pendingParens: {
    color: aqua,
    ...medium
  },
  seeAllActivity: {
    ...large,
    color: aqua,
    paddingLeft: m,
    paddingRight: m,
    paddingVertical: m
  },
  seeAllActivityButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  seeAllActivityArrow: {
    height: 16,
    width: 16,
    marginRight: m
  },
  transactionHeader: {
    ...medium,
    opacity: 0.5,
    backgroundColor: softGray,
    color: aqua,
    paddingLeft: m,
    paddingRight: m,
    paddingVertical: s
  }

} as any)
