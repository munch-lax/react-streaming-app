import react from 'react'
import Model from '../Model'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream,deleteStream } from '../../actions'

class StreamDelete extends react.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)

    }

    renderActions=()=>{
        const id=this.props.match.params.id;
        return(
            <div className='actions'>
                    <button  onClick={()=>this.props.deleteStream(id)} className='ui red button'>Delete</button>
                    <button className='ui button'>Cancel</button>
            </div>
        )
    }
render()
{
    return (
        <div>
            <Model title="Delete Stream" 
            content="Are you sure you want to delete this Stream ??"
            actions={this.renderActions}
            onDismiss={()=>history.push('/')}
            />
        </div>
    )
}

}

const mapstatetoprops=(state,ownprops)=>{
    return{stream:state.streams[ownprops.match.params.id]}


}


export default connect(mapstatetoprops,{fetchStream,deleteStream})(StreamDelete)