/*
SQLyog Community v12.4.1 (64 bit)
MySQL - 10.2.6-MariaDB : Database - zhongruan
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`zhongruan` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `zhongruan`;

/*Table structure for table `hola_pic` */

DROP TABLE IF EXISTS `hola_pic`;

CREATE TABLE `hola_pic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL DEFAULT '',
  `url` varchar(200) NOT NULL DEFAULT '''asset/placeholder.png''',
  `level` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Table structure for table `hola_place` */

DROP TABLE IF EXISTS `hola_place`;

CREATE TABLE `hola_place` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(20) NOT NULL DEFAULT '',
  `address1` varchar(20) NOT NULL DEFAULT '',
  `address2` varchar(20) NOT NULL DEFAULT '',
  `name` varchar(50) NOT NULL DEFAULT '',
  `cover` varchar(200) NOT NULL DEFAULT 'asset/placeholder.png',
  `latitude` varchar(10) NOT NULL DEFAULT '',
  `longitude` varchar(10) NOT NULL DEFAULT '',
  `intro` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
