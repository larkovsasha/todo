import React, {useState} from 'react';

const TodoItem = ({todo, deleteTodo , completeTodo, updateTodo}) => {


    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState('')


    const handleChange = (e) => {
        setNewName(e.target.value)
    }

    const onUpdate = () => {
        updateTodo(todo.id, newName)
        setEditing(false)
    }

    const editingTemplate = (
        <div className='form' >
            <input
                className='input'
                type='text'
                value={newName}
                onChange={handleChange}
                //ref={editFieldRef}
            />
            <button className='btn warning' onClick={() => setEditing(false)}>
                Cancel
            </button>
            <button  className='btn success' onClick={onUpdate}>
                Save
            </button>
        </div>
    )

    const viewTemplate = (
        <>
            <input
                //id={props.id}
                type='checkbox'
                className='checkbox'
                defaultChecked={todo.completed}
                onChange={() => completeTodo(todo.id)}
            />
            <label
                className={`text ${todo.completed && 'completed'}`}
               // htmlFor={props.id}
            >
                {todo.name}
            </label>
            <button
                className={`btn info ${todo.completed && 'disabled'}`}
                onClick={() => setEditing(true)}
                //ref={editButtonRef}
            >
                Update
            </button>
            <button
                type='button'
                className='btn danger'
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </>
    )
    return (
     <li className='item'> {isEditing ? editingTemplate : viewTemplate}</li>
    );
};

export default TodoItem;