using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseDatos.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Producto",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CodProducto = table.Column<string>(nullable: true),
                    NombreProducto = table.Column<string>(nullable: true),
                    TipoProducto = table.Column<string>(nullable: true),
                    SaldoMinimo = table.Column<int>(nullable: false),
                    Estado = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Producto", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Producto");
        }
    }
}
