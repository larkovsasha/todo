
export default (state, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            return {
                ...state,
               todos: [...state.todos, action.payload]
            };

        case 'DELETE-TODO':
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.id)
            };

        case 'COMPLETE-TODO':
            return {
                ...state,
                todos: state.todos.map( todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
            };
        case 'UPDATE-TODO':
            debugger
            return {
                ...state,
                todos: state.todos.map( todo => todo.id === action.id ? {...todo, name: action.newName} : todo)
            };
        case 'SET-FILTER':
            return {
                ...state,
                filter: action.filterName,
            };

        default:
            return state;
    }
};