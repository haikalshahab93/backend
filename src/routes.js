const {
    addBookHandle,
    getAllBooksHandle,
    getBookByIdHandle,
    editBookByIdHandle,
    deleteBookByIdHandle
} = require('./handle');

const routes = [{
    method: 'POST',
    path: '/books',
    handler: addBookHandle
},
{
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandle
},
{
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandle
},
{
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandle
},
{
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandle
}
];

module.exports = routes;