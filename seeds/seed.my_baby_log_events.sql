BEGIN;

TRUNCATE
  my_baby_log_events
  RESTART IDENTITY CASCADE;


INSERT INTO my_baby_log_events (event_category)
VALUES
  ('Feed'),
  ('Feed'),
  ('Bath 1'),
  ('Bath 2'),
  ('Wet 1'),
  ('Poopy 1'),
  ('Poopy 2'),
  ('Both 1'),
  ('Feed'),
  ('Wet 2'),
  ('Both 2'),
  ('Wet 3'),
  ('Poopy 3'),
  ('Bath 3'),
  ('Both 3');


COMMIT;
