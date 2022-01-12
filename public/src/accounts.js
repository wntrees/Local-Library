function findAccountById(accounts, id) {
    const matchingId = accounts.find((accounts) => id === accounts.id);
  return matchingId
}

function sortAccountsByLastName(accounts) {
    accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const borrow = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) {
      if(book.borrows[i].id === account.id) {
      acc++
    }}
    return acc
  },0)
  return borrow
}

function getBooksPossessedByAccount(account, books, authors) {
    let accountId = account.id;
    const borrowedBooks = books.filter((book) => {
        for(let i = 0; i < book.borrows.length; i++) {
            if(book.borrows[i].returned === false && book.borrows[i].id === accountId){
                return true;
            } 
        }
        return false;
    })
    
   const borrowedBooksWithAuthors = borrowedBooks.map((book) => {
       const authorId = book.authorId;
       const author = authors.find(author => author.id === authorId)
       return {
           ...book,
           author: author
       }
   })
   return borrowedBooksWithAuthors
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
