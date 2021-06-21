import Form from "./components/Form";
import React from 'react';
import reducer from "./reducer";
import FilterButton from "./components/FilterButton";
import TodoItem from "./components/TodoItem";
import {nanoid} from "nanoid";


function App() {
    const [state, dispatch] = React.useReducer(reducer, {
        todos: [],
        filter: 'All'
    });

    const setFilter = (filterName) => {
        dispatch({type: 'SET-FILTER', filterName})
    }

    const filtersNames = ['All', 'Active', 'Completed']

    const filtersList = filtersNames.map((filter) =>
        <FilterButton key={filter} name={filter}
                      active={filter === state.filter}
                      setFilter={setFilter}/>
    )
    const todos = state.todos.map((todo) =>
        <TodoItem key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                  updateTodo={updateTodo}
        />
    )




    const activeTodos = state.todos.filter( todo => !todo.completed ).map((todo) =>
        <TodoItem key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                  updateTodo={updateTodo}
        />
    )
    const completedTodos = state.todos.filter( todo => todo.completed ).map((todo) =>
        <TodoItem key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                  updateTodo={updateTodo}
        />
    )


    function addTodo(name) {
        const payload = {
            id: nanoid(),
            completed: false,
            name,
        }
        dispatch({type: 'ADD-TODO', payload})
    }

    function deleteTodo(id) {
        dispatch({type: 'DELETE-TODO', id})
    }

    function completeTodo(id) {
        dispatch({type: 'COMPLETE-TODO', id})
    }
    function updateTodo(id, newName) {
        dispatch({type: 'UPDATE-TODO', id, newName})
    }

    const tasksNoun = state.todos.length !== 1 ? "tasks" : "task";
    const headingText = `${state.todos.length} ${tasksNoun} remaining`;
    return (
        <div className="App">
            <h1 className="title">React Todos App</h1>
            <Form addTodo={addTodo}/>
            <h2 id="counter" className="counter" tabIndex="-1">
                {headingText}
            </h2>
            {filtersList}

            <ul className="list" aria-labelledby="counter">
                { state.filter === 'All' ? todos :
                    state.filter === 'Active' ? activeTodos :
                        completedTodos
                }
            </ul>


        </div>
    );
}

export default App;
