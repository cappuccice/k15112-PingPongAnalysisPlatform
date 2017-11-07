-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 2017 年 9 月 29 日 11:21
-- サーバのバージョン： 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `tabletennis_db`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `operate_receive_a_tb`
--

CREATE TABLE `operate_receive_tb` (
  `game_id` int(11) NOT NULL,
  `tikita` int(11) NOT NULL,
  `flick` int(11) NOT NULL,
  `stop` int(11) NOT NULL,
  `push` int(11) NOT NULL,
  `flow` int(11) NOT NULL,
  `drive_strong` int(11) NOT NULL,
  `drive_weak` int(11) NOT NULL,
  `cut` int(11) NOT NULL,
  `reverse_tikita` int(11) NOT NULL,
  `receive_course_fore_short` int(11) NOT NULL,
  `receive_course_middle_short` int(11) NOT NULL,
  `receive_course_back_short` int(11) NOT NULL,
  `receive_course_fore_half_long` int(11) NOT NULL,
  `receive_course_middle_half_long` int(11) NOT NULL,
  `receive_course_back_half_long` int(11) NOT NULL,
  `receive_course_fore_long` int(11) NOT NULL,
  `receive_course_middle_long` int(11) NOT NULL,
  `receive_course_back_long` int(11) NOT NULL,
  `racket_fore` int(11) NOT NULL,
  `racket_back` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- テーブルの構造 `operate_service_a_tb`
--

CREATE TABLE `operate_service_tb` (
  `player_name_id` int(5) NOT NULL,
  `game_id` int(5) NOT NULL,
  `time_out` int(5) NOT NULL,
  `let` int(5) NOT NULL,
  `spin_horizontal` int(5) NOT NULL,
  `spin_vertical` int(5) NOT NULL,
  `yg` int(5) NOT NULL,
  `wind` int(5) NOT NULL,
  `crouch` int(5) NOT NULL,
  `service_course_fore_short` int(5) NOT NULL,
  `service_course_middle_short` int(5) NOT NULL,
  `service_course_back_short` int(5) NOT NULL,
  `service_course_fore_half_long` int(5) NOT NULL,
  `service_course_middle_half_long` int(5) NOT NULL,
  `service_course_back_half_long` int(5) NOT NULL,
  `service_course_fore_long` int(5) NOT NULL,
  `service_course_middle_long` int(5) NOT NULL,
  `service_course_back_long` int(5) NOT NULL,
  `toss_high` int(5) NOT NULL,
  `toss_center` int(5) NOT NULL,
  `toss_low` int(5) NOT NULL,
  `position_fore` int(5) NOT NULL,
  `position_middle` int(5) NOT NULL,
  `position_back` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- テーブルの構造 `player_name_tb`
--

CREATE TABLE `player_name_tb` (
  `player_name_id` int(5) NOT NULL,
  `player_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `operate_receive_a_tb`
--
ALTER TABLE `operate_receive_tb`
  ADD PRIMARY KEY (`game_id`);

--
-- Indexes for table `operate_service_a_tb`
--
ALTER TABLE `operate_service_tb`
  ADD PRIMARY KEY (`player_name_id`);

--
-- Indexes for table `player_name_tb`
--
ALTER TABLE `player_name_tb`
  ADD PRIMARY KEY (`player_name_id`);
