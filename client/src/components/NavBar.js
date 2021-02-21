import react from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'





class NavBar extends react.Component{


    
    

    render(){
        
        return(
            
            <div >
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        <a className="item">
                         <h4>Streamer</h4>
                        </a>
                        <div className='right menu'>
                        <Link to ='/'  exact className='ui item' onClick={this.onlinkclick} id='rootz' ><h4 style={{paddingRight:50}}>Streams</h4></Link>
                        <Link to ='/create' exact className='ui item' onClick={this.onlinkclick} id='rootx' ><h4 style={{paddingRight:50}}>Create Stream</h4></Link>
                        <GoogleAuth/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        
        )

    
    }
}



export default NavBar