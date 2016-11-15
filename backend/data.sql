drop database if exists `bubble_shooter`;
create database `bubble_shooter`
	default character set utf8
	default collate utf8_general_ci;
use bubble_shooter;

drop table if exists `score`;
create table `score` (
  `s_id` int unsigned not null auto_increment comment 'primary key',
  `score` varchar(32) not null comment 'the score',
  `user_name` varchar(32) null comment 'the user',
  primary key (`s_id`)
) engine=innodb default charset=utf8;


