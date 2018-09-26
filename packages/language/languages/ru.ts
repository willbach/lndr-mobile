import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Не удалось связаться с сервером, повторите попытку позже.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Привет мир`,
  noConnection: `Нет соединения`,
  retry: `снова пробовать`,
  submit: `ОТПРАВИТЬ`,
  next: `следующий`,
  cancel: `Отмена`,
  back: `Возвращаться`,
  copy: `Скопировать в буфер обмена`,
  confirmAccount: `Подтвердить`,
  createAccount: `Регистрация`,
  recoverAccount: `Восстановление учетной записи`,
  removeAccount: `Удалить учетную запись`,
  updateAccount: `Обновить учетную запись`,
  loginAction: `Разблокировать`,
  enterPin: `Пожалуйста, введите свой ПИН-код`,
  changePin: `Изменение ПИН-кода`,
  enterCurrentPin: `ВВЕДИТЕ ТЕКУЩИЙ ПИН-КОД`,
  logoutAction: `ВЫЙТИ`,
  seeAllActivity: `Посмотреть всю активность`,
  copiedClipboard: `Скопировано в буфер обмену`,
  pleaseWait: `Пожалуйста, подождите`,
  addFriend: `Добавить в друзья`,
  addFriendConfirmationQuestion: `Вы уверены, что вы хотели бы добавить этот пользователь в качестве друга?`,
  removeFriend: `Удалить друга`,
  currentFriends: `Текущие Друзья`,
  removeFriendConfirmationQuestion: `Вы уверены, что хотите удалить этого пользователя в качестве друга?`,
  inviteFriends: `Пригласить друзей в Lndr`,
  tryLndr: `Попробуйте приложение Lndr здесь:`,
  friendInfo: `Более подробная информация об этой дружбе:`,
  noFriends: `Добавьте несколько друзей, чтобы начать!`,
  noMatches: `Не найдено ни одного совпадающего пользователя`,
  noBalances: `У вас нет записанных долгов`,
  addFriendButton: `Добавить в друзья`,
  alreadyFriendsButton: `Друзья`,
  friendShell: `Друг`,
  tip: `Совет:`,
  notice: `Внимание:`,
  welcome: `Добро пожаловать в LNDR`,
  noBalanceWarning: `Мы не смогли загрузить ваш баланс в это время, пожалуйста, повторите попытку позже.`,
  totalBalance: `Итоговый баланс:`,
  totalBalances: `Все Контрагенты:`,
  newTransaction: `Новая трансакция`,
  needsReview: `В ожидании утверждения`,
  owesMe: `Я обязан`,
  iOwe: `Я должен`,
  newPassword: `Новый пароль (минимум 8 символов)`,
  confirmPassword: `Подтвердите Пароль`,
  newPin: `Новый четырехзначный ПИН-код`,
  enterNewPin: `УСАНОВИТЕ НОВЫЙ ЧЕТЫРЕХЗНАЧНЫЙ ПИН-КОД`,
  confirmPin: `ПОЖАЛУЙСТА, ПОДВЕРДИТЕ СВОЙ ПИН-КОД`,
  newAccount: `Создать новый аккаунт`,
  loginAccount: `Разблокировать свою учетную запись`,
  recoverExistingAccount: `Восстановление существующей учетной записи`,
  recoverMnemonic: `Мнемоника (12 слов отображены \nпри создании вашей учетной записи)`,
  recoverMnemonicLengthError: `Мнемоника должна быть ровно 12 слов`,
  successTitle: `Успех`,
  errorTitle: `Ошибка`,
  showMnemonic: `Показать 12-словную мнемонику`,
  mnemonicExhortation: `Эта 12-словная фраза требуется для восстановления вашей учетной записи, пожалуйста, храните ее где-то в безопасности и в тайне`,
  addressExhortation: `Отправьте Ethereum на свой адрес, чтобы вы могли погасить долги на Lndr`,
  removeAccountTitle: `Вы уверены, что хотите удалить свою учетную запись с этого устройства?`,
  removeAccountExhortation: `Будте увереннами, что у вас есть доступ к вашем мнемонике, чтобы восстановить свою учетную запись позже, поскольку это постоянное удаление информации об учетной записи с этого устройства.`,
  myAccount: `Мой аккаунт`,
  setNickname: `Установить ник, чтобы ваши друзья могли вас найти`,
  setEmail: `Установите электронное письмо для получения информации о обновлениях Lndr`,
  nickname: `Псевдоним (в нижнем регистре и цифры)`,
  email: `Адрес электронной почты`,
  lndrVerified: {
    ok: `ОК`,
    title: `Установите более высокий лимит расчетов и вывод крипто сумму, заполнив знать ваши требования клиентов.`,
    statusTitle: `Текущее состояние вашей проверки является:`,
    tryAgain: `Мы не смогли подтвердить свою личность. Пожалуйста, повторите вашу информацию и убедитесь, что ваши фотографии являются разборчивыми.`,
    formMessage: `Пожалуйста, заполните все следующие поля`,
    button: `Разблокировка Дополнительные возможности`,
    prefix: `Прочитайте нашу `,
    linkTitle: `политику конфиденциальности `,
    postfix: `для того, как будет управляться ваши личные данные.`,
    upload: `Загрузить `,
    governmentId: `выпущенное правительством ID`,
    selfie: `Загрузить селфи с правительством удостоверения личности, выданного`,
    proofOfAddress: `Подтверждение адреса`,
    ifNotId: `(Если не ID)`,
    agree: `Я прочитал и согласен с `,
    agreeLink: `политикой конфиденциальности`,
    success: `ЗСК был представлен.`,
    idInfoHeader: `Примеры включают в себя ID:`,
    passport: `Заграничный пасспорт`,
    drivers: `Водительские права`,
    national: `Национальное удостоверение личности`,
    addressInfoHeader: `Примеры доказательства адреса:`,
    bank: `Выписка из банка`,
    utility: `Счет за коммунальные услуги`,
    other: `Другой документ`,
    chooseGovernmentPhoto: `Выберите Government ID фото`,
    chooseSelfiePhoto: `Выберите селфи фото`,
    chooseAddressPhoto: `Выберите Подтверждение адреса Фотографии`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Имя`,
      lastName: `Фамилия`,
      street: `Адрес улицы`,
      city: `город`,
      state: `Штат / провинция`,
      postalCode: `Почтовый индекс`,
      country: `Выберите страну`,
      phone: `Номер телефона`,
      dob: `Дата рождения (YYYY-MM-DD)`,
    },
    formErrors: {
      firstName: `Имя требуется`,
      lastName: `Фамилия требуется`,
      street: `Улица требуется`,
      city: `Город требуется`,
      state: `Штат / провинция требуется`,
      postalCode: `Почтовый индекс требуется`,
      country: `Страна требуется`,
      phone: `Номер телефона требуется`,
      dob: `Дата рождения требуется`,
      general: `Пожалуйста, убедитесь, что вы заполнили все поля и прикрепили правильные фотографии`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Ник должен быть не менее 3-х символов.`,
      compositionViolation: `Ник может содержать только цифры и прописные буквы.`,
      duplicationViolation: `Ник уже принято`,
    },
    email: {
      compositionViolation: `Формат электронной почты неверен`,
      duplicationViolation: `Адрес электронной почты уже принято`,
    },
    pin: {
      lengthViolation: `ПИН-код должен быть не менее 4-х символов.`,
      matchViolation: `ПИН-коды должны совпадать.`,
      failedHashComparison: `ПИН-код не действует, пожалуйста, попробуйте еще раз.`,
      updateSuccess: `Ваш ПИН-код был обновлен`,
      updateError: `Произошла ошибка при обновлении вашей ПИН-код`,
    },
    mnemonic: {
      lengthViolation: `Мнемоника должна иметь не менее 12 слов.`,
      unableToValidate: `Введенная мнемоника недействительна, повторите попытку.`,
    },
    setNickname: {
      success: `Ваш ник был сохранен.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Ваше сообщение было сохранено.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Вы должны ввести свой ПИН-код после`,
      bottom: `минут бездействия`,
      update: `Обновить`,
      error: `Нам не удалось обновить настройки учетной записи`,
      success: `Блокировка Тайм-аут Обновлена`,
    },
    addFriend: {
      success: X => `запрос на добавление в друзья отправлен @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Удалено из друзей: @${X} `,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    ethBalance: {
      display: Y => `Ваш ETH баланс ${String (Y) .slice (0,8)} `,
      getError: `Невозможно получить ETH баланс`,
      manage: `Управление ETH`,
    },
    sendEth: {
      error: {
        insufficient: `Вам не хватает ETH для этой трансакций`,
        generic: `При передаче произошла ошибка, повторите попытку позже`,
        address: `Пожалуйста, введите действительный адрес`,
        amount: `Пожалуйста, введите сумму, превышающую 0`,
        limitExceeded: A => `Вы можете отпровлять всево ${CUR(A)} ${TL(A)} в неделю, пожалуйста, выберите количество поменьше`
      },
      amount: `Сумма Отправить`,
      address: `Адрес назначения (без префикса «0x»)`,
      transfer: `Перевести ETH`,
      transferAll: `Перевести все`,
      balance: Y => `Ваш текущий баланс ETH ${typeof Y === 'string'? Y.slice (0,8): ''} `,
      ethAddress: `Ethereum Адрес`,
      txCost: (B, А) => `Текущая стоимость транзакции составляет ${CUR(А)} ${B}`,
      transferLowercase: `Перевидение ETH`,
      note: A => `Пожалуйста, обратите внимание: вы можете передать ${CUR(A)} ${TL(A)} в неделю из Lndr`,
      warning: (Z, A) => `У вас есть ${CUR(A)} ${Z} в ваши ${CUR(A)} ${TL(A)} limit`,
    },
    sendBcpt: {
      error: {
        insufficient: `Вам не хватает BCPT для этой трансакций`,
        generic: `При перевидение произошла ошибка, повторите попытку позже`,
      },
      transfer: `Перевести BCPT`,
      address: `Адрес назначения (без префикса «0x»)`,
      balance: Y => `Ваш текущий баланс BCPT ${typeof Y === 'string' ? Y.slice (0,8): ''} `,
      bcptAddress: `BCPT Адрес`,
    },
    panelHeaders: [
      `ETH (и BCPT) Адрес`,
      `ETH Баланс`,
      `BCPT Баланс`,
      `Удалить учетную запись`,
      `История транзакций ETH`,
      `Включить PayPal`,
      `Изменение первичной валюты`,
      `Подтвердите вашу личность`,
      `Измененить ПИН-код`,
      `Изменить имейл`,
      `Измененить блокировки Тайм-аут`,
      `Мнемоник`,
      `Уведомления`,
    ],
    viewEtherscan: `Просмотр Etherscan История`,
    profilePic: {
      change: `Изменить изображение профиля`,
      setError: `Произошла ошибка при загрузке изображения, повторите попытку позже`,
      getError: `Не удалось получить изображение вашего профиля`,
      setSuccess: `Фотография профиля обновлен`,
    },
    logoutSuccess: `Вы успешно вышли!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: {
    eth: `Ваш текущий Eth баланс:`,
    bcpt: `Ваш текущий BCPT баланс:`,
  },

  welcomeView: {
    by: `ПОСТРОЕН`,
    makeItEasy: `Lndr позволяет легко отслеживать простые долги`,
    weHelpFriends: `Мы помогаем друзьям жить, работать и играть вместе.`,
    len: `Len`,
    dot: `,`,
    der: `der`,
    shareDinner: `Поделиться на Ужин`,
    fillTank: `Заполните ваш бак`,
    travelTogether: `Путешествуйте вместе`,
    runEthereum: `Мы работаем с помощю ETH!`,
    firstLendingApp: `Первое приложение для мобильного кредитования, закрепленное через Blockchain.`,
    greatConcert: `Посмотрите Большой концерт`,
    youPlayWithFriends: `Вы играете с друзьями, \п мы будем держать вкладку ...`,
    start: `Начать`,
  },

  walkthrough: {
    skip: `пропускать`,
    continue: `продолжать`,
    step1: {
      easyToUse: `Lndr это самый простой способ разделить счета, обменивайтесь расходы и решить простые долги с друзьями и семьей, все сделано надежно на blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Чтобы начать работу с Lndr, вам нужно будет добавить друга.`,
      friendsScreen: `Посетите Приятели экран для поиска, добавить или пригласить своих друзей и семью, чтобы соединиться на Lndr.`,
    },
    step3: {
      title: `Запись транзакции`,
      easy: `Расщепление счет или добавления долга с другом легко в Lndr!`,
      selectFriend: `Выберите друг, валюту и сумму.`,
      addMemo: `Добавьте некоторые заметки в поле памятки и нажмите кнопку Отправить.`,
    },
    step4: {
      title: `Рассчитываться`,
      ready: `Готовы поселиться?`,
      payPal: `Когда пришло время рассчитаться с Lndr, \n- Вы можете выбрать PayPal:`,
      ether: `- cryptocurrencies как Эфир:`,
      cash: `- или просто записать наличный расчет:`,
      positiveBalance: `10,46`,
    },
    step5: {
      title: `Мульти валюта`,
      multiCurrency: `Lndr может отслеживать ваши сделки, даже если они происходят в разных валютах.`,
      exchangeRate: `Когда вы решили рассчитаться со своим другом, все операции будут преобразованы в вашу основную валюту, используя самые уточненный валютные курсы доступны.`,
      start: `Начни Lndr!`,
    }
  },

  debtManagement: {
    shell: `Новая трансакция`,
    add: `Добавить задолженности`,
    selectFriend: `Выбрать`,
    lend: `Новый кредит`,
    borrow: `Новый долг`,
    owesMe: `Обязан меня`,
    iOwe: `Я должен`,
    iLent: `Друг мне должен`,
    iBorrowed: `Я должен другу`,
    settleUpLower: `Рассчитываться`,
    amountToSettle: `Сумма для поселения`,
    total: `Вся Сумма`,
    record: `записать`,
    records: `учет`,
    chooseCurrency: `Выберите валюту`,
    
    createError: {
      amountTooLow: `Сумма должна быть больше, чем $ 0`,
      amountTooHigh: `Сумма должна быть меньше, чем $ 1000000000`,
      selfAsFriend: `Вы не можете создать долг с собой, выберите другой друг`,
      pending: `Пожалуйста, решите незавершенные транзакции с этим пользователем перед созданием другого`,
      insufficientEth: E => `Вам нужно по крайней мере, ${E} ETH чтобы обосноваться, перейдите в раздел Настройки, чтобы увидеть вашу balance`,
    },
    fields: {
      currency: `валюту`,
      amount: `Количество`,
      settlementAmount: `Расчетная сумма`,
      selectFriend: `Друг`,
      memo: `Напоминание`,
      direction: `Выберите правильное утверждение`,
    },
    memo: {
      example: `Напишите памятки здесь`,
    },
    direction: {
      lend: X => `${X} мне должен`,
      borrow: X => `Я должен ${X}`,
      initiatedLend: X => `${X} говорит, что он/она мне должен(на)`,
      initiatedBorrow: X => `${X} говорит, что вы должны`,
      pendingLend: X => `@${X} должен you`,
      pendingBorrow: X => `Вы должны @${X} `,
      pendingLendSettlement: S => `@${S.debtorNickname} запрашивает расчет в ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} хочет расчетатья с вами в ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Вы запросили рассчитаться с @${S.debtorNickname} в ${S.settlementCurrency} `,
      pendingBorrowSettlementMe: S => `Вы просили чтобы @${S.creditorNickname} посилились в ${S.settlementCurrency} `,
    },
    pending: {
      success: F => `В ожидании задолженности представлен @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(Заявлен)`,
    confirmation: {
      transaction: CP => `Транзакция с ${CP} была успешно подтверждена`,
      settlement: CP => `Расчеты с ${CP} были успешно подтверждены`,
      error: `Невозможно подтвердить транзакцию в это время, пожалуйста, повторите попытку позже`,
    },
    rejection: {
      success: `Транзакция была отклонена`,
      error: `Невозможно отклонить транзакцию в это время, пожалуйста, повторите попытку позже`,
    },
    balances: {
      error: `Невозможно загрузить балансы в это время, пожалуйста, повторите попытку позже`,
    },
    for: M => `для ${M}`,
    settleUp: `Рассчитываться`,
    settleTotal: `Расчет баланса`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Расселение на': 'Запрос довольствоваться'} ${A} `,
    recordSettleUpMemo: `Рассчитываться`,
    balanceByCurrency: `Детали`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Ваше поселение с ${X} не удалось из-за недостаточной фонды`,
        generic: X => `Ошибка произашла при обработке вашего поселения с ${X} `,
      }
    },
    eth: `Рассчитываться с помощью ETH`,
    paypal: `Рассчитываться с помощью PayPal`,
    nonPayment: `Записать расчет`,
    select: `Выбор типа расчетов`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Главная`,
    friends: `Друзья`,
    activity: `Мероприятия`,
  },

  notifications: {
    toggleNotifications: `Переключить Уведомления`,
    enable: `Включить`,
    disable: `Выключить`,
  },

  pendingTransactionsLanguage: {
    shell: `Ожидающая транзакция`,
    title: `В ожидании`,
    memo: `Напоминание:`,
    for: `Для`,
    none: `У вас нет ожидающих транзакций`,
    confirmationQuestion: `Вы уверены, что хотите подтвердить эту транзакцию?`,
    pendingAnnouncement: `Эта сделка ждет подтверждений другой стороны.`,
    bilateral: `Ожидание передачи ETH для завершения`,
    confirm: `Подтвердить`,
    reject: `Отклонить Транзакция`,
    rejectRequest: `Отклонять`,
    cancel: `Отменить Транзакцию`,
    direction: {
      lend: (X, Z) => `@${X} должен мне ${Z}`,
      borrow: (X, Z) => `Вы должны @${X} ${Z}`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `До урегулирования`,
    title: `в ожидании`,
    none: `У вас нет отложенных расчетов`,
    confirm: `Подтвердить`,
    reject: `Отклонить Урегулирование`,
    cancel: `Отменить Урегулирование`,
  },

  recentTransactionsLanguage: {
    title: `Завершенно`,
    none: `У вас нет завершенных транзакций`,
    direction: {
      lend: (X, Z) => `@${X} должен мне${Z}`,
      borrow: (X, Z) => `Вы должны @${X} ${Z}`
    },
    balance: `Баланс`,
    consolidatedBalance: `Баланс`,
    friends: FS => `(от ${FS} ${FS === 1 ? 'друг' : 'Друзья'})`,
  },

  tabs: {
    home: `Главная `,
    friends: `Друзья`,
    activity: `Мероприятия`,
  },

  confirmation: {
    shell: `Подтверждение`,
    done: `Готово`,
    create: {
      start: `Мы отправили запись к `,
      end: `у для подтверждения.`,
    },
    confirm: {
      start: `Вы подтвердили эту запись от `,
      end: `у.`,
    },
    reject: {
      start: `Мы позволили `,
      end: ` знать, что вы отвергли эту запись.`,
    },
    confirmFriend: {
      start: `Вы теперь друзья с `,
      end: `ом!`,
    },
    rejectFriend: {
      start: `Вы отклонили запрос друга от `,
      end: `а.`,
    },
    rejectOutboundFriendRequest: {
      start: `Вы отменили запрос друга в `,
      end: `.`,
    },
    ethSent: {
      start: `Вы успешно отправили `,
      end: ` ETH, а хеш транзакции `,
    },
    bcptSent: {
      start: `Вы успешно отправили `,
      end: ` BCPT, а хеш транзакции `,
    },
    requestPayPalPayee: {
      start: `Мы позволили `,
      end: ` знать, что вы хотели бы, чтобы рассчитаться с PayPal.`,
    },
    requestPayPalPayment: {
      start: `Мы позволили `,
      end: ` знать, что вы хотите быть оплачены с PayPal.`,
    },
    settledWithPayPal: {
      start: `Мы позволили `,
      end: ` знать, что вы поселились с PayPal.`,
    },
    kycSuccess: {
      start: `Спасибо! Ваша учетная запись проверяется.  
      
      `,
      end: `Вы будете уведомлены, когда ваши дополнительные функции разблокированы.` 
    },
    status: `Статус этой транзакции можно увидеть на вкладке `,
    activity: `«Активность».`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Запрос в друзья`,
    message: `Запросы в друзья`,
    request: F => `@${F} хочет с вами дружить!`,
    outbound: F => `Вы послали запрос друга на @${F} `,
  },

  privacyPolicy: {
    link: `lndr.io/terms/`,
    message: `Нажав ниже вы подтверждаете, что вы прочитали и согласны с политикой конфиденциальности Blockmason в. Blockmason может использовать ваш адрес электронной почты для отправки обновлений о Blockmason и LNDR. Вот ссылка на политику конфиденциальности:`
  },

  payPalLanguage: {
    connectPayPal: `Подключение PayPal`,
    connectSuccess: `успешно активировали PayPal.`,
    disconnectPayPal: `Отключить PayPal`,
    disconnected: `PayPal отключен.`,
    requestPayPalPayment: `Запрос PayPal оплаты`,
    sendWithPayPal: `Отправить С PayPal`,
    enablePayPal: `Включить PayPal`,
    requestPayPalPayee: `запрос PayPal`,
    enablePayPalForFriend: F => `Включение PayPal позволяет @${F} платить you.`,
    friendNotEnabled: F => `@${F} не включен PayPal платежи.`,
    friendRequestedConnect: F => `@${F} хочет платить вам через PayPal`,
    requestFriendConnect: F => `Вы просили @${F}, чтобы включить PayPal`,
    feesNotification: `Не включает в себя сборы PayPal`,
    feesInformationHeader: `PayPal платежи Информация`,
    feesInformation: `1. Ваша учетная запись PayPal должна быть привязана к банковскому счету.
    
2. Оплата в валюте, отличной от валюты Вашего банка взимается комиссия в размере $ 0.35.

3. Международные таксы:
    США в Канаде / Европе: $ 2,99
    США в другом месте: $ 4,99

4. Эти сборы не являются исчерпывающими. Для самой последней информации, пожалуйста, перейдите по ссылке:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Афганистан`, code: 'AFG' },
    { name: `Албания`, code: 'ALB' },
    { name: `Алжир`, code: 'DZA' },
    { name: `американское Самоа`, code: 'ASM' },
    { name: `андорра`, code: 'AND' },
    { name: `Ангола`, code: 'AGO' },
    { name: `Ангилья`, code: 'AIA' },
    { name: `Антарктида`, code: 'ATA' },
    { name: `Антигуа и Барбуда`, code: 'ATG' },
    { name: `Аргентина`, code: 'ARG' },
    { name: `Армения`, code: 'ARM' },
    { name: `Аруба`, code: 'ABW' },
    { name: `Австралия`, code: 'AUS' },
    { name: `Австрия`, code: 'AUT' },
    { name: `Азербайджан`, code: 'AZE' },
    { name: `Багамские о-ва`, code: 'BHS' },
    { name: `Бахрейн`, code: 'BHR' },
    { name: `Бангладеш`, code: 'BGD' },
    { name: `Барбадос`, code: 'BRB' },
    { name: `Беларусь`, code: 'BLR' },
    { name: `Бельгия`, code: 'BEL' },
    { name: `Белиз`, code: 'BLZ' },
    { name: `Бенин`, code: 'BEN' },
    { name: `Бермудские острова`, code: 'BMU' },
    { name: `Бутан`, code: 'BTN' },
    { name: `Боливия`, code: 'BOL' },
    { name: `Босния и Герцеговина`, code: 'BIH' },
    { name: `Ботсвана`, code: 'BWA' },
    { name: `Бразилия`, code: 'BRA' },
    { name: `Бруней`, code: 'BRN' },
    { name: `Болгария`, code: 'BGR' },
    { name: `Буркина-Фасо`, code: 'BFA' },
    { name: `Бурунди`, code: 'BDI' },
    { name: `Кабо-Верде`, code: 'CPV' },
    { name: `Камбоджа`, code: 'KHM' },
    { name: `Камерун`, code: 'CMR' },
    { name: `Канада`, code: 'CAN' },
    { name: `Каймановы острова`, code: 'CYM' },
    { name: `Центрально-Африканская Республика`, code: 'CAF' },
    { name: `Чад`, code: 'TCD' },
    { name: `Чили`, code: 'CHL' },
    { name: `Китай`, code: 'CHN' },
    { name: `Колумбия`, code: 'COL' },
    { name: `Коморские острова`, code: 'COM' },
    { name: `Конго`, code: 'COG' },
    { name: `Конго`, code: 'COD' },
    { name: `Острова Кука`, code: 'COK' },
    { name: `Коста-Рика`, code: 'CRI' },
    { name: `Берег Слоновой Кости`, code: 'CIV' },
    { name: `Хорватия`, code: 'HRV' },
    { name: `Куба`, code: 'CUB' },
    { name: `Кюрасао`, code: 'CUW' },
    { name: `Кипр`, code: 'CYP' },
    { name: `Чехия`, code: 'CZE' },
    { name: `Дания`, code: 'DNK' },
    { name: `Джибути`, code: 'DJI' },
    { name: `Доминика`, code: 'DMA' },
    { name: `Доминиканская Республика`, code: 'DOM' },
    { name: `Эквадор`, code: 'ECU' },
    { name: `Египет`, code: 'EGY' },
    { name: `Сальвадор`, code: 'SLV' },
    { name: `Экваториальная Гвинея`, code: 'GNQ' },
    { name: `Эритрея`, code: 'ERI' },
    { name: `Эстония`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Эфиопия`, code: 'ETH' },
    { name: `Фиджи`, code: 'FJI' },
    { name: `Финляндия`, code: 'FIN' },
    { name: `Франция`, code: 'FRA' },
    { name: `Французская Гвиана`, code: 'GUF' },
    { name: `Французская Полинезия`, code: 'PYF' },
    { name: `Габон`, code: 'GAB' },
    { name: `Гамбия`, code: 'GMB' },
    { name: `Грузия`, code: 'GEO' },
    { name: `Германия`, code: 'DEU' },
    { name: `Гана`, code: 'GHA' },
    { name: `Гибралтар`, code: 'GIB' },
    { name: `Греция`, code: 'GRC' },
    { name: `Гренландия`, code: 'GRL' },
    { name: `Гренада`, code: 'GRD' },
    { name: `Гваделупа`, code: 'GLP' },
    { name: `Гуам`, code: 'GUM' },
    { name: `Гватемала`, code: 'GTM' },
    { name: `Гвинея`, code: 'GIN' },
    { name: `Гвинея-Бисау`, code: 'GNB' },
    { name: `Гайана`, code: 'GUY' },
    { name: `Гаити`, code: 'HTI' },
    { name: `Ватикан`, code: 'VAT' },
    { name: `Гондурас`, code: 'HND' },
    { name: `Гонконг`, code: 'HKG' },
    { name: `Венгрия`, code: 'HUN' },
    { name: `Исландия`, code: 'ISL' },
    { name: `Индия`, code: 'IND' },
    { name: `Индонезия`, code: 'IDN' },
    { name: `Иран`, code: 'IRN' },
    { name: `Ирак`, code: 'IRQ' },
    { name: `Ирландия`, code: 'IRL' },
    { name: `Остров Мэн`, code: 'IMN' },
    { name: `Израиль`, code: 'ISR' },
    { name: `Италия`, code: 'ITA' },
    { name: `Ямайка`, code: 'JAM' },
    { name: `Япония`, code: 'JPN' },
    { name: `Иордания`, code: 'JOR' },
    { name: `Казахстан`, code: 'KAZ' },
    { name: `Кения`, code: 'KEN' },
    { name: `Кирибати`, code: 'KIR' },
    { name: `Корея (КНДР)`, code: 'PRK' },
    { name: `Корея (Республика Корея)`, code: 'KOR' },
    { name: `Кувейт`, code: 'KWT' },
    { name: `Киргизия`, code: 'KGZ' },
    { name: `Лаос`, code: 'LAO' },
    { name: `Латвия`, code: 'LVA' },
    { name: `Ливан`, code: 'LBN' },
    { name: `Лесото`, code: 'LSO' },
    { name: `Либерия`, code: 'LBR' },
    { name: `Ливия`, code: 'LBY' },
    { name: `Лихтенштейн`, code: 'LIE' },
    { name: `Литва`, code: 'LTU' },
    { name: `Люксембург`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Македония`, code: 'MKD' },
    { name: `Мадагаскар`, code: 'MDG' },
    { name: `Малави`, code: 'MWI' },
    { name: `Малайзия`, code: 'MYS' },
    { name: `Мальдивы`, code: 'MDV' },
    { name: `Мали`, code: 'MLI' },
    { name: `Мальта`, code: 'MLT' },
    { name: `Маршалловы острова`, code: 'MHL' },
    { name: `Мартиника`, code: 'MTQ' },
    { name: `Мавритания`, code: 'MRT' },
    { name: `Маврикий`, code: 'MUS' },
    { name: `Мексика`, code: 'MEX' },
    { name: `Микронезия`, code: 'FSM' },
    { name: `Молдова`, code: 'MDA' },
    { name: `Монако`, code: 'MCO' },
    { name: `Монголия`, code: 'MNG' },
    { name: `Черногория`, code: 'MNE' },
    { name: `Монсеррат`, code: 'MSR' },
    { name: `Марокко`, code: 'MAR' },
    { name: `Мозамбик`, code: 'MOZ' },
    { name: `Мьянма`, code: 'MMR' },
    { name: `Намибия`, code: 'NAM' },
    { name: `Науру`, code: 'NRU' },
    { name: `Непал`, code: 'NPL' },
    { name: `Нидерланды`, code: 'NLD' },
    { name: `Новая Каледония`, code: 'NCL' },
    { name: `Новая Зеландия`, code: 'NZL' },
    { name: `Никарагуа`, code: 'NIC' },
    { name: `Нигер`, code: 'NER' },
    { name: `Нигерия`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Северные Марианские острова`, code: 'MNP' },
    { name: `Норвегия`, code: 'NOR' },
    { name: `Оман`, code: 'OMN' },
    { name: `Пакистан`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Палестина`, code: 'PSE' },
    { name: `Панама`, code: 'PAN' },
    { name: `Папуа - Новая Гвинея`, code: 'PNG' },
    { name: `Парагвай`, code: 'PRY' },
    { name: `Перу`, code: 'PER' },
    { name: `Филиппины`, code: 'PHL' },
    { name: `Питкэрн`, code: 'PCN' },
    { name: `Польша`, code: 'POL' },
    { name: `Португалия`, code: 'PRT' },
    { name: `Пуэрто-Рико`, code: 'PRI' },
    { name: `Катар`, code: 'QAT' },
    { name: `Реюньон`, code: 'REU' },
    { name: `Румыния`, code: 'ROU' },
    { name: `Российская Федерация`, code: 'RUS' },
    { name: `Руанда`, code: 'RWA' },
    { name: `Сен-Бартельми`, code: 'BLM' },
    { name: `Святой Елены, Вознесения и Тристан-да-Кунья`, code: 'SHN' },
    { name: `Сент-Китс и Невис`, code: 'KNA' },
    { name: `Санкт-Люсия`, code: 'LCA' },
    { name: `Saint Martin`, code: 'MAF' },
    { name: `Сен-Пьер и Микелон`, code: 'SPM' },
    { name: `Святой Винсент и Гренадины`, code: 'VCT' },
    { name: `Самоа`, code: 'WSM' },
    { name: `Сан - Марино`, code: 'SMR' },
    { name: `Сан-Томе и Принсипи`, code: 'STP' },
    { name: `Саудовская Аравия`, code: 'SAU' },
    { name: `Сенегал`, code: 'SEN' },
    { name: `Сербия`, code: 'SRB' },
    { name: `Сейшельские острова`, code: 'SYC' },
    { name: `Сьерра-Леоне`, code: 'SLE' },
    { name: `Сингапур`, code: 'SGP' },
    { name: `Синт-Маартен`, code: 'SXM' },
    { name: `Словакия`, code: 'SVK' },
    { name: `Словения`, code: 'SVN' },
    { name: `Соломоновы острова`, code: 'SLB' },
    { name: `Сомали`, code: 'SOM' },
    { name: `Южная Африка`, code: 'ZAF' },
    { name: `южный Судан`, code: 'SSD' },
    { name: `Испания`, code: 'ESP' },
    { name: `Шри Ланка`, code: 'LKA' },
    { name: `Судан`, code: 'SDN' },
    { name: `Суринам`, code: 'SUR' },
    { name: `Швеция`, code: 'SWE' },
    { name: `Швейцария`, code: 'CHE' },
    { name: `Сирийская Арабская Республика`, code: 'SYR' },
    { name: `Тайвань`, code: 'TWN' },
    { name: `Таджикистан`, code: 'TJK' },
    { name: `Танзания`, code: 'TZA' },
    { name: `Таиланд`, code: 'THA' },
    { name: `Восточный Тимор`, code: 'TLS' },
    { name: `Идти`, code: 'TGO' },
    { name: `Токелау`, code: 'TKL' },
    { name: `Тонга`, code: 'TON' },
    { name: `Тринидад и Тобаго`, code: 'TTO' },
    { name: `Тунис`, code: 'TUN' },
    { name: `Турция`, code: 'TUR' },
    { name: `Туркменистан`, code: 'TKM' },
    { name: `Теркс и Кайкос`, code: 'TCA' },
    { name: `Тувалу`, code: 'TUV' },
    { name: `Уганда`, code: 'UGA' },
    { name: `Украина`, code: 'UKR' },
    { name: `Объединенные Арабские Эмираты`, code: 'ARE' },
    { name: `Великобритания`, code: 'GBR' },
    { name: `Соединенные Штаты Америки`, code: 'USA' },
    { name: `США Внешние малые острова`, code: 'UMI' },
    { name: `Уругвай`, code: 'URY' },
    { name: `Узбекистан`, code: 'UZB' },
    { name: `Вануату`, code: 'VUT' },
    { name: `Венесуэла`, code: 'VEN' },
    { name: `Вьетнам`, code: 'VNM' },
    { name: `Британские Виргинские острова`, code: 'VGB' },
    { name: `Американские Виргинские острова`, code: 'VIR' },
    { name: `Западная Сахара`, code: 'ESH' },
    { name: `Йемен`, code: 'YEM' },
    { name: `Замбия`, code: 'ZMB' },
    { name: `Зимбабве`, code: 'ZWE' },
  ]
}
