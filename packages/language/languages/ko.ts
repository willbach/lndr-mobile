import { amountFormat } from 'lndr/format'

import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = `서버에 오류가 발생하였습니다. 나중에 다시 시도해주세요`

export default {
  applicationName: `Lndr`,
  helloWorld: `헬로 월드`,
  noConnection: `연결 없음`,
  retry: `다시 해 보다`,
  submit: `제출`,
  next: `다음`,
  cancel: `취소`,
  back: `돌아가기`,
  copy: `클립보드에 복사`,
  confirmAccount: `인증`,
  createAccount: `계정 생성`,
  recoverAccount: `계정 복원`,
  removeAccount: `계정 삭제`,
  updateAccount: `계정 업데이트`,
  loginAction: `UNLOCK`,
  enterPin: `비밀번호를 입력해주세요`,
  changePin: `비밀번호 수정`,
  enterCurrentPin: `사용중인 비밀번호를 입력해주세요`,
  logoutAction: `로그아웃`,
  seeAllActivity: `활동보기`,
  copiedClipboard: `클립보드에 복사되었습니다`,
  pleaseWait: `잠시 기다려주십시오`,
  addFriend: `친구 추가`,
  addFriendConfirmationQuestion: `정말 친구로 추가하시겠습니까?`,
  removeFriend: `친구 삭제`,
  currentFriends: `친구 리스트`,
  inviteFriends: `Lndr에 친구 초대`,
  tryLndr: `Lndr 애플리케이션은 이곳에서 확인할 수 있습니다:`,
  removeFriendConfirmationQuestion: `정말 해당 친구를 목록에서 삭제하시겠습니까?`,
  friendInfo: `친구 관계 정보:`,
  noFriends: `사용 전 친구를 추가해보세요!`,
  noMatches: `검색 결과 없음`,
  noBalances: `현존하는 부채가 없습니다`,
  addFriendButton: `+ 친구 추가`,
  alreadyFriendsButton: `친구`,
  friendShell: `친구`,
  tip: `팁: `,
  notice: `공지: `,
  welcome: `당신의 LNDR에 오신 것을 환영합니다`,
  noBalanceWarning: `현재 잔액을 확인할 수 없음으로 나중에 다시 시도해주세요.`,
  totalBalance: `총 잔액: `,
  totalBalances: `총 거래대상: `,
  newTransaction: `새로운 거래`,
  needsReview: `리뷰 필요`,
  owesMe: `친구가 갚을 빚이 있습니다`,
  iOwe: `친구에게 빚을 갚아야합니다`,
  newPassword: `새로운 비밀번호(최소 8자)`,
  confirmPassword: `비밀번호 인증`,
  newPin: `새로운 비밀번호 4자리`,
  enterNewPin: `비밀번호 4자리를 생성해주세요`,
  confirmPin: `비밀번호를 확인해주세요`,
  newAccount: `계정 생성`,
  loginAccount: `계정 UNLOCK`,
  recoverExistingAccount: `본 계정 되돌리기`,
  recoverMnemonic: `연상 기호(계정 생성\n 시 입력해야 하는 12자)`,
  recoverMnemonicLengthError: `정확히 12 단어이어야합니다`,
  successTitle: `성공`,
  errorTitle: `에러`,
  showMnemonic: `12자 연상기호 보이기`,
  mnemonicExhortation: `해당 12자 기호는 계정 복구 시 필요함으로 반드시 안전한 곳에 저장하세요`,
  addressExhortation: `당신은 당신의 지갑 주소로 ETH 또는 지원 ERC-20 토큰을 보낼 수 있습니다.`,
  removeAccountTitle: `기기로부터 계정을 정말 삭제하시겠습니까?`,
  removeAccountExhortation: `향후 계정을 복구할 시 입력할 연상 기호를 인지해야 합니다.`,
  myAccount: `나의 계정`,
  setNickname: `친구들이 알아볼 수 있도록 닉네임을 설정하세요`,
  setEmail: `이메일 설정하고 Lndr 업데이트 정보 받아보기`,
  nickname: `닉네임(소문자 & 숫자)`,
  email: `이메일 주소`,
  inviteLink: `링크 초대`,
  splitExpense: `LNDR 응용 프로그램에 나와 함께 비용을 분할`,
  sendInvite: `이메일이나 텍스트로 보내기`,
  unknownTransaction: `알 수없는 트랜잭션`,
  yourFriend: `네 친구`,
  lndrVerified: {
    ok: `승인`,
    title: `고객의 요구 사항을 알고 완료하여 높은 결제 제한 및 암호화 인출 금액을 설정합니다.`,
    statusTitle: `당신의 검증의 현재 상태 :`,
    tryAgain: `우리는 사용자의 신원을 확인할 수 없습니다. 정보를 다시 제출하고 사진을 읽을 수 있는지 확인하십시오.`,
    formMessage: `다음 모든 필드를 작성하십시오`,
    button: `신원 확인`,
    prefix: `귀하의 개인 데이터를 관리 할 방법에 대한 `,
    linkTitle: `개인 정보 보호 정책을 `,
    postfix: `읽어 보시기 바랍니다.`,
    upload: `정부 발행 ID`,
    governmentId: ` 업로드`,
    selfie: `정부 발행 ID로 셀카를 업로드`,
    proofOfAddress: `주소 증명`,
    ifNotId: `(아니라면 ID)`,
    agree: `본인은 개인 정보 보호 `,
    agreeLink: `정책에 동의`,
    success: `KYC가 제출되었습니다.`,
    idInfoHeader: `ID의 예로는`,
    passport: `여권`,
    drivers: `운전 면허증`,
    national: `주민등록증`,
    addressInfoHeader: `주소 증명의 예 :`,
    bank: `은행 예금 잔고`,
    utility: `전기 요금`,
    other: `기타 문서`,
    chooseGovernmentPhoto: `정부 ID 사진을 선택`,
    chooseSelfiePhoto: `셀카 사진을 선택`,
    chooseAddressPhoto: `주소 사진의 증거를 선택`,
    emailRequired: `당신은 "이메일 주소"를 클릭하십시오, 사용자의 신원을 확인하기 위해 이메일을 필요 `,
    approved: `승인`,
    rejected: `거부 됨`,
    pending: `미결`,
    error: generalCommunicationError,
    formFields: {
      firstName: `이름`,
      lastName: `성`,
      street: `번지`,
      city: `시티`,
      state: `주 /도`,
      postalCode: `우편 번호`,
      country: `국가 선택`,
      phone: `전화 번호`,
      dob: `생년월일 (YYYY-MM-DD)`,
    },
    formErrors: {
      firstName: `이름이 필요합니다`,
      lastName: `성이 필요합니다`,
      street: `거리가 필요합니다`,
      city: `도시가 필요합니다`,
      state: `주 / 지방이 필요합니다`,
      postalCode: `우편 번호가 필요합니다`,
      country: `나라가 필요합니다`,
      phone: `전화 번호가 필요합니다`,
      dob: `생년월일이 필요합니다`,
      general: `올바른 사진을 모든 필드를 작성하고 첨부 확인하세요`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `닉네임은 적어도 3글자 이상 가능합니다.`,
      compositionViolation: `닉네임은 숫자와 소문자만 포함될 수 있습니다.`,
      duplicationViolation: `이미 사용되고 있는 닉네임입니다`,
    },
    email: {
      compositionViolation: `이메일 주소가 잘못되었습니다`,
      duplicationViolation: `이미 사용중인 이메일 주소입니다`,
    },
    pin: {
      lengthViolation: `비밀번호는 최소 4자리 이상이여야 합니다.`,
      matchViolation: `비밀번호는 일치해야합니다.`,
      failedHashComparison: `비밀번호가 일치하지 않습니다, 다시 시도해주세요.`,
      updateSuccess: `비밀번호가 업데이트되었습니다`,
      updateError: `비밀번호 업데이트에 에러가 발생했습니다`,
    },
    mnemonic: {
      lengthViolation: `연상 기호는 적어도 12자 이상 가능합니다.`,
      unableToValidate: `입력하신 연상 기호가 유효하지 않습니다. 다시 시도해주세요.`,
    },
    setNickname: {
      success: `닉네임이 저장되었습니다.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `이메일 주소가 저장되었습니다.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `비밀번호를 추후 입력해주세요`,
      bottom: `시간이 초과됐습니다`,
      update: `업데이트`,
      error: `계정 설정환경을 업데이트하지 못했습니다`,
      success: `잠금 제한 시간이 업데이트되었습니다`,
    },
    addFriend: {
      success: nickname => `친구의 요청이 접수됐습니다: @${nickname}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: nickname => `친구로부터 제거됐습니다: @${nickname}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `이더리움 잔액내역을 불러오지 못했습니다`,
      manage: `이더리움 관리`,
    },
    sendEth: {
      error: {
        insufficient: `해당 거래를 완료하기에 보유한 ETH 잔액이 부족합니다`,
        generic: `거래 도중 에러가 발생하였습니다, 나중에 다시 시도해주세요`,
        address: `정확한 주소를 입력해주세요`,
        amount: `0보다 높은 금액을 입력해주세요`,
        limitExceeded: (A, M) => `한 주당 ${CUR(A)} ${TL(A, M)} 만 보낼 수 있습니다, 이보다 더 적은 금액을 선택하세요`
      },
      amount: `보내는 금액`,
      address: `수신지 주소`,
      transfer: `이더리움 송금`,
      transferAll: `전액 송금`,
      balance: (balance) => `당신의 현재 이더리움 잔액은 ${typeof balance === 'string' ? balance.slice(0,8) : ''}`,
      ethAddress: `이더리움 주소`,
      transferLowercase: `이더리움 송금`,
      note: (A, M) => `참고 : Lndr에서는 일주일에 ${CUR(A)} ${TL(A, M)} 만 송금할 수 있습니다.`,
      warning: (Z, A, M) => `귀하의 거래 한도 ${CUR(A)}${Z} 중 ${CUR(A)} ${TL(A, M)} 이 남아있습니다`
    },
    sendERC20: {
      error: {
        insufficient: (name) => `해당 거래를 완료하기에 보유한 ${name} 잔액이 부족합니다`,
        generic: `거래 도중 에러가 발생하였습니다, 나중에 다시 시도해주세요`,
      },
      transfer: (name) => `${name} 송금`,
      address: `수신지 주소`,
      balance: (name, balance) => `당신의 현재 ${name} 잔액은 ${typeof balance === 'string' ? balance.slice(0,8) : ''}`,
      tokenAddress: (name) => `${name} 주소`,
      txCost: (ethCost, currencyCost) => `거래 비용 : ${ethCost} ETH (${currencyCost}) 달러입니다`,
    },
    panelHeaders: [
      `지갑 주소`,
      `암호화 계정 잔액`,
      `계정 삭제`,
      `이더리움 거래 내역`,
      `차 환율 변경`,
      `페이팔 사용`,
      `추가 기능을 잠금 해제`,
      `이메일 주소`,
      `비밀번호 변경`,
      `잠금 제한 시간 변경`,
      `연상기호`,
      `알림`,
    ],
    viewEtherscan: `이더스캔 내역 조회하기`,
    profilePic: {
      change: `프로필 사진 변경`,
      setError: `사진 업로딩에 실패했습니다, 다시 시도해주세요`,
      getError: `프로필 사진을 가져오는데 실패했습니다`,
      setSuccess: `프로필 사진이 업데이트됐습니다`,
    },
    logoutSuccess: `성공적으로 로그아웃했습니다!`,
    logoutError: generalCommunicationError,
  },

    currentBalance: name => `당신의 현재 ${name} 잔액은`,

    welcomeView: {
    by: `BUILT BY`,
    makeItEasy: `Lndr 는 간단한 부채 기록을 추적해 볼 수 있게 해줍니다`,
    weHelpFriends: `우리는 친구화 함께 살아가고, 일하고, 놀 수 있도록 서비스합니다.`,
    len: `렌`,
    dot: `.`,
    der: `더`,
    shareDinner: `저녁식사 함께하기`,
    fillTank: `차동차 주유 함께채우기`,
    travelTogether: `함께 여행가기`,
    runEthereum: `우리는 이더리움 기반으로 실행됩니다!`,
    firstLendingApp: `블록체인을 담보로 한 첫번째 모바일 대출 애플케이션.`,
    greatConcert: `콘서트 보기`,
    youPlayWithFriends: "친구와 시간을 보내세요; \n계산과 관련된 확인작업은 우리가 할게요...,",
    start: `시작하기`,
  },

  walkthrough: {
    skip: `버킷`,
    continue: `잇다`,
    step1: {
      easyToUse: `Lndr 청구서, 공유 비용을 분할하고 모든 blockchain에 안전하게 수행, 친구 및 가족과 간단한 빚을 해결하는 가장 쉬운 방법입니다.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Lndr를 시작하려면, 당신은 친구를 추가해야합니다.`,
      friendsScreen: `검색, 추가, 또는 Lndr에 연결하는 친구와 가족을 초대 할 친구에게 화면을 방문하십시오.`,
    },
    step3: {
      title: `트랜잭션 기록`,
      easy: `법안을 분할 또는 친구와 함께 채무를 추가하는 것은 Lndr에 쉽습니다!`,
      selectFriend: `친구, 통화 및 금액을 선택합니다.`,
      addMemo: `메모 상자에 몇 가지 메모를 추가하고 제출을 클릭합니다.`,
    },
    step4: {
      title: `청구서를 청산하다`,
      ready: `청구서를 처리 할 준비가 되셨습니까?`,
      payPal: `이 Lndr와 함께 정착 할 시간이되면, \ N- 당신은 페이팔을 선택할 수 있습니다 :`,
      ether: `- 에테르처럼 cryptocurrencies :`,
      cash: `- 또는 단순히 현금 결제 기록 :`,
      positiveBalance: `15046`,
    },
    step5: {
      title: `복수 통화`,
      multiCurrency: `Lndr은 서로 다른 통화로 발생할 경우에도 트랜잭션을 추적 할 수 있습니다.`,
      exchangeRate: `당신이 당신의 친구와 위로 정착하기로 결정하면, 모든 트랜잭션은 최신 환율을 사용할 수 사용하여 기본 통화로 변환됩니다.`,
      start: `Lndr를 사용하여 시작!`,
    }
  },

  debtManagement: {
    shell: `새로운 거래`,
    add: `부채 추가`,
    selectFriend: `선택`,
    lend: `새로운 대출`,
    borrow: `새로운 부채`,
    owesMe: `저를 빚`,
    iOwe: `난 빚`,
    iLent: `친구가 내게 빚지고 있습니다`,
    iBorrowed: `친구에게 빚을 지고 있습니다`,
    settleUpLower: `  청산  `,
    amountToSettle: `청산 금액`,
    total: `총액`,
    record: `거래`,
    records: `거래`,
    chooseCurrency: `통화를 선택하십시오`,
    createError: {
      amountTooLow: `총액은 0달러보다 이상이여야 합니다 0`,
      amountTooHigh: `총액은 10억달러 내외여야 합니다 $1,000,000,000`,
      selfAsFriend: `본인과 부채관계를 형성할 수 없습니다, 다른 친구를 선택해주세요`,
      pending: `다른 친구와 부채 관계 형성에 앞서 미결된 거래내역을 정리해주세요`,
      insufficientEth: eth => `정산하려면 최소 단위의 ${eth} 이더리움이 필요로 합니다, 설정으로 가서 잔액을 확인해주세요`,
    },
    fields: {
      currency: `통화`,
      amount: `액수`,
      settlementAmount: `결제 금액`,
      selectFriend: `친구`,
      memo: `메모`,
      direction: `올바른 내역을 선택하세요`,
    },
    memo: {
      example: `메모를 입력하세요`,
    },
    direction: {
      lend: nickname => `${nickname} 나로부터 빚을 기록했습니다`,
      borrow: nickname => `나는 친구에게 빚을 갚아야합니다 ${nickname}`,
      initiatedLend: nickname => `${nickname} 은 그/그녀가 빚지고 있다고 말합니다`,
      initiatedBorrow: nickname => `${nickname} 은 그/그녀가 빚지고 있다고 말합니다`,
      pendingLend: nickname => `@${nickname} 은 당신에게 빚이 있습니다`,
      pendingBorrow: nickname => `당신은 @${nickname} 으로부터 빚을 갚아야합니다`,
      pendingLendSettlement: settlement => `@${settlement.debtorNickname} 은 당신과의 채무관계를 청산하기를 ${settlement.settlementCurrency} 원합니다`,
      pendingBorrowSettlement: settlement => `@${settlement.creditorNickname} 은 청산을 ${settlement.settlementCurrency} 통한 요청합니다`,
      pendingLendSettlementMe: settlement => `당신은 @${settlement.debtorNickname} 에게 ${settlement.settlementCurrency} 을 통한 청산을 요청합니다`,
      pendingBorrowSettlementMe: settlement => `당신은 @${settlement.creditorNickname} 에게 ${settlement.settlementCurrency} 을 통한 청산을 요청했습니다`
    },
    pending: {
      success: friend => `계류중인 부채 내역은 @${friend.nickname} 에게 제출하였습니다`,
      error: generalCommunicationError
    },
    pendingParens: ` (미결)`,
    confirmation: {
      transaction: _counterParty => `성공`,
      settlement: _counterParty => `성공`,
      error: `거래를 수행할 수 없음으로 다시 시도해주세요`,
    },
    rejection: {
      success: `거래가 거부되었습니다`,
      error: `거래 취소를 수행하지 못했음으로 다시 시도해주세요`,
    },
    balances: {
      error: `잔액 내역을 로딩하지 못했음으로 다시 시도해주세요`,
    },
    for: memo => `for ${memo}`,
    settleUp: `    청산    `,
    settleTotal: `전액 청산`,
    settleUpMemo: (direction, amount) => direction === 'lend' ? `청산 ${amount}` : `청산 요청 ${amount} `,
    recordSettleUpMemo: `최대 정착`,
    balanceByCurrency: `세부`,
  },

  settlementManagement: {
    bilateral: {
      error: {
        insufficient: nickname => `당신이 ${nickname} 에게 시도한 청산은 자금 부족으로 실패하였습니다`,
        generic: nickname => `${nickname} 에게 청산하는 과정에서 에러가 발생했습니다`
      }
    },
    eth: `이더리움으로 청산하기`,
    erc20: name => `Settle with ${name}`,
    paypal: `PayPal 청산하기`,
    nonPayment: `청산내역 기록하기`,
    select: `선택 결제 유형`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `홈 `,
    friends: `친구`,
    activity: `액티비티`,
  },

    notifications: {
    toggleNotifications: `알림 표시 전환`,
    enable: `켜다`,
    disable: `끄다`,
  },

  pendingTransactionsLanguage: {
    shell: `새로운 거래`,
    title: `미결`,
    memo: `메모:`,
    for: `FOR`,
    none: `계류중인 트랜잭션 내역이 없습니다`,
    confirmationQuestion: `해당 거래를 정말 진행하시겠습니까?`,
    pendingAnnouncement: `해당 거래는 제3자로부터 인증절차를 기다리고 있는 상태입니다.`,
    bilateral: `송금을 기다리는 중입니다`,
    confirm: `인증`,
    reject: `트랜잭션 거부`,
    rejectRequest: `거부`,
    cancel: `트랜잭션 취소`,
    direction: {
      lend: (nickname, amount) => `@${nickname} 은 ${amount} 을 당신에게 빚을 갚아야합니다`,
      borrow: (nickname, amount) => `당신은 @${nickname} 에게 ${amount} 빚을 갚아야합니다`
    }
  },

  pendingSettlementsLanguage: {
    shell: `상환 계류중`,
    title: `미결`,
    none: `계류중인 청산 내역이 없습니다`,
    confirm: `CONFIRM`,
    reject: `청산 거부`,
    cancel: `청산 취소`,
  },

  recentTransactionsLanguage: {
    title: `완료`,
    none: `완료된 트랜잭션 내역이 없습니다`,
    direction: {
      lend: (nickname, amount) => `@${nickname} 은 당신에게 ${amount} 을 단신에게 갚아야합니다`,
      borrow: (nickname, amount) => `당신은 @${nickname} 에게 ${amount} 을 갚아야합니다`
    },
    balance: `잔액 `,
    consolidatedBalance: `잔액`,
    friends: (friends) => `(from ${friends} 친구)`
  },

  tabs: {
    home: `    홈    `,
    friends: `   친구   `,
    activity: `액티비티`,
  },

  confirmation: {
    shell: `인증`,
    done: `완료`,
    create: {
      start: "기록은 보냈어요 ",
      end: ` 확인을 위해.`,
    },
    confirm: {
      start: "당신은 해당 기록을 ~에게로부터 확인했어요 ",
      end: `.`,
    },
    reject: {
      start: "우리는 ",
      end: " 해당 기록을 당신이 거부한것을 전달했습니다."
    },
    confirmFriend: {
      start: `이제 `,
      end: ` 와 친구!`,
    },
    rejectFriend: {
      start: `당신은`,
      end: `에서 친구 요청을 거절했다.`,
    },
    rejectOutboundFriendRequest: {
      start: `당신은 `,
      end: ` 하는 친구 요청을 취소.`,
    },
    ethSent: {
      start: "성공적으로 보냈습니다 ",
      end: " 이더리움과 당신의 거래는 "
    },
    erc20Sent: {
      start: "성공적으로 보냈습니다 ",
      end: " 당신의 거래는 "
    },
    requestPayPalPayee: {
      start: `우리는 `,
      end: `는 PayPal로 정착하고 싶다고 알려했습니다.`,
    },
    requestPayPalPayment: {
      start: `우리는 `,
      end: `는 PayPal로 지불하고 싶습니다 있음을 알려했습니다.`,
    },
    settledWithPayPal: {
      start: `우리는 `,
      end: `는 PayPal로 정착 한 것으로 알려했습니다.`,
    },
    kycSuccess: {
      start: `고맙습니다! 계정이 확인되고있다.

      `,
      end: `귀하의 추가 기능을 잠금 해제 할 때 통보를받을 것입니다.`
    },
    status: `거래 내역을 볼 수 있는 곳은 `,
    activity: ` 액티비티 탭.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `친구 요청`,
    message: `친구 요청`,
    request: F => `@${F}이 너와 친구가되고 싶어！`,
    outbound: F => `당신은@${F}에 친구 요청을 보내`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Blockmason의 개인 정보 보호 정책을 읽고 동의하려면 아래를 클릭하여 확인하십시오. Blockmason은 이메일 주소를 사용하여 Blockmason 및 LNDR에 대한 업데이트를 보낼 수 있습니다. 개인 정보 취급 방침에 대한 링크는 다음과 같습니다:`,
  },

  payPalLanguage: {
    connectPayPal: `페이팔 연결`,
    connectSuccess: `페이팔이 성공적으로 활성화.`,
    disconnectPayPal: `분리 페이팔`,
    disconnected: `페이팔 연결이 끊어.`,
    requestPayPalPayment: `요청 페이팔 지불`,
    sendWithPayPal: `페이팔로 보내기`,
    enablePayPal: `페이팔 사용`,
    requestPayPalPayee: `페이팔 요청`,
    enablePayPalForFriend: F => `PayPal을 사용하면 @${F} 에서 비용을 지불 할 수 있습니다.`,
    friendNotEnabled: F => `@${F} 에서 PayPal 결제를 사용하도록 설정하지 않았습니다.`,
    friendRequestedConnect: F => `@${F} 가 PayPal을 통해 지불하려고합니다.`,
    requestFriendConnect: F => `@${F} 에 PAYPAL 사용 요청`,
    feesNotification: `페이팔 수수료를 포함하지 않습니다`,
    feesInformationHeader: `페이팔 수수료 정보`,
    feesInformation: `1. 페이팔 계정은 은행 계좌에 연결해야합니다.
    
2. 은행의 통화와 다른 통화로 지불하는 것은 $ 0.35 수수료가 부과됩니다.

3. 국제 송금 수수료 :
    캐나다 / 유럽 미국 : $ 2.99
    다른 곳으로 미국 : $ 4.99

4. 이러한 비용은 포괄적 인 없습니다. 가장 최근에 업데이트 된 정보는 다음으로 이동하십시오 :

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `아프가니스탄`, code: 'AFG' },
    { name: `알바니아`, code: 'ALB' },
    { name: `알제리`, code: 'DZA' },
    { name: `안도라`, code: 'AND' },
    { name: `앙골라`, code: 'AGO' },
    { name: `앵 귈라`, code: 'AIA' },
    { name: `남극 대륙`, code: 'ATA' },
    { name: `앤티가 바부 다`, code: 'ATG' },
    { name: `아르헨티나`, code: 'ARG' },
    { name: `아르메니아`, code: 'ARM' },
    { name: `아루바`, code: 'ABW' },
    { name: `호주`, code: 'AUS' },
    { name: `오스트리아`, code: 'AUT' },
    { name: `아제르바이잔`, code: 'AZE' },
    { name: `바하마`, code: 'BHS' },
    { name: `바레인`, code: 'BHR' },
    { name: `방글라데시`, code: 'BGD' },
    { name: `바베이도스`, code: 'BRB' },
    { name: `벨라루스`, code: 'BLR' },
    { name: `벨기에`, code: 'BEL' },
    { name: `벨리즈`, code: 'BLZ' },
    { name: `베냉`, code: 'BEN' },
    { name: `버뮤다`, code: 'BMU' },
    { name: `부탄`, code: 'BTN' },
    { name: `볼리비아`, code: 'BOL' },
    { name: `보스니아 헤르체고비나`, code: 'BIH' },
    { name: `보츠와나`, code: 'BWA' },
    { name: `브라질`, code: 'BRA' },
    { name: `브루나이`, code: 'BRN' },
    { name: `불가리아`, code: 'BGR' },
    { name: `부키 나 파소`, code: 'BFA' },
    { name: `부룬디`, code: 'BDI' },
    { name: `카보 베르데`, code: 'CPV' },
    { name: `캄보디아`, code: 'KHM' },
    { name: `카메룬`, code: 'CMR' },
    { name: `캐나다`, code: 'CAN' },
    { name: `케이맨 제도`, code: 'CYM' },
    { name: `중앙 아프리카 공화국`, code: 'CAF' },
    { name: `차드`, code: 'TCD' },
    { name: `칠레`, code: 'CHL' },
    { name: `중국`, code: 'CHN' },
    { name: `콜롬비아`, code: 'COL' },
    { name: `코모로`, code: 'COM' },
    { name: `콩고`, code: 'COG' },
    { name: `콩고`, code: 'COD' },
    { name: `쿡 제도`, code: 'COK' },
    { name: `코스타리카`, code: 'CRI' },
    { name: `코트 디부 아르`, code: 'CIV' },
    { name: `크로아티아`, code: 'HRV' },
    { name: `쿠바`, code: 'CUB' },
    { name: `큐라`, code: 'CUW' },
    { name: `키프로스`, code: 'CYP' },
    { name: `체코`, code: 'CZE' },
    { name: `덴마크`, code: 'DNK' },
    { name: `지부티`, code: 'DJI' },
    { name: `도미니카`, code: 'DMA' },
    { name: `도미니카 공화국`, code: 'DOM' },
    { name: `에콰도르`, code: 'ECU' },
    { name: `이집트`, code: 'EGY' },
    { name: `엘살바도르`, code: 'SLV' },
    { name: `적도 기니`, code: 'GNQ' },
    { name: `에리트레아`, code: 'ERI' },
    { name: `에스토니아`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `에티오피아`, code: 'ETH' },
    { name: `피지`, code: 'FJI' },
    { name: `핀란드`, code: 'FIN' },
    { name: `프랑스`, code: 'FRA' },
    { name: `프랑스 령 기아나`, code: 'GUF' },
    { name: `프랑스 령 폴리네시아의`, code: 'PYF' },
    { name: `가봉`, code: 'GAB' },
    { name: `감비아`, code: 'GMB' },
    { name: `그루지야`, code: 'GEO' },
    { name: `독일`, code: 'DEU' },
    { name: `가나`, code: 'GHA' },
    { name: `지브롤터`, code: 'GIB' },
    { name: `그리스`, code: 'GRC' },
    { name: `그린 랜드`, code: 'GRL' },
    { name: `그레나다`, code: 'GRD' },
    { name: `과들루프`, code: 'GLP' },
    { name: `괌`, code: 'GUM' },
    { name: `과테말라`, code: 'GTM' },
    { name: `기니`, code: 'GIN' },
    { name: `기니 비사우`, code: 'GNB' },
    { name: `가이아나`, code: 'GUY' },
    { name: `아이티`, code: 'HTI' },
    { name: `바티칸 궁전`, code: 'VAT' },
    { name: `온두라스`, code: 'HND' },
    { name: `홍콩`, code: 'HKG' },
    { name: `헝가리`, code: 'HUN' },
    { name: `아이슬란드`, code: 'ISL' },
    { name: `인도`, code: 'IND' },
    { name: `인도네시아 공화국`, code: 'IDN' },
    { name: `이란`, code: 'IRN' },
    { name: `이라크`, code: 'IRQ' },
    { name: `아일랜드`, code: 'IRL' },
    { name: `아일 오브 맨`, code: 'IMN' },
    { name: `이스라엘`, code: 'ISR' },
    { name: `이탈리아`, code: 'ITA' },
    { name: `자메이카`, code: 'JAM' },
    { name: `일본`, code: 'JPN' },
    { name: `요르단`, code: 'JOR' },
    { name: `카자흐스탄`, code: 'KAZ' },
    { name: `케냐`, code: 'KEN' },
    { name: `키리바시`, code: 'KIR' },
    { name: `한국 (조선 민주주의 인민 공화국)`, code: 'PRK' },
    { name: `한국 (대한민국)`, code: 'KOR' },
    { name: `쿠웨이트`, code: 'KWT' },
    { name: `키르기스스탄`, code: 'KGZ' },
    { name: `라오스`, code: 'LAO' },
    { name: `라트비아`, code: 'LVA' },
    { name: `레바논`, code: 'LBN' },
    { name: `레소토`, code: 'LSO' },
    { name: `라이베리아`, code: 'LBR' },
    { name: `리비아`, code: 'LBY' },
    { name: `리히텐슈타인`, code: 'LIE' },
    { name: `리투아니아`, code: 'LTU' },
    { name: `룩셈부르크`, code: 'LUX' },
    { name: `마카오`, code: 'MAC' },
    { name: `마케도니아`, code: 'MKD' },
    { name: `마다가스카르`, code: 'MDG' },
    { name: `말라위`, code: 'MWI' },
    { name: `말레이시아`, code: 'MYS' },
    { name: `몰디브`, code: 'MDV' },
    { name: `말리`, code: 'MLI' },
    { name: `몰타`, code: 'MLT' },
    { name: `마샬 군도`, code: 'MHL' },
    { name: `마르티니크`, code: 'MTQ' },
    { name: `모리타니`, code: 'MRT' },
    { name: `모리셔스`, code: 'MUS' },
    { name: `멕시코`, code: 'MEX' },
    { name: `미크로네시아`, code: 'FSM' },
    { name: `몰르 더바`, code: 'MDA' },
    { name: `모나코`, code: 'MCO' },
    { name: `몽골리아`, code: 'MNG' },
    { name: `몬테네그로`, code: 'MNE' },
    { name: `몬트 세 라트`, code: 'MSR' },
    { name: `모로코`, code: 'MAR' },
    { name: `모잠비크`, code: 'MOZ' },
    { name: `미얀마`, code: 'MMR' },
    { name: `나미비아`, code: 'NAM' },
    { name: `나우루어`, code: 'NRU' },
    { name: `네팔`, code: 'NPL' },
    { name: `네덜란드`, code: 'NLD' },
    { name: `뉴 칼레도니아`, code: 'NCL' },
    { name: `뉴질랜드`, code: 'NZL' },
    { name: `니카라과`, code: 'NIC' },
    { name: `니제르`, code: 'NER' },
    { name: `나이지리아`, code: 'NGA' },
    { name: `니우에`, code: 'NIU' },
    { name: `북 마리아나 제도`, code: 'MNP' },
    { name: `노르웨이`, code: 'NOR' },
    { name: `오만`, code: 'OMN' },
    { name: `파키스탄`, code: 'PAK' },
    { name: `팔라우`, code: 'PLW' },
    { name: `팔레스타인`, code: 'PSE' },
    { name: `파나마`, code: 'PAN' },
    { name: `파푸아 뉴기니`, code: 'PNG' },
    { name: `파라과이`, code: 'PRY' },
    { name: `페루`, code: 'PER' },
    { name: `필리핀 제도`, code: 'PHL' },
    { name: `핏 케언`, code: 'PCN' },
    { name: `폴란드`, code: 'POL' },
    { name: `포르투갈`, code: 'PRT' },
    { name: `푸에르토 리코`, code: 'PRI' },
    { name: `카타르`, code: 'QAT' },
    { name: `재결합`, code: 'REU' },
    { name: `루마니아`, code: 'ROU' },
    { name: `사람 Russian Federation`, code: 'RUS' },
    { name: `르완다`, code: 'RWA' },
    { name: `생 바르 텔레 미`, code: 'BLM' },
    { name: `세인트 헬레나 어센션 트리스탄 다 쿠냐`, code: 'SHN' },
    { name: `세인트 키츠 네비스`, code: 'KNA' },
    { name: `세인트 루시아`, code: 'LCA' },
    { name: `세인트 마틴`, code: 'MAF' },
    { name: `생 피에르 미 클롱`, code: 'SPM' },
    { name: `세인트 빈센트 그레나딘`, code: 'VCT' },
    { name: `사모아`, code: 'WSM' },
    { name: `산 마리노`, code: 'SMR' },
    { name: `상투 메 프린시 페`, code: 'STP' },
    { name: `사우디 아라비아`, code: 'SAU' },
    { name: `세네갈`, code: 'SEN' },
    { name: `세르비아`, code: 'SRB' },
    { name: `세이셸`, code: 'SYC' },
    { name: `시에라 리온`, code: 'SLE' },
    { name: `싱가포르`, code: 'SGP' },
    { name: `세인트 마틴`, code: 'SXM' },
    { name: `슬로바키아`, code: 'SVK' },
    { name: `슬로베니아`, code: 'SVN' },
    { name: `솔로몬 제도`, code: 'SLB' },
    { name: `소말리아`, code: 'SOM' },
    { name: `남아프리카`, code: 'ZAF' },
    { name: `남 수단`, code: 'SSD' },
    { name: `스페인`, code: 'ESP' },
    { name: `스리랑카`, code: 'LKA' },
    { name: `수단`, code: 'SDN' },
    { name: `수리남`, code: 'SUR' },
    { name: `스웨덴`, code: 'SWE' },
    { name: `스위스`, code: 'CHE' },
    { name: `시리아 아랍 공화국`, code: 'SYR' },
    { name: `대만`, code: 'TWN' },
    { name: `타지키스탄`, code: 'TJK' },
    { name: `탄자니아`, code: 'TZA' },
    { name: `태국`, code: 'THA' },
    { name: `동 티모르`, code: 'TLS' },
    { name: `가다`, code: 'TGO' },
    { name: `토켈 라우`, code: 'TKL' },
    { name: `통가`, code: 'TON' },
    { name: `트리니다드 토바고`, code: 'TTO' },
    { name: `튀니지`, code: 'TUN' },
    { name: `터키`, code: 'TUR' },
    { name: `투르크 메니스탄`, code: 'TKM' },
    { name: `터크 스 케이 커스 제도`, code: 'TCA' },
    { name: `투발루`, code: 'TUV' },
    { name: `우간다`, code: 'UGA' },
    { name: `우크라이나`, code: 'UKR' },
    { name: `아랍 에미리트`, code: 'ARE' },
    { name: `연합 왕국`, code: 'GBR' },
    { name: `미국`, code: 'USA' },
    { name: `미국의 군도`, code: 'UMI' },
    { name: `우루과이`, code: 'URY' },
    { name: `우즈베키스탄`, code: 'UZB' },
    { name: `바누아투`, code: 'VUT' },
    { name: `베네수엘라`, code: 'VEN' },
    { name: `베트남`, code: 'VNM' },
    { name: `영국령 버진 아일랜드`, code: 'VGB' },
    { name: `미국령 버진 아일랜드`, code: 'VIR' },
    { name: `서부 사하라`, code: 'ESH' },
    { name: `예멘 아랍 공화국`, code: 'YEM' },
    { name: `잠비아`, code: 'ZMB' },
    { name: `짐바브웨`, code: 'ZWE' },
  ]
}
