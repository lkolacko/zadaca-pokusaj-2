import React from "react";
import Header from "../../components/Header/Header.js";
import Landing from "../../components/Landing/Landing.js";
import Main from "../../components/Main/Main.js";
import Section from "../../components/Section/Section.js";
import CourseCard from "../../components/CourseCard/CourseCard.js";
import Testimonial from "../../components/Testimonial/Testimonial.js";
import { Grid } from "../../lib/style/generalStyles.js";
import {useState, useEffect} from "react";
import coursesMock from "../../lib/mock/courses.js";


const Home = () => {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
        }, 1000 );
    }, []) 

    return (
    <>
        <Header />
        <Main>
            <section>
                <Landing/>
            </section>
            <Section 
                title={"Open new possibilities"} 
                actionText={"Learn something new"}
            >
                {courses && 
                <Grid>
                    {courses.map(
                        (course, index) => 
                            index <= 3 && (  
                                <CourseCard
                                    key={course.id}
                                    courseId={course.id}
                                    imgSrc={course.imgSrc}
                                    imgAlt={course.imgAlt}
                                    title={course.title}
                                    subtitle={course.subtitle}
                                />
                            )
                    )}
                    </Grid>}




                {/* <Grid>
                    <CourseCard
                            imgSrc={LectureImg1}
                            imgAlt={'Introduction'}
                            title={'1. Introduction'}
                            subtitle={'60 Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg2}
                            imgAlt={'HTML & CSS'}
                            title={'2. HTML & CSS'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg3}
                            imgAlt={'Version Control System'}
                            title={'3. Version Control System'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg4}
                            imgAlt={'Advanced CSS'}
                            title={'4. Advanced CSS'}
                            subtitle={'120+ Minutes'}
                        />

                </Grid> */}
                    </Section>
            
            <Section isHeadingVisible={false} isSecondary >
                    <Testimonial />
            </Section>
        </Main>
    </>
    );
}

export default Home;