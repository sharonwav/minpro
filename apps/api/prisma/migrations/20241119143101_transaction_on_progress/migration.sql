/*
  Warnings:

  - Added the required column `midtrans_token` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transactions` ADD COLUMN `midtrans_token` VARCHAR(191) NOT NULL;
