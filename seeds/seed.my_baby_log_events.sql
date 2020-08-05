BEGIN;

TRUNCATE
  my_baby_log_events
  RESTART IDENTITY CASCADE;


INSERT INTO my_baby_log_events (event_category)
VALUES
  ('Feed'),
  ('Bath'),
  ('Diaper'),
  ('Feed'),
  ('Bath'),
  ('Diaper'),
  ('Feed'),
  ('Bath'),
  ('Diaper');
COMMIT;
