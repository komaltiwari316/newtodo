import React from 'react'

const From = () => {
  let name;
  let email;
  let phonenumber;
  let password;

  const handleData = (e) => {
    console.log({ username: name })
     console.log({ useremail: email })
      console.log({ userphonenumber: phonenumber })
       console.log({ userpassword: password })
  }
  return (
    <div className='container'>
      <form>
        <input type="text" name="name" id="" placeholder='Enter Your name....' onChange={name => e.target.value} />
        <input type="email" name="" id="" placeholder='Enter Your email....' onChange={email => e.target.value} />
        <input type="phonenumber" name="" id="" placeholder='Enter Your PhoneNumber.....' onChange={phonenumber => e.target.value} />
        <input type="password" name="" id="" placeholder='Enter Your password' onChange={password => e.target.value} />
        <button onClick={handleData}>Sign Up</button>
      </form>
    </div>
  )
}

export default From
