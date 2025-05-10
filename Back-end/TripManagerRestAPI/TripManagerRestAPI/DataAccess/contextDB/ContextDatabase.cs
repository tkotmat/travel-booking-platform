using Microsoft.EntityFrameworkCore;
using TripManagerRestAPI.DataAccess.Models.EntitiesModels;

namespace TripManagerRestAPI.DataAccess.contextDB
{
    public class ContextDatabase : DbContext
    {
        public DbSet<User> User { get; set; }
        public ContextDatabase(DbContextOptions<ContextDatabase> options) : base(options) { }
    }
}
