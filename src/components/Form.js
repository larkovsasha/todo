import React, {useState} from 'react';

const Form = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const onClick = () => {
        if(!value) return
        addTodo(value)
        setValue('')
    }
    return (
        <div className="form">
            <input type="text" className="input" onChange={handleChange} value={value}/>
            <button className="btn" onClick={onClick}>
                Add
            </button>

        </div>
    );
};

export default Form;