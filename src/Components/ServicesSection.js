import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Roles'} span={'Roles'} />
                <div className="services">
                    <ServiceCard
                        image={gamedev}
                        title={'Front End Web Devlopment'}
                    // paragraph={'I can create responsive web sites using front end technologies such as React,HTML,CSS,Bootstrap,Javascript.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={intelligence}
                            title={'Back End Web Devlopment'}
                        // paragraph={'Able to build fully functional back end using NodeJS,MongoDB,ExpressJS.'}
                        />
                    </div>
                    <ServiceCard
                        image={gamedev}
                        title={'Full Stack Web Devlopment'}
                    // paragraph={'Able to build fully functional application using front end and back end technologies.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
