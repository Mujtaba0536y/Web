const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'web6.html'));
}); 

app.listen(PORT, ()=>{
    console.log(`View at http://localhost:${PORT}`);
});