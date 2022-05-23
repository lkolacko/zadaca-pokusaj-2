import React from 'react';
import Button from '../Button/Button';
// import './Section.scss';
import {Link} from "react-router-dom";
import {
    Section as SectionWrapper,
    SectionInner,
    ActionText,
    Heading,
    SectionTitleH2,
    SectionTitleH1,
} from "./SectionStyle";

const Section = ({
    isTestimonial,
    actionText,
    title,
    buttonText,
    linkToPage,
    isHeadingVisible = true,
    children,
    isMainSection = false,
    isCentered = false,
}) => {
    return (
        <SectionWrapper isTestimonial={isTestimonial}>
            <SectionInner>
                {actionText && <ActionText>{actionText}</ActionText>}
                {isHeadingVisible && 
                <Heading>
                    {title && (isMainSection ? 
                        <SectionTitleH1 isCentered={isCentered}>{title}</SectionTitleH1> 
                        : 
                        <SectionTitleH2 isCentered={isCentered}>{title}</SectionTitleH2>)}
                    {buttonText && <Link to={linkToPage}><Button isHeading isOutline >{buttonText}</Button></Link>}
                </Heading>}
                {children}
        </SectionInner>
        </SectionWrapper>
    );
};

export default Section;