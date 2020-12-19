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
-- Table structure for table `animes`
--

DROP TABLE IF EXISTS `animes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(255) DEFAULT NULL,
  `anime_rank` int DEFAULT NULL,
  `description` text,
  `episodes` int DEFAULT NULL,
  `img` text,
  `next_ep` int DEFAULT NULL,
  `next_ep_date` datetime DEFAULT NULL,
  `studio` varchar(255) DEFAULT NULL,
  `tags` text,
  `viewers` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animes`
--

LOCK TABLES `animes` WRITE;
/*!40000 ALTER TABLE `animes` DISABLE KEYS */;
INSERT INTO `animes` VALUES (1,'Jujutsu Kaisen',1,'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item.',24,'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',13,'2020-12-26 01:25:00','MAPPA','action/horror/school',2);
INSERT INTO `animes` VALUES (2,'Haikyuu!!: To the Top 2nd Season',2,'Karasuno prepares for their first match in the second round against the team that is second favorite to win the tournament, Inarizaki High and their team of unique players.',12,'https://cdn.myanimelist.net/images/anime/1453/106768.jpg',12,'2020-12-21 01:25:00','Production I.G','sports/schounen/school',3);
INSERT INTO `animes` VALUES (6,'Shingeki no Kyojin: The Final Season',3,'With Eren and company now at the shoreline and the threat of Marley looming, what’s next for the Scouts and their quest to unravel the mysteries of the Titans, humanity, and more?',16,'https://cdn.myanimelist.net/images/anime/1773/109409.webp',3,'2020-12-21 00:10:00','MAPPA','action/military/fantasy',4);
INSERT INTO `animes` VALUES (7,'Higurashi no Naku Koro ni Gou',4,'New kid Keiichi Maebara is settling into his new home of peaceful Hinamizawa village. Making quick friends with the girls from his school, he’s arrived in time for the big festival of the year. But something about this isolated town seems \"off\"',24,'https://cdn.myanimelist.net/images/anime/1287/109031l.webp',13,'2020-12-24 23:30:00','Passione','horror/mistery/thriller',0);
INSERT INTO `animes` VALUES (8,'Yakusoku no Neverland 2nd Season',5,'Second season of Yakusoku no Neverland.',12,'https://cdn.myanimelist.net/images/anime/1815/110626l.webp',1,'2021-01-08 01:25:00','CloverWorks','sci-fi/mistery/thriller',3);
INSERT INTO `animes` VALUES (9,'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III',6,'The story follows the exploits of Bell Cranel, a 14-year-old solo adventurer under the goddess Hestia. As the only member of the Hestia Familia, he works hard to make ends meet. He looks up to Ais Wallenstein, a famous and powerful swordswoman who once saved his life, and with whom he fell in love.',12,'https://cdn.myanimelist.net/images/anime/1523/108380.jpg',12,'2020-12-19 09:30:00','J.C.Staff','action/comedy/fantasy',0);
INSERT INTO `animes` VALUES (10,'Dr. Stone: Stone Wars',7,'Second season of Dr. Stone.',12,'https://cdn.myanimelist.net/images/anime/1934/109109l.webp',1,'2021-01-15 07:30:00','TMS Entertainment','sci-fi/adventure',0);
INSERT INTO `animes` VALUES (11,'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2',8,'Second half of Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season.',12,'https://cdn.myanimelist.net/images/anime/1132/110666l.webp',1,'2021-01-07 07:30:00','White Fox','drama/fantasy',3);
INSERT INTO `animes` VALUES (12,'Tonikaku Kawaii',9,'Nasa Yuzaki is determined to leave his name in the history books. Ranking first in the national mock exam and aiming for a distinguished high school, he is certain that he has his whole life mapped out. However, fate is a fickle mistress. On his way home one snowy evening, Nasa\'s eyes fall upon a peerless beauty across the street. Bewitched, Nasa tries to approach her—only to get blindsided by an oncoming truck.',12,'https://cdn.myanimelist.net/images/anime/1613/108722l.webp',12,'2020-12-21 10:05:00','Seven Arcs','comedy/romance',1);
INSERT INTO `animes` VALUES (13,'Tensei shitara Slime Datta Ken 2nd Season',10,'Second season of Tensei shitara Slime Datta Ken.',12,'https://cdn.myanimelist.net/images/anime/1530/106442l.webp',1,'2021-01-13 08:00:00','8bit','comedy/fantasy',0);
INSERT INTO `animes` VALUES (14,'Mahouka Koukou no Rettousei: Raihousha-hen',11,'Shiba Miyuki\'s classmate Kitayama Shizuku is on her way to study abroad. For magicians, this is normally impossible, since allowing the genes of someone who can use magic outside their home country\'s borders is tantamount to giving up national secrets. But it\'s allowed to happen in one case-exchange programs.',13,'https://cdn.myanimelist.net/images/anime/1629/109556l.webp',12,'2020-12-20 09:30:00','8bit','action/sci-fi/magic/school',0);
INSERT INTO `animes` VALUES (15,'Akudama Drive',12,'The bustling metropolis of Kansai, where cybernetic screens litter the neon landscape, may seem like a technological utopia at first glance. But in the dark alleys around the brightly-lit buildings, an unforgiving criminal underbelly still exists in the form of fugitives known as \"Akudama.\"',12,'https://cdn.myanimelist.net/images/anime/1468/109172l.webp',12,'2020-12-25 06:30:00','Studio Pierrot','action/sci-fi',0);
INSERT INTO `animes` VALUES (16,'Kamisama ni Natta Hi',13,'At the end of the last summer vacation of high school, Youta Narukami spends his days preparing for the university entrance exams, when a young girl named Hina suddenly appears, proclaiming herself as the \"god of omniscience.\" Youta is confused and does not believe Hina when she tells him \"The world will end in 30 days.\" After witnessing Hina\'s God-like predictive ability, Youta begins to believe her powers are real.',12,'https://cdn.myanimelist.net/images/anime/1871/109598l.webp',12,'2020-12-20 09:00:00','P.A. Works','drama/fantasy',0);
/*!40000 ALTER TABLE `animes` ENABLE KEYS */;
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
