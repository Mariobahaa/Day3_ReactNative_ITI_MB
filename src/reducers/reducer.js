export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USERS':
            return {
                ...state, usersList: action.payload
            };
            break;
        case 'USER_DETAILS':
            return {
                ...state, userDetails: action.payload
            };
            break;
        //////////////////////////////////////

        case 'NEXT':
            console.log("Next in Reducer")
            return {
                ...state, usersList: action.payload, page: state.page + 1
            };
            break;
        case 'PREVIOUS':

            return {
                ...state, usersList: action.payload, page: (state.page - 1) >= 1 ? (state.page - 1) : state.page
            };
            break;
        //////////////////////////////////////

        case 'CREATE_USER':
            console.log('creating user');
            return {
                ...state, resUser: action.payload
            };
            break;
        default:
            return state;
            break;
    }
    return state;

}