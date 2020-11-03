interface Action {
    type: string
}


interface ListNode<T> {
    value: T
    prev: ListNode<T>
    next: ListNode<T>
}

class BackwardActionIterator implements IterableIterator<Action> {

    constructor(private _currentActionNode: ListNode<Action>) {
    }
    [Symbol.iterator](): IterableIterator<Action> {
        return undefined;
    }

    next(...args: [] | [undefined]): IteratorResult<Action, any> {
        const curr = this._currentActionNode
        // 종료 조건
        if (!curr || !curr.value) {
            return { value: null, done: true }
        }
        // 1. 리스트의 아이템을 이동한다
        this._currentActionNode = curr.prev
        // 2. 값을 리턴해준다
        return { value: curr.value, done: false }
    }
}


let action1 = { type: 'LOGIN' }
let action2 = { type: 'LOAD_POSTS' }
let action3 = { type: 'DISPLAY_POSTS' }
let action4 = { type: 'LOGOUT' }
let actionNode1: ListNode<Action> = {
    value: action1,
    prev: null,
    next: null,
}
let actionNode2: ListNode<Action> = {
    value: action2,
    prev: actionNode1,
    next: null,
}
actionNode1.next = actionNode2
let actionNode3: ListNode<Action> = {
    value: action3,
    prev: actionNode2,
    next: null,
}
actionNode2.next = actionNode3
let actionNode4: ListNode<Action> = {
    value: action4,
    prev: actionNode3,
    next: null,
}
actionNode3.next = actionNode4

const backwardActionsList = new BackwardActionIterator(actionNode4)
for (const action of backwardActionsList) {
    console.log(action)
}
