import React from 'react';

const EditTodo = ({ todo }) => {
	const [description, setDescription] = React.useState(todo.description);

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const body = { description };
			const response = await fetch(`http://localhost:5001/todos/${todo.todo_id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});
			window.location = '/';
		} catch (err) {
			console.error(err.message);
		}
	}
	return (
		<>
			<button
				type="button"
				className="btn btn-info btn-sm"
				data-toggle="modal"
				data-target={`#id${todo.todo_id}`}>Edit Todo</button>

			<div id={`id${todo.todo_id}`} className="modal fade" role="dialog" onClick={e => setDescription(todo.description)}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Edit Todo</h4>
							<button type="button" className="close" data-dismiss="modal" onClick={e => setDescription(todo.description)}>&times;</button>
						</div>
						<div className="modal-body">
							<input type="text" className="form-control" name="description" value={description} onChange={e => setDescription(e.target.value)} />
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" onClick={e => handleUpdate(e)}>Update</button>
							<button type="button" className="btn btn-default" data-dismiss="modal" onClick={e => setDescription(todo.description)}>Close</button>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default EditTodo;