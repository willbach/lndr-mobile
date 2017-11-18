import React, { Component } from 'react'

import { RefreshControl, TouchableHighlight, ScrollView, View, Text } from 'react-native'

import { lightGray, dark } from 'theme/include/colors'

import style from 'theme/tabs'

interface TabProps {
  reference: string
  text: string
  onRefresh?: () => void
}

interface TabState {
  refreshing: boolean
}

export class Tab extends Component<TabProps, TabState> {
  constructor() {
    super()
    this.state = { refreshing: false }
  }

  async refresh() {
    const { onRefresh } = this.props
    if (!onRefresh) {
      return
    }
    this.setState({ refreshing: true })
    await onRefresh()
    this.setState({ refreshing: false })
  }

  render() {
    const { children, onRefresh } = this.props
    const { refreshing } = this.state

    const refreshControl = onRefresh ? (
      <RefreshControl refreshing={refreshing} onRefresh={() => this.refresh()} />
    ) : undefined

    return <ScrollView style={style.content} refreshControl={refreshControl}>
      {children}
    </ScrollView>
  }
}

const getTextStyle = (alternate?: boolean, active?: boolean) => {
  if (alternate) {
    return [ style.text, active ? style.textActiveAlternate : style.textAlternate ]
  }
  return [ style.text, active ? style.textActive : style.text ]
}

const getTabStyle = (alternate?: boolean, active?: boolean) => {
  if (alternate) {
    return [ style.tab, active ? style.tabActiveAlternate : style.tabAlternate ]
  }
  return [ style.tab, active ? style.tabActive : style.tab ]
}

interface Props {
  alternate?: boolean
  tabContainerStyle?: any
}

interface State {
  activeReference?: string
}

const getTabContainerStyle = (alternate?: boolean, tabContainerStyle?: any) => {
  const styles: any[] = [style.tabsContainer]

  if (alternate) {
    styles.push(style.tabsContainerAlternate)
  }

  if (tabContainerStyle) {
    styles.push(tabContainerStyle)
  }

  return styles
}

export default class Tabs extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      activeReference: undefined
    }
  }

  async switchTo(activeReference: string) {
    return new Promise(resolve => {
      this.setState({ activeReference }, resolve)
    })
  }

  render() {
    const { children: tabs, tabContainerStyle, alternate } = this.props
    let { activeReference } = this.state

    const tabList = (tabs as any[]).map(tab => {
      const { reference } = tab.props

      if (typeof reference !== 'string') {
        throw new Error('Property "reference" must be a string when constructing <Tab />')
      }

      if (!activeReference) {
        activeReference = reference
      }

      const tabStyle = getTabStyle(alternate, reference === activeReference)
      const textStyle = getTextStyle(alternate, reference === activeReference)

      return (
        <TouchableHighlight
          style={style.tabContainer}
          underlayColor={alternate ? lightGray : dark}
          activeOpacity={0.5}
          key={reference}
          onPress={() => this.switchTo(reference)}
        >
          <View style={tabStyle}>
            <Text style={textStyle}>{tab.props.text}</Text>
          </View>
        </TouchableHighlight>
      )
    })

    const activeTab = (tabs as any[])
      .filter(tab => tab.props.reference === activeReference)
      .pop()

    return (
      <View style={style.topView}>
        <View style={getTabContainerStyle(alternate, tabContainerStyle)}>{tabList}</View>
        {activeTab}
      </View>
    )
  }
}