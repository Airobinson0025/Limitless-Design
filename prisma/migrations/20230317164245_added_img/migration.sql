/*
  Warnings:

  - You are about to drop the column `profilePic` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "profilePic",
ADD COLUMN     "img" TEXT;
