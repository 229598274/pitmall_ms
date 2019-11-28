import { handleActions } from 'redux-actions'
import reduxActionTypes from '../../reduxAcitonTypes'


const initialState = {
    data: {
        driverList: []
    }
}

export default handleActions({
    [reduxActionTypes.loginActionTypes.LOGIN_SUCCESS]: (state, action) => {
        return {
            ...state,
        }
    }
}, initialState)
