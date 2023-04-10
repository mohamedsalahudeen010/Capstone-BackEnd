import express from "express"
const app=express()
import cors from "cors"
app.use(cors())
import { dbConnection } from "./DB.js";
import dotenv from "dotenv"
import { signupRouter } from "./Routes/signUpRouter.js";
import { loginRouter } from "./Routes/loginRoute.js";
import { adminSignupRouter } from "./Routes/adminSignUpRoute.js";
import { adminLoginRouter } from "./Routes/adminLogInRoute.js";
import { historyRoute } from "./Routes/historyRoute.js";
import { isSignedIn } from "./controllers/auth.js";
import { goldRouter } from "./Routes/goldDataRoute.js";
import { isSignedInAdmin } from "./controllers/adminAuth.js";
import { forgetPasswordRouter } from "./Routes/forgetPasswordRoute.js";
dotenv.config();
dbConnection()

const PORT=process.env.PORT;

app.use(express.json())

app.listen(PORT,()=>{
    console.log("web server hoisted")
})

app.get("/",async(req,res)=>{
    console.log(PORT)
res.send(`hoisted in ${PORT} Port Number`)

})

app.use("/signUp",signupRouter);
app.use("/logIn",loginRouter)
app.use("/adminSignUp",adminSignupRouter);
app.use("/adminLogIn",adminLoginRouter)
app.use("/history",isSignedIn,historyRoute)
app.use("/goldData",isSignedIn,goldRouter)
app.use("/forgetpassword",forgetPasswordRouter)
