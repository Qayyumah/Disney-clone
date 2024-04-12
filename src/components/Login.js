import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg'/>
            <SignUp>Get All There</SignUp>
            <Description>
            The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world's premier entertainment company.
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png'/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
   

    &::before{
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
        opacity: 0.7;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`
const CTA = styled.div`
    max-width: 6500px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
   width: 100%;
   background-color: #0063e5;
   font-weight: bold;
   padding: 17px 0;
   color: #f9f9f9;
   border-radius: 4px;
   text-align: center;
   font-size: 18px;
   cursor: pointer;
   letter-spacing: 1.5px;
   margin-top: 8px;
   margin-bottom: 12px;
   transition: all 250ms;

   &:hover{
    background: #0483ee;
   }
`

const Description = styled.p`
   font-size: 15px;
   letter-spacing: 1.5px;
   text-align: center;
   line-height;
`
const CTALogoTwo = styled.img`
   width: 90%;
`