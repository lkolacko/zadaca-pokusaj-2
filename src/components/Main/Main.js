// import "./Main.scss";
import {Main as MainWrapper} from "./MainStyle";

const Main = (props) => {
    return (    
        <MainWrapper className="Main">
            {props.children}
        </MainWrapper>
    );
}

export default Main;