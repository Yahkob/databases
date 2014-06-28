CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Rooms'
--
-- ---

DROP TABLE IF EXISTS `Rooms`;

CREATE TABLE `Rooms` (
 `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `message_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Rooms` INTEGER NULL DEFAULT NULL,
  `user_id_users` INTEGER NULL DEFAULT NULL,
  `createdAt` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`message_id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(15) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_Rooms) REFERENCES `Rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (user_id_users) REFERENCES `users` (`user_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Rooms` (`id`) VALUES
-- ('');
-- INSERT INTO `messages` (`message_id`,`id_Rooms`,`user_id_users`,`Time`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`user_id`) VALUES
-- ('');


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




