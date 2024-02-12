CREATE TABLE Projects(
    project_id VARCHAR(100),
    project_name VARCHAR(100),
    project_description VARCHAR(1500),
    assigned_to VARCHAR(100),
    end_date VARCHAR(50),
    asignee_name VARCHAR(200)
)

SELECT * FROM Projects

ALTER TABLE Projects ADD isCompleted BIT NOT NULL DEFAULT 0