import React from 'react'
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Ganesh Kulkarni</span></h1>
                <p>
                I am a software engineer by profession.
                An enthusiastic person who is ready to take up challenges and
                can quickly adapt new technologies and environment. I am confident
                open minded and flexible guy.  
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ganesh-kulkarni-80aa32154" className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/MrGanesh" className="icon i-github">
                        <GithubIcon />
                    </a>
                   
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
