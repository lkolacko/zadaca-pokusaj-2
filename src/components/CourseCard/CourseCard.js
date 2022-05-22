import React from 'react';
import {
    Course,
    Figure,
    Image,
    Title,
    Subtitle,
} from "./CourseCardStyle"


const CourseCard = ({
    imgSrc,
    imgAlt,
    title,
    subtitle,
    courseId,
}) => {
  return (
    <Course to={`/course/${courseId}`}>
            <Figure>
                <Image src={imgSrc} alt={imgAlt} />   
            </Figure>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
    </Course>
    );
}

export default CourseCard;