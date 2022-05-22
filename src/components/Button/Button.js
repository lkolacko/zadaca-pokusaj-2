import { Button as ButtonWrapper } from "./ButtonStyle";
// import "./Button.scss";

const Button = ({ isHeading, isSecondary, isNav, isOutline, children}) => {
    
    // const modifierClasses = {
    //     secondary: 'Button_secondary',
    //     nav: 'Button_nav',
    //     landing: 'Button_landing',
    //     heading: 'Button_heading',
    //     outline: 'Button_outline',
    // };


    return (    
        <ButtonWrapper isSecondary={isSecondary} isNav={isNav} isOutline={isOutline} isHeading={isHeading}  >{children}</ButtonWrapper>
    );
};

export default Button;


// const Button = ({ modifiers, children}) => {
    
//     const modifierClasses = {
//         secondary: 'Button_secondary',
//         nav: 'Button_nav',
//         landing: 'Button_landing',
//         heading: 'Button_heading',
//         outline: 'Button_outline',
//     };

//     let buttonClass = "Button";

//         modifiers.map(modifier => (buttonClass += " " + modifierClasses[modifier]));

//     return (    
//         <button className={buttonClass}>{children}</button>
//     );
// };

// export default Button;

