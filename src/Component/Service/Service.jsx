import React from 'react';
import styled from 'styled-components';
import Woman2 from "../../img/woman2.png"
import MiniCard from '../MiniCard/MiniCard';
import Play from '../../img/play.png'
import { useState } from 'react';


const Container = styled.div`
    display:flex;
    height: 100%;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;
const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;
const Image = styled.img`
    display: ${(props) => props.open && "none"};
    width: 58%;
    margin-top: 10%;
    margin-left: 15%;

    
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        padding:20px;
    }
`;

const Title = styled.h1``;
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
    `;

const Modal = styled.div`
width: 100vw;
heigth:vh;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;
const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center`;

    const Icon = styled.img`
    width: 20px;
    margin-right: 10px`;

    const Video = styled.video `
    display: ${(props) => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 34%;    
    right: 0;
    @media only screen and (max-width: 480px) {
       width: 100%;
    
    `;


export default function Service() {

    const smallScreen = window.screen.width <= 480 ? true : false;
    const [open, setOpen] = useState(false)
  return <Container>
            <Left><Image open ={open} src={Woman2}/>
                  <Video  open ={open} autoPlay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design,
                        development, lead generation and communications requirents. We work
                        with you, not for you. Although we have a great resources
                    </Desc>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>    
                    </CardContainer>
                    <Button onClick={() => setOpen(!open)}>
                        <Icon src={Play} />How it work</Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
            <Modal>
                <Video open ={open} autoPlay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
            </Modal>)}
         </Container>
}
