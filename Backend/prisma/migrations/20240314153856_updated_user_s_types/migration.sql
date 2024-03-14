/*
  Warnings:

  - You are about to drop the column `weigth` on the `user` table. All the data in the column will be lost.
  - Added the required column `weight` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `weigth`,
    ADD COLUMN `weight` DOUBLE NOT NULL,
    MODIFY `birthdate` VARCHAR(191) NOT NULL;
