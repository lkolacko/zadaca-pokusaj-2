import React from "react";
import Button from "../Button/Button";
// import "./Landing.scss";
import LandingImg from "../../assets/images/landing.jpg";
import {
    Landing as LandingWrapper,
    LandingImg as Img,
    Overlay,
    OverlayPrimary,
    OverlaySecondary,
    Content,
    ContentInner,
    Title,
    Subtitle,
} from "./LandingStyle";

const Landing = () => {
    return (
        <LandingWrapper>
        <Img src={LandingImg} alt="Landing image"></Img>
        <Overlay>
            <OverlayPrimary></OverlayPrimary>
            <OverlaySecondary></OverlaySecondary>
        </Overlay>
        <Content>
            <ContentInner>
                <Title>Learn what matters with Speck and FOI</Title>
                <Subtitle>Make a turnaround in your career or upgrade your current skill set with knowledge-based lessons from IT pactices
                </Subtitle> 
                <Button modifiers={["landing"]}>
                    Explore Courses
                </Button>
            </ContentInner>
        </Content>
        </LandingWrapper>
    )
};

export default Landing;





// const Landing = () => {
//     return (    
//         <div className="Landing">
//         <img className="Landing-Img" src={LandingImg} alt="landing image"></img>
//         <div className="Landing-Overlay">
//             <div className="Landing-OverlayPrimary"></div>
//             <div className="Landing-OverlaySecondary"></div>
//         </div>
//         <div className="Landing-Content">
//             <div className="Landing-ContentInner">
//                 <h1 className="Landing-Title">Learn what matters with Speck and FOI</h1>
//                  <p className="Landing-Subtitle">
//                 Make a turnaround in your career or upgrade your current skill set with knowledge-based lessons from IT pactices</p>
//                 <Button modifiers={["landing"]}>
//                     Explore Courses
//                 </Button>
//             </div>  
//         </div>
//     </div>
//     );
// }

// export default Landing;