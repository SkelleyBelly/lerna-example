CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public."Superheroes" (
    id integer NOT NULL,
    real_name text NOT NULL,
    superhero_name text NOT NULL
);
CREATE SEQUENCE public."Superheroes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Superheroes_id_seq" OWNED BY public."Superheroes".id;
CREATE TABLE public."Superpowers" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    power text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
ALTER TABLE ONLY public."Superheroes" ALTER COLUMN id SET DEFAULT nextval('public."Superheroes_id_seq"'::regclass);
ALTER TABLE ONLY public."Superheroes"
    ADD CONSTRAINT "Superheroes_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Superpowers"
    ADD CONSTRAINT "Superpowers_pkey" PRIMARY KEY (id);
CREATE TRIGGER "set_public_Superpowers_updated_at" BEFORE UPDATE ON public."Superpowers" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_Superpowers_updated_at" ON public."Superpowers" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
