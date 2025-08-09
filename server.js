const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// โหลดข้อมูลจำนวนผู้เข้าชม
let visitors = 0;
if (fs.existsSync('counter.json')) {
    visitors = JSON.parse(fs.readFileSync('counter.json')).count;
}

app.get('/', (req, res) => {
    visitors++;
    fs.writeFileSync('counter.json', JSON.stringify({ count: visitors }));
    res.send(`<h1>มีคนเข้ามาแล้ว ${visitors} คน</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
