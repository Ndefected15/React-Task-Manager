CREATE TABLE IF NOT EXISTS `tasks` (
    description VARCHAR(255) NOT NULL,
    status ENUM('To Do', 'In Progress', 'Completed') NOT NULL,
    priority INT,
    due_date DATE,
    assignee_id INT, -- Foreign key referencing users table
    creator_id INT, -- Foreign key referencing users table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

)
