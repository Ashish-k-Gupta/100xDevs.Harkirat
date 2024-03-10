const { model } = require("mongoose");
const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(), 
    description: zod.description()
})

const updateTodo = zod.object({
    _id: zod.string()
})

module.exports = {
    createTodo: createTodo, 
    updateTodo: updateTodo
}