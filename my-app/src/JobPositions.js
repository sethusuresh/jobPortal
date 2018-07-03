import React, { Component } from 'react';
import logo from './logo.svg';
import './JobPositions.css';

class JobPositions extends Component {
  render() {
    return (
      <div className="JobPositions">     
        <table>
            <tr>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>Technologies</th>
              <th>Feedback</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Software Engineer</td>
              <td>Ability to code and test basic functuionality</td>
              <td>Angular JS, React JS, Java</td>
              <td><Button bsStyle="info">Know your feedback</Button></td>
              <td><button class="statusbtn">Show Status</button></td>
            </tr>
            <tr>
              <td>Analyst - Sys Dev</td>
              <td>Ability to analyze and build functional application components</td>
              <td>Angular JS 5.0</td>
              <td><Button bsStyle="info">Know your feedback</Button></td>
              <td><button class="statusbtn">Show Status</button></td>
            </tr>
          </table>
      </div>
    );
  }
}

export default JobPositions;
