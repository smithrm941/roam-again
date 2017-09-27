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

INSERT INTO posts(title, author, content, city)
  VALUES('Seattle Rules', 1, 'Seattle is really cool, ya know.', 3);
INSERT INTO posts(title, author, content, city)
  VALUES('Seattle Does Rule', 2, 'I agree', 3);
INSERT INTO posts(title, author, content, city)
  VALUES('San Franisco is Better', 3, 'Seattle is my favorite city outside of SF though.', 3);
INSERT INTO posts(title, author, content, city)
  VALUES('More on SF', 3, 'How about that salesforce tower, eh?', 2);
INSERT INTO posts(title, author, content, city)
  VALUES('Dont Forget About Oakland', 4, 'As games are cheap because we suuuuuck! I can say that, since I am the mascot.', 1);
