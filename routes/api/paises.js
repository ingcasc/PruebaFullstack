//require('../../db apirestban');
const pais = require('express').Router();

pais.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
          if(err) return res.send(err)
        conn.query('SELECT * FROM paises', (err, rows)=>{
          
            if(err) return res.send(err)

            res.json(rows)
        });
    });     
    //res.send('Ruta paises');   
});

pais.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO  paises set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Pais Creado');
        });
    });
      
    //res.send('Ruta Paises insert - bd apirestban'); 
     /*
    
    {
    "id_pais": "1",
    "nombre_pais": "Colombia"
    },
      {
    "id_pais": "2",
    "nombre_pais": "Suiza"
    },
      {
    "id_pais": "3",
    "nombre_pais": "Argentina"
    }

    */
});

pais.delete('/:id_pais', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE  FROM paises WHERE id_pais = ?',[req.params.id_pais], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Pais Eliminado');
        });
    });
      
    //res.send('Ruta Pais delete'); 

    //http://localhost:3000/api/paises/1
   
});

pais.put('/:id_pais', (req, res)=>{ 
    req.getConnection((err, conn)=>{
       
        if(err) return res.send(err)

        conn.query('UPDATE  paises set ? WHERE id_pais= ?',[req.body,req.params.id_pais], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Pais Actualizado');
        });
    });
   
    /*
    
   {
    "id_pais": "1",
    "nombre_pais": "Estados Unidos"
    }

    */
   
});


module.exports = pais;