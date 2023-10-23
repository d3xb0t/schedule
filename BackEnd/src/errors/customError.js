class CustomError extends Error {
    constructor(string, number) {
        super();
        this.name = this.constructor.name;
        this.message = string;
        this.statusCode = number;
    }
}

export default CustomError