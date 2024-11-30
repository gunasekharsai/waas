/*
  Warnings:

  - You are about to drop the column `profilepicture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `solwallet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "solwallet" DROP CONSTRAINT "solwallet_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilepicture",
ADD COLUMN     "profilePicture" TEXT,
ADD COLUMN     "sub" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "solwallet";

-- CreateTable
CREATE TABLE "SolWallet" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "SolWallet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SolWallet_userId_key" ON "SolWallet"("userId");

-- AddForeignKey
ALTER TABLE "SolWallet" ADD CONSTRAINT "SolWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
