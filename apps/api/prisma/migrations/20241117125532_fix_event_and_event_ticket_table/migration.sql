/*
  Warnings:

  - You are about to drop the column `available` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `bookSeat` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `discountExpiry` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `discountStart` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `event_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `capacity` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `isPaid` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `events` table. All the data in the column will be lost.
  - Added the required column `qty` to the `event_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketDescription` to the `event_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketEndDate` to the `event_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketEndTime` to the `event_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketName` to the `event_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketStartDate` to the `event_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketStartTime` to the `event_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event_tickets` DROP COLUMN `available`,
    DROP COLUMN `bookSeat`,
    DROP COLUMN `discount`,
    DROP COLUMN `discountExpiry`,
    DROP COLUMN `discountStart`,
    DROP COLUMN `endDate`,
    DROP COLUMN `name`,
    DROP COLUMN `startDate`,
    DROP COLUMN `version`,
    ADD COLUMN `qty` INTEGER NOT NULL,
    ADD COLUMN `ticketDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `ticketEndDate` DATETIME(3) NOT NULL,
    ADD COLUMN `ticketEndTime` DATETIME(3) NOT NULL,
    ADD COLUMN `ticketName` VARCHAR(191) NOT NULL,
    ADD COLUMN `ticketStartDate` DATETIME(3) NOT NULL,
    ADD COLUMN `ticketStartTime` DATETIME(3) NOT NULL,
    MODIFY `price` INTEGER NULL,
    MODIFY `eventId` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `capacity`,
    DROP COLUMN `isPaid`,
    DROP COLUMN `price`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;
