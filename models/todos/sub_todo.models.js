import mongoose from "mongoose"

const subTodo_schema = new mongoose.Schema({},{timestamps : true})

export const SubTodo = mongoose.model("SubTodo", subTodo_schema)