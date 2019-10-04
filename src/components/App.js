import React from 'react';
import GlobalStyled from "../assets/GlobalStyles";
import MainContainer from "../containers/MainContainer";

const App = () => {
    return (
        <div className="wrapper">
            <GlobalStyled />
            <MainContainer />
        </div>
    );
};

export default App;
