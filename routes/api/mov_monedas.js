//require('../../db apirestban');
const mov_moneda = require('express').Router();

mov_moneda.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
          if(err) return res.send(err)
        conn.query('SELECT * FROM mov_monedas', (err, rows)=>{
          
            if(err) return res.send(err)

            res.json(rows)
        });
    });     
    //res.send('Ruta mov_monedas');   
});

mov_moneda.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO  mov_monedas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Gestor de Moneda creada');
        });
    });
      
    //res.send('Ruta mov_monedas insert - bd apirestban'); 
     /*
    
    {
    "Id_pais": "1",
    "Id_moneda": "1"
    },
    
    */
});

mov_moneda.delete('/:Id_moneda', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE  FROM mov_monedas WHERE Id_moneda = ?',[req.params.Id_moneda], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Gestor de moneda Eliminado');
        });
    });
      
    //res.send('Ruta gestor moneda eliminado'); 

    //http://localhost:3000/api/mov_moneda/1
   
});

mov_moneda.put('/:Id_pais', (req, res)=>{ 
    req.getConnection((err, conn)=>{
       
        if(err) return res.send(err)

        conn.query('UPDATE  mov_monedas set ? WHERE Id_pais= ?',[req.body,req.params.Id_pais], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Gestor moneda Actualizado');
        });
    });
   
    /*
    
   {
    "Id_pais": "3",
    "Id_moneda": "3"
    }

    */
   
});


module.exports = mov_moneda;