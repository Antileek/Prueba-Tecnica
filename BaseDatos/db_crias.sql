DROP SCHEMA IF EXISTS `db_crias` ;
CREATE SCHEMA IF NOT EXISTS `db_crias` ;

CREATE TABLE IF NOT EXISTS `db_crias`.`Proveedor` (
  `ID` INT NOT NULL auto_increment,
  `Nombre` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`ID`)
  );
  
  CREATE TABLE IF NOT EXISTS `db_crias`.`Cria` (
  `ID` INT NOT NULL auto_increment,
  `IdProveedor` INT NOT NULL,
  `Fecha` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  `Peso` DOUBLE NOT NULL,
  `Costo` DECIMAL(18,2) NOT NULL,
  `Nombre` VARCHAR(150) NOT NULL,
  `Descripcion` VARCHAR(150) NULL,
  `EstadoSalud` VARCHAR(150) NOT NULL,
  `ColorMusculo` INT NOT NULL,
  `CalidadMarmoleo` INT NOT NULL,
  `GrasaTipo` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `FK_Cria_Proveedor`
    FOREIGN KEY (`IdProveedor`)
    REFERENCES `db_crias`.`Proveedor` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );
    
CREATE TABLE IF NOT EXISTS `db_crias`.`Sensor` (
  `IdCria` INT NOT NULL,
  `FreCardiaca` DOUBLE NOT NULL,
  `PreSanguinea` DOUBLE NOT NULL,
  `FreRespiratoria` DOUBLE NOT NULL,
  `Temperatura` DOUBLE NOT NULL,
  `Fecha` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT `FK_Sensor_Cria`
    FOREIGN KEY (`IdCria`)
    REFERENCES `db_crias`.`Cria` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );

