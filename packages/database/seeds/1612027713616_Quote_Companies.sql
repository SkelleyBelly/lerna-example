INSERT INTO public."Companies" (id, name, rating) VALUES ('6b26a3bd-daf4-42dd-9cd3-672bf0c58427', 'AT&T', 5);
INSERT INTO public."Companies" (id, name, rating) VALUES ('4125ed4d-2410-403a-8479-9121ff0db6de', 'Comcast', 4);
INSERT INTO public."Companies" (id, name, rating) VALUES ('2341f8ac-8b49-4080-8ddf-87b75386bdf4', 'Sprint', 3);
INSERT INTO public."Quotes" (id, company_id, monthly, selected, setup, term, total) VALUES ('2fdfc1e8-27c1-462e-95ee-e0713ca8d671', '6b26a3bd-daf4-42dd-9cd3-672bf0c58427', 950, true, 50, 5, 72000);
INSERT INTO public."Quotes" (id, company_id, monthly, selected, setup, term, total) VALUES ('19bb2125-6b02-4468-a830-7477235dd9e7', '4125ed4d-2410-403a-8479-9121ff0db6de', 1050, false, 0, 12, 98000);
INSERT INTO public."Quotes" (id, company_id, monthly, selected, setup, term, total) VALUES ('0455a5d0-fb19-4564-89ae-341c294580ae', '2341f8ac-8b49-4080-8ddf-87b75386bdf4', 1005, false, 450, 5, 83500);
