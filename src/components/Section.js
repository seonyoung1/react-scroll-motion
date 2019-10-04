import React from 'react';
import styled from "styled-components";

const Item = styled.section`
    width:100%;min-height:100vh;padding:50px 0;text-align:center;background-color:transparent;
`;

const useScroll = () => {

};

const Section = ({ id, color }) => {
    return (
        <Item bgcolor={color}>
            section-{id}
        </Item>
    );
};

export default Section;
