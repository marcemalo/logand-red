import { Routes, Route } from "react-router-dom"
import { Suspense } from "react"

import Register from "./register/Register"
import Login from "./login/Login"
import Home from "../components/Home"
import Profile from "./profile/Profile"

const RouteController = () => {
  return (
    <>
    <Home/>
   <Routes>
      <Route path="register" element={<Suspense><Register/></Suspense>} />
      <Route path="login" element={<Suspense><Login/></Suspense>} />
      <Route path="profile" element={<Suspense ><Profile/></Suspense>} />
   </Routes>
   </>
  )
}

export default RouteController