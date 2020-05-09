const express = require('express'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    config = require('./configs/config'),
    app = express();
// 1  configuracion de l a clave 
app.set('llave', config.llave);
// 2  seteo para que body parser convierta lo que viene del cliente
app.use(bodyParser.urlencoded({ extended: true }));
// 3 se lo pasa a JSON
app.use(bodyParser.json());
// 4   
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
});
// 5
app.get('/', function (req, res) {
    res.send('Inicio');
});


app.post('/autenticar', (req, res) => {
   
    console.log(req.body.usuario);
    console.log(req.body.pasw);

    if (req.body.usuario === "asfo" && req.body.pasw === 'hola mundo') {
        var user = {
            username: req.body.usuario,
            pasw: req.body.pasw
           }
           token= generateToken(user);
           console.log(token);
          
           
        //const payload =
        //{
        //    check: true
        //};
        //const token = jwt.sign(payload, app.get('llave'), {
        //    expiresIn: 1440
        //   });
        res.json({
            mensaje: 'Autenticacion correcta',
           // token: token
        });

    }
    else {
        res.json({ mensaje: 'Usuario o contraseña incorrectos' })

    }
});

function generateToken(user) {
    
    return token = jwt.sign(user, app.get('llave'), {
       expiresIn: 60 * 60 * 24 // expires in 24 hours
    })
  }