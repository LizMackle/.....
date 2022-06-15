import React from "react";
import "./Projects.css";
import { projectData } from "../../ProjectData";
import projecttitle from "../../images/appimages/Projectstitle.png";
import htmlImg from "../../images/skills/html.png";
import javascriptImg from "../../images/skills/javascript.png";
import mysqlImg from "../../images/skills/mysql.png";
import mongodbImg from "../../images/skills/mongodb.png";
import reactImg from "../../images/skills/react.png";
import nodejsImg from "../../images/skills/nodejs.jpg";
import gitImg from "../../images/skills/git.png";
import vscodeImg from "../../images/skills/vscode.png";
import bootstrapImg from "../../images/skills/bootstrap.png";
import { VscGithub } from 'react-icons/vsc';

function Skills() {
    const skillsList1 = [
        {
            src: htmlImg,
            altText: "html",
            title: "HTML"
        },
        {
            src: javascriptImg,
            altText: "js",
            title: "JavaScript"
        },
        {
            src: mysqlImg,
            altText: "mysql",
            title: "MySQL"
        },
        {
            src: mongodbImg,
            altText: "mongo",
            title: "MongoDB"
        },
        {
            src: nodejsImg,
            altText: "node",
            title: "Nodejs"
        },
        {
            src: reactImg,
            altText: "react",
            title: "React"
        },
        {
            src: gitImg,
            altText: "git",
            title: "Git"
        },
        {
            src: vscodeImg,
            altText: "vscode",
            title: "VS Code"
        },
        {
            src: bootstrapImg,
            altText: "bootstrap",
            title: "Bootstrap"
        },
    ]

    return (
        <div className="project-title">
            <div>
                <img
                    src={projecttitle}
                    alt="projecttitle"
                />
            </div>

            <div className="skillsList">
                {skillsList1.map((img) => (
                    <div className="skills-img">
                        <img
                            src={img.src}
                            alt={img.altText}
                        /><p>{img.title}</p>
                    </div>
                ))}
            </div>

            <div className="container justify-content-center d-flex" id="project-card">

                <div className="row">

                    {projectData.map((data) => {
                        return (
                            <div className="card-wrapper col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="card">
                                    <img src={data.src} variant="top" className="card-src" alt="card-images" />
                                    <div className="card-title"><h5>{data.title}</h5></div>
                                    <div className="card-links">
                                        <a href={data.deployedLink}>View deployed </a>|
                                        <a href={data.githubLink}> Github<VscGithub id="githubicon" size="1.3rem" color="#292b2c" /></a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
}
export default Skills;
