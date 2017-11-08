import React from "react"
import {Grid, Row} from "react-bootstrap"
import styled from "styled-components"
const FunctionalStyle = styled.div`

`

export default props => {
  const {header, body} = props
  return (
    <FunctionalStyle>
      <Grid>
        <Col xs={12}>{header}</Col>
        <Col xs={12}>{body}</Col>
      </Grid>
    </FunctionalStyle>
  )
}
