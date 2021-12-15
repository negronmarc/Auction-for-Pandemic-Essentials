CREATE DATABASE IF NOT EXISTS auction;
USE auction;

Drop table if exists catagories;
CREATE TABLE catagories (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cat_name VARCHAR(255) NOT NULL,
    cat_id INT NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    product_starting_bid INT NOT NULL,
    product_id INT NOT NULL,
);

CREATE TABLE bids (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    current_bid VARCHAR(255) NOT NULL,
    bid_id INT NOT NULL,
);

CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
);
