import { useEffect, useState } from "react"
import axios from "../../api/axios"


const Profile = () => {
const [profile , setProfile] = useState(null)
    useEffect(() => {
        axios("/aut/profile")
        .then(response => setProfile(response.data))
    }, [])


  return (
    <div>
        <h1>siz mufaqatli otiz</h1>
         {
            profile &&
            <img src={profile.avtar} alt="" />
         }
    </div>
  )
}

export default Profile