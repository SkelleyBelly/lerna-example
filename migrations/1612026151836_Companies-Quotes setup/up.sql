
CREATE TABLE "public"."Quotes"("id" uuid NOT NULL, "company_id" uuid NOT NULL, "monthly" numeric NOT NULL, "selected" boolean NOT NULL, "setup" numeric NOT NULL, "term" numeric NOT NULL, "total" numeric NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("company_id") REFERENCES "public"."Companies"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));

ALTER TABLE ONLY "public"."Quotes" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
