import React from 'react';
import './About.css';

function ProjItem(props) {
    return(
        <div className="proj-list-item" onClick={() => {window.open(props.href, '_blank')}}>
            <img src={props.src} alt={props.alt}/>
            <h2 class="proj-list-item-title proj-item-title-text"><b>{props.alt}</b></h2>
            <h2 class="proj-list-item-desc proj-item-title-text">{props.children}</h2>
        </div>
    );
}

function About(props) {
    return(
        <div id="about">
            <h1 class="title">MY SKILLS</h1>
            <p>I'm a software developer with experience in both client and server applications. My skills range from web design to low-level C++ programming.
    I strive to achieve a simple, good-looking design while still providing the user with useful information.</p>
            <h2 class="title title-smaller">LANGUAGES I SPEAK</h2>
            <div id="img-list">
                <img src="imgs/cpp.png" draggable="false" alt="C++"/>
                <img src="imgs/css.png" draggable="false" alt="css"/>
                <img src="imgs/html.png" draggable="false" alt="html"/>
                <img src="imgs/js.png" draggable="false" alt="javascript"/>
                <img src="imgs/node.png" draggable="false" alt="node"/>
                <img src="imgs/python.png" draggable="false" alt="python"/>
                <img src="imgs/react.png" draggable="false" alt="react"/>
            </div>
            <h2 class="title title-smaller">PORTFOLIO</h2>
            <div id="proj-list">
                <ProjItem href="https://crypto-value-web.herokuapp.com/" src="https://crypto-value-web.herokuapp.com/logo512.png" alt="CryptoValue">CryptoValue is a service for monitoring crpytocurrency prices</ProjItem>
            </div>
        </div>
    );
}

export default About;