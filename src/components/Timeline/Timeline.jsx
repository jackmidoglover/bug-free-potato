import React from "react";

const Timeline = (props) => {
    return (
        <div className="time-box">
                                <svg height="100%" width ="40">
                                        <line x1="20" y1="0" x2="20" y1="100%" style={{ stroke: "#4db6ac", strokeWidth: 8, strokeDasharray: "10,10"}}></line>
                                </svg>
                                <div className="time-flex">
                                    <div className="col">
                                        <svg width="100%" viewBox="0 0 100 100" className="ci-1" preserveAspectRatio="none">
                                            <circle cx="30" cy="30" r="16" fill="#4db6ac" />
                                            <line x1="30" y1="30" x2="100%" y2="30" style={{ stroke: "#4db6ac", strokeWidth: 4}}></line>
                                        </svg>
                                    </div>
                                    <div className="col"></div>
                                </div>
                                <div className="time-flex">
                                    <div className="col">
                                    <p>
                                            <strong>February 2019</strong>
                                            <br />
                                            Hired as Junior Web Developer at the Denver Center for the Performing Arts
                                        </p>
                                        </div>
                                        
                                        <div className="col">
                                        <svg width="100%" viewBox="0 0 100 100" className="ci-1" preserveAspectRatio="none">
                                            <line x1="0" y1="50" x2="70%" y2="50" style={{ stroke: "#4db6ac", strokeWidth: 4}}></line>
                                            <circle cx="70%" cy="50" r="16" fill="#4db6ac" />
                                        </svg>
                                        </div>
                                </div>
                                <div className="time-flex">
                                    <div className="col">
                                
                                    </div>
                                    <div className="col">
                                    <p>
                                            <strong>August 2018</strong> <br />
                                            Hired as Tutor and Teaching Assistant for Trilogy Education Services
                                        </p>
                                    </div>
                                </div>
                                <div className="time-flex">
                                    <div className="col">
                                    <svg width="100%" viewBox="0 0 100 100" className="ci-1" preserveAspectRatio="none">
                                            <circle cx="30" cy="30" r="16" fill="#4db6ac" />
                                            <line x1="30" y1="30" x2="100%" y2="30" style={{ stroke: "#4db6ac", strokeWidth: 4}}></line>
                                        </svg>
                                    </div>
                                    <div className="col">
                                        
                                    </div>
                                </div>
                                <div className="time-flex">
                                    <div className="col">
                                    <p>
                                            <strong>August 2018</strong> <br />
                                            Hired as Tutor and Teaching Assistant for Trilogy Education Services
                                        </p>
                                    </div>
                                    <div className="col">
                                    <svg width="100%" viewBox="0 0 100 100" className="ci-1" preserveAspectRatio="none">
                                            <line x1="0" y1="50" x2="70%" y2="50" style={{ stroke: "#4db6ac", strokeWidth: 4}}></line>
                                            <circle cx="70%" cy="50" r="16" fill="#4db6ac" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="time-flex">
                                    <div className="col">
                                    
                                    </div>
                                    <div className="col">
                                        <br />
                                        <p>
                                            <strong>January 2018 </strong>
                                            <br />
                                            Enrolled at Denver University's Coding Bootcamp
                                        </p>
                                    </div>
                                </div>
                                
                            </div>    
    )
}

export default Timeline;