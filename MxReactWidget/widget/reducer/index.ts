import { combineReducers } from 'MxReactWidget/widget/lib/redux/redux';

export default combineReducers({
    todoApp
})
function todoApp(state = {}, action) {
    switch (action.type) {
        case "CREATE_NEW_MXOBJECT":
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}
