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
  VALUES('Seattle Rules', 1, 'Seattle is really cool, ya know. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a', 3);
INSERT INTO posts(title, author, content, city)
  VALUES('Seattle Does Rule', 2, 'I agree Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a', 3);
INSERT INTO posts(title, author, content, city)
  VALUES('San Franisco is Better', 3, 'Seattle is my favorite city outside of SF though. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a', 3);
INSERT INTO posts(title, author, content, city)
  VALUES('More on SF', 3, 'How about that salesforce tower, eh? Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a', 2);
INSERT INTO posts(title, author, content, city)
  VALUES('Dont Forget About Oakland', 4, 'As games are cheap because we suuuuuck! I can say that, since I am the mascot. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a', 1);
