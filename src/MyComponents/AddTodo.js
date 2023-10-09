import React, { useState } from 'react'


const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  

   const submit = (e)=>{
    e.preventDefault();
     
    
    if(!title || !desc)
    {
      alert("title or dec cananot be blank");
    }
    else 
    {
     
      props.addTodo(title,desc);
    }

    setTitle("");
    setDesc("");
   }

  return (
    <div className='container my-3'>
      <h4 className='text-center' >Add a Todo</h4>
      <form onSubmit={submit}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Todo title</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value = {title}  onChange={(e)=>setTitle(e.target.value)} id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value = {desc} onChange={(e)=>setDesc(e.target.value)} id="inputPassword3"/>
    </div>
  </div>
  
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
