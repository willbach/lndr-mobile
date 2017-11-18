// This file is over 50 lines of code and needs to be broken up
declare const Buffer

import Mnemonic from 'bitcore-mnemonic'
import ethUtil from 'ethereumjs-util'

import { bufferToHex, stringToBuffer } from './lib/buffer-utils'
import Client from './lib/client'
import CreditRecord from './lib/credit-record'
export { default as CreditRecord } from './lib/credit-record'

export default class CreditProtocol {
  client: Client

  constructor(baseUrl: string, fetch?: any) {
    this.client = new Client(baseUrl, fetch)
  }

  sign(message, privateKeyBuffer) {
    if (typeof message === 'string') {
      message = stringToBuffer(message)
    }

    const { r, s, v } = ethUtil.ecsign(
      ethUtil.hashPersonalMessage(message),
      privateKeyBuffer
    )

    return bufferToHex(
      Buffer.concat(
        [ r, s, Buffer.from([ v ]) ]
      )
    )
  }

  setNickname(addr: string, nick: string, privateKeyBuffer: any) {
    return this.client.post('/nick', {
      addr,
      nick,
      sig: this.sign(nick, privateKeyBuffer)
    })
  }

  getNickname(user: string) {
    return this.client.get(`/nick/${user}`)
  }

  searchUsers(nick: string) {
    return this.client.get(`/search_nick/${nick}`)
  }

  addFriend(user: string, addr: string/*, privateKeyBuffer: any*/) {
    return this.client.post(`/add_friends/${user}`, [ addr ])
    // {
    //   addr,
    //   sig: this.sign(addr, privateKeyBuffer)
    // }
  }

  removeFriend(user: string, addr: string/*, privateKeyBuffer: any*/) {
    return this.client.post(`/remove_friends/${user}`, [ addr ])
    // {
    //   addr,
    //   sig: this.sign(addr, privateKeyBuffer)
    // }
  }

  getFriends(user: string) {
    return this.client.get(`/friends/${user}`)
  }

  getPendingTransactions(user: string) {
    return this.client.get(`/pending?user=${user}`)
  }

  getNonce(address1, address2) {
    return this.client.get(`/nonce/${address1}/${address2}`)
  }

  getTransactions(user: string) {
    return this.client.get(`/transactions?value=${user}`)
  }

  pendingTransactions() {
    return this.client.get('/pending')
  }

  confirmPendingTransactionByHash(hash: string) {
    return this.client.post('/pending-fix-me-todo', hash)
  }

  rejectPendingTransactionByHash(hash: string, privateKeyBuffer: any) {
    return this.client.postExpectNotFound('/reject', {
      hash,
      rejectSig: this.sign(hash, privateKeyBuffer)
    })
  }

  async createCreditRecord(ucac, address1, address2, amount, memo) {
    const nonce = await this.getNonce(address1, address2)
    return new CreditRecord(ucac, address1, address2, amount, memo, nonce)
  }

  async submitCreditRecord(creditRecord, type, signature) {
    if (type !== 'lend' && type !== 'borrow') {
      throw new Error('Type is invalid')
    }

    const {
      creditorAddress: creditor,
      debtorAddress: debtor,
      amount,
      memo
    } = creditRecord

    return this.client.post(`/${type}`, {
      creditor,
      debtor,
      amount,
      memo,
      signature
    })
  }

  getRandomMnemonic() {
    return new Mnemonic()
  }

  getMnemonic(mnemonic: string) {
    return new Mnemonic(mnemonic)
  }
}
