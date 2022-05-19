import React from "react";
import Header from "../../components/Header/Header.js";
import Main from "../../components/Main/Main.js";
import Section from "../../components/Section/Section.js";
import LectureImg1 from '../../assets/images/lecture-1.jpg';
import LectureImg2 from '../../assets/images/lecture-2.jpg';
import LectureImg3 from '../../assets/images/lecture-3.jpg';
import LectureImg4 from '../../assets/images/lecture-4.jpg';
import LectureImg5 from '../../assets/images/lecture-5.jpg';
import LectureImg6 from '../../assets/images/lecture-6.jpg';
import LectureImg7 from '../../assets/images/lecture-7.jpg';
import LectureImg8 from '../../assets/images/lecture-8.jpg';
import CourseCard from "../../components/CourseCard/CourseCard.js";
import { Grid } from "../../lib/style/generalStyles.js";




const CoursesFrontPage = () => {
    return (
    <>
        <Header isSecondary={true} />
        <Main>
            
            <Section 
            title={"All courses"} 
            actionText={"Learn something new"}
            buttonText={"Go back"}
            linkToPage={"/"}
           
            >
            
            <Grid>
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
                        <CourseCard
                            imgSrc={LectureImg5}
                            imgAlt={'JS Basics'}
                            title={'5. JavaScript Basics'}
                            subtitle={'60 Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg6}
                            imgAlt={'Advanced JS'}
                            title={'6. Advanced JavaScript'}
                            subtitle={'60 Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg7}
                            imgAlt={'Intro to React'}
                            title={'7. Intro to React'}
                            subtitle={'120 Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg8}
                            imgAlt={'React Events'}
                            title={'8. React events and conditionals'}
                            subtitle={'120+ Minutes'}
                        />

            </Grid>
        
            </Section>
            
    </Main>
    </>
    );
};

export default CoursesFrontPage;