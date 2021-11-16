//require('../../db apirestban');
const usuario = require('express').Router();

usuario.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
          if(err) return res.send(err)
        conn.query('SELECT * FROM usuarios', (err, rows)=>{
          
            if(err) return res.send(err)

            res.json(rows)
        });
    });     
    //res.send('Ruta usuarios');   
});

usuario.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO  usuarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Usuario creado');
        });
    });
      
    //res.send('Ruta usuarios insert - bd apirestban'); 
     /*
    
    {
    "id_pais": "1",
    "usuario": "maria isabel"
    },
    
    */
});

usuario.delete('/:id_pais', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE  FROM usuarios WHERE id_pais = ?',[req.params.id_pais], (err, rows)=>{
            if(err) return res.send(err)

            res.send('usuario Eliminado');
        });
    });
      
    //res.send('Ruta usuario delete'); 

    //http://localhost:3000/api/usuarios/1
   
});

usuario.put('/:id_pais', (req, res)=>{ 
    req.getConnection((err, conn)=>{
       
        if(err) return res.send(err)

        conn.query('UPDATE  usuarios set ? WHERE id_pais= ?',[req.body,req.params.id_pais], (err, rows)=>{
            if(err) return res.send(err)

            res.send('usuario Actualizado');
        });
    });
   
    /*
    
   {
    "id_pais": "1",
    "usuario": "maria isabel"
    }

    */
   
});


module.exports = usuario;