# Book API

This is a RESTful API for managing books, built using Node.js, Express.js, and MongoDB with Mongoose. The API provides endpoints for performing CRUD (Create, Read, Update, Delete) operations on a collection of books.

## Getting Started
Prerequisites

Before you begin, make sure you have the following software and tools installed:
 
[Node.js](https://nodejs.org/en)

## Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/book-api.git
```

2. Navigate to the project directory:
```bash
cd book-api
```
3. Install the project dependencies:
```bash
npm install
```
## Usage
Starting the API

1.Start the Book API:

```bash
node app.js

# returns 'words'
foobar.pluralize('word')
```

## API Endpoints
Create a New Book

URL: POST /books

Description: Create a new book.

Sample Request Body:
```bash
{
  "title": "Sample Book",
  "author": "John Doe",
  "summary": "This is a sample book summary."
}
```
Sample Response:
```bash
{
  "_id": "5fbd19e4d1d8b52bb82438ab",
  "title": "Sample Book",
  "author": "John Doe",
  "summary": "This is a sample book summary."
}
```

## Get a List of All Books
URL: GET /books

Description: Get a list of all books.

## Get Details of a Specific Book
URL: GET /books/:id

Description: Get details of a specific book by its ID.

Sample Response:

```bash
{
  "_id": "5fbd19e4d1d8b52bb82438ab",
  "title": "Sample Book",
  "author": "John Doe",
  "summary": "This is a sample book summary."
}
```

## Update a Book's Details
URL: PUT /books/:id

Description: Update a book's details.

Sample Request Body:

```bash
{
  "title": "Updated Book Title",
  "author": "Jane Smith",
  "summary": "This is the updated book summary."
}
```
Sample Response:
```bash
{
  "_id": "5fbd19e4d1d8b52bb82438ab",
  "title": "Updated Book Title",
  "author": "Jane Smith",
  "summary": "This is the updated book summary."
}
```

## Delete a Book
URL: DELETE /books/:id

Description: Delete a book.

Sample Response:
```bash
{
  "message": "Book deleted successfully"
}
```

## Acknowledgments
Built with [Node.js](https://nodejs.org/en)

Utilizes [Express.js](https://expressjs.com/)

Database management with [MongoDB](https://www.mongodb.com/) and [Mongoose](https://www.npmjs.com/package//mongoose)

