const INTIAL_STATE={
    issignedin:null,
    userid:null
}

export default (state=INTIAL_STATE,action)=>{
    if(action.type==='SIGN_IN'){
        return{...state,issignedin:true,userid:action.payload}
    }
    else if (action.type==='SIGN_OUT'){
        return{...state,issignedin:false,userid:null}
    }
    else{ return state }
}