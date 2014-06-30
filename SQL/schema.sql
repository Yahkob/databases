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

CREATE TABLE `rooms` (
 `id` INTEGER AUTO_INCREMENT NOT NULL,
  `roomname` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
--
-- ---
/* SELECT <COLUMNS> FROM <TABLES> WHERE <CONDTION>   */

/* INSERT INTO <TABLE> (<COLUMNS>) VALUES(values)   rooms(roomname) VALUES ('lobby') */
DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `message_id` INTEGER AUTO_INCREMENT NOT NULL,
  `id_rooms` INTEGER NOT NULL,
  `message` VARCHAR(140) NOT NULL,
  `user_id_users` INTEGER NOT NULL,
  `created_at` DATE NOT NULL,
  PRIMARY KEY (`message_id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` INTEGER AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`user_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);
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




