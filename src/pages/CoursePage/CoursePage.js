import React from 'react';
import './CoursePage.scss';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import coursesMock from '../../lib/mock/courses';
import CourseCard from '../../components/CourseCard/CourseCard';
import Main from "../../components/Main/Main";
import LectureImg2 from "../../assets/images/lecture-2.jpg";


const CoursePage = () => {
    const {id} = useParams();
    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        setCourses(coursesMock);
    }, []); 

    useEffect(() => {
        courses && setCourse(...courses.filter(course => course.id === parseInt(id)))
    }, [courses, id]); 


    const handleButtonClick = () => {
        // -1 ( vrati se nazad)
    };

    return (
        <div>
        
        <Header isSecondary={true}/>
        {course && (
            <Section 
                title={course.title}
                actionText={course.subtitle}
                buttonText={"Go back"}
                linkToPage="#"
                 >
            <CourseCard imgSrc={course.imgSrc} imgAlt={course.imgAlt} text={course.text} courseId={course.id} /> 
            </Section>  
        )}  
              
        </div>
    );
    }
    
    export default CoursePage;




//   return (
//       <>
//       <Header isSecondary={true}/>
//       <Main>
//           <Section buttonText={"Back to all courses"} actionText={"120+ minutes"} title={"2. HTML&CSS "}
//         linkToPage={'/allcourses'}>
//     <div className="FeaturedCourse">
//         <figure className="FeaturedCourse-Figure">
//             <img src={LectureImg2} alt="LectureExamp" className="FeaturedCourse-Img" />
//         </figure>
//         <div className="FeaturedCourse-Content">
//             <p className="FeaturedCourse-Text">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices dui sapien eget. Ut tortor pretium viverra suspendisse. Ipsum a arcu cursus vitae congue. Vivamus arcu felis bibendum ut. Nisl purus in mollis nunc sed. Diam phasellus vestibulum lorem sed risus ultricies tristique. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Amet consectetur adipiscing elit duis. Accumsan sit amet nulla facilisi morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sem nulla pharetra diam sit amet nisl. Egestas sed sed risus pretium quam. Cras sed felis eget velit aliquet sagittis. Pellentesque habitant morbi tristique senectus et.
//                 Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. A diam maecenas sed enim ut sem. Interdum consectetur libero id faucibus nisl tincidunt eget. Id aliquet lectus proin nibh nisl condimentum. Arcu non sodales neque sodales ut etiam sit amet. Enim neque volutpat ac tincidunt vitae semper. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Vitae et leo duis ut diam. Ultrices eros in cursus turpis massa tincidunt dui. Neque egestas congue quisque egestas diam in.
//                 Consectetur a erat nam at lectus urna. Interdum varius sit amet mattis. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Lectus nulla at volutpat diam ut venenatis tellus in. Ut sem viverra aliquet eget sit. Purus in mollis nunc sed id. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Mauris commodo quis imperdiet massa. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.
//             </p>
//         </div>
//     </div>
//     </Section>
//     </Main>
//     </>
// );
// }

// export default CoursePage;