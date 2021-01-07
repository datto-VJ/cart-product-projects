import * as types from '../contants/ActionTypes'
import * as Message from '../contants/Messages'
var initialState = Message.MSG_WELCOME

const message = (state=initialState,action)=>{
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message
        default : return state //[...state]
    }
}


export default message