CREATE OR ALTER PROCEDURE userProjects(@user_id VARCHAR(200))
AS
BEGIN
    SELECT * FROM Projects WHERE assigned_to = @user_id
END