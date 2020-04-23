import React, { useState, useEffect } from 'react';
import EditTodo from './EditTodo';
const BASE_URL = "http://localhost:5001";
const ListTodos = () => {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		try {
			const response = await fetch(`${BASE_URL}/todos`);
			const data = await response.json();
			setTodos(data);
		} catch (err) {
			console.error(err.message);
		}
	}

	const deleteTodo = async (_id) => {
		try {
			const todo = await fetch(`${BASE_URL}/todos/${_id}`, {
				method: "DELETE"
			});
			setTodos(todos.filter(el => el.todo_id !== _id));
		} catch(err) {
			console.error(err.message);
		}
	}

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			{" "}
			<table className="table mt-5 text-center">
				<thead>
					<tr>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{todos.map(todo => (
						<tr key={todo.todo_id}>
							<td>{todo.description}</td>
							<td><EditTodo todo={todo} /></td>
							<td>
								<div className="btn-group btn-group-sm text-white">
									<button onClick={() => deleteTodo(todo.todo_id)} className='btn btn-danger'>Delete</button>
								</div> 
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default ListTodos;