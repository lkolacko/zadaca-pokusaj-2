import React from "react";
import Grid from "../../components/Grid/Grid.js";
import Header from "../../components/Header/Header.js";
import Landing from "../../components/Landing/Landing.js";
import Main from "../../components/Main/Main.js";
import Section from "../../components/Section/Section.js";
import LectureImg1 from '../../assets/images/lecture-1.jpg';
import LectureImg2 from '../../assets/images/lecture-2.jpg';
import LectureImg3 from '../../assets/images/lecture-3.jpg';
import LectureImg4 from '../../assets/images/lecture-4.jpg';
import CourseCard from "../../components/CourseCard/CourseCard.js";
import Testimonial from "../../components/Testimonial/Testimonial.js";

import '../../theme.scss';


const Home = () => {
    return (
    <>
        <Header modifiers={[""]}/>
        <Main>
            <section>
                <Landing/>
            </section>
            <Section 
                title={"Open new possibilities"} 
                actionText={"Learn something new"}
                buttonText={"More courses"}
                linkToPage={"/allcourses"}
                
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

                </Grid>
                    </Section>
            
            <Section isHeadingVisible={false} modifiers={["testimonials"]}>
                    <Testimonial />
            </Section>
        </Main>
    </>
    );
}

export default Home;