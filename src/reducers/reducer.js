export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USERS':
            return {
                ...state, usersList: action.payload
            }
            break;
        case 'USER_DETAILS':
            return {
                ...state, userDetails: action.payload
            }
            break;
        case 'CREATE_USER':
            return state;
            break;
        default:
            return state;
            break;
    }
    return state;

}