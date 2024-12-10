import express from "express"
import { projectRoutes } from "./api/project/project.routes.js"
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:4200" }))
const port = 3000

app.use("/api/project", projectRoutes)

app.listen(port, () => {
  console.log(`Server is up and listening to ${port}`)
})
