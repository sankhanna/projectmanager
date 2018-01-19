import React, { Component } from 'react';

class AddProject extends Component
{
  constructor()
  {
    super();
    this.state = {
        newProject:{}
    }
  }
  static defaultProps = {
      categories: ['Web Design' , 'Web Development' , 'Mobile Development']
  }

  handleSubmit(e)
  {
      if ( this.refs.title.value === "" )
      {
        alert("Project title must be specified");
      }
      else {
          this.setState({newProject:{
              title: this.refs.title.value,
              category: this.refs.category.value
          }}, function(){
              console.log(this.state);
          });
      }
      e.preventDefault();
  }

  render() {

    let categoryOptions = this.props.categories.map( opt => {
          return <option key={opt} value='opt'>{opt}</option>
    });

    return (
      <div>
          <h3>Add Project</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                  <label>Title</label><br />
                  <input type="text" ref="title" />
              </div>
              <div>
                  <label>Category</label><br />
                  <select ref="category">
                      {categoryOptions}
                  </select>
              </div>
              <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default AddProject;
