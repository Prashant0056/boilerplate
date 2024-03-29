import { Router } from 'express'
import * as todoController from '../controller/todo.controller'
import { validate, validateByid } from '../util/validate'
import { postTodoDTO } from '../validators/postTodo.validator'
import { getTodoDTO } from '../validators/getTodo.validator'
import { deleteTodoDTO } from '../validators/deleteTodo.validator'
import {
    updateTodoDTObody,
    updateTodoDTOid,
} from '../validators/updateTodo.validator'
const router = Router()

//POST to databse
router.post('/', validate(postTodoDTO), todoController.postTodos)

//GET todos by id
router.get('/:id', validateByid(getTodoDTO), todoController.getTodosByID)

//DELETE by id
router.delete(
    '/:id',
    validateByid(deleteTodoDTO),
    todoController.deleteTodosByID
)

//UPDATE by id
router.put(
    '/:id',
    validateByid(updateTodoDTOid),
    validate(updateTodoDTObody),
    todoController.updateTodo
)

export default router
