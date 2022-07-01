import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ToDoList = () => {
    const [items, setItems] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        fetch('https://vast-stream-19366.herokuapp.com/api/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    //delete to-do items
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://vast-stream-19366.herokuapp.com/api/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='my-5'>
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-3xl">To-List</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Complete Task</th>
                            </tr>
                        </thead>
                        {
                            items.map(item =>
                                <tbody key={item._id}>
                                    <tr>
                                        <th>{item.item}</th>
                                        <th><button className='btn btn-sm btn-accent'>Update</button></th>
                                        <th><button className='btn btn-sm btn-error' onClick={() => handleDelete(item._id)}>Delete</button></th>
                                        <th>
                                            <Link to={`/completeTask/${itemId}`}>
                                                <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                                            </Link>
                                        </th>
                                    </tr>
                                </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;