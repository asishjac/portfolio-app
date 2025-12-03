import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <div className="section">
                <h2>Profile</h2>
                <ul>
                    <li>Passionate software developer with strong expertise in DevOps and microservices, currently delivering mission-critical payment solutions for Mastercard Norway.</li>
                    <li>Over 8 years of IT experience across banking and insurance domains, with a proven ability to design and deliver secure, scalable web and microservice-based applications in fast-paced environments.</li>
                    <li>Major contributor to the Brevgiro project, executing a full application rewrite to replace Nets services with Mastercard, ensuring minimal service disruption and full compliance with Mastercard standards.</li>
                    <li>Engineered fullstack solutions: backend services in Java (Spring Boot) and React-based front ends.</li>
                    <li>Designed and developed RESTful microservices using the OpenAPI Specification, ensuring consistent API design and comprehensive documentation.</li>
                    <li>Implemented scalable microservices on Azure (AKS) for container orchestration and deployment.</li>
                    <li>Experience with security frameworks, including Role-Based Access Control(RBAC), Relationship-Based Access Control(ReBAC), and JWT for secure authentication and authorization mechanisms.</li>
                    <li>Extensive experience working in Agile development environments, fostering cross-functional collaboration and rapid iteration.</li>
                    <li>Conducted in-depth code reviews and provided mentorship to team members, promoting best practices and high-quality code development.</li>
                    <li>Experimented with Spring AI to integrate language models into backend services using an MCP server/client architecture.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Employment History</h2>

                <div className="job">
                    <div className="job-header">
                        <h3>Senior Software Developer, Tata Consultancy Services, Oslo</h3>
                        <span className="date">SEPT 2021 — PRESENT</span>
                    </div>
                    <p><strong>Client:</strong> Mastercard</p>
                    <p><strong>Product:</strong> Brevgiro</p>
                    <p><strong>Project Description:</strong> Brevgiro is a paper-based invoicing solution in Norway. The project was to create applications to handle the processing of scanned giros by validating the data and authenticity and thereby process the bill payments.</p>
                </div>

                <div className="job">
                    <div className="job-header">
                        <h3>Software Developer, Tata Consultancy Services, Kochi</h3>
                        <span className="date">SEPT 2017 — SEPT 2021</span>
                    </div>
                    <p><strong>Client:</strong> Sanlam Life Insurance Ltd</p>
                    <p><strong>Product:</strong> Epsilon</p>
                    <p><strong>Project Description:</strong> Sanlam is the largest insurance company in South Africa. Sanlam decided to fasten its release of new products/features into the market to compete with other insurance providers, but its IT release cycle was a bottleneck for this. TCS did a study on its IT processes and devised a roadmap to reduce these. Implementing the same to enhance the DevOps transformation journey was the crux of this project.</p>
                </div>
            </div>

            <div className="section">
                <h2>Personal Projects</h2>

                <div className="job">
                    <h3>Chatr App <span style={{ fontSize: '0.8em', fontWeight: 'normal', color: '#666' }}>(Development in Progress)</span></h3>
                    <p>A messaging application that allows users to send and receive messages, manage contacts, and update their profiles. It is built with Node.js, Express, MongoDB, and integrates with Cloudinary for image uploads.</p>
                </div>

                <div className="job">
                    <h3>Event-driven pipeline — Stream ingestion (tweets), processing and query architecture <span style={{ fontSize: '0.8em', fontWeight: 'normal', color: '#666' }}>(Development in Progress)</span></h3>
                    <p>This repository implements a event-driven architecture that ingests data from an external source (X), publishes events to Apache Kafka, and processes those events with downstream services for search, analytics and query APIs.</p>
                </div>
            </div>

            <div className="section">
                <h2>Education</h2>
                <div className="job">
                    <div className="job-header">
                        <h3>B.Tech in Computer Science And Engineering, Cochin University Of Science And Technology</h3>
                        <span className="date">AUG 2013 — MAY 2017</span>
                    </div>
                    <p>Graduated with distinction.</p>
                </div>
            </div>

            <div className="section">
                <h2>AGILE EXPERIENCE</h2>
                <ul>
                    <li>Experience in working Agile teams with distributed delivery model.</li>
                    <li>Have good exposure in all agile ceremonies from sprint planning to retrospective meeting.</li>
                    <li>Guide team in Code review and Support peer programming.</li>
                    <li>Good in using tools like Jira and confluence and CI/CD tools for agility in delivery.</li>
                </ul>
            </div>

            <div className="section">
                <h2>INTERNATIONAL EXPERIENCE</h2>
                <ul>
                    <li>Cape Town, South Africa as a consultant in Sanlam</li>
                    <li>Oslo, Norway as a consultant in Mastercard.</li>
                </ul>
            </div>
            <style>{`
        .main-content {
            flex-grow: 1;
            padding: 40px;
            background-color: var(--main-bg);
            color: var(--main-text);
        }
        .section {
            margin-bottom: 40px;
        }
        h2 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #1a2f4b; /* Dark blue from sidebar */
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            text-transform: uppercase;
        }
        ul {
            list-style-position: outside;
            padding-left: 20px;
            margin-left: 10px;
        }
        li {
            margin-bottom: 10px;
            font-size: 14px;
        }
        .job {
            margin-bottom: 25px;
        }
        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 5px;
            flex-wrap: wrap;
        }
        .job h3 {
            font-size: 16px;
            font-weight: bold;
            color: #000;
            font-family: var(--font-sans);
        }
        .date {
            font-size: 12px;
            color: #888;
            font-weight: bold;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .job p {
            font-size: 14px;
            margin-bottom: 5px;
        }
      `}</style>
        </main>
    );
};

export default MainContent;
