CREATE TABLE my_baby_log_events (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    event_category TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT now() NOT NULL
);
