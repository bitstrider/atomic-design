import React from "react"
import Basic from "layouts/Basic"
import LineSearch from "groups/LineSelected"
import LineList from "groups/EndsList"

export default props => {
  const {line, ends, onSelect} = props
  return (
    <Basic
      header={<LineSelected line={line} />}
      body={<EndsList ends={ends} onSelect={onSelect} />}
    />
  )
}
