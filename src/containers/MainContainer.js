import React from 'react';
import Section from "../components/Section";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

const MainContainer = () => {
    return (
        <div>
            <Intro color="#a29bfe" />
            <Section id="1" color="#55efc4" />
            <Section id="2" color="#636e72" />
            <Section id="3" color="#fdcb6e" />
            <Section id="4" color="#6c5ce7" />
            <Footer />
        </div>
    );
};

export default MainContainer;
