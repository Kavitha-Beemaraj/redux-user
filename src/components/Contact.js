import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Contact = () => {
  const userName= useSelector((state)=>state.user.value.name)
  const userAge= useSelector((state)=>state.user.value.age)
  const userEmail= useSelector((state)=>state.user.value.email)
  const userMobile= useSelector((state)=>state.user.value.mobile)
  const userId= useSelector((state)=>state.user.value.id)


  return (
    <div >
        <h2 className="heading">Contact Details</h2>

        <h3> Name:   {userName}</h3>
        <h3> Age:   {userAge}</h3>
        <h3> Email id:   {userEmail}</h3>
        <h3> Mobile no:   {userMobile}</h3>
        <h3> User Id:   {userId}</h3>


        <Link to="/*"><button className="btn">home</button></Link>

    </div>
  )
}

export default Contact