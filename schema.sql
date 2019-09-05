--this creates database 
CREATE DATABASE ratsmeller;


--use text below to find table you wont be able to use that until tables and database are created

-- SELECT * FROM invoice.users;
-- use invoice;

--This creates the table named users
create table members (
	user_id int auto_increment NOT NULL primary key,
    user_name varchar(30),
    password varchar(30)
);

--This inserts data into users uncoment if you need it

-- use invoice;
-- INSERT INTO users (user_name, passwords)
-- VALUES  ('artjerk1', 'password123'),
-- 		('jerkyjer1', 'password456');

-- Creates jobs table
use ratsmeller;
create table jobs (
	job_id int auto_increment NOT NULL primary key,
    job_name varchar(30),
    user_id int,
    foreign key (user_id) references users(user_id)
);

-- inserts data into table above
-- INSERT INTO jobs (job_name, user_id)
-- VALUES  ('superwebsite', '1'),
-- 		('lamewebsite', '2');

-- Creates jobs tasks
use ratsmeller;
create table tasks (
	task_id int auto_increment NOT NULL primary key,
    task_name varchar(30),
    task_description varchar(140),
    task_rate decimal(4,2),
    job_id int,
    foreign key (job_id) references jobs(job_id)
);

-- inserts data into table above
--INSERT INTO tasks (task_name, task_description, task_rate, job_id)
--VALUES  ('UI', 'UI complete package', 90.00,2);
		


-- Creates jobs materials
use ratsmeller;
create table materials (
	material_id int auto_increment NOT NULL primary key,
    material_name varchar(30),
    material_rate decimal(4,2),
    job_id int,
    foreign key (job_id) references jobs(job_id)
);

-- inserts data into table above
--INSERT INTO materials (material_name, material_rate, job_id)
--VALUES  ('stock photo', 15.00,2);

-- Creates jobs recipient table
use ratsmeller;
create table recipients (
recipient_id int auto_increment NOT NULL primary key,
company_name varchar(30),
first_name varchar(30),
last_name varchar(30),
street_number int(10),
street_name varchar(30),
zip_code int(10),
city varchar(30),
country varchar(30),
phone int(10),
mail varchar(30),
job_id int,
foreign key (job_id) references jobs(job_id) 
);

-- inserts into emitter
--INSERT INTO recipient (company_name, first_name, last_name, street_number, street_name, zip_code, city, country, phone, mail, job_id)
--VALUES  ('sillyman', 'George', 'Bigboy', 32, 'Huntington', 44115, 'Cleveland', 'USA', 1216555555, 'email@email.com',1 );


-- Creates jobs invoices table
use ratsmeller;
create table emitters (
emitter_id int auto_increment NOT NULL primary key,
name varchar(60),
street_number int(10),
street_name varchar(30),
zip_code int(10),
city varchar(30),
country varchar(30),
phone int(10),
mail varchar(30),
user_id int,
foreign key (user_id) references users(user_id) 
);

-- inserts into emitter
-- INSERT INTO emitter (name, street_number, street_name, zip_code, city, country, phone, mail, user_id)
-- VALUES  ('Rat smeller LLC', 32, 'Huntington', 44114, 'Cleveland', 'USA', 1216655555, 'emails@email.com',1 );


--------------------------------------------------------------------------------------------------------
