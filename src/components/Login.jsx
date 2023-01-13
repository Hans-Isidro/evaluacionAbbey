import React from 'react'; 

export function validate(input) {
    let errors = {};
    if (!input.username) {
      errors.username = 'Username is required';
    } else if (!/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9]{2,10})\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(input.username)) {
      errors.username = 'Username is invalid';
    }
    if (!input.password) {
      errors.password = 'Password is required';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(input.password)) {
      errors.password = 'Password is invalid';
    }
  
    return errors;
  };
  export default function  Form() {
    // const [username, setUsername] = React.useState('')
    // const [password, setPassword] = React.useState('')
    const [input, setInput] = React.useState({
      username: '',
      password: '',
    });
    const [errors, setErrors] = React.useState({});
  const handleInputChange = function(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
         type="text" name="username" valor={input.username} onChange={handleInputChange}/>
         {errors.username && (
        <p className="danger">{errors.username}</p>
      )}
      </div>
      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'}
        type="password" name="password" valor={input.password} onChange={handleInputChange}/>
        {errors.password && (
        <p className="danger">{errors.password}</p>
        )}
      </div>
      <input type="submit" value ='INGRESAR'/>
    </form>
  )
}