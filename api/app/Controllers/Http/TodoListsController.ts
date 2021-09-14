import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Todolist from "App/Models/Todolist"

export default class TodoListsController {
    async getAllToDo() {
        return Todolist.all()
    }

    async getSingleListItem({ params }: HttpContextContract) {
        let singleItem = await Todolist.query().where("id", params.id).first()
        return singleItem

    }

    // create list item       

    async createListItem({ }: HttpContextContract) {
        return Todolist.all()
        // return params
    }

    // Update list items

    async updateListItem() {

        let updateListItem = await Todolist.findOrFail(1)
        updateListItem.is_done=1
        await updateListItem.save()
        return Todolist.all()

    }

    // Delete list item
    async deleteListItem() {
        const deleteListItem = await Todolist.findOrFail(13)
        await deleteListItem.delete()
        return Todolist.all()
    }
    // Delete list item is_done is true
    async deleteCompleteTask() {
        const deleteListItem =await Todolist.query().where('is_done', 0).delete()
      
        return Todolist.all()
    }
}
