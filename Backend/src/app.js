import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from './routes/user.route.js'
import videoRouter from './routes/video.route.js'
import playlistRouter from './routes/playlist.route.js'
import commentRouter from './routes/comment.route.js'
import tweetRouter from './routes/tweet.route.js'
import subscriptionRouter from "./routes/subscription.route.js"
import likesRouter from "./routes/likes.route.js"
import DashboardRouter from "./routes/dashboard.route.js"

// routes declaration 
app.use("/api/v1/users",userRouter)
app.use("/api/v1/videos",videoRouter)
app.use("/api/v1/playlist",playlistRouter)
app.use("/api/v1/comment",commentRouter)
app.use("/api/v1/tweet",tweetRouter)
app.use("/api/v1/subscription",subscriptionRouter)
app.use("/api/v1/likes", likesRouter)
app.use("/api/v1/dashboard", DashboardRouter)


export { app }   