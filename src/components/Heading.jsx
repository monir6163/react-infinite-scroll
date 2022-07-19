import React from "react";
import styled from "styled-components";

const Header = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-align: center;
`;

const H1 = styled.h1`
    font-family: "Oswald", sans-serif;
    margin-bottom: 1em;
`;
const Heading = () => {
    return (
        <Header>
            <H1>Json Place Holder</H1>
            <p>The internet’s source of freely usable images.</p>
            <p>Powered by creators everywhere.</p>
            {/* <form>
        <Input type="text" placeholder="Search photos" />
        <Button>Search</Button>
      </form> */}
        </Header>
    );
};

export default Heading;
