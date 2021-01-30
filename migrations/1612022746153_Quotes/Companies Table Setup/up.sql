
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."Companies"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "rating" numeric NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), CONSTRAINT "Rating between 1 and 5" CHECK (rating > 0 AND rating <= 5));

ALTER TABLE "public"."Quotes" DROP COLUMN "name" CASCADE;

ALTER TABLE "public"."Quotes" DROP COLUMN "rating" CASCADE;

ALTER TABLE "public"."Quotes" ADD COLUMN "company_id" uuid NULL;

ALTER TABLE "public"."Quotes" ALTER COLUMN "company_id" SET NOT NULL;

alter table "public"."Quotes"
           add constraint "Quotes_company_id_fkey"
           foreign key ("company_id")
           references "public"."Companies"
           ("id") on update restrict on delete restrict;
