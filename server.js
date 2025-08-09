const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

let counterFile = path.join(__dirname, 'counter.json');

// โหลดจำนวนจากไฟล์ หรือเริ่มที่ 0
let visitors = 0;
if (fs.existsSync(counterFile)) {
    visitors = JSON.parse(fs.readFileSync(counterFile)).count;
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/visit', (req, res) => {
    visitors++;
    fs.writeFileSync(counterFile, JSON.stringify({ count: visitors }));
    res.json({ count: visitors });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
