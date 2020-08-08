import React, { useState } from 'react'

const Form = () => {

  const [form, setForm] = useState( {email: "", password: ""});
  let example = form;
  console.log(example);
  const modifyEmail = (e)=>{
    setForm({...example, email: e.target.value});
  }

  
  const modifyPassword = (e)=>{
   setForm({...example, password: e.target.value});
  }



    return (
      <div>
        <div className="container">
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input 
    onChange={modifyEmail} 
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={modifyPassword} name="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
      </div>
      
    )
}

export default Form
