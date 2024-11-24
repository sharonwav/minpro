/*
  Warnings:

  - You are about to drop the column `transactionId` on the `transaction_status` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `transaction_status` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - Added the required column `transactionStatusId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `transaction_status` DROP FOREIGN KEY `transaction_status_transactionId_fkey`;

-- AlterTable
ALTER TABLE `transaction_status` DROP COLUMN `transactionId`,
    MODIFY `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transactions` ADD COLUMN `transactionStatusId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_transactionStatusId_fkey` FOREIGN KEY (`transactionStatusId`) REFERENCES `transaction_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
