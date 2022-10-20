const router = require('express').Router();
const conexion = require('./config/conexion');

//get cria total
router.get('/cria',(req,res) =>{
    let sql = 'select * from Cria';
    conexion.query(sql,(err,rows,fields) =>
    {
        if(err)
            throw err;
        res.json(rows);
    })
})

//Get by Id
router.get('/cria/:id',(req, res)=>{
    const {id} = req.params;
    let sql =`select * from Cria where ID = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json(rows);

    })
})

//Registrar Cria
router.post('/cria',( req, res)=>{
    const{Nombre,IdProveedor,Fecha,Peso,Costo,Descripcion,ColorMusculo,CalidadMarmoleo,GrasaTipo} = req.body
    let sql = `insert into Cria (Nombre,IdProveedor,Peso,Costo,Descripcion,EstadoSalud,ColorMusculo,CalidadMarmoleo,GrasaTipo) 
    values 
    ('${Nombre}',${IdProveedor},${Peso},${Costo},'${Descripcion}','Saludable','${ColorMusculo}','${CalidadMarmoleo}','${GrasaTipo}')`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Cria registradro correctamente'});
        
    })
})

//Delete Cria 
router.delete('/cria/:id',(req, res)=>{
    const{id} = req.params;
    let sql =`delete from Cria where ID = '${id}'`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Cria eliminado correctamente'});
        
    })
});

//Update Cria
router.put('/cria/:id',(req,res)=>{
    const{id} = req.params;
    const{Nombre,IdProveedor,Peso,Costo,Descripcion,ColorMusculo,CalidadMarmoleo,GrasaTipo} = req.body
    let sql = `update Cria set 
    Nombre = '${Nombre}',
    IdProveedor = ${IdProveedor},
    Peso = ${Peso},
    Costo = ${Costo},
    Descripcion = '${Descripcion}',
    ColorMusculo = '${ColorMusculo}',
    CalidadMarmoleo = '${CalidadMarmoleo}',
    GrasaTipo = '${GrasaTipo}'
    where ID = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Cria modificado correctamente'});
        
    })
})

router.put('/cria/:id/sensor',(req,res)=>{
    
    const{id} = req.params;
    const{EstadoSalud} = req.body
    let sql = `update Cria set 
    EstadoSalud = '${EstadoSalud}'
    where ID = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Cria modificado correctamente'});
        
    })
})

//registrar sensor by IdCria
router.post('/cria/:id',(req, res)=>{
    const {id} = req.params;
    const{FreCardiaca,PreSanguinea,FreRespiratoria,Temperatura} = req.body
    let sql =`insert into Sensor (IdCria,FreCardiaca,PreSanguinea,FreRespiratoria,Temperatura) 
    values 
    (${id},${FreCardiaca},${PreSanguinea},${FreRespiratoria},${Temperatura})`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json({status: 'Sensor de Cria registrado correctamente'});

    })
})

//Get sensor by IdCria
router.get('/cria/:id/sensor',(req, res)=>{
    const {id} = req.params;
    let sql =`select *  from sensor where IdCria = ${id} order by Fecha desc`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json(rows);

    })
})


//get Proveedor total
router.get('/proveedor',(req,res) =>{
    let sql = 'select * from Proveedor';
    conexion.query(sql,(err,rows,fields) =>
    {
        if(err)
            throw err;
        res.json(rows);
    })
})

//Get by Id
router.get('/proveedor/:id',(req, res)=>{
    const {id} = req.params;
    let sql =`select * from Proveedor where ID = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json(rows);

    })
})

//Registrar Proveedor
router.post('/proveedor',( req, res)=>{
    const{Nombre} = req.body
    let sql = `insert into Proveedor (Nombre) values ('${Nombre}')`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Proveedor registradro correctamente'});
        
    })
})

//Delete Proveedor 
router.delete('/proveedor/:id',(req, res)=>{
    const{id} = req.params;
    let sql =`delete from Proveedor where ID = '${id}'`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Proveedor eliminado correctamente'});
        
    })
});

//Update Proveedor
router.put('/proveedor/:id',(req,res)=>{
    const{id} = req.params;
    const{Nombre} = req.body;
    let sql = `update Proveedor set Nombre = '${Nombre}' where ID = ${id}`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Proveedor modificado correctamente'});
        
    })
})


module.exports = router;