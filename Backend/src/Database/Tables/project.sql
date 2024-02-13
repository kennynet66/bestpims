CREATE TABLE Projects(
    project_id VARCHAR(100),
    project_name VARCHAR(100),
    project_description VARCHAR(1500),
    assigned_to VARCHAR(100),
    end_date VARCHAR(50),
    asignee_name VARCHAR(200),
    asignee_email VARCHAR(200),
    isInformed BIT NOT NULL DEFAULT 0
)

SELECT * FROM Projects

ALTER TABLE Projects ADD asignee_email VARCHAR(200)