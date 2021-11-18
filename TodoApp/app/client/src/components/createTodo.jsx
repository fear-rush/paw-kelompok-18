import { useState } from 'react';
import axios from 'axios';
// import Form from '../view/Form';

export function CreateTodo() {
  const [data, setData] = useState({ title: "", description: "" });

  function handleChange(e) {
      setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
      // e.preventDefault();

      axios
          .post("http://localhost:8080/api/todo", data)
          .then((res) => {
              setData({ title: "", description: "" });
              console.log(res.data.message);
          })
          .catch((err) => {
              console.log("Error couldn't create TODO");
              console.log(err.message);
          });
  }

  return (
    <div className='flex items-center justify-center overflow-hidden'>
      <form className='flex flex-col bg-white rounded-md shadow-md p-10 mt-14' 
            onSubmit={handleSubmit} 
            noValidate>

          <label className='font-semibold text-lg' htmlFor='titleField'>Title</label>  
          <textarea className='flex items-center h-24 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 resize-none' 
                    type='text' 
                    onChange={handleChange} 
                    value={data.title} 
                    name="title"></textarea>
          
          <label className='font-semibold text-lg mt-3'>Description</label>
          <textarea className='flex items-center h-24 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 resize-none' 
                    onChange={handleChange} 
                    type='text' 
                    value={data.description} 
                    name="description"></textarea>

          <button className='flex items-center justify-center h-12 px-6 w-80 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700' 
                  type="submit">Submit</button>
      </form>
      <div className='flex absolute flex-wrap justify-center align-center transform translate-y-2/4 bottom-56'>
      </div>
    </div>
  );

}