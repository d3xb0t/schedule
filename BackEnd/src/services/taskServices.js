import taskModel from '../../models/taskModel.js'
import MongooseDriver from '../DbDrivers/mongooseDriver.js'

const dbDriver = new MongooseDriver(taskModel)

const addTask = async(_task) => {
    let response = await dbDriver.create({
        task: _task,
        date: new Date()
    })
    return response
}

const getTasks = async() => {
    let response = await dbDriver.find()
    return response
}

const deleteTask = async(tid) => {
    let response = await dbDriver.delete(tid)
    return response
}

const tasksServices = {
    addTask,
    getTasks,
    deleteTask
}

export default tasksServices