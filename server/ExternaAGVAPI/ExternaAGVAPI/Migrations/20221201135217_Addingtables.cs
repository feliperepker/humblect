using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExternaAGVAPI.Migrations
{
    public partial class Addingtables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "tb_externalagv",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    autonomousOn = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    modeOutdoorOn = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    modeIndoorOn = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    scannerSafety = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    scannerWarn = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    lidarSafety = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    lidarWarn = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ultrasoundSafety = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    outdoorPointMissed = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    outdoorPathMissed = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    outdoorVelSafety = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    stopPointPickup = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    stopPointDrop = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    endRoute = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    tractionVelocity = table.Column<float>(type: "float", nullable: false),
                    antLat = table.Column<float>(type: "float", nullable: false),
                    antLong = table.Column<float>(type: "float", nullable: false),
                    antSvs = table.Column<int>(type: "int", nullable: false),
                    antQuality = table.Column<int>(type: "int", nullable: false),
                    lastVelocity = table.Column<float>(type: "float", nullable: false),
                    lastSequence = table.Column<int>(type: "int", nullable: false),
                    lastOnStraight = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    nextVelocity = table.Column<float>(type: "float", nullable: false),
                    nextSequence = table.Column<int>(type: "int", nullable: false),
                    nextOnStraight = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    navAngle = table.Column<float>(type: "float", nullable: false),
                    pathDeviation = table.Column<float>(type: "float", nullable: false),
                    distToNextPoint = table.Column<float>(type: "float", nullable: false),
                    distPointToPoint = table.Column<float>(type: "float", nullable: false),
                    distFromLastPoint = table.Column<float>(type: "float", nullable: false),
                    route1Length = table.Column<int>(type: "int", nullable: false),
                    pickUpPoint = table.Column<int>(type: "int", nullable: false),
                    dropPoint = table.Column<int>(type: "int", nullable: false),
                    lidarStartLoc = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    lidarForceUpdate = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    lidarPoseX = table.Column<float>(type: "float", nullable: false),
                    lidarPoseY = table.Column<float>(type: "float", nullable: false),
                    lidarYaw = table.Column<float>(type: "float", nullable: false),
                    lidarLocOn = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    lidarPoseQuality = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_externalagv", x => x.id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "tb_users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Username = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Role = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_users", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_externalagv");

            migrationBuilder.DropTable(
                name: "tb_users");
        }
    }
}
