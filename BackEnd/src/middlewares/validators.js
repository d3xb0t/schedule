import CustomError from "../errors/customError.js"

const validateTask = (requests, response, next) =>{
    const { task } = requests.body
    if(!task) throw new CustomError("Undefined task", 400)
    next()
}

const validators = {
    validateTask
}

export default validators