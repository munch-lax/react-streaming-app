import react from 'react'
import {fetchStream} from '../../actions'
import { connect} from 'react-redux'

class StreamShow extends react.Component{


    componentDidMount(props){
        this.props.fetchStream(this.props.match.params.id)
    }
    render(){
        if(!this.props.stream){
            return <h1>Loading....</h1>
        }
        return (
            <div className='ui tiny blue segment' style={{position:'relative',top:470,left:300,width:700}}>
                <h3>{this.props.stream.Title}</h3>
                <p className='ui content '>{ this.props.stream.description}</p>
            </div>
        )
    }

}

const mapstatetoprops=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
}


export default connect(mapstatetoprops,{fetchStream})(StreamShow)