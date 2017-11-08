import Spinner from 'atoms/Spinner'
import MicroText from 'atoms/MicroText'
import Centered from 'layouts/Centered'

export default (props) => {
return (
    <Centered>
      <Gif src="/static/svg/loading"/>
      <MicroText tagline={props.content}/>
    </Centered>
  )
}
