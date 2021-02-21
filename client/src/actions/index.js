import streams from '../apis/streams'
import history from '../history'

export const signin = (userId)=>{
    return{
        type:'SIGN_IN',
        payload:userId
    }
}

export const signout = ()=>{
    return{
        type:'SIGN_OUT'

    }
}

export const createStream=(formvalues)=> async (dispatch,getState)=>{
 
const {userid}=getState().auth
const response = await streams.post('/streams',{...formvalues,userid})

dispatch({type:'CREATE_STREAM',payload:response.data})
history.push('/')
}


export const fetchStreams = ()=> async dispatch=>{
    const response = await streams.get('/streams')
    dispatch({type:'FETCH_STREAMS',payload:response.data});

}

export const fetchStream=(id)=> async dispatch =>{
    const response= await streams.get(`/streams/${id}`)
    dispatch({type:'FETCH_STREAM',payload:response.data})
}

export const editStream=(id,formvalues)=> async dispatch=>{
    const response = await streams.put(`/streams/${id}`,formvalues)

    dispatch({type:'EDIT_STREAM',payload:response.data})
    history.push('/')
}

export const deleteStream=(id)=> async dispatch=>{
    console.log('i am inside delete stream')
    await streams.delete(`/streams/${id}`)
    dispatch({type:'DELETE_STREAM',payload:id})
    history.push('/')

}