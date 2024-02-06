CREATE OR ALTER PROCEDURE createUser(
    @user_id VARCHAR(100),
    @full_name VARCHAR(100),
    @email VARCHAR(255),
    @password VARCHAR(200)
    )
AS
BEGIN
    INSERT INTO Users(user_id, full_name, email, password)
    VALUES(@user_id, @full_name, @email, @password)
END

SELECT * FROM Users