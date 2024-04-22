require("dotenv").config()
require("express-async-errors")
const express = require("express")
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
const productRoutes= require("./routes/products")

const app = express();
const  port = process.env.PORT || 3000



//json middleware
app.use(express.json())



//products routes 
app.use("/api/v1/products",productRoutes)



//not found middleware
app.use(notFound);
///error handler middleware
app.use(errorHandlerMiddleware);








const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port , console.log(`Server is Listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}



start()

