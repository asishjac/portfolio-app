import React from 'react';
import profileImage from '../assets/AsishJacob.jpeg';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="profile-section">
                {/* Placeholder for profile image if available, otherwise initials or empty */}
                <div className="profile-image-placeholder">
                    <img src={profileImage} alt="Asish Jacob" style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} />
                </div>
                <h1>Asish Jacob</h1>
                <hr className="divider" />
                <p className="title">SENIOR SOFTWARE DEVELOPER</p>
            </div>

            <div className="section">
                <h3>Details</h3>
                <p>Kirkeveien (Bygg E) 166 Leil. 408</p>
                <p>Oslo, 0450</p>
                <p>Norway</p>
                <p>+47 46224319</p>
                <p><a href="mailto:asishjac@gmail.com">asishjac@gmail.com</a></p>
                <br />
                <p className="label">DATE OF BIRTH</p>
                <p>07-05-1994</p>
            </div>

            <div className="section">
                <h3>Skills</h3>
                <div className="skill-group">
                    <p className="skill-label">Programming Language:</p>
                    <p>Java, TypeScript</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Frameworks:</p>
                    <p>Spring Boot, React, Angular, Hibernate, JPA, Cucumber, Flyway</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Web Services:</p>
                    <p>Rest/API</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Servers:</p>
                    <p>Tomcat, Jetty</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">SCM:</p>
                    <p>SVN, GIT</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Build:</p>
                    <p>Gradle, Maven</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">CI/CD:</p>
                    <p>BitBucket, GitHub, Bamboo, Jenkins, XLDeploy, Nexus, Docker, Flyway, Splunk, Dynatrace, Kubernetes, Jira, Gitlab CI</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Event Streaming:</p>
                    <p>Apache Kafka</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Cloud Services:</p>
                    <p>Azure, AWS</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Code Analyzer:</p>
                    <p>Sonarqube</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Testing:</p>
                    <p>Junit, Mockito, TDD, BDD</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">DB:</p>
                    <p>Oracle, MySQL, SQL Server, Mongo DB</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Scripting:</p>
                    <p>Shell scripting, Windows Batch, Groovy</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">Security Frameworks:</p>
                    <p>OAuth2, Role-Based Access Control (RBAC), Relationship-Based Access Control (ReBAC), JWT</p>
                </div>
                <div className="skill-group">
                    <p className="skill-label">AI Tools:</p>
                    <p>GitHub Copilot</p>
                </div>
            </div>

            <div className="section">
                <h3>Languages</h3>
                <div className="language-item">
                    <p>English</p>
                    <div className="progress-bar"><div className="progress" style={{ width: '100%' }}></div></div>
                </div>
                <div className="language-item">
                    <p>Norwegian</p>
                    <div className="progress-bar"><div className="progress" style={{ width: '60%' }}></div></div>
                </div>
                <div className="language-item">
                    <p>Malayalam</p>
                    <div className="progress-bar"><div className="progress" style={{ width: '100%' }}></div></div>
                </div>
                <div className="language-item">
                    <p>Hindi</p>
                    <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
                </div>
            </div>

            <div className="section">
                <h3>Links</h3>
                <p><a href="#">LinkedIn</a></p>
                <p><a href="#">GitHub</a></p>
            </div>

            <style>{`
        .sidebar {
            background-color: var(--sidebar-bg);
            color: var(--sidebar-text);
            padding: 40px;
            width: 100%;
            flex-shrink: 0;
        }
        @media (min-width: 768px) {
            .sidebar {
                width: 300px;
                min-height: 100vh;
            }
        }
        .profile-section {
            text-align: center;
            margin-bottom: 40px;
        }
        .profile-image-placeholder {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
        }
        .profile-section h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .divider {
            border: 0;
            height: 1px;
            background: var(--accent-color);
            width: 50px;
            margin: 10px auto;
        }
        .title {
            font-size: 10px;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0.8;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h3 {
            font-size: 18px;
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            padding-bottom: 5px;
        }
        .section p {
            font-size: 12px;
            margin-bottom: 5px;
            line-height: 1.4;
        }
        .section a {
            text-decoration: underline;
        }
        .label {
            font-size: 10px;
            opacity: 0.7;
            margin-top: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .skill-group {
            margin-bottom: 10px;
        }
        .skill-label {
            font-weight: bold;
            color: #ccc;
        }
        .progress-bar {
            background: rgba(255,255,255,0.2);
            height: 4px;
            width: 100%;
            margin-top: 2px;
            margin-bottom: 10px;
        }
        .progress {
            background: #fff;
            height: 100%;
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;
