const initState = {
    user: [
        { id: 1, name: 'Chen'},
        { id: 2, name: 'Jun'},
        { id: 3, name: 'Ju'}
    ],
    posts: []
}
const rootReducer = ( state = initState, action ) => {
    
    switch(action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user:', action);
            let deleteUser = state.user;
            deleteUser = deleteUser.filter(item => item.id !== action.payload.id)
            return {
                ...state, 
                user: deleteUser,
            };

        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100000)
            let newUser = {id: id, name: `random - ${id}`}
            return {
                ...state,
                 user: [...state.user, newUser]
            };

        default:
            return state;
    }
    
}

export default rootReducer;