import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import emailjs from 'emailjs-com'
function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7130urr', 'template_6md5mep', e.target, 'user_rpZx5A69Np5w39pqAGZd1')
            .then((result) => {

                alert('Thank you for contacting me, I will get back to you soon!!!')
            }, (error) => {

                alert('Oops something wrong happened : ', error.text)
            });
    }

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" onSubmit={(e) => sendEmail(e)}>
                            <div className="form-field">
                                <label htmlFor="name"  >Enter your name*</label>
                                <input type="text" name="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your email*</label>
                                <input type="email" name="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"  >Enter your subject</label>
                                <input type="text" name="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea name="textarea" name="message" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                {/* <PrimaryButton title={'Send Email'} /> */}
                                <button type="submit" >Send Email</button>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont1={'+91-9404286558'} cont2={'+91-8600252806'} />
                        <ContactItem title={'Email'} icon={email} cont1={'ganeshkulkarni689@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'Pune , Maharashtra'} cont2={'India'} />

                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
                button{
                    
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }

                }
            }

            
        }
    }
`;

export default ContactPage
