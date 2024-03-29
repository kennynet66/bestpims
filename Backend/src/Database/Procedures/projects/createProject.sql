CREATE OR ALTER PROCEDURE createProject(
    @project_id VARCHAR(100),
    @project_name VARCHAR(100),
    @project_description VARCHAR(1500),
    @assigned_to VARCHAR(100),
    @end_date VARCHAR(50),
    @asignee_email VARCHAR(200),
    @asignee_name VARCHAR(200)
)
AS
BEGIN
    INSERT INTO Projects(project_id, project_name, project_description, assigned_to, end_date, asignee_name, asignee_email)
    VALUES(@project_id, @project_name, @project_description, @assigned_to, @end_date, @asignee_name, @asignee_email);

    UPDATE Users SET isAssigned = 1 WHERE user_id = @assigned_to
END

SELECT * FROM Projects