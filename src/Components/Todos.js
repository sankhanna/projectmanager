import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
    let tItems;
    if (this.props.todos)
    {
      tItems = this.props.todos.map(p => {
          return(
            <TodoItem key={p.title} todo={p} />
          );
      });
    }
    return (
      <div className="Todos">
          <h3> Todo List</h3>
          {tItems}
      </div>
    );
  }
}

Todos.propTypes = {
   todos: PropTypes.array,
 }

export default Todos;
