import React from "react"
import Basic from "layouts/Basic"
import LineSearch from "groups/EndSelected"
import LineList from "groups/StopSelector"

export default props => {
  const {line, end, stops, onSelected} = props
  return (
    <Basic
      header={<EndSelected line={line} end={end} />}
      body={<StopList stops={stops} onSelected={onSelected} />}
    />
  )
}
