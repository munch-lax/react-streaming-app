import react from 'react'
import { connect } from 'react-redux';
import { signin , signout} from "../actions"

class GoogleAuth extends react.Component{


    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init(
                {
                clientId:'404073125331-1l8m9lsn6apgl8nngsg2dan5gaj6vuc1.apps.googleusercontent.com',scope:'email'
            }).then(()=>{
                this.auth1=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth1.isSignedIn.get())
                this.auth1.isSignedIn.listen(this.onAuthChange)
            
            
            })
        })

        
    }

    onAuthChange=(x)=>{
        
        if(x===true){
            this.props.signin(this.auth1.currentUser.get().getId())
        }
        else{
            this.props.signout()
        }
    }

    onSignInClick=()=>{
        this.auth1.signIn()
    }
    onSignOutClick=()=>{
        this.auth1.signOut()
    }

    

    renderauthbutton(){
        if(this.props.issignedin===null){
            return null
        }
        else if(this.props.issignedin===true){
            return <button onClick={this.onSignOutClick} className='ui red button'><i className=' google icon'/>Logout</button>
        }
        else{return <button onClick={this.onSignInClick} className='ui red button'><i className='google icon'/>Login with Google</button>}

    }
    render(){
        return <div>{this.renderauthbutton()}</div>
    }


}

 const mapstatetoprops=(state)=>{
     
     return { issignedin:state.auth.issignedin}
 }

export default connect(mapstatetoprops,{signin,signout})( GoogleAuth )