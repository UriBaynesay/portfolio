import { Project } from "@prisma/client"
import { create, read, remove, update } from "./project.service.js"
import { Request, Response } from "express"

export const createProject = async (req: Request, res: Response) => {
  const { title, tags, description, hero_url, images_urls } =
    req.body as Project
  const result = await create(title, tags, description, hero_url, images_urls)
  if (result.type === "ok") res.status(200).send(result.data)
  else res.status(500).send(result.data)
}

export const getProjects = async (req: Request, res: Response) => {
  const { text } = req.query as { text: string }
  const result = await read(text)
  if (result.type === "ok") res.status(200).send(result.data)
  else res.status(500).send(result.data)
}

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, tags, description, hero_url, images_urls } =
    req.body as Project
  const result = await update(
    id,
    title,
    tags,
    description,
    hero_url,
    images_urls
  )
  if (result.type === "ok") res.status(200).send(result.data)
  else res.status(500).send(result.data)
}

export const removeProject = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await remove(id)
  if (result.type === "ok") res.status(200).send(result.data)
  else res.status(500).send(result.data)
}
