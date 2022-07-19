import React from "react";
import styled from "styled-components";
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    over-follow: hidden;
`;
const UnsplashImage = ({ url, key }) => {
    return <Img src={url} key={key} alt="unspash" />;
};

export default UnsplashImage;
