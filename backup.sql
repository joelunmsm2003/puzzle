-- MySQL dump 10.13  Distrib 5.7.13, for Linux (x86_64)
--
-- Host: localhost    Database: choose
-- ------------------------------------------------------
-- Server version	5.7.13-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_type`
--

DROP TABLE IF EXISTS `account_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_type`
--

LOCK TABLES `account_type` WRITE;
/*!40000 ALTER TABLE `account_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amenity`
--

DROP TABLE IF EXISTS `amenity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amenity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenity`
--

LOCK TABLES `amenity` WRITE;
/*!40000 ALTER TABLE `amenity` DISABLE KEYS */;
/*!40000 ALTER TABLE `amenity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amenity_hotel`
--

DROP TABLE IF EXISTS `amenity_hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amenity_hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amenity` int(100) DEFAULT NULL,
  `hotel` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `amenity` (`amenity`),
  KEY `hotel` (`hotel`),
  CONSTRAINT `amenity_hotel_ibfk_1` FOREIGN KEY (`amenity`) REFERENCES `amenity` (`id`),
  CONSTRAINT `amenity_hotel_ibfk_2` FOREIGN KEY (`hotel`) REFERENCES `hotel` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenity_hotel`
--

LOCK TABLES `amenity_hotel` WRITE;
/*!40000 ALTER TABLE `amenity_hotel` DISABLE KEYS */;
/*!40000 ALTER TABLE `amenity_hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permissi_content_type_id_2f476e4b_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `type` int(100) DEFAULT NULL,
  `phone` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `tipo` (`type`) USING BTREE,
  CONSTRAINT `auth_user_ibfk_1` FOREIGN KEY (`type`) REFERENCES `tipo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$24000$n5I2SUJORF8B$gbsqDVtva6VTfebkvMHy5HU/STvB+Do7C7AqqJsXDtQ=','2016-07-18 15:27:03.750432',1,'root','','','',1,1,'2016-07-18 15:26:44.164387',NULL,NULL);
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `choose_template`
--

DROP TABLE IF EXISTS `choose_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choose_template` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `hotel` int(100) DEFAULT NULL,
  `template` int(100) DEFAULT NULL,
  `precio` int(100) DEFAULT NULL,
  `extrasingle` tinyint(1) DEFAULT NULL,
  `doublesingle` tinyint(1) DEFAULT NULL,
  `max_occupancy` int(100) DEFAULT NULL,
  `adults` int(100) DEFAULT NULL,
  `childrens` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choose_template`
--

LOCK TABLES `choose_template` WRITE;
/*!40000 ALTER TABLE `choose_template` DISABLE KEYS */;
/*!40000 ALTER TABLE `choose_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `region` int(100) DEFAULT NULL,
  `photo` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `region` (`region`),
  KEY `photo` (`photo`),
  CONSTRAINT `city_ibfk_1` FOREIGN KEY (`region`) REFERENCES `region` (`id`),
  CONSTRAINT `city_ibfk_2` FOREIGN KEY (`photo`) REFERENCES `photo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Huarmey',NULL,4),(2,'Cuzco',NULL,1),(3,'Piura',NULL,3),(4,'Iquitos',NULL,2),(5,'Bagua Grande',NULL,NULL),(6,'Chachapoyas',NULL,NULL),(7,'Bagua',NULL,NULL),(8,'Chimbote',NULL,NULL),(9,'Huaraz',NULL,NULL),(10,'Casma',NULL,NULL),(11,'Abancay',NULL,NULL),(12,'Andahuaylas',NULL,NULL),(13,'Lima',NULL,NULL),(14,'Huacho',NULL,NULL),(15,'Huaral',NULL,NULL),(16,'Cañete',NULL,NULL),(17,'Barranca',NULL,NULL),(18,'Chancay',NULL,NULL),(19,'Paramonga',NULL,NULL),(20,'Arequipa',NULL,NULL),(21,'Mollendo',NULL,NULL),(22,'Camana',NULL,NULL),(23,'Iquitos',NULL,NULL),(24,'Yurimaguas',NULL,NULL),(25,'Requena',NULL,NULL),(26,'Ayacucho',NULL,NULL),(27,'Huanta',NULL,NULL),(28,'Puerto Maldonado',NULL,NULL),(29,'Cajamarca',NULL,NULL),(30,'Jaen',NULL,NULL),(31,'Chota',NULL,NULL),(32,'Celendin',NULL,NULL),(33,'Moquegua',NULL,NULL),(34,'Ilo',NULL,NULL),(35,'Callao',NULL,NULL),(36,'Cerro de Pasco',NULL,NULL),(37,'Cuzco',NULL,NULL),(38,'Sicuani',NULL,NULL),(39,'Quillabamba',NULL,NULL),(40,'Espinar',NULL,NULL),(41,'Piura',NULL,NULL),(42,'Sullana',NULL,NULL),(43,'Paita',NULL,NULL),(44,'Talara',NULL,NULL),(45,'Catacaos',NULL,NULL),(46,'Chulucanas',NULL,NULL),(47,'Sechura',NULL,NULL),(48,'Huancavelica',NULL,NULL),(49,'Juliaca',NULL,NULL),(50,'Puno',NULL,NULL),(51,'Azangaro',NULL,NULL),(52,'Huanuco',NULL,NULL),(53,'Tingo Maria',NULL,NULL),(54,'Tarapoto',NULL,NULL),(55,'Moyobamba',NULL,NULL),(56,'Juanjui',NULL,NULL),(57,'Rioja',NULL,NULL),(58,'Ica',NULL,NULL),(59,'Chincha Alta',NULL,NULL),(60,'Pisco',NULL,NULL),(61,'Nazca',NULL,NULL),(62,'Tacna',NULL,NULL),(63,'Huancayo',NULL,NULL),(64,'Tarma',NULL,NULL),(65,'Jauja',NULL,NULL),(66,'La Oroya',NULL,NULL),(67,'Tumbes',NULL,NULL),(68,'Zarumilla',NULL,NULL),(69,'Trujillo',NULL,NULL),(70,'Chepen',NULL,NULL),(71,'Pacasmayo',NULL,NULL),(72,'Guadalupe',NULL,NULL),(73,'Casa Grande',NULL,NULL),(74,'Pucallpa',NULL,NULL);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2016-07-15 18:52:52.174941'),(2,'auth','0001_initial','2016-07-15 18:52:52.994341'),(3,'admin','0001_initial','2016-07-15 18:52:53.206194'),(4,'admin','0002_logentry_remove_auto_add','2016-07-15 18:52:53.240403'),(5,'contenttypes','0002_remove_content_type_name','2016-07-15 18:52:53.391253'),(6,'auth','0002_alter_permission_name_max_length','2016-07-15 18:52:53.416035'),(7,'auth','0003_alter_user_email_max_length','2016-07-15 18:52:53.441875'),(8,'auth','0004_alter_user_username_opts','2016-07-15 18:52:53.458828'),(9,'auth','0005_alter_user_last_login_null','2016-07-15 18:52:53.530609'),(10,'auth','0006_require_contenttypes_0002','2016-07-15 18:52:53.536070'),(11,'auth','0007_alter_validators_add_error_messages','2016-07-15 18:52:53.557606'),(12,'sessions','0001_initial','2016-07-15 18:52:53.621734');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('dmqal946472ii42rvpoangu2q62z9z8q','MmNiMzU2ZjcyNjBhODQ2NGFlZWZiYmQ5YWMzNGY0NTkwNTk5NzU2ZTp7Il9hdXRoX3VzZXJfaGFzaCI6IjAzZDJmOTAzNzQ1MDY3M2UyOTUxNmNmY2U5NWRhYjY5MzVhZTIxZTMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2016-08-01 15:27:03.759218');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extra_bed`
--

DROP TABLE IF EXISTS `extra_bed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `extra_bed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) DEFAULT NULL,
  `child_occupancy` varchar(100) DEFAULT NULL,
  `adult_occupancy` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extra_bed`
--

LOCK TABLES `extra_bed` WRITE;
/*!40000 ALTER TABLE `extra_bed` DISABLE KEYS */;
/*!40000 ALTER TABLE `extra_bed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extrabed_roomtemplate`
--

DROP TABLE IF EXISTS `extrabed_roomtemplate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `extrabed_roomtemplate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room` int(100) DEFAULT NULL,
  `extra_bed` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room` (`room`),
  KEY `extra_bed` (`extra_bed`),
  CONSTRAINT `extrabed_roomtemplate_ibfk_1` FOREIGN KEY (`room`) REFERENCES `room` (`id`),
  CONSTRAINT `extrabed_roomtemplate_ibfk_2` FOREIGN KEY (`extra_bed`) REFERENCES `extra_bed` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extrabed_roomtemplate`
--

LOCK TABLES `extrabed_roomtemplate` WRITE;
/*!40000 ALTER TABLE `extrabed_roomtemplate` DISABLE KEYS */;
/*!40000 ALTER TABLE `extrabed_roomtemplate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `star` int(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `tripadvisor` int(100) DEFAULT NULL,
  `photo` int(100) DEFAULT NULL,
  `city` int(100) DEFAULT NULL,
  `account_type` int(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `account_number` int(100) DEFAULT NULL,
  `user` int(100) DEFAULT NULL,
  `hold_limit` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `account_type` (`account_type`),
  KEY `city` (`city`),
  KEY `user` (`user`),
  KEY `photo` (`photo`),
  CONSTRAINT `hotel_ibfk_4` FOREIGN KEY (`city`) REFERENCES `city` (`id`),
  CONSTRAINT `hotel_ibfk_5` FOREIGN KEY (`photo`) REFERENCES `photo` (`id`),
  CONSTRAINT `hotel_ibfk_6` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (5,'Hotel Cuzco',4,'1212',3232,13,2,1212,'Caminos del Inca 232',323,1,323),(6,'Lima Hotel',1,'Mejor de Lima',NULL,14,1,2121,'Av Arequipa 232',232,1,NULL),(7,'Juliaca Hotel',2,NULL,NULL,15,1,NULL,'Av Castilla 333',NULL,1,NULL),(8,'Huarmey Hotel',2,NULL,NULL,14,1,NULL,'',NULL,NULL,NULL),(9,'Cuzco Hotel',NULL,NULL,NULL,15,2,NULL,NULL,NULL,NULL,NULL),(10,'Piura Hotel',NULL,NULL,NULL,15,3,NULL,NULL,NULL,NULL,NULL),(11,'Iquitos Hotel',NULL,NULL,NULL,16,4,NULL,NULL,NULL,NULL,NULL),(12,'Bagua Grande',NULL,NULL,NULL,15,5,NULL,NULL,NULL,NULL,NULL),(13,'Chachapoyas',NULL,NULL,NULL,18,6,NULL,NULL,NULL,NULL,NULL),(14,'Bagua',NULL,NULL,NULL,18,7,NULL,NULL,NULL,NULL,NULL),(15,'Chachapoya Hotel',NULL,NULL,NULL,15,6,NULL,NULL,NULL,NULL,NULL),(16,'Casma Hotel',NULL,NULL,NULL,18,10,NULL,NULL,NULL,NULL,NULL),(17,'Cuzqus',NULL,NULL,NULL,18,2,NULL,NULL,NULL,NULL,NULL),(18,'Cuzcuqo',NULL,NULL,NULL,18,2,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel_roomtemplate`
--

DROP TABLE IF EXISTS `hotel_roomtemplate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotel_roomtemplate` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `hotel` int(100) DEFAULT NULL,
  `roomtemplate` int(100) DEFAULT NULL,
  `precio` int(100) DEFAULT NULL,
  `extrasingle` tinyint(1) DEFAULT NULL,
  `extradouble` tinyint(1) DEFAULT NULL,
  `max_occupancy` int(100) DEFAULT NULL,
  `childrens` int(100) DEFAULT NULL,
  `adults` int(100) DEFAULT NULL,
  `privatebathrom` int(100) DEFAULT NULL,
  `photo` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel` (`hotel`),
  KEY `roomtemplate` (`roomtemplate`),
  KEY `photo` (`photo`),
  CONSTRAINT `hotel_roomtemplate_ibfk_1` FOREIGN KEY (`hotel`) REFERENCES `hotel` (`id`),
  CONSTRAINT `hotel_roomtemplate_ibfk_2` FOREIGN KEY (`roomtemplate`) REFERENCES `roomtemplate` (`id`),
  CONSTRAINT `hotel_roomtemplate_ibfk_3` FOREIGN KEY (`photo`) REFERENCES `photo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel_roomtemplate`
--

LOCK TABLES `hotel_roomtemplate` WRITE;
/*!40000 ALTER TABLE `hotel_roomtemplate` DISABLE KEYS */;
/*!40000 ALTER TABLE `hotel_roomtemplate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest`
--

DROP TABLE IF EXISTS `interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `name_en` varchar(100) NOT NULL,
  `name_fr` varchar(100) NOT NULL,
  `searchable` varchar(100) DEFAULT NULL,
  `photo` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `photo` (`photo`),
  CONSTRAINT `interest_ibfk_1` FOREIGN KEY (`photo`) REFERENCES `photo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest`
--

LOCK TABLES `interest` WRITE;
/*!40000 ALTER TABLE `interest` DISABLE KEYS */;
INSERT INTO `interest` VALUES (1,'Gastronomia','Gastronomy','',NULL,5),(2,'Equitacion','','',NULL,6),(3,'Ciclismo','','',NULL,7),(4,'Playa','','',NULL,8),(5,'Canoe','','',NULL,9),(6,'Caminata','','',NULL,10),(7,'Sandboard','','',NULL,11),(8,'Natacion','Swimming','',NULL,12),(9,'Naturaleza','','',NULL,NULL),(10,'Relajacion','','',NULL,NULL),(11,'Paisajes','','',NULL,NULL),(12,'Gente Amable','','',NULL,NULL),(13,'Pasear','','',NULL,NULL),(14,'Paseo por la naturaleza','','',NULL,NULL),(15,'Senderismo','','',NULL,NULL),(16,'Rutas Turisticas','','',NULL,NULL),(17,'Compras','','',NULL,NULL);
/*!40000 ALTER TABLE `interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest_hotel`
--

DROP TABLE IF EXISTS `interest_hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interest_hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hotel` int(100) DEFAULT NULL,
  `interest` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel` (`hotel`),
  KEY `interests` (`interest`),
  CONSTRAINT `interest_hotel_ibfk_1` FOREIGN KEY (`hotel`) REFERENCES `hotel` (`id`),
  CONSTRAINT `interest_hotel_ibfk_2` FOREIGN KEY (`interest`) REFERENCES `interest` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest_hotel`
--

LOCK TABLES `interest_hotel` WRITE;
/*!40000 ALTER TABLE `interest_hotel` DISABLE KEYS */;
INSERT INTO `interest_hotel` VALUES (1,5,9),(2,6,2),(3,6,4),(4,6,4),(5,6,5),(6,6,7),(7,17,9),(8,13,4),(9,15,9);
/*!40000 ALTER TABLE `interest_hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `user` int(100) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(100) DEFAULT NULL,
  `type` int(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `amount` int(100) DEFAULT NULL,
  `transaction` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`id`) REFERENCES `payment_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_type`
--

DROP TABLE IF EXISTS `payment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `api_key` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_type`
--

LOCK TABLES `payment_type` WRITE;
/*!40000 ALTER TABLE `payment_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `caption` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,'Cuzco','/dist/img/cuzco@2x.png\r\n','2016-07-25 00:00:00',NULL),(2,'Iquitos','/dist/img/iquitos@2x.png',NULL,NULL),(3,'Piura','/dist/img/piura_mancora@2x.png',NULL,NULL),(4,'Huarmey','/dist/img/huarmey@2x.png',NULL,NULL),(5,NULL,'/dist/img/gastro@2x.png',NULL,NULL),(6,NULL,'/dist/img/horse@2x.png',NULL,NULL),(7,NULL,'/dist/img/quadbike@2x.png',NULL,NULL),(8,NULL,'/dist/img/beach@2x.png',NULL,NULL),(9,NULL,'/dist/img/canoe@2x.png',NULL,NULL),(10,NULL,'/dist/img/trekk@2x.png',NULL,NULL),(11,NULL,'/dist/img/sand@2x.png',NULL,NULL),(12,NULL,'/dist/img/swimming@2x.png',NULL,NULL),(13,NULL,'/dist/img/hotel1@2x.png',NULL,NULL),(14,NULL,'/dist/img/hotel2@2x.png',NULL,NULL),(15,'','/dist/img/hotel3@2x.png',NULL,NULL),(16,'','/dist/img/hotel.jpg',NULL,NULL),(17,'','/dist/img/hotel1.jpg',NULL,NULL),(18,NULL,'/dist/img/hotel2.jpg',NULL,NULL),(19,NULL,'/dist/img/hotel3.jpg',NULL,NULL);
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference`
--

DROP TABLE IF EXISTS `reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reference` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference`
--

LOCK TABLES `reference` WRITE;
/*!40000 ALTER TABLE `reference` DISABLE KEYS */;
/*!40000 ALTER TABLE `reference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference_hotel`
--

DROP TABLE IF EXISTS `reference_hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reference_hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reference` int(100) DEFAULT NULL,
  `hotel` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reference` (`reference`),
  KEY `hotel` (`hotel`),
  CONSTRAINT `reference_hotel_ibfk_2` FOREIGN KEY (`reference`) REFERENCES `reference` (`id`),
  CONSTRAINT `reference_hotel_ibfk_3` FOREIGN KEY (`hotel`) REFERENCES `hotel` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_hotel`
--

LOCK TABLES `reference_hotel` WRITE;
/*!40000 ALTER TABLE `reference_hotel` DISABLE KEYS */;
/*!40000 ALTER TABLE `reference_hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Amazonas'),(2,'Ancash'),(3,'Apurimac'),(4,'Arequipa'),(5,'Ayacucho'),(6,'Cajamarca'),(7,'Callao'),(8,'Cuzco'),(9,'Huancavelica'),(10,'Huanuco'),(11,'Ica'),(12,'Junin'),(13,'La Libertad'),(14,'Lambayeque'),(15,'Lima'),(16,'Loreto'),(17,'Madre de Dios'),(18,'Moquegua'),(19,'Pasco'),(20,'Piura'),(21,'Puno'),(22,'San Martin'),(23,'Tacna'),(24,'Tumbes'),(25,'Ucayali\r\n');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservacion_status`
--

DROP TABLE IF EXISTS `reservacion_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservacion_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservacion_status`
--

LOCK TABLES `reservacion_status` WRITE;
/*!40000 ALTER TABLE `reservacion_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservacion_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(100) DEFAULT NULL,
  `traveler_name` varchar(255) DEFAULT NULL,
  `traveler_email` varchar(255) DEFAULT NULL,
  `traveler_mobile` int(11) DEFAULT NULL,
  `payment` int(11) DEFAULT NULL,
  `checkindate` datetime DEFAULT NULL,
  `checkoutdate` datetime DEFAULT NULL,
  `status` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  KEY `payment` (`payment`),
  KEY `status` (`status`),
  CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`payment`) REFERENCES `payment` (`id`),
  CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`status`) REFERENCES `reservacion_status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `photo` int(100) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `roomstatus` int(100) DEFAULT NULL,
  `hotelroomtemplate` int(100) DEFAULT NULL,
  `hotel` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `status` (`roomstatus`),
  KEY `hotel` (`hotel`),
  KEY `photo` (`photo`),
  KEY `hotelroomtemplate` (`hotelroomtemplate`),
  KEY `roomstatus` (`roomstatus`) USING BTREE,
  CONSTRAINT `room_ibfk_3` FOREIGN KEY (`hotel`) REFERENCES `hotel` (`id`),
  CONSTRAINT `room_ibfk_4` FOREIGN KEY (`photo`) REFERENCES `photo` (`id`),
  CONSTRAINT `room_ibfk_5` FOREIGN KEY (`hotelroomtemplate`) REFERENCES `hotel_roomtemplate` (`id`),
  CONSTRAINT `room_ibfk_6` FOREIGN KEY (`roomstatus`) REFERENCES `room_status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_reservation`
--

DROP TABLE IF EXISTS `room_reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room_reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reservation_id` int(100) DEFAULT NULL,
  `room_id` int(100) DEFAULT NULL,
  `status_id` int(100) DEFAULT NULL,
  `checkindate` datetime DEFAULT NULL,
  `checkoutdate` datetime DEFAULT NULL,
  `child_occupants` int(100) DEFAULT NULL,
  `adult_occupants` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room` (`room_id`),
  KEY `reservation` (`reservation_id`),
  KEY `status` (`status_id`),
  CONSTRAINT `room_reservation_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
  CONSTRAINT `room_reservation_ibfk_2` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_reservation`
--

LOCK TABLES `room_reservation` WRITE;
/*!40000 ALTER TABLE `room_reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `room_reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_status`
--

DROP TABLE IF EXISTS `room_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room_status` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_status`
--

LOCK TABLES `room_status` WRITE;
/*!40000 ALTER TABLE `room_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `room_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomtemplate`
--

DROP TABLE IF EXISTS `roomtemplate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roomtemplate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `total_occupancy_limit` int(100) DEFAULT NULL,
  `adult_occupancy_limit` int(100) DEFAULT NULL,
  `child_occupancy_limit` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomtemplate`
--

LOCK TABLES `roomtemplate` WRITE;
/*!40000 ALTER TABLE `roomtemplate` DISABLE KEYS */;
/*!40000 ALTER TABLE `roomtemplate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-08-05 17:41:47
