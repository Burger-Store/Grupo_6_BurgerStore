-- MySQL Script generated by MySQL Workbench
-- Wed Dec  6 18:01:34 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema burgerstore_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema burgerstore_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `burgerstore_db` DEFAULT CHARACTER SET utf8mb4 ;
USE `burgerstore_db` ;

-- -----------------------------------------------------
-- Table `burgerstore_db`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burgerstore_db`.`category` (
  `idcategory` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idcategory`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `burgerstore_db`.`usertype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burgerstore_db`.`usertype` (
  `idusertype` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusertype`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `burgerstore_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burgerstore_db`.`users` (
  `idusers` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `surname` VARCHAR(20) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `phone` INT(11) NOT NULL,
  `address` VARCHAR(30) NOT NULL,
  `lift` VARCHAR(20) NOT NULL,
  `city` VARCHAR(20) NOT NULL,
  `state` VARCHAR(20) NOT NULL,
  `zipcode` INT(11) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `idusertype` INT NOT NULL,
  PRIMARY KEY (`idusers`),
  INDEX `fk_users_usertype1_idx` (`idusertype` ASC) VISIBLE,
  CONSTRAINT `fk_users_usertype1`
    FOREIGN KEY (`idusertype`)
    REFERENCES `burgerstore_db`.`usertype` (`idusertype`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `burgerstore_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burgerstore_db`.`orders` (
  `idorders` INT(11) NOT NULL AUTO_INCREMENT,
  `idusers` INT(11) NOT NULL,
  `date` DATE NOT NULL,
  `total_price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`idorders`),
  INDEX `fk_orders_users1_idx` (`idusers` ASC) VISIBLE,
  CONSTRAINT `fk_orders_users1`
    FOREIGN KEY (`idusers`)
    REFERENCES `burgerstore_db`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `burgerstore_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burgerstore_db`.`products` (
  `idproducts` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `idcategory` INT(11) NOT NULL,
  PRIMARY KEY (`idproducts`),
  INDEX `fk_products_category1_idx` (`idcategory` ASC) VISIBLE,
  CONSTRAINT `fk_products_category1`
    FOREIGN KEY (`idcategory`)
    REFERENCES `burgerstore_db`.`category` (`idcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `burgerstore_db`.`pre_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `burgerstore_db`.`pre_order` (
  `idpre_order` INT(11) NOT NULL AUTO_INCREMENT,
  `idproducts` INT(11) NOT NULL,
  `idorders` INT(11) NOT NULL,
  PRIMARY KEY (`idpre_order`),
  INDEX `fk_products_has_orders_orders1_idx` (`idorders` ASC) VISIBLE,
  INDEX `fk_products_has_orders_products1_idx` (`idproducts` ASC) VISIBLE,
  CONSTRAINT `fk_products_has_orders_orders1`
    FOREIGN KEY (`idorders`)
    REFERENCES `burgerstore_db`.`orders` (`idorders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_orders_products1`
    FOREIGN KEY (`idproducts`)
    REFERENCES `burgerstore_db`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
