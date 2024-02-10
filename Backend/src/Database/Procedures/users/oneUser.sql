CREATE OR ALTER PROCEDURE oneUser(@user_id VARCHAR(100))
AS
BEGIN
    SELECT * FROM Users WHERE user_id = @user_id
END
