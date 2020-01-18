import React, { Component } from "react"; 
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Projects.css";
import ProjectData from "./ProjectData.json";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";

export default class Projects extends Component {

    render() {
        return (
            <>
              <div className="container grid-container">
                  <div className="row">
                {ProjectData.map(project => {
                    return (<PortfolioCard 
                        title={project.title}
                        imagePath={project.imagePath}
                        projectLink={project.projectLink}
                        repoLink={project.repoLink}
                    description={project.description} /> )
                })}
                </div>
              </div>
                <Footer />
            </>
        )
    }
}