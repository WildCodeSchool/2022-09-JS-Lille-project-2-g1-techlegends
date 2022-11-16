DROP TABLE IF EXISTS users;

CREATE TABLE
    users(
        id int primary key NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        score INT,
    ) ENGINE = innoDB DEFAULT CHARSET = utf8mb3;

INSERT INTO users(name, score) VALUES ('Sax59', '200') 