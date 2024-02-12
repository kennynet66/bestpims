CREATE OR ALTER PROCEDURE completeProject(@project_id VARCHAR(100), @assigned_to VARCHAR(200))
AS
BEGIN
    UPDATE Projects
    SET isCompleted = 1
    WHERE project_id = @project_id

    UPDATE Users
    SET isASSIGNED = 0
    WHERE user_id = @assigned_to
END