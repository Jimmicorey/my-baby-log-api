BEGIN;

TRUNCATE
  my_baby_log_events
  RESTART IDENTITY CASCADE;


INSERT INTO my_baby_log_events (event_category)
VALUES
  ('Feed 1'),
  ('Bath 1'),
  ('Diaper 1'),
  ('Feed 2'),
  ('Bath 2'),
  ('Diaper 2'),
  ('Feed 3'),
  ('Bath 3'),
  ('Diaper 3');
COMMIT;
