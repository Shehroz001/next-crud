"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({id,title,description}) => {

  const [newTitle,setNewTitle] =useState(title);
  const [newDescription,setNewDescription] =useState(description); 

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!newTitle || !newDescription){
      alert('Title and description are required');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,
        {
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify({newTitle,newDescription}),
        });

      if(res.ok){
        router.push('/');
      }else{
        throw new Error('Failed to update the topic');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input onChange={(e) => setNewTitle(e.target.value) } value ={newTitle} className="border border-slate-500 px-8 py-2"type="text" placeholder="Topic Title" />
    <input onChange={(e) => setNewDescription(e.target.value) } value ={newDescription}  className="border border-slate-500 px-8 py-2"type="text" placeholder="Topic Description" />
    <button type="submit" className="bg-green-600 font-bold text-white px-6 py-3 w-fit ">Update Topic</button>
  </form>
  )
}

export default EditTopicForm