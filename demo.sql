show databases;

create database demo_project;

drop database demo_amad;

use demo_project;


create table customer(
    cid INT NOT NULL AUTO_INCREMENT,
    name varchar(20),
    address varchar(20),
    salary decimal(10,2), 
    PRIMARY KEY (cid)
);
create table customer(
    cid int NOT NULL AUTO_INCREMENT,
    name varchar(20),
    address varchar(20),
    salary decimal(10,2), 
    constraint primary key(cid),
);

show tables;

select * from customer;

desc customer;

insert into customer values("1","Yasindu","Panadura",25000.00);
insert into customer values("2","Pasindu","Galle",15000.00);

create table item(
    iid varchar(10),
    name varchar(20),
    qty int,
    price decimal(10,2)
);

insert into item values("I001","Parippu",5,150.00);

select * from customer where cid="C001";

delete from customer where cid="C001";

update customer set name="Rathindu" where cid="C002";
