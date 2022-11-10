CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"token" TEXT NOT NULL UNIQUE,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);



CREATE TABLE "users" (
	"id" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
);



CREATE TABLE "todos" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"name" TEXT NOT NULL,
	"done" BOOLEAN NOT NULL DEFAULT 'FALSE',
	CONSTRAINT "todos_pk" PRIMARY KEY ("id")
);



ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");


ALTER TABLE "todos" ADD CONSTRAINT "todos_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");






