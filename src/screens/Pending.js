import React, { Component } from 'react' // eslint-disable-line no-unused-vars;
import { View } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PendingList from '../components/listviews/pending/PendingListview'
import PendingTitleCounter from '../components/navigation/pendingTitle/PendingTitleCounter'
import styles from './styles'

// import {FRIEND_PENDING_MOCK_DATA} from '../test/mock'

export class Pending extends Component {
  static navigationOptions = {
    tabBarLabel: () =>
    <PendingTitleCounter/>
  }

  constructor (props) {
    super(props)

    this.state = {
      total: '0',
      totalColor: 'green'
    }
  }

  // data={this.props.state.pending}
  render () {
    return (
      <View style={styles.container}>
        <PendingList
          data={this.props.state.pending} />
      </View>
    )
  }
}

export const mapStateToProps = ({ data }) => ({ state: data })

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({}, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Pending)
