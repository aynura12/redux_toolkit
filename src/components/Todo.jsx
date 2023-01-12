import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/features/todoSlice'

const Todo = () => {
    const tasks = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    return (
        <ul>
            {
                tasks && tasks.map((t) => (
                    <React.Fragment key={t.id}>
                        <li>
                            {t.isCompleted ? <h5>Done</h5> :<h5>Not done</h5>}
                            {t.title}
                            <button onClick={() => dispatch(deleteTodo(t.id))}>Delete</button>
                            <button onClick={() => dispatch(completeTodo(t.id))}>completed</button>
                        </li>

                    </React.Fragment>


                ))
            }
        </ul>
    )
}

export default Todo
