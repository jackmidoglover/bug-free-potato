import React, { Component } from "react";

export default class SkillGraph extends Component {
    state = {
        buttonTextState: true,
        buttonTextOne: "Hate skill graphs?",
        buttonTextTwo: "Here ya go!",
        copied: false, 
        copyTextOne: "Copy", 
        copyTextTwo: "Copied!"
    }

    hateSkillButton = () => {
        this.setState({
            buttonTextState: !this.state.buttonTextState
        })
    }

    copyToClipboard = (e) => {
        this.textArea.select(); 
        document.execCommand('copy'); 
        e.target.focus();
        this.setState({ 
            copied: !this.state.copied
        })

    }

    render() {
        return (
            <>
                <div className="chart-box">
                    <table id="skill-graph">
                        <tbody>
                            <tr className="skill" id="s1">
                                <td className="percentage">
                                    <span className="skill-label">HTML</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s2">
                                <td className="percentage">
                                    <span className="skill-label">CSS</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s3">
                                <td className="percentage">
                                    <span className="skill-label">JavaScript</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s4">
                                <td className="percentage">
                                    <span className="skill-label">React</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s5">
                                <td className="percentage">
                                    <span className="skill-label">Wordpress</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s6">
                                <td className="percentage">
                                    <span className="skill-label">Node</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s7">
                                <td className="percentage">
                                    <span className="skill-label">Express</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s8">
                                <td className="percentage">
                                    <span className="skill-label">Mongo</span>
                                </td>
                            </tr>
                            <tr className="skill" id="s9">
                                <td className="percentage">
                                    <span className="skill-label">MySQL</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="copyboard">
                    <button className="btn-large star" onClick={this.hateSkillButton}>{this.state.buttonTextState ? this.state.buttonTextOne : this.state.buttonTextTwo}</button>
                    <br /><br />
                    <div className={(this.state.buttonTextState ? "hide" : "show")}>
                    <form>
                        <textarea 
                            ref={(textarea) => this.textArea = textarea}
                            value="HTML5, CSS3, JavaScript ES5 &amp; ES6, React, Wordpress, Node, Express, Mongo, MySQL, Email Development, Google Analytics" />
                    </form>
                    <div>
                    <button className="btn-large star-ghost right" onClick={this.copyToClipboard}>{this.state.copied ? this.state.copyTextTwo : this.state.copyTextOne}</button>
                    </div>
                    </div>
                    
                </div>
            </>
        )
    }

    
}



