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
  ('Wet Diaper 1'),
  ('Poopy Diaper 1'),
  ('Poopy Diaper 2'),
  ('Both Diaper 1'),
  ('Feed'),
  ('Wet Diaper 2'),
  ('Both Diaper 2'),
  ('Wet Diaper 3'),
  ('Poopy Diaper 3'),
  ('Bath 3'),
  ('Both Diaper 3');


COMMIT;
