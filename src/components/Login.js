import { useState } from "react"
import { login } from "../slicers/user"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import axios from "axios"
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
  } from '@mui/material'

  const Login = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const[id, setId]=useState('')
    const [open, setOpen] = useState(false)
  
    const postData=()=>{
    
    axios.post("/users",{
    
        name: name,
        age: age,
        email: email,
        mobile: mobile
      })
      .then( res =>{
        console.log(res.data);
        setId(res.data._id)
        console.log('Formdata Submitted')

      })
      .catch( err =>{
        console.log(err);
      });
}

  return (
    <div className="add-form ">
        <h2 className="heading">Fill your details:</h2>
        <div className='form-control'>
          <label><strong>Name:</strong></label>
          <input type='text' placeholder='Enter your name'
                  onChange={(e)=> setName(e.target.value)}
                  />
        </div>
        <div className='form-control'>
          <label><strong> Age:</strong></label>
          <input type='number' placeholder='Enter your age' 
                  onChange={(e)=> setAge(e.target.value)}
                  />
        </div>
        <div className='form-control'>
          <label><strong>Email:</strong></label>
          <input type='email' placeholder='Enter your email id' 
                  onChange={(e)=> setEmail(e.target.value)}
                  />
        </div>
        <div className='form-control'>
          <label><strong> Mobile Number:</strong></label>
          <input type='text' placeholder='enter your mobile number' 
                  onChange={(e)=> setMobile(e.target.value)}
                  />
        </div>

        <button className="btn"
                onClick={()=>{dispatch(login({name,age,email, mobile:mobile, id:id}))}}
        > Save</button>
        <button className="btn" onClick={postData}> Post</button>

        <Button onClick={() => setOpen(true)} className="btn">Next</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title'>Submit the form?</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Are you sure you want to submit the form? You will not be able to
            edit it after submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Link to="/contact"><Button onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button></Link>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Login