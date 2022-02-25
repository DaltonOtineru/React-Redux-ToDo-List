import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchTodos } from '../../Redux/actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  //   renderAdmin(stream) {
  //     if (stream.userId === this.props.currentUserId) {
  //       return (
  //         <div className="right floated content">
  //           <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
  //             Edit
  //           </Link>
  //           <Link className="ui button negative">Delete</Link>
  //         </div>
  //       );
  //     }
  //   }

  renderList() {
    return this.props.todos.map((todo) => {
      return <li>{todo.todo}</li>;
    });
  }

  //   renderCreate() {
  //     if (this.props.isSignedIn) {
  //       return (
  //         <div style={{ textAlign: 'right' }}>
  //           <Link to="/streams/new" className="ui button primary">
  //             Create Stream
  //           </Link>
  //         </div>
  //       );
  //     }
  //   }

  render() {
    return (
      //   <div>
      //     <h2>Streams</h2>
      //     <div className="ui celled list">{this.renderList()}</div>
      //     {this.renderCreate()}
      //   </div>
      <div>{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTodos })(StreamList);
