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
CREATE TABLE public."Quotes" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    rating integer NOT NULL,
    term integer NOT NULL,
    setup integer NOT NULL,
    monthly integer NOT NULL,
    total integer NOT NULL,
    selected boolean NOT NULL,
    CONSTRAINT "Rating between 1 and 5" CHECK (((rating > 0) AND (rating <= 5)))
);
CREATE TABLE public."Superpowers" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    power text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
ALTER TABLE ONLY public."Quotes"
    ADD CONSTRAINT "Quotes_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Superpowers"
    ADD CONSTRAINT "Superpowers_pkey" PRIMARY KEY (id);
CREATE TRIGGER "set_public_Superpowers_updated_at" BEFORE UPDATE ON public."Superpowers" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER "set_public_Superpowers_updated_at" ON public."Superpowers" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
