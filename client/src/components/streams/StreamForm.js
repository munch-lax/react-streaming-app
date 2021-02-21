import react from 'react'

import {Field , reduxForm } from 'redux-form'


class StreamForm extends react.Component{

rendererror({error,touched}){
    if(touched && error){
        return( <div className="ui error message">
            <div className='header'>{error}</div>
            </div>
           )
    }
}

renderinput=(formprops)=>{
    
    return(<div className='field'>
        <label>{formprops.label}</label>
        <input className='ui input' autoComplete='off' {...formprops.input}  />
        {this.rendererror(formprops.meta)}
    </div>
    )}

onSubmit=(formvalues)=>{
    this.props.onSubmit(formvalues)
    
}

render(){
    return (
        <div className='ui segment' style={{width:1300,position:'relative',left:35,top:30}}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
            
            <Field name='Title' component={ this.renderinput } label="Enter Title"/>
            <br></br>
            <Field name='description' component={ this.renderinput } label="Enter Description"/>
            <br></br>
            <br></br>
            <button className="ui black button">Submit</button>
        </form>
        </div>
    )
}
}

function validate(formvalues){
    
    const errors={}
    if(!formvalues.Title){
        errors.Title='You must enter a title'

    }
    if(!formvalues.description){
        errors.description='You must enter a description'

    }
    
    return errors;
}



export default reduxForm({
    form:'streamform',
    validate
})(StreamForm)


