DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("electronics", "jheadphones", 52.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("furniture", "jloveseat", 352.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("household", "jpots", 50.25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bath", "jmats", 12.75, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("womensclothing", "jitaliandress", 25.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mensclothing", "jshorts", 12.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sports", "jweights", 22.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("outdoors", "jtents", 32.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("car", "jbattery", 44.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("living", "jrugs", 102.50, 100);