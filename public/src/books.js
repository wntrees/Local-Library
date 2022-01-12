function findAuthorById(authors, id) {
     const identifiedAuthor = authors.find((author) => id === author.id)
     return identifiedAuthor;
}

function findBookById(books, id) {
    const identifiedBook = books.find((book) => id === book.id)
    return identifiedBook;
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter((book) => {
    return book.borrows.every((returnStatus) => returnStatus.returned);
  });

  const unreturnedBooks = books.filter((book) => {
    return book.borrows.some((returnStatus) => !returnStatus.returned);
  });

  const result = [unreturnedBooks, returnedBooks];

  return result;
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows.filter(borrow => borrow.returned)

  const matchAccounts = borrows.map(b => {
    const account = accounts.find(a => a.id === b.id)
    account.returned = b.returned
    return account
  })

  return matchAccounts
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};