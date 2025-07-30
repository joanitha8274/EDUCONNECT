import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DemoPage from "./pages/DemoPage";
import LoginRegister from "./pages/auth/LoginRegister";
import RegisterSchool from "./pages/auth/RegisterSchool";
import ChooseRole from "./pages/auth/ChooseRole";
import LoginSuperAdmin from "./pages/auth/LoginSuperAdmin";
// import DashboardHome from "./pages/Superadmin/DashboardHome";
// import DashboardSuperAdmin from "./pages/Superadmin/DashboardSuperadmin";
import AdminLogin from "./pages/auth/AdminLogin";
import LoginProf from "./pages/auth/LoginProf";
import StudentLogin from "./pages/auth/StudentLogin";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/auth/lolo" element={<LoginRegister />} />  {/* 👈 formulaire login/inscription */}
         <Route path="/auth/register-school" element={<RegisterSchool />} />
         <Route path="/auth" element={<ChooseRole />} />
         <Route path="/auth/login-superadmin" element={<LoginSuperAdmin />} />
         <Route path="/auth/adminlogin" element={<AdminLogin />} />
         <Route path="/auth/proflogin" element={<LoginProf />} />
         <Route path="/auth/studentlogin" element={<StudentLogin />} />


          {/* <Route path="/auth/login-admin" element={<AdminLogin />} /> */}
         {/* <Route path="/Superadmin/dashboard-super" element={<DashboardSuperAdmin />}>
       <Route index element={<DashboardHome />} />
       </Route> */}
      </Routes>
    </Router>

    
  );
}

export default App;
