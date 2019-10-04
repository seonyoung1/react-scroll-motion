import React from 'react';
import styled from "styled-components";
import { useMotionEvent } from "../hooks";

const Item = styled.section`
    transition:background-color .5s ease-out;
    border-bottom:1px solid ${props => props.color}
    ${props => {
        if(props.active){
            return `background-color:${props.color}`
        }else{
            return `background-color:transparent`
        }
    }}
`;

const Section = ({ id, color }) => {
    const { isActive, content } = useMotionEvent();
    return (
        <Item color={color} active={isActive} ref={content} className={isActive ? "is-motion" : ""}>
            section-{id}
        </Item>
    );
};

export default Section;
