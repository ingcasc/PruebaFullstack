//require('../../db apirestban');
const moneda = require('express').Router();

moneda.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
          if(err) return res.send(err)
        conn.query('SELECT * FROM monedas', (err, rows)=>{
          
            if(err) return res.send(err)

            res.json(rows)
        });
    });     
    //res.send('Ruta monedas');   
});

moneda.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO  monedas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Moneda creada');
        });
    });
      
    //res.send('Ruta monedas insert - bd apirestban'); 
     /*
    
    {
    "id_moneda": "1",
    "nombre_moneda": "Bitcoin"
    "simbolo_moneda": "BTC"
    },
    
    */
});

moneda.delete('/:id_moneda', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE  FROM monedas WHERE id_moneda = ?',[req.params.id_moneda], (err, rows)=>{
            if(err) return res.send(err)

            res.send('moneda Eliminada');
        });
    });
      
    //res.send('Ruta moneda delete'); 

    //http://localhost:3000/api/moneda/1
   
});

moneda.put('/:id_moneda', (req, res)=>{ 
    req.getConnection((err, conn)=>{
       
        if(err) return res.send(err)

        conn.query('UPDATE  monedas set ? WHERE id_moneda= ?',[req.body,req.params.id_moneda], (err, rows)=>{
            if(err) return res.send(err)

            res.send('moneda Actualizado');
        });
    });
   
    /*
    
   {
    "id_moneda": "1",
    "nombre_moneda": "Bitcoin"
    }

    */
   
});


module.exports = moneda;