
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import Agencies from './pages/agencies'
import Users from './pages/users'
import Packages from './pages/packages'
import Blogs from './pages/Blogs'
import CreateAdmin from './pages/createAdminTab/CreateAdmin'
import Advertisements from './pages/Advertisements'
import Notifications from './pages/Notifications'
import AdminDashboardLayout from './components/Admin-layout'
import CreateNewAdmin from "./pages/createAdminTab/CreateNewAdmin"
function App() {

  return (
   <Router>
    <Routes>
    <Route path = "/" element = {<Login/>}/>
      {/* <Route path = "/admin/login" element = {<AdminLogin/>}/> */}
      <Route element={<AdminDashboardLayout/>}>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/agencies" element = {<Agencies/>}/>
      <Route path = "/users" element ={<Users/>} />
      <Route path = "/packages" element ={<Packages/>} />
      <Route path = "/blogs" element ={<Blogs/>} />
      <Route path = "/create-admin" element ={<CreateAdmin/>} />
      <Route path = "/advertisments" element = {<Advertisements/>} />
      <Route path = "/notifications" element ={<Notifications/>} />
      <Route path ="/createNewAdmin" element ={<CreateNewAdmin/>}/>
      </Route>

    </Routes>
   </Router> 
  )
}

export default App
