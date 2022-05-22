import React from 'react';
import Button from '../Button/Button';
// import './Section.scss';
import {Link} from "react-router-dom";
import {
    Section as SectionWrapper,
    SectionInner,
    ActionText,
    Heading,
    Title,
    
} from "./SectionStyle";

const Section = ({
    isSecondary,
    actionText,
    title,
    buttonText,
    linkToPage,
    isHeadingVisible = true,
    children,
}) => {
    return (
        <SectionWrapper isSecondary={isSecondary}>
            <SectionInner>
                {actionText && <ActionText>{actionText}</ActionText>}
                {isHeadingVisible && <Heading>
                    {title && <Title>{title}</Title>}
                    {buttonText && <Link to={linkToPage}><Button isHeading isOutline >{buttonText}</Button></Link>}
                </Heading>}
                {children}
        </SectionInner>
        </SectionWrapper>
    );
};

export default Section;