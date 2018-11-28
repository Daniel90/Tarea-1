using BaseDatos;
using Microsoft.AspNetCore.Mvc;
using Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Trabajo1.Controladores
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly DBProducto dBProducto;

        public ProductoController(DBProducto dBProducto)
        {
            this.dBProducto = dBProducto;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(this.dBProducto.GetAll());
        }

        [HttpGet("{codproducto}")]
        public IActionResult Get(string codProducto)
        {
            var producto = this.dBProducto.GetByCodProducto(codProducto);

            if (producto == null)
            {
                return BadRequest($"El producto {codProducto} no se encuentra registrado.");
            }

            return Ok(producto);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Producto producto)
        {
            var result = this.dBProducto.Create(producto);

            if (result == null)
            {
                return BadRequest($"No fue posible crear el producto {producto.CodProducto}.");
            }
            return Ok(result);
        }

        [HttpDelete("{codproducto}")]
        public IActionResult Delete(string codProducto)
        {
            var result = this.dBProducto.Delete(codProducto);
            if (result == null)
            {
                return BadRequest($"No fue posible eliminar el producto {codProducto}.");
            }

            return Ok(result);
        }
    }
}
