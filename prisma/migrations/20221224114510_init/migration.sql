-- CreateTable
CREATE TABLE "Session" (
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

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_uid_key" ON "Session"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_type_key" ON "Session"("id", "type");
