import { PrismaClient } from "@prisma/client"
import { ServiceResult } from "../utils.js"

export const create = async (
  title: string,
  tags: string[],
  description: string,
  hero_url: string,
  images_urls: string[],
  link: string,
  github: string,
  key: string
): Promise<ServiceResult> => {
  if (key !== process.env.KEY)
    return { data: "Not authorized to add projects", type: "fail" }
  const prisma = new PrismaClient()
  try {
    await prisma.project.create({
      data: { title, tags, description, hero_url, images_urls, github, link },
    })
    return { type: "ok", data: "Project added to the database." }
  } catch (error) {
    return { type: "fail", data: error }
  }
}

export const read = async (text = ""): Promise<ServiceResult> => {
  const prisma = new PrismaClient()
  try {
    const projects = await prisma.project.findMany({
      where: {
        OR: [
          { title: { contains: text } },
          { tags: { has: text } },
          { description: { contains: text } },
        ],
      },
    })
    // @ts-ignore
    return { type: "ok", data: projects }
  } catch (error) {
    return { type: "fail", data: error }
  }
}

export const update = async (
  id: string,
  title?: string,
  tags?: string[],
  description?: string,
  hero_url?: string,
  images_urls?: string[],
  github?: string,
  link?: string
): Promise<ServiceResult> => {
  const prisma = new PrismaClient()
  try {
    await prisma.project.update({
      where: { id },
      data: { title, tags, description, hero_url, images_urls, github, link },
    })
    return { type: "ok", data: "Project was edited." }
  } catch (error) {
    return { type: "fail", data: error }
  }
}

export const remove = async (id: string): Promise<ServiceResult> => {
  const prisma = new PrismaClient()
  try {
    await prisma.project.delete({
      where: { id },
    })
    return { type: "ok", data: "Project was deleted." }
  } catch (error) {
    return { type: "fail", data: error }
  }
}

export const projectById = async (id: string): Promise<ServiceResult> => {
  const prisma = new PrismaClient()
  try {
    const project = await prisma.project.findFirst({
      where: {
        id,
      },
    })
    return { type: "ok", data: project }
  } catch (error) {
    return { type: "fail", data: error }
  }
}
