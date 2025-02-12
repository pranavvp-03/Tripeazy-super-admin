import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast";
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
import Addrole from "./pages/ManageRole/Addrole";
import ManageRole from "./pages/ManageRole/ManageRole";
import CommonNav from "./components/CommonNav";

// import Navbar from "./components/Navbar"
import NoAuthorized from "./components/NoAuthorized"
import RestrictRoute from "./components/RestrictRoute"
import { useEffect } from "react";
function App() {
  return (
   <Router>

   
  
    <Routes>
    <Route path = "/notAuthorized" element = {<NoAuthorized/>}/>

      <Route path = "/" element = {<Login/>}/>
      <Route element={<AdminDashboardLayout/>}>
      <Route path = "/home" element = {<RestrictRoute  requiredPermission="Home"> <Home/></RestrictRoute>}/>
      <Route path = "/agencies" element = {<RestrictRoute  requiredPermission="Agencies"> <Agencies/></RestrictRoute>}/>
      <Route path = "/users" element = {<RestrictRoute  requiredPermission="Users"> <Users/></RestrictRoute>}/>
      <Route path = "/packages" element = {<RestrictRoute  requiredPermission="Packages"> <Packages/></RestrictRoute>}/>
      <Route path = "/blogs" element = {<RestrictRoute  requiredPermission="Blogs"> <Blogs/></RestrictRoute>}/>
      <Route path = "/Admin-List" element = {<RestrictRoute  requiredPermission="AdminList"> <CreateAdmin/></RestrictRoute>}/>
      <Route path = "/manage-Role" element = {<RestrictRoute  requiredPermission="ManageRole"> <ManageRole/></RestrictRoute>}/>
      <Route path = "/advertisments" element =  {<RestrictRoute  requiredPermission="Advertisement"> <Advertisements/></RestrictRoute>}/>
      <Route path = "/notifications" element = {<RestrictRoute  requiredPermission="Notifications"> <Notifications/></RestrictRoute>}/>
      <Route path ="/createNewAdmin" element = { <CreateNewAdmin/>}/>
      <Route path ="/addrole" element={<Addrole/>}/>
      <Route path ="/commonNav" element={<CommonNav/>}/>

      {/* <Route path="/nav" element={<Navbar/>}/> */}
      </Route>
    </Routes>
    <Toaster/>
   </Router> 
   
  )
}

export default App
