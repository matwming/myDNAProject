const initialState = {
    todos: []
};

interface Action {
    type: string;
}
class Add implements Action {
    readonly type = "Add";
    constructor(public payload: string) {}
}
class RemoveAll implements Action {
    readonly type = "Remove All";
}
class RemoveOne implements Action {
    readonly type = "Remove One";
    constructor(public payload: number) {}
}
interface ITodoState {
    todos: string[];
}
type TodoActions = Add | RemoveAll | RemoveOne;
export const todoReducer = (
    state: ITodoState = initialState,
    action: TodoActions
) => {
    switch (action.type) {
        case "Add": {
            return {
                todos: [...state.todos, action.payload]
            };
        }
        case "Remove All": {
            return {
                todos: []
            };
        }
        case "Remove One": {
            return {
                todos: state.todos.slice().splice(action.payload, 1)
            };
        }
        default:
            return state
    }
};
