import react from 'react'
import { connect } from 'react-redux'
import StreamForm from './StreamForm'
import { createStream } from '../../actions/index'

class StreamCreate extends react.Component{





onSubmit=(formvalues)=>{
    this.props.createStream(formvalues)
    
}

render(){
    return (
        <div>
            
        <h3 style={{position:'relative', top:38,left:38}}>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
        </div>
    )
}
}

export default connect(null,{createStream})(StreamCreate)