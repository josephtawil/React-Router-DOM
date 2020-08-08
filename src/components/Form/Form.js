import React, { useState } from 'react'

const Form = () => {
//   const thing = {
//     first: "first value",
//   };
// ​
//   const placeholder = "second";
// ​
//   thing[placeholder] = "oh wow";
// ​
//   console.log(thing);
//   console.log(thing.first);


  const [form, setForm] = useState( {email: "",name:"", password: ""});
  let example = form;
  console.log(example);
  const modifyForm = (e)=>{
    setForm({...example, [e.target.name]: e.target.value});
  }

  
  // const modifyPassword = (e)=>{
  //  setForm({...example, password: e.target.value});
  // }

  const emailStyles = () =>{
    let styles = "form-control";

    if(form.email.includes("@"))
    {
      styles += " border-success"
    }
    else{
      styles += " border-danger"
    }
    return styles;
  }


    return (
      <div>
        <div className="container">
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input 
    onChange={modifyForm} 
    name="email" className={emailStyles()} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleName">Name</label>
    <input 
    onChange={modifyForm} 
    name="name" className="form-control"  />
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={modifyForm} name="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
        <h1>{form.email}</h1>
        <h1>{form.password}</h1>
      </div>
      
    )
}

export default Form
