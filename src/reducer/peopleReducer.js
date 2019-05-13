export default function(state = { people: [] }, action) {
    switch(action.type) {
        case "ADD_PEOPLE": {
            return Object.assign({}, state, { people: action.data });
        }
        case "EDIT_PEOPLE": {
            return Object.assign({}, state, { people: action.data });
        }
        default:
            return state;
    }
}