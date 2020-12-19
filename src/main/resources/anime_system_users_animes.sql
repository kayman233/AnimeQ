-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: anime_system
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `users_animes`
--

DROP TABLE IF EXISTS `users_animes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_animes` (
  `user_id` bigint NOT NULL,
  `anime_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`anime_id`),
  KEY `FKtrsi5nevsllnb6qbffliow16` (`anime_id`),
  CONSTRAINT `FKb6q5jmr2c99ma4ivi5hvdg5l0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKtrsi5nevsllnb6qbffliow16` FOREIGN KEY (`anime_id`) REFERENCES `animes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_animes`
--

LOCK TABLES `users_animes` WRITE;
/*!40000 ALTER TABLE `users_animes` DISABLE KEYS */;
INSERT INTO `users_animes` VALUES (1,1);
INSERT INTO `users_animes` VALUES (2,1);
INSERT INTO `users_animes` VALUES (1,2);
INSERT INTO `users_animes` VALUES (2,2);
INSERT INTO `users_animes` VALUES (7,2);
INSERT INTO `users_animes` VALUES (1,6);
INSERT INTO `users_animes` VALUES (2,6);
INSERT INTO `users_animes` VALUES (3,6);
INSERT INTO `users_animes` VALUES (7,6);
INSERT INTO `users_animes` VALUES (1,8);
INSERT INTO `users_animes` VALUES (2,8);
INSERT INTO `users_animes` VALUES (3,8);
INSERT INTO `users_animes` VALUES (1,11);
INSERT INTO `users_animes` VALUES (2,11);
INSERT INTO `users_animes` VALUES (3,11);
INSERT INTO `users_animes` VALUES (2,12);
/*!40000 ALTER TABLE `users_animes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-18 23:38:30
