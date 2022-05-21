import "./App.scss";
import Home from "./pages/Home/Home";
import CoursePage from "./pages/CoursePage/CoursePage";
import CoursesFrontPage from "./pages/CoursesPage/CoursesPage";
import {BrowserRouter as Router, 
        Routes, 
        Route} 
  from 'react-router-dom';
import TopOfThePage from "./TopOfThePage"


function App() {
  return (
    <>
      <Router>
    <TopOfThePage>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course/:id" element={<CoursePage/>} />
      <Route path="/allcourses" element={<CoursesFrontPage/>} />
    </Routes>
    </TopOfThePage>
  </Router>
  
    
    </>
  );
}

export default App;
