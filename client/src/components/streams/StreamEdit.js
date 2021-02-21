import react from 'react'
import {connect} from 'react-redux'
import { fetchStream , editStream} from '../../actions';
import StreamForm from './StreamForm'
import _ from 'lodash'


class StreamEdit extends react.Component{


componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
}

onsubmit=(formvalues)=>{
    
    this.props.editStream(this.props.match.params.id,formvalues)
    
};

render(){
    
    
    return (
        <div>
            <h3 style={{position:'relative', top:38,left:38}}>Edit Stream</h3>
            <StreamForm initialValues={this.props.stream} onSubmit={this.onsubmit}/>
        </div>
    )
    }
}


const mapstatetoprops=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]};
}

export default connect(mapstatetoprops,{fetchStream,editStream})(StreamEdit)