CREATE OR ALTER PROCEDURE deleteProject(@project_id VARCHAR(100), @assigned_to VARCHAR(200))
AS
BEGIN
    UPDATE Users SET isASSIGNED = 0 WHERE user_id = @assigned_to;

    DELETE FROM Projects WHERE project_id = @project_id;
END