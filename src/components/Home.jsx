import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

function Home(props) {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

const Container = styled.main`
    position:relative;
    min-height: 80vh;
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);

    &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home