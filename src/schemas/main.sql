CREATE TABLE IF NOT EXISTS session (
    id PRIMARY KEY NOT NULL,
    name TEXT NOT NULL DEFAULT '',
    start_date TEXT NOT NULL DEFAULT '',
    end_date TEXT NOT NULL DEFAULT ''
);
SELECT crsql_as_crr('session');
