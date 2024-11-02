import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';

function UpdateTodo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [idToUpdate, setIdToUpdate] = useState('');
    const [newText, setNewText] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id: idToUpdate, text: newText }));
        setIdToUpdate('');
        setNewText('');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Update Todos</h2>
            <form onSubmit={handleUpdate} className="space-x-3 mt-12 flex justify-center items-center">
            <select 
                  className=" flex justify-between items-center bg-gray-200 px-4 py-2 rounded"
                  value={idToUpdate} 
                  onChange={(e) => setIdToUpdate(e.target.value)}
                  required
                >
                  <option value="" disabled>Select Todo</option>
                  {todos.map((todo) => (
                      <option key={todo.id} value={todo.id}>
                          {todo.text}
                      </option>
                  ))}
              </select>
              <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 h-15 px-3 leading-8 transition-colors duration-200 ease-in-out"

                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="New Todo Text"
                    required
              />
              <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Update Todo
              </button>
            </form>
        </div>
    );
}

export default UpdateTodo;
