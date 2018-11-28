using System;

namespace Modelo
{
    public class Producto
    {
        public int Id { get; set; }
        public string CodProducto { get; set; }
        public string NombreProducto { get; set; }
        public string TipoProducto { get; set; }
        public int SaldoMinimo { get; set; }
        public int Estado { get; set; }
    }
}
