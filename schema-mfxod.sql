-- creates database 
CREATE DATABASE invoice;



-- creates users table
use invoice;
create table users (
	user_id int auto_increment NOT NULL primary key,
    user_name varchar(30),
    passwords varchar(30)
);

-- inserts data into users table
-- use invoice;
-- INSERT INTO users (user_name, passwords);
-- VALUES ('artjerk1', 'password123'),
-- ('jerkyjer1', 'password456');



-- this creates emitters table
-- could we combine this with the users table and just pre-populate users with placeholder emitter data?
use invoice;
create table emitters (
    emitter_id int auto_increment NOT NULL primary key,
    emitter_name varchar(30),
    first_name varchar(30),
    last_name varchar(30),
    email varchar(30),
    phone int(10),
    street_address varchar(30),
    city varchar(30),
    -- have to call this "emitter_state" - or similar - because "state" alone is a reserved keyword
    emitter_state varchar(30),
    zip_code int(10),
    user_id int,
    foreign key (user_id) references users(user_id) 
);

-- inserts into emitter
-- use invoice;
-- INSERT INTO emitter (emitter_name, first_name, last_name, email, phone, street_address, city, emitter_state, zip_code, user_id);
-- VALUES ('Rat Smeller LLC', 'Ralph', 'Rodent', 'email@email.com', 1216555555, '32 Huntington', 'Cleveland', 'OH', 44115, 1);



-- creates customers table (previously called recipient)
use invoice;
create table customers (
    customer_id int auto_increment NOT NULL primary key,
    customer_name varchar(30),
    first_name varchar(30),
    last_name varchar(30),
    email varchar(30),
    phone int(10),
    street_address varchar(30),
    city varchar(30),
    -- have to call this "customer_state" - or similar - because "state" alone is a reserved keyword
    customer_state varchar(30),
    zip_code int(10),
    -- QUESTION: shouldn't the customers table reference the user_id instead of job_id?
    job_id int,
    foreign key (job_id) references jobs(job_id) 
);

-- inserts data into customers table
-- use invoice;
-- INSERT INTO recipient (customer_name, first_name, last_name, email, phone, street_address, city, customer_state, zip_code, job_id);
-- VALUES ('Sillyman Inc.', 'George', 'Bigboy', 'email@email.com', 1216555555, '32 Huntington', 'Cleveland', 'OH', 44115, 1);



-- creates jobs table
use invoice;
create table jobs (
	job_id int auto_increment NOT NULL primary key,
    job_name varchar(30),
    -- QUESTION: shouldn't the jobs table reference the customer_id instead of the user_id?
    user_id int,
    foreign key (user_id) references users(user_id)
);

-- inserts data into jobs table
-- use invoice;
-- INSERT INTO jobs (job_name, user_id);
-- VALUES ('superwebsite', 1),
-- ('lamewebsite', 2);



-- creates items table (previously called tasks)
use invoice;
create table items (
	item_id int auto_increment NOT NULL primary key,
    item_name varchar(30),
    item_quantity int(10),
    item_charge decimal(4,2),
    item_description varchar(140),
    job_id int,
    foreign key (job_id) references jobs(job_id)
);

-- inserts data into items table
-- use invoice;
-- INSERT INTO items (item_name, item_quantity, item_charge, item_description, job_id);
-- VALUES ('UI', 1, 90.00, 'UI complete package', 2);