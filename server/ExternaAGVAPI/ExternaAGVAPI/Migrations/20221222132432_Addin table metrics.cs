using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExternaAGVAPI.Migrations
{
    public partial class Addintablemetrics : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tb_metrics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    cycleNumber = table.Column<int>(type: "int", nullable: false),
                    cycleTime = table.Column<int>(type: "int", nullable: false),
                    runningTime = table.Column<int>(type: "int", nullable: false),
                    stoppedTime = table.Column<int>(type: "int", nullable: false),
                    loadTime = table.Column<int>(type: "int", nullable: false),
                    unloadTime = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_metrics", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_metrics");
        }
    }
}
