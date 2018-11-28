using System;
using Modelo;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BaseDatos
{
    public class DBProducto : DbContext
    {
        public DbSet<Producto> Producto { get; set; }

        public DBProducto(DbContextOptions<DBProducto> options)
            : base(options)
        {

        }

        public List<Producto> GetAll()
        {
            try
            {
                List<Producto> productos = this
                                        .Producto
                                        .FromSql("SELECT * FROM Producto")
                                        .ToList();

                return productos;
            }
            catch (Exception ex)
            {

                throw ex;
            }
            
        }

        public Producto GetByCodProducto(string codProducto)
        {
            
            Producto producto = this
                                .Producto
                                .FirstOrDefault(c => c.CodProducto == codProducto);
            return producto;
        }

        public Producto Create(Producto producto)
        {
            try
            {
                this
                    .Producto
                    .Add(producto);

                this.SaveChanges();

                return producto;
            }
            catch (Exception ex)
            {
                //throw new Exception("No fue posible crear el cliente");
                return null;
            }
        }

        public Producto Delete(string codProducto)
        {
            try
            {
                var producto = this.GetByCodProducto(codProducto);

                if (producto == null)
                {
                    //throw new Exception($"El cliente {rut} no se puede eliminar debido a no existe.");
                    return null;
                }

                this
                    .Producto
                    .Remove(producto);

                this.SaveChanges();

                return producto;
            }
            catch (Exception ex)
            {
                //throw new Exception($"No fue posible eliminar el usuario {rut}");
                return null;
            }
        }
    }
}
