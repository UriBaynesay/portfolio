-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tags" TEXT[],
    "description" TEXT NOT NULL,
    "hero_url" TEXT NOT NULL,
    "images_urls" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
