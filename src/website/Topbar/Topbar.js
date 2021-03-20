import React from 'react';
import './Topbar.css';

class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.topbar = React.createRef();

        this.onScroll();
    }

    scrollToElm(elmId) {
        var element = document.getElementById(elmId);
        var winHeight = window.innerHeight || document.documentElement.offsetHeight;
        var realOffset = winHeight/10 || 100;
        window.scrollTo({top: element.offsetTop - realOffset, left: 0, behavior: 'smooth'})
    }

    onScroll() {
        window.onscroll = () => {
            var winHeight = window.innerHeight || document.documentElement.offsetHeight;
            var changeZone = winHeight/4 || 200;

            if (window.scrollY > changeZone) {
                this.topbar.current.style.backgroundColor = 'rgb(93, 83, 94)';
                this.topbar.current.style.color = 'white';
            } else if (window.scrollY <= changeZone) {
                this.topbar.current.style.backgroundColor = 'transparent';
                this.topbar.current.style.color = 'black';
            }
        }
    }

    render() {
        return(
            <div id="topbar" ref={this.topbar}>
                <div>
                    <h2 onClick={() => this.scrollToElm('home')}>HOME</h2>
                    <h2 onClick={() => this.scrollToElm('about')}>ABOUT</h2>
                    <h2 onClick={() => this.scrollToElm('contact')}>CONTACT</h2>
                </div>
            </div>
        );
    }
};

export default Topbar;