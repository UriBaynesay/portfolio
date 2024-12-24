import express from "express"
import { projectRoutes } from "./api/project/project.routes.js"
import path from "path"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:4200" }))
const port = 3000
const __dirname = import.meta.dirname

app.use(express.static(path.resolve(__dirname, "browser")))
app.use("/api/project", projectRoutes)

app.listen(port, () => {
  console.log(`Server is up and listening to ${port}`)
})
