/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import TestsController from 'App/Controllers/Http/TestsController'


// typical 
// Route.get('/typical_routing', () => {
//   return 'Typical Routing '
// })


// // using controller methods to
// Route.get('/test', 'TestsController.test')


// // Dynamic Route using controller methods to
// Route.get('/test/:username', 'TestsController.testDynamicRoute')



// get method

Route.get("/getTodoLists","TodoListsController.getAllToDo")

// get single item 
Route.get("/getSingleListItem/:id","TodoListsController.getSingleListItem")

// Create item 
Route.get("/createListItem","TodoListsController.createListItem")


// Update item 
Route.get("/updateListItem","TodoListsController.updateListItem")



// delete list item 
Route.get("/deleteListItem","TodoListsController.deleteListItem")


// deleteCompleteTask list item 
Route.get("/deleteCompleteTask","TodoListsController.deleteCompleteTask")