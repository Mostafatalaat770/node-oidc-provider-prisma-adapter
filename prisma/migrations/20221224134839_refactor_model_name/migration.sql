/*
  Warnings:

  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Session";

-- CreateTable
CREATE TABLE "oidc_model" (
    "id" STRING NOT NULL,
    "type" INT4 NOT NULL,
    "payload" JSONB NOT NULL,
    "grantId" STRING,
    "userCode" STRING,
    "uid" STRING,
    "expiresAt" TIMESTAMP(3),
    "consumedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "oidc_model_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "oidc_model_uid_key" ON "oidc_model"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "oidc_model_id_type_key" ON "oidc_model"("id", "type");
