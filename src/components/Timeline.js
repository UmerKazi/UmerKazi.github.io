import React from "react";

const Timeline = () => {
  return (
    <div className="kura_tm_section" id="timeline">
      <div className="kura_tm_timeline" style={{lineHeight: '28px', letterSpacing: '0.2px', wordWrap: "break-word"}}>
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>Work Experience</h3>
          </div>
          <div className="timeline_list">
            <ul>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner">
                  <span>September, 2022 - Present</span>
                </div>
                <div className="list_inner">
                  <span style={{fontSize: '24px'}}>Software Developer</span>
                </div>
                <div className="list_inner">
                  <span><b>Enlighted Inc - Siemens</b>, Waterloo</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
              >
                <div className="list_inner">
                  <span>January, 2022 - April, 2022</span>
                </div>
                <div className="list_inner">
                <span style={{fontSize: '24px'}}>Front End Developer</span>
                </div>
                <div className="list_inner">
                  <span><b>Bitbuy - WonderFi</b>, Toronto</span>
                </div>
                <br/>
                <br/>
                <div>
                  <p style={{ fontSize: '18px' }}>• Member of the front-end web development team, responsible for optimizing front-end infrastructure, addressing bugs, and researching/planning improvements and new features.
                    <br/>• Made over <b style={{ color: '#ff4522' }}>100</b> contributions to the <b style={{ color: '#ff4522' }}>Gatsby React</b> web application, working with tools such as <b style={{ color: '#ff4522' }}>Drupal, Wordpress, AWS Amplify, Pantheon, </b>and <b style={{ color: '#ff4522' }}>StorybookJS</b> to improve and build upon the product.
                    <br/>• Researched, planned, and managed the implemention of <b style={{ color: '#ff4522' }}>UI/UX</b> improvements to the web application, contributing to the ongoing experience and design overhaul of the brand</p>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".6s"
              >
                <div className="list_inner">
                  <span>May, 2021 - August, 2021</span>
                </div>
                <div className="list_inner">
                <span style={{fontSize: '24px'}}>Software Developer</span>
                </div>
                <div className="list_inner">
                  <span><b>Year Zero Studios</b>, Toronto</span>
                </div>
                <br/>
                <br/>
                <div>
                  <p style={{ fontSize: '18px' }}>• Team lead for the Mental Health Score project, responsible for the development, management, branding, and marketing of this project.
                    <br/>• Completely overhauled the service, taking it from its initial inception to a full-stack web application built using <b style={{ color: '#ff4522' }}>TypeScript, React, and Firebase </b>. The front-end was styled and structured with <b style={{ color: '#ff4522' }}>Material-UI</b> and the web application was hosted on <b style={{ color: '#ff4522' }}>Vercel</b>.
                    <br/>• Re-branded Mental Health Score in order to target a new market of customers and successfully launched a strategic marketing campaign, resulting in a <b style={{ color: '#ff4522' }}>300% increase</b> in the user base.</p>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner">
                  <span>May, 2020 - August, 2020</span>
                </div>
                <div className="list_inner">
                <span style={{fontSize: '24px'}}>Computer Systems Analyst</span>
                </div>
                <div className="list_inner">
                  <span><b>OneTriam</b>, Markham</span>
                </div>
                <br/>
                <br/>
                <div>
                  <p style={{ fontSize: '18px' }}>• Independently undertook the system maintenance and security implementations of various multi-million dollar company databases and user accounts via the CyberArk security suite.
                    <br/>• Created <b style={{ color: '#ff4522' }}>15 PowerShell scripts</b> in order to automate software functionality and the deployment of security tools for organizations.
                    <br/>• Collaborated with team members to create over <b style={{ color: '#ff4522' }}>100 pages</b> of personalized software documentation for company clientele.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
