import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {


  render() {
    let pItems;
    if (this.props.projects)
    {
      pItems = this.props.projects.map(p => {
          return(
            <ProjectItem key={p.title} project={p} />
          );
      });
    }
    return (
      <div className="Projects">
          {pItems}
      </div>
    );
  }
}

export default Projects;
