-- CreateTable
CREATE TABLE `peoples` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `full_name` VARCHAR(255) NULL,
    `full_address` VARCHAR(255) NULL,
    `nomination` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `dob` DATETIME(3) NULL,
    `avatar` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `people_id` INTEGER NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `value` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `people_id` INTEGER NOT NULL,
    `path` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_people_id_fkey` FOREIGN KEY (`people_id`) REFERENCES `peoples`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_people_id_fkey` FOREIGN KEY (`people_id`) REFERENCES `peoples`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
