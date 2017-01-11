export function selectBook(book) {
  return {
    // selectBook is an action creater, needs to return an action - an object with a type property and optionally a payload
    type: 'BOOK_SELECTED',
    payload: book
  }
}
