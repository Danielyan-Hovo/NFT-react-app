import React from 'react';
import styled from "styled-components";

const LogoText = styled.h1`
font-size: ${props=>props.theme.fontxxxl};
font-family: "Akaya Telivigala",cursive;
color:${props=>props.theme.text};
transition: all 0.2s ease;  
&:hover{
  transform: scale(1.1);
}
  
  @media(max-width: 64em){
    font-size: ${props=>props.theme.fontxxl};
  }
`

const Logo = () => {
    return (
        <LogoText>
            W.
        </LogoText>
    );
};

export default Logo;