import { Project } from "@prisma/client"
import { create, projectById, read, remove, update } from "./project.service.js"
import { Request, Response } from "express"

export const createProject = async (req: Request, res: Response) => {
  const { title, tags, description, hero_url, images_urls, link, github, key } =
    req.body as Project & { key: string }
  const result = await create(
    title,
    tags,
    description,
    hero_url,
    images_urls,
    link,
    github,
    key
  )
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
  const { title, tags, description, hero_url, images_urls, github, link } =
    req.body as Project
  const result = await update(
    id,
    title,
    tags,
    description,
    hero_url,
    images_urls,
    github,
    link
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

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string }
  const result = await projectById(id)
  if (result.type === "ok") res.status(200).send(result.data)
  else res.status(500).send(result.data)
}
