import React, { useState } from 'react';

const InputTodo = () => {
	const [description, setDescription] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const response = fetch('http://localhost:5001/todos', {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(body)
			});
			console.log(response);
			window.location = '/';	
		} catch (err) {
			console.error(err.message);
		}
	}

	return (
		<>
			<h1 className="text-center mt-5">PERN Todos List</h1>
			<form onSubmit={handleSubmit} className="d-flex">
				<input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
				<button className="btn btn-info">Add</button>
			</form>
		</>
	)
}

export default InputTodo;