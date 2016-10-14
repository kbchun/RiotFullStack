-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'recent_games'
-- 
-- ---

DROP TABLE IF EXISTS recent_games;
    
CREATE TABLE recent_games (
  id SERIAL PRIMARY KEY,
  Champion VARCHAR(50) NULL DEFAULT NULL,
  Game_Mode VARCHAR(50) NULL DEFAULT NULL,
  Win VARCHAR(5) NULL DEFAULT NULL,
  Total_Damage_Dealt_To_Champions INTEGER NULL DEFAULT NULL,
  Total_Damage_Taken INTEGER NULL DEFAULT NULL,
  Wards_Placed INTEGER NULL DEFAULT NULL,
  Wards_Killed INTEGER NULL DEFAULT NULL,
  Player_Role INTEGER NULL DEFAULT NULL,
  Assists INTEGER NULL DEFAULT NULL,
  Deaths INTEGER NULL DEFAULT NULL,
  Largest_Multi_Kill INTEGER NULL DEFAULT NULL,
  Kills INTEGER NULL DEFAULT NULL,
  Largest_Killing_Spree INTEGER NULL DEFAULT NULL,
  Time_Played INTEGER NULL DEFAULT NULL,
  IP_Earned INTEGER NULL DEFAULT NULL
);
  -- Date VARCHAR NULL DEFAULT NULL

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE recent_games ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO recent_games (id,Champion,Game Mode,Win,Total Damage Dealt To Champions,Total Damage Taken,Wards Placed,Wards Killed,Player Role,Assists,Deaths,Largest Multi Kill,Kills,Largest Killing Spree,Time Played,IP Earned,Date) VALUES
-- ('','','','','','','','','','','','','','','','','');