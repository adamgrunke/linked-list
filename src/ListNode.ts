class ListNode<T> {
    constructor(
        private _data: T,               // What does it mean to be private?
        public next = null as ListNode<T>
    ) {}

    get data(): T {
        return this._data
    }

    set data(payload: T) {
        this._data = payload
    }
}

export default ListNode;