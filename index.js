const server = require('./src/app');

//Enviroment variable
const PORT = process.env.PORT || 3000;
//Server
app.listen(PORT, () => console.log(`Server run in port: ${PORT}`));
