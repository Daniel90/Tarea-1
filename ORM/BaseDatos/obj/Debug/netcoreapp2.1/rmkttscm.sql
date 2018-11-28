CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" TEXT NOT NULL CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY,
    "ProductVersion" TEXT NOT NULL
);

CREATE TABLE "Producto" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_Producto" PRIMARY KEY AUTOINCREMENT,
    "CodProducto" TEXT NULL,
    "NombreProducto" TEXT NULL,
    "TipoProducto" TEXT NULL,
    "SaldoMinimo" INTEGER NOT NULL,
    "Estado" INTEGER NOT NULL
);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20181126001123_Inicial', '2.1.4-rtm-31024');

