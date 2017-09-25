\c roam

INSERT INTO users(email, password, name, current_city)
  VALUES('one@fake.com', 'a', 'AB', 'Seattle');
INSERT INTO users(email, password, name, current_city)
  VALUES('two@fake.com', 'b', 'AJ', 'Seattle');
INSERT INTO users(email, password, name, current_city)
  VALUES('three@fake.com', 'c', 'RMS', 'San Francisco');
INSERT INTO users(email, password, name, current_city)
  VALUES('four@fake.com', 'd', 'Stomper', 'Oakland');

INSERT INTO cities(name)
  VALUES('Oakland');
INSERT INTO cities(name)
  VALUES('San Francisco');
INSERT INTO cities(name)
  VALUES('Seattle');
