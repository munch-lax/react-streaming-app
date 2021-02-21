import react from 'react'
import reactdom from 'react-dom'
import history from '../history'


const Model = (props)=>{
    return reactdom.createPortal(
        <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
            <div onClick={(e)=>e.stopPropagation()} className='ui tiny modal visible active'>
                <div className='header'>{props.title}</div>
                <div className='content'>
                    <h4>{props.content}</h4>
                </div>
                {props.actions()}
            </div>

        </div>,
        document.querySelector('#rootz')
    )
}


export default Model