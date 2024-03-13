import React, { useState } from 'react';

const InputTodo = () => {
    const [todo, setTodo] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(todo);
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleInputChange} />
            <button type="submit">Tambah Todo</button>
        </form>
    );
};

export default InputTodo;