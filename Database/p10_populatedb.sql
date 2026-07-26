CREATE DATABASE  IF NOT EXISTS `p10_planora` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `p10_planora`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: p10_planora
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book_event`
--

DROP TABLE IF EXISTS `book_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_event` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `package_id` int NOT NULL,
  `uid` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `fk_booking_package` (`package_id`),
  KEY `fk_booking_user` (`uid`),
  CONSTRAINT `fk_booking_package` FOREIGN KEY (`package_id`) REFERENCES `create_package` (`package_id`),
  CONSTRAINT `fk_booking_user` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_event`
--

LOCK TABLES `book_event` WRITE;
/*!40000 ALTER TABLE `book_event` DISABLE KEYS */;
INSERT INTO `book_event` VALUES (1,1,1,150000.00),(2,2,2,50000.00),(3,3,1,200000.00),(4,4,2,100000.00);
/*!40000 ALTER TABLE `book_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_type`
--

DROP TABLE IF EXISTS `business_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_type` (
  `bid` int NOT NULL AUTO_INCREMENT,
  `bname` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_type`
--

LOCK TABLES `business_type` WRITE;
/*!40000 ALTER TABLE `business_type` DISABLE KEYS */;
INSERT INTO `business_type` VALUES (1,'Photography','Photography and Videography'),(2,'Catering','Food and Catering Services'),(3,'Decoration','Decoration Services'),(4,'Music','DJ and Music Services');
/*!40000 ALTER TABLE `business_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `create_event`
--

DROP TABLE IF EXISTS `create_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `create_event` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `event_master_id` int NOT NULL,
  `oid` int NOT NULL,
  `event_date` date NOT NULL,
  `event_time` time NOT NULL,
  `venue` varchar(100) NOT NULL,
  PRIMARY KEY (`event_id`),
  KEY `fk_event_master` (`event_master_id`),
  KEY `fk_event_organizer` (`oid`),
  CONSTRAINT `fk_event_master` FOREIGN KEY (`event_master_id`) REFERENCES `event_master` (`event_master_id`),
  CONSTRAINT `fk_event_organizer` FOREIGN KEY (`oid`) REFERENCES `organizer` (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `create_event`
--

LOCK TABLES `create_event` WRITE;
/*!40000 ALTER TABLE `create_event` DISABLE KEYS */;
INSERT INTO `create_event` VALUES (1,1,1,'2026-08-15','10:00:00','Pune'),(2,2,2,'2026-09-20','18:00:00','Nashik'),(3,4,1,'2026-10-12','11:30:00','Mumbai');
/*!40000 ALTER TABLE `create_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `create_package`
--

DROP TABLE IF EXISTS `create_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `create_package` (
  `package_id` int NOT NULL AUTO_INCREMENT,
  `event_master_id` int NOT NULL,
  `oid` int NOT NULL,
  `budget` decimal(10,2) NOT NULL,
  PRIMARY KEY (`package_id`),
  KEY `fk_package_eventmaster` (`event_master_id`),
  KEY `fk_package_organizer` (`oid`),
  CONSTRAINT `fk_package_eventmaster` FOREIGN KEY (`event_master_id`) REFERENCES `event_master` (`event_master_id`),
  CONSTRAINT `fk_package_organizer` FOREIGN KEY (`oid`) REFERENCES `organizer` (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `create_package`
--

LOCK TABLES `create_package` WRITE;
/*!40000 ALTER TABLE `create_package` DISABLE KEYS */;
INSERT INTO `create_package` VALUES (1,1,1,150000.00),(2,2,2,50000.00),(3,3,1,200000.00),(4,4,2,100000.00);
/*!40000 ALTER TABLE `create_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_master`
--

DROP TABLE IF EXISTS `event_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_master` (
  `event_master_id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(50) NOT NULL,
  PRIMARY KEY (`event_master_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_master`
--

LOCK TABLES `event_master` WRITE;
/*!40000 ALTER TABLE `event_master` DISABLE KEYS */;
INSERT INTO `event_master` VALUES (1,'Wedding'),(2,'Birthday'),(3,'Corporate Event'),(4,'Engagement'),(5,'Baby Shower');
/*!40000 ALTER TABLE `event_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizer`
--

DROP TABLE IF EXISTS `organizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizer` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_email` varchar(50) NOT NULL,
  `phone_no` bigint NOT NULL,
  `company_address` varchar(100) NOT NULL,
  `gst_no` varchar(20) NOT NULL,
  `registration_no` varchar(30) NOT NULL,
  PRIMARY KEY (`oid`),
  UNIQUE KEY `company_email` (`company_email`),
  UNIQUE KEY `gst_no` (`gst_no`),
  UNIQUE KEY `registration_no` (`registration_no`),
  KEY `fk_organizer_user` (`uid`),
  CONSTRAINT `fk_organizer_user` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizer`
--

LOCK TABLES `organizer` WRITE;
/*!40000 ALTER TABLE `organizer` DISABLE KEYS */;
INSERT INTO `organizer` VALUES (1,3,'Event Pro','contact@eventpro.com',9876500001,'Pune','GST1001','REG1001'),(2,4,'Celebrate Events','info@celebrate.com',9876500002,'Nashik','GST1002','REG1002');
/*!40000 ALTER TABLE `organizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `mode_of_payment` varchar(20) NOT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `fk_payment_booking` (`booking_id`),
  CONSTRAINT `fk_payment_booking` FOREIGN KEY (`booking_id`) REFERENCES `book_event` (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,150000.00,'UPI'),(2,2,50000.00,'Credit Card'),(3,3,200000.00,'Net Banking'),(4,4,100000.00,'Cash');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `oid` int NOT NULL,
  `uid` int NOT NULL,
  `rating_no` float NOT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `fk_rating_organizer` (`oid`),
  KEY `fk_rating_user` (`uid`),
  CONSTRAINT `fk_rating_organizer` FOREIGN KEY (`oid`) REFERENCES `organizer` (`oid`),
  CONSTRAINT `fk_rating_user` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,1,1,4.8),(2,2,2,4.5),(3,1,2,5),(4,2,1,4.2);
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `rid` int NOT NULL AUTO_INCREMENT,
  `rname` varchar(20) NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Customer'),(2,'Organizer'),(3,'Vendor'),(4,'Admin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `rid` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone_no` bigint NOT NULL,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_user_role` (`rid`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`rid`) REFERENCES `role` (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1,'rahul@gmail.com','rahul123',9876543210,'Pune'),(2,1,'priya@gmail.com','priya123',9876543211,'Mumbai'),(3,2,'eventpro@gmail.com','event123',9876543212,'Pune'),(4,2,'celebrate@gmail.com','cele123',9876543213,'Nashik'),(5,3,'photozone@gmail.com','vendor123',9876543214,'Pune'),(6,3,'foodking@gmail.com','vendor456',9876543215,'Mumbai'),(7,3,'decorplus@gmail.com','vendor789',9876543216,'Nagpur');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `vid` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `experience` varchar(20) NOT NULL,
  PRIMARY KEY (`vid`),
  KEY `fk_vendor_user` (`uid`),
  CONSTRAINT `fk_vendor_user` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (1,5,'5 Years'),(2,6,'8 Years'),(3,7,'4 Years');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_business`
--

DROP TABLE IF EXISTS `vendor_business`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_business` (
  `vbid` int NOT NULL AUTO_INCREMENT,
  `vid` int NOT NULL,
  `bid` int NOT NULL,
  PRIMARY KEY (`vbid`),
  KEY `fk_vendorbusiness_vendor` (`vid`),
  KEY `fk_vendorbusiness_business` (`bid`),
  CONSTRAINT `fk_vendorbusiness_business` FOREIGN KEY (`bid`) REFERENCES `business_type` (`bid`),
  CONSTRAINT `fk_vendorbusiness_vendor` FOREIGN KEY (`vid`) REFERENCES `vendor` (`vid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_business`
--

LOCK TABLES `vendor_business` WRITE;
/*!40000 ALTER TABLE `vendor_business` DISABLE KEYS */;
INSERT INTO `vendor_business` VALUES (1,1,1),(2,2,2),(3,3,3),(4,1,4);
/*!40000 ALTER TABLE `vendor_business` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_event`
--

DROP TABLE IF EXISTS `vendor_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_event` (
  `evid` int NOT NULL AUTO_INCREMENT,
  `event_id` int NOT NULL,
  `vid` int NOT NULL,
  PRIMARY KEY (`evid`),
  KEY `fk_vendorevent_event` (`event_id`),
  KEY `fk_vendorevent_vendor` (`vid`),
  CONSTRAINT `fk_vendorevent_event` FOREIGN KEY (`event_id`) REFERENCES `create_event` (`event_id`),
  CONSTRAINT `fk_vendorevent_vendor` FOREIGN KEY (`vid`) REFERENCES `vendor` (`vid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_event`
--

LOCK TABLES `vendor_event` WRITE;
/*!40000 ALTER TABLE `vendor_event` DISABLE KEYS */;
INSERT INTO `vendor_event` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,2),(5,3,1);
/*!40000 ALTER TABLE `vendor_event` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-09 17:58:51
