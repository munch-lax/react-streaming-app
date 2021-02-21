import react from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'
import streamreducer from '../../reducers/streamreducer';
import { Link } from 'react-router-dom'
import history from '../../history';

class StreamList extends react.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderadminbutton(stream){
        if(stream.userid=== this.props.currentUserId){
            return (
                <div className='right floated'>
                    <Link to={`/edit/${stream.id}`} className="ui green button">Edit</Link>
                    <Link to={`/delete/${stream.id}`} className="ui medium red button">Delete</Link>
                
                </div>
            )
        }

    }

    

    renderList(){
       return(this.props.streams.map(stream=>{
        return(
        <div className='item' key={stream.id}>
            
            <div  style={{height:60,marginTop:10}}>
            {this.renderadminbutton(stream)}
                <i className="middle aligned play icon"/>
               <Link to={`/show/${stream.id}`}  style={{position:'relative',top:0,left:10}}>{stream.Title}</Link>
                <p style={{position:'relative',top:10}}>{stream.description}</p>
                
            </div>
            
        </div>

        )}))}
    render()
    {
        
       return (<div className='ui segment'>
           <h2>Streams</h2>
           <div className="ui celled list">{this.renderList()}</div>
       </div>)
    }
}

const mapstatetoprops=(state)=>{
    return { streams:Object.values(state.streams), currentUserId:state.auth.userid}

}
export default connect(mapstatetoprops,{fetchStreams})(StreamList)




