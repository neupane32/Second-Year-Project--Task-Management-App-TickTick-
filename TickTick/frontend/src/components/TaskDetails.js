import React, { useState } from 'react';
import { useTasksContext } from '../hooks/useTasksContext';
import { useAuthContext } from '../hooks/useAuthContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './TaskDetails.css'

const TaskDetails = ({ task }) => {
  const { dispatch } = useTasksContext();
  const { user } = useAuthContext();
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!user) return;
    const response = await fetch('/api/tasks/' + task._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (response.ok) {
      dispatch({ type: 'DELETE_TASK', payload: task._id });
    } else {

      const json = await response.json();
      setError(json.error);
    }
  };

  const handleEdit = async () => {
    if (!user) return;
    const response = await fetch('/api/tasks/' + task._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(editedTask),
    });
    if (response.ok) {
      const updatedTask = await response.json();
      dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
      setEditing(false);
      window.location.reload(); // Reload the page
    } else {
      const json = await response.json();
      setError(json.error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="task-details">
      {editing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="completed"
            value={editedTask.completed}
            onChange={handleChange}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h4>{task.title}</h4>
          <p>
            <strong>Description: </strong>
            {task.description}
          </p>
          <p>
            <strong>Completed: </strong>
            {task.completed}
          </p>
          <p>
            {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
          </p>
          <button className='a' onClick={() => setEditing(true)}>Edit</button>
          <button className='a' onClick={handleDelete}>Delete</button>
        </div>

      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TaskDetails;
