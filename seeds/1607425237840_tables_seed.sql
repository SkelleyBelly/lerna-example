INSERT INTO public."Superheroes" (id, real_name, superhero_name) VALUES (1, 'Clark Kent', 'Superman');
INSERT INTO public."Superheroes" (id, real_name, superhero_name) VALUES (2, 'Bruce Wayne', 'Batman');
INSERT INTO public."Superheroes" (id, real_name, superhero_name) VALUES (3, 'Diana Prince', 'Wonder Woman');
SELECT pg_catalog.setval('public."Superheroes_id_seq"', 1, false);
