import tasksServices from "../services/taskServices.js"

const istALive = (requests, response) => {
    response.status(200).json({
        status: 'success',
        data: {
            message: "API V1 is online!"
        }
    })
}

const getTasks = async(requests, response, next) => {
    try {
        let reply = await tasksServices.getTasks()
        response.status(200).json(reply)
    } catch (err) {
        next(err)
    }
}

const addTask = async(requests, response, next) => {
    const { task } = requests.body
    try{
        let reply = await tasksServices.addTask(task)
        response.status(201).json({
            status: 'success',
            data: reply
        })
    } catch (err){
        next(err)
    }
}

const deleteTask = async(requests, response, next) => {
    const { tid } = requests.params
    try{
        let reply = await tasksServices.deleteTask(tid)
        response.status(201).json({
            status: 'success',
            data: reply
        })
    } catch (err){
        next(err)
    }

}


const tasksControllers = {
    istALive,
    addTask,
    getTasks,
    deleteTask
}

export default tasksControllers