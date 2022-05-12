import React from 'react'
import styled from 'styled-components'
import './Login.css'

function Login(props) {
    return (
        <section className='container'>
            <div className='content'>
                <CTA>
                    <CTAlogoOne src='/images/cta-logo-one.svg' alt='logo1' />
                    <a href="" className='sign-up'>GET ALL THERE</a>
                    <p className='description'>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a DisneyAbhi+ subscription. As of 03/26/2022, the price of DisneyAbhi+ and The Disney Bundle will increase by $1.  
                    </p>
                    <CTAlogoTwo src='/images/cta-logo-two.png' alt='logo2' />
                </CTA>
                <BgImage />
            </div>
        </section>
    )
}

const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    height:100%;
    position:absolute;
    background-position:top;
    background-size:cover;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`;

const CTA = styled.div`
    margin-bottom:2rem;
    max-width:650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:0;
    align-items:center;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    transition-timing-function:ease-out;
    transition:opacity 0.2s;
    width:100%;
`;

const CTAlogoOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`;
const CTAlogoTwo = styled.img`
    margin-bottom:20px;
    max-width:600px;
    display:inline-block;
    vertical-align:bottom;
    width:100%;
`;

export default Login