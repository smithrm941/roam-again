\c roam

INSERT INTO users(email, password, name, current_city)
  VALUES('one@fake.com', 'a', 'AB', 'Seattle');
INSERT INTO users(email, password, name, current_city)
  VALUES('two@fake.com', 'b', 'AJ', 'Seattle');
INSERT INTO users(email, password, name, current_city)
  VALUES('three@fake.com', 'c', 'RMS', 'San Francisco');
INSERT INTO users(email, password, name, current_city)
  VALUES('four@fake.com', 'd', 'Stomper', 'Oakland');

INSERT INTO cities(name, img_url)
  VALUES('Oakland', 'http://ww4.hdnux.com/photos/40/73/42/8632511/3/rawImage.jpg');
INSERT INTO cities(name, img_url)
  VALUES('San Francisco', 'http://lh4.ggpht.com/-SZR2f2GCVtU/UkQUY_wg7OI/AAAAAAAAs4k/QQHVdyjnHww/painted-ladies-6%25255B9%25255D.jpg?imgmax=800');
INSERT INTO cities(name, img_url)
  VALUES('Seattle', 'http://spu.edu/~/media/undergraduate-admissions/page-features/seattle-3.ashx');

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
