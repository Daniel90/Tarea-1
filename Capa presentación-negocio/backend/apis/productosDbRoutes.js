// E- Se carga la libreria para la base de datos

const sqlite3 = require('sqlite3').verbose();

// E- Se guarda en la variable db la instancia de la lectura y escritura respecto a la base
// existen mas opciones como solo lectura o crear una nueva base.
let db = new sqlite3.Database('./db/db_productos.sqlite3', sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('Conexión db_productos Ok.');
});

exports.getProductos = function(req, res){
    // E- serialize codifica la instancia de la base de datos en un medio de almacenamiento,

    db.serialize(()=>{
        db.all(`SELECT * FROM Producto`,(err, respuesta)=>{
            if(err){
                console.log(err);
            }
            console.log('Consulta Existosa.');
            res.status(200).send(respuesta);
        })
    });
}

exports.getProducto = function(req, res) {
    
    var id = req.body.id;
    // Valido que venga un id
    if(id){
        // consultar la tabla cliente
        db.serialize(() => {
            db.all(`SELECT * FROM Producto where id = ?`,[id], (err, responseQuery) => {
            if (err) {
                console.error(err.message);
            }
            // E- If implicito se lee
            // el largo de rquery es 0, de ser asi asigne true, si no asigne false
            sinRespuesta = responseQuery.length===0?true:false;
            // E- Existe un return por que hay una respuesta controlada,
            // Si no, js leere res.status y en la linea 54 
            
            if(sinRespuesta){
                return res.status(200).send({
                    error: false,
                    message: 'No existe registro.'
                });
                
            }
            console.log('Obtención ok');
            res.status(200).send(responseQuery);
            });
        });
    }else{
        res.status(500).send({
            error: true,
            message: 'Debe ingresar un id'
        });
    }
    
    
}

exports.crearProducto = function(req, res) {
        
    // agregar registros
    var Id = req.body.id;
    var CodProducto = req.body.codProducto;
    var NombreProducto = req.body.nombreProducto;
    var TipoProducto = req.body.tipoProducto;
    var SaldoMinimo = req.body.saldoMinimo;
    var Estado = req.body.estado;

    
    db.serialize(() => {
        db.run(`INSERT INTO Producto
            (Id, CodProducto, NombreProducto, TipoProducto, SaldoMinimo, Estado)
            VALUES (?,?,?,?,?,?)`, [Id, CodProducto, NombreProducto, TipoProducto, SaldoMinimo, Estado], (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Creado ok.');
        res.status(200).send({
            codigo: 200,
            mensaje: 'Registro creado'
        });
        });
    });
}

exports.updateProducto = function(req, res) {
    // actualizar registro por id
    var Id = req.body.id;
    var CodProducto = req.body.codProducto;
    var NombreProducto = req.body.nombreProducto;
    var TipoProducto = req.body.tipoProducto;
    var SaldoMinimo = req.body.saldoMinimo;
    var Estado = req.body.estado;

       db.serialize(() => {
        db.run(`UPDATE Producto SET 
                CodProducto = ?,
                NombreProducto = ?,
                TipoProducto = ?,
                SaldoMinimo = ?,
                Estado= ? where Id = ?`, [CodProducto, NombreProducto, TipoProducto, SaldoMinimo, Estado, Id], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send({
                error: true,
                message: err.message
            });
        }
        console.log('update ok');
        res.status(200).send({
            codigo: 200,
            mensaje: 'Registro actualizado'
        });
        });
    });
}

exports.deleteProducto = function(req, res){
    var id = req.body.id;

           db.serialize(() => {
            db.run(`UPDATE Producto SET 
                    estado = 0 where id = ?`, [id], (err) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send({
                    error: true,
                    message: err.message
                });
            }
            console.log('eliminación ok');
            res.status(200).send({
                codigo: 200,
                mensaje: 'Registro eliminado'
            });
            });
        });
}



