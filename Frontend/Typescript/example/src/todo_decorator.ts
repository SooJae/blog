interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}
class TodoService {
    todos: Promise<Todo[]> = fetch('http://localhost:8080');
}
const todoService = new TodoService()
