import mongoose from 'mongoose'

const taskCollection = 'tasks'
const taskSchema = new mongoose.Schema({
    task: String,
    date: String
})

const taskModel = mongoose.model(taskCollection, taskSchema)

export default taskModel
