import React from 'react';
import styled from 'styled-components';
import Map from '../../img/map.png';
import  Phone from '../../img/phone.png';
import Send from '../../img/send.png';


const Container = styled.div`   
    background: url("https://dean2020.edu.vn/wp-content/uploads/2021/04/anh-nen-trang-2.jpg");
    height: 90%;
    background-repeat: no-repeat;
    background-size:100% 100%;
    
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
`;

const FormContainer =styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        width: 100%;

`;
const Form = styled.form `
    height: 250px;
    display:flex;
    align-items: center;  
    justify-content: center;
    @media only screen and (max-width: 480px) {
        flex-direction: column;  
`;

const LeftForm = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        heigth: 50%;
        margin-right: 0;`;

const RightForm =styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        heigth: 50%;
`;

const AddressContainer = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px) {
        width: 100%`;

const Input = styled.input `
    width: 200px;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        padding:5px;

`;

const Title = styled.h1`
margin: 50px;
margin-top : 0;
@media only screen and (max-width: 480px) {
    margin: 20px;`;

const Button  =styled.button`
    border: none;
    background-color: darkblue;
    font-size: 16px;
    padding: 15px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        margin-top: 20px
`;

const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        padding: 5px;
        margin-top: 20px

`;

const AddressItem = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 480px) {
        margin: 20px 0`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        width: 15px;
    `;
const Text = styled.span`
    font-size: 20px;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        font-size: 12px`;



export default function Contact() {
  return <Container>
      <Wrapper>
          <FormContainer>
              <Title>Question? <br/>
              Let't Get In Touch</Title>
              <Form>
                <LeftForm>
                    <Input placeholder='Your Name'/>
                    <Input placeholder='Your Email'/>
                    <Input placeholder='Subject'/>
                </LeftForm>
                <RightForm>
                    <TextArea placeholder='Your Message'/>
                    <Button>Send</Button>
                </RightForm>
              </Form>
          </FormContainer>
          <AddressContainer>
            <AddressItem>
                <Icon src={Map}/>
                <Text>123 Park avenue St., New York, USA</Text>
            </AddressItem>
            <AddressItem>
                <Icon src={Phone}/>
                <Text>+123 456 7891</Text>
                <Text>+123 656 2391</Text>
            </AddressItem>
            <AddressItem>
                <Icon src={Send}/>
                <Text>contact@lama.dev</Text>
                <Text>sales@lama.dev</Text>
            </AddressItem>
          </AddressContainer>
      </Wrapper>
        </Container>;
}
