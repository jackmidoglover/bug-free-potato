import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import "./Projects.css";
import ProjectData from "./ProjectData.json";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";

export default class Projects extends Component {

    render() {
        return (
            <>
                <Hero
                    title="Projects" />
                <div className="container">
                    <div className="row">
                        {ProjectData.map(project => {
                            return (<PortfolioCard
                                title={project.title}
                                imagePath={project.imagePath}
                                projectLink={project.projectLink}
                                repoLink={project.repoLink}
                                description={project.description}
                                technologies={project.technologies} />)
                        })}
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}