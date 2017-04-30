# namie.cc source code

### environment
ubuntu 16.04 lts, python 2.7.12, mysql 5.7.18, redis 3.0.6

* sudo apt-get install python
* sudo apt-get install python-pip
* sudo apt-get install mysql-server
* sudo apt-get install libmysqlclient-dev
* sudo apt-get install redis-server
* sudo -H pip install -r requirements.txt

### mysql
* create database cc_namie_normal_test default character set utf8;
* create database cc_namie_normal default character set utf8; (for production)s

    
    create table url (
        id INT NOT NULL AUTO_INCREMENT,
        url_id VARCHAR(20) NOT NULL, 
        url TEXT NOT NULL, 
        ip VARCHAR(15),
        PRIMARY KEY (id)
    ) DEFAULT CHARSET=utf8;

### run
* python server.py -p 4020 -t test
