import styled from "styled-components";
import {colors} from "../../lib/style/theme";


export const Button = styled.button`
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    font-size: 16px;
    width: 220px;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    border-radius: 30px;
    font-weight: 500;
    text-transform: uppercase;
    
    &:hover {
        transition: all 0.3 ease-in-out;
        filter: drop-shadow(0 3px ${colors.textPrimary});
    }

    ${props => props.isSecondary && `
        background: ${colors.primary};
        color: ${colors.secondary};
    `}

    ${props => props.isNav && `
        width: 150px;
        &:hover{
            transition: all 0.3s ease-in-out;
            filter: drop-shadow(0 3px 3px ${colors.black});
        }
    `}
    ${props => props.isOutline && `
        border: 1px solid ${colors.primary};
    `}
   ${props => props.isHeading && `
        width: 200px;
    `}
`;
