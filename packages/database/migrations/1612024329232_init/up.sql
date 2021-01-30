CREATE TABLE public."Companies" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    rating numeric NOT NULL,
    CONSTRAINT "Rating between 1 and 5" CHECK (((rating > (0)::numeric) AND (rating <= (5)::numeric)))
);
ALTER TABLE ONLY public."Companies"
    ADD CONSTRAINT "Companies_pkey" PRIMARY KEY (id);
