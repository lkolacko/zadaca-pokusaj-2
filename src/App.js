import "./App.scss";
import Home from "./pages/Home/Home";
import CoursePage from "./pages/CoursePage/CoursePage";
import CoursesFrontPage from "./pages/CoursesPage/CoursesPage";
import {BrowserRouter as Router, 
        Routes, 
        Route} 
  from 'react-router-dom';
import TopOfThePage from "./TopOfThePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Router>
    <TopOfThePage>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course/:id" element={<CoursePage/>} />
      <Route path="/allcourses" element={<CoursesFrontPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/sign-in" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </TopOfThePage>
  </Router>
  
    
    </>
  );
}

export default App;
