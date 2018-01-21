import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {

  deleteProject(id)
  {
      this.props.onDelete(id);
  }

  render() {
    let pItems;
    if (this.props.projects)
    {
      pItems = this.props.projects.map(p => {
          return(
            <ProjectItem onDelete={this.deleteProject.bind(this)} key={p.title} project={p} />
          );
      });
    }
    return (
      <div className="Projects">
          <h3> Latest Projects</h3>
          {pItems}
      </div>
    );
  }
}

 Projects.propTypes = {
   projects: PropTypes.array,
   onDelete: PropTypes.func
 }

export default Projects;
