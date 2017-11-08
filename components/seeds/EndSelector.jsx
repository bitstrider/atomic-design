
import React from "react"
import {connect} from 'react-redux'
import {grow} from 'react-seed'

import EndSelector from 'pages/EndSelector'
import LoadingIndicator from 'pages/LoadingIndicator'
//may be a good place to connect to store
@connect(state, props=>{
  line: selectLine(state, props.lineId)
})
@grow(props => {
  if(!line) {
    props.dispatch(fetchLine(props.lineId))
  }
})
export default props => {
  const {line, onSelected:_onSelected} = props;

  //super hacky way to compose, perhaps saga is the preferred solution?
  const onSelected = (end) => {
    _onSelected(end)
    props.dispatch(endSelected(end))
  }

  if(!line) {
    return (<LoadingIndicator tagline="loading lines..."/>)
  }else{
    return (<EndSelector line={line} ends={line.ends} onSelected={} />)
  }
}
