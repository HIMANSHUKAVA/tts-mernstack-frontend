import React from 'react'
import Textfield from './component/Textfiel'
import Switchs from './component/Switchs'
import Forms from './component/Forms'
import Togglebutton from './component/Togglebutton'
import Avtarr from './component/Avtarr'
import Badges from './component/Badges'
import Lists from './component/Lists'
import Listtask from './component/Listtask'
import Tables from './component/Tables'
import Appbars from './component/Appbars'
import Cards from './component/Cards'
import Headers from './Task/Headers'
import BottomNavigetions from './component/BottomNavigetions'
import Drawers from './component/Drawers'
import Simpledrawer from './Drawers/Simpledrawer'
import SnipestDrawer from './Drawers/SnipestDrawer'
import Clipeddrawer from './Drawers/Clipeddrawer'
import ResponsiveDrawer from './Drawers/ResponsiveDrawer'
import Persistancedrawer from './Drawers/Persistancedrawer'
import Menus from './component/Menus'
import Speeddials from './component/Speeddials'
import Floating from './component/Floating'
import CardTask from './Prectice/CardTask'
import Dashboard from './Prectice/task/Dashboard'
// import NavbanrandDrawer from './TaskManeger/NavbanrandDrawer'
import Layout from './TaskManeger/layout'
import Flow from './Blinkit/Flow'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Blinkit/pages/Home'
import Addproduct from './Blinkit/pages/Addproduct'
import View from './Blinkit/pages/View'
import Addcart from './Blinkit/pages/Addcart'
import Addscart from './Blinkit/pages/Addscart'
import Layoutm from './StudenManegmentSyterm/Layoutm'
import Dashboard1 from './StudenManegmentSyterm/pages/Dashboard1'
import StudentRagister from './StudenManegmentSyterm/pages/StudentRagister'
import ViewStudent from './StudenManegmentSyterm/pages/ViewStudent1'
import ViewStudent1 from './StudenManegmentSyterm/pages/ViewStudent1'
import FetchStudentdeta from './StudenManegmentSyterm/pages/FetchStudentdeta'
import StudentAttendence from './StudenManegmentSyterm/pages/StudentAttendence'
import Absence from './StudenManegmentSyterm/pages/Absence'
import TeacherLogin from './StudenManegmentSyterm/pages/TeacherLogin'
import DataChart from './StudenManegmentSyterm/pages/DataChart'
import Ragister from './StudenManegmentSyterm/pages/Ragister'
export default function App() {
  return (
      // <BrowserRouter>
      //   <Routes>
      //     <Route path='/' element={<Flow/>}/>
      //     <Route path='/home' element={<Home/>}/>
      //     <Route path='/add-product' element={<Addproduct/>}/>
      //     <Route path='/view-products' element={<View/>}/>
      //     <Route path='/add-to-cart/:id' element={<Addcart/>}/>
      //     <Route path="/addcart" element={<Addscart/>}/>
          
      //   </Routes>
      // </BrowserRouter>     

      <BrowserRouter>

        <Routes>
        <Route path='/' element={<TeacherLogin/>}/> 
        <Route path='/dasboard' element={<Dashboard1/>}/>
        <Route path='/newadmission' element={<StudentRagister/>}/>
        <Route path='/studentlist' element={<ViewStudent1/>}/>
        <Route path='/edit-student/:id' element={<FetchStudentdeta/>}/>
        <Route path='/attendece' element={<StudentAttendence/>}/>
        <Route path='/absence' element={<Absence/>}/>
        <Route path='/viewattend' element={<DataChart/>}/>
        <Route path='/login' element={<TeacherLogin/>}/>
        <Route path="/register" element={<Ragister />} />


        </Routes>      
      
      </BrowserRouter>
  );
}


