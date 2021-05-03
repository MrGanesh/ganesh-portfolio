import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import axios from 'axios'
function ImageSection() {

    const downloadCV =  (e) => {
        alert("Please wait, download will start soon!!!")
        axios({
            method: 'get',
            url: 'https://resume-download.herokuapp.com/download/',
          responseType: 'blob',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
            link.setAttribute('download', 'cv.pdf');
                document.body.appendChild(link);
                link.click();

                alert("CV downloaded successfully, Thank you for you patience!!")
            })
            .catch((error) => {
                alert(error);
            })
       }
    //    (e) => 
    //     console.log('button is clicked')
    //     fetch('http://localhost:5000/download',{
    //         method:'get'
    //     })
        // fetch('https://resume-download.herokuapp.com/download')
    



    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Ganesh Kulkarni</span></h4>
                <p className="paragraph">
                I am a software engineer by profession, graduated from Sinhgad College of Enginnering in 
             Computer Science and Engineering.  An enthusiastic person who is ready to take up challenges and
              can quickly adapt new technologies and environment. I am confident
              open minded and flexible guy. I love dancing and watching movies.
              A team player and Self Motivated person with great passion towards
              work.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Role</p>
                    </div>
                    <div className="info">
                        <p>: Ganesh Kulkarni</p>
                        <p>: 23</p>
                        <p>: Indian</p>
                        <p>: English,Hindi,Marathi </p>
                        <p>: Pune, Maharashtra</p>
                        <p>: Full Stack Web Devloper</p>
                    </div>
                </div>
                <PrimaryButtonStyled  onClick={(e)=> downloadCV(e)} >Download CV</PrimaryButtonStyled> 
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

const PrimaryButtonStyled = styled.a`
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
`;
export default ImageSection;
