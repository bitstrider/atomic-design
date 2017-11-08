import React from "react"
import EndSelector from 'seeds/EndSelector'

@withRouter
export default props => {
  const {matches: {params: {lineId}}} = props;
  const onSelected = (end) => {history.push('/lines...')}
  return (<EndSelector lineId={lineId} onSelected={onSelected} />) //water this seed with the lineId
}
