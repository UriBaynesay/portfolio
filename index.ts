import express from "express"
import { projectRoutes } from "./api/project/project.routes.js"

const app = express()
app.use(express.json())
const port = 3000

app.use("/api/project", projectRoutes)

app.listen(port, () => {
  console.log(`Server is up and listening to ${port}`)
})
