CREATE TABLE Users(
    user_id VARCHAR(100) NOT NULL, 
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE, 
    password VARCHAR(200) NOT NULL,
    isAdmin BIT DEFAULT 0,
    isWelcomed BIT DEFAULT 0
)

ALTER TABLE Users ADD isWelcomed BIT DEFAULT 0

SELECT * FROM Users

UPDATE Users
SET isAdmin = 1
WHERE email = 'kennynet66@gmail.com';


DELETE FROM Users