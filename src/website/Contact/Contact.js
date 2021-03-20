import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.contact = React.createRef();
    }

    invalid(prop, limit) {
        if (prop.value.length > limit) {
            prop.style.backgroundColor = '#FF7D7D';
        } else {
            prop.style.backgroundColor = '#9A9EAB'
        }
    }

    render() {
        return(
            <div id="contact" ref={this.contact}>
                <h1 className="title">CONTACT</h1>

                <form action="POST" id="contact-form">
                    <input type="text" name="name" placeholder="Name" onChange={(prop) => this.invalid(prop.target, 120)} id="contact-form-name"/>
                    <input type="email" name="email" placeholder="E-Mail" onChange={(prop) => this.invalid(prop.target, 120)} id="contact-form-email"/>
                    <textarea name="message" placeholder="Message" onChange={(prop) => this.invalid(prop.target, 3600)} id="contact-form-message"/>
                    <input type="button" value="Submit" id="contact-form-button"/>
                </form>

                <h2 className="title title-smaller">OTHER USEFUL INFO</h2>

                <div id="other-info">
                    <div>
                        <img src="imgs/github.png" alt="GH"/>
                        <h3><a href="https://github.com/luxxm" rel="noreferrer" target="_blank">Github</a></h3>
                    </div>
                    <div>
                        <img src="imgs/discord.png" alt="DC"/>
                        <h3>Lux#1223</h3>
                    </div>
                    <div>
                        <img src="imgs/email.png" alt="EM"/>
                        <h3>red_skylight@protonmail.com</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;