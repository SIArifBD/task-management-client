import React from 'react';
import { useForm } from "react-hook-form";
const AddTask = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://vast-stream-19366.herokuapp.com/api/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
            })
    };
    return (
        <div className='my-5'>
            <div className='flex flex-col justify-center items-center'>
                <div className="card w-96 bg-dark text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Add Your Daily Task</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <textarea type='text' className="textarea textarea-bordered h-24" placeholder="To-Do" {...register("item")}></textarea>
                            </div>
                            <div className="card-actions justify-center">
                                <input className="btn submit" type="submit" value="Add Task" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;