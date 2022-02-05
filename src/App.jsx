import styled from "styled-components";
import { css } from "styled-components";
import Contact from "./Component/Contact.jsx/Contact";
import Feature from "./Component/Feature/Feature";
import { Footer } from "./Component/Footer/Footer";
import Intro from "./Component/Intro/Intro";
import { Navbar } from "./Component/Navbar/Navbar";
import Prices from "./Component/Prices/Prices";
import Service from "./Component/Service/Service";


const Container = styled.div`
    height:100vh;
    overflow: hidden;
    position: relative;
    `;

const Shape = css`
    width:100%;
    height:100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
`;

const IntoShape = styled.div`
    ${Shape}    
    clip-path: polygon(64% 0, 100% 0, 100% 100%, 48% 100%);
    background-color: crimson;
`;

const FeatureShape = styled.div`
    ${Shape} 
    clip-path: polygon(0 0, 48% 0, 36% 100%, 0% 100%);
    background-color: pink;
`;

const ServiceShape = styled.div`
    ${Shape} 
    clip-path: polygon(0 0, 36% 0, 36% 100%, 0% 100%);
    background-color: #f88497;
    @media only screen and (max-width: 480px) {
        background-color: #c197e89e;
    }
`;

const PriceShape = styled.div`
    ${Shape} 
    clip-path: polygon(36% 0, 100% 0, 100% 100%, 64% 100%);
    background-color: crimson;
    
`;


const App = () => {
    const smallScreen = window.screen.width <= 480 ? true : false;

  return    <> <Container>
                    <Navbar/>
                    <Intro/>
                    <IntoShape/>
                </Container>
                <Container>
                    <Feature/>
                    <FeatureShape/>
                </Container>
                <Container>
                    <Service/>
                    {!smallScreen && <ServiceShape/>}
                </Container>
                <Container>
                   <Prices/>
                   <PriceShape/>
                </Container>
                <Container>
                   <Contact/>
                   <Footer/>
                </Container>
            </>
};

export default App;