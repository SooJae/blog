interface Email {
    from: string
    to: string[]
    body: string
}
interface Todo {
    isCompleted: boolean
    text: string
    linkedEmail: Email
}
interface RootState {
    userId: string
    showCompletedOnly: boolean
    todoTypes: string[]
    todos: Todo[]
    iconGrid: string[][]
}
function rootReducer(action: any, state: RootState): RootState {
    // case action 1...
    // case action 2...
    return state
}

type ReadonlyRootState = Readonly<RootState>
let state: ReadonlyRootState
// 위의 세 줄 까지만 에러가 뜬다.
state.showCompletedOnly = true
state.userId = 'newId'
state.todoTypes = []
// 여기부터는 에러가 뜨지 않는다.
state.todoTypes[0] = 'diff type'
state.todos[1].linkedEmail.body = 'hi'
state.todos[1].linkedEmail.to[1] = 'john'


type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }
let deepState: DeepReadonly<RootState>
deepState.showCompletedOnly = true
deepState.userId = 'newId'
deepState.todoTypes = []
deepState.todoTypes[0] = 'diff type'
deepState.todos[1].linkedEmail.body = 'hi'
deepState.todos[1].linkedEmail.to[1] = 'john'
