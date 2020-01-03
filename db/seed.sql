CREATE TABLE house (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  address VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(2),
  zip INTEGER
);

INSERT INTO house
(name, address, city, state, zip)
VALUES
('Triplex', '123 Heritage Way', 'Dallas', 'TX', 76123),
('Mansion', '5267 Sno Barry Blvd', 'Plano', 'TX', 76000);