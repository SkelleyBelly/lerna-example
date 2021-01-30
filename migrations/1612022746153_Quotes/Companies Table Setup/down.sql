
alter table "public"."Quotes" drop constraint "Quotes_company_id_fkey";

ALTER TABLE "public"."Quotes" ALTER COLUMN "company_id" DROP NOT NULL;

ALTER TABLE "public"."Quotes" DROP COLUMN "company_id";

ALTER TABLE "public"."Quotes" ADD COLUMN "rating" int4;
ALTER TABLE "public"."Quotes" ALTER COLUMN "rating" DROP NOT NULL;

ALTER TABLE "public"."Quotes" ADD COLUMN "name" text;
ALTER TABLE "public"."Quotes" ALTER COLUMN "name" DROP NOT NULL;

DROP TABLE "public"."Companies";
