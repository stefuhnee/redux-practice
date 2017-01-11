import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
        className="list-group-item" key={book.title}
        onClick={() => this.props.selectBook(book)}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
