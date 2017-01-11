import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item" key={book.title}>
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // takes in entire app state
  // whatever we return is the props of our container (what we care about in this container)
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
