import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'08/2019 - 11/2020'}
                        title={'Associate Software Engineer'}
                        subTitle={'Accenture India Pvt Ltd (Front End Devlopment)'}
                        text={'1.4 years of experience with proficiency in front-end technologies ( Javascript / HTML / CSS/ Backbone. / Angular / Bootstrap / React and related frameworks) Strong working knowledge of front-end frameworks (ReactJS / AngularJS). Experience building reusable code and libraries for future use. Ensuring the technical feasibility of UI/UX designs Optimize application for maximum speed and scalability. Assure that all user input is validated before ubmitting to the back-end Collaborate with other team members and stakeholders.'}
                    />
                    <ResumeItem
                        year={'07/2020 - 11/2020'}
                        title={'Remote Part Time - Computer Science Expert'}
                        subTitle={'CourseHero)'}
                        text={'Got the opportunity to communicate with the students across different countries and regions such as the US, UK. Doing mini-application / projects and Solving doubts based on academic requirements on the latest technologies.'}
                    />

                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2016 - 2019'}
                        title={'Degree In Computer Engineering'}
                        subTitle={'Smt. Kashibai Navale College Of Engineering Vadgaon BK, Pune University'}
                        text={'Completed graduation with distinction. Participated in extra curricular activities. Achieved overall CGPA grade pointer of 8.50 .'}
                    />
                    <ResumeItem
                        year={'2013 - 2016'}
                        title={'Diploma In Computer Science and Engineering'}
                        subTitle={'Government Polytechnic Jalna'}
                        text={'Completed diploma with distinction. Participated in extra curricular activities. Achieved overall grade percentage of 83.25 .'}
                    />
                    <ResumeItem
                        year={'2012 - 2013'}
                        title={'Secondary School Certificate'}
                        subTitle={'S.V. Vidyalaya School'}
                        text={'Completed SSC with 87.00 percentile. Participated in extra curricular activities. '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
