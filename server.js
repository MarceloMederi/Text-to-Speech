const express = require('express');
const bodyParser = require('body-parser');
const gTTS = require('gtts');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Envia o arquivo HTML
});

app.post('/speak', (req, res) => {
    const texto = req.body.text;
    const gtts = new gTTS(texto, 'pt');

    const outputPath = path.join('/tmp', 'audio.mp3'); // Usando o diretório temporário

    gtts.save(outputPath, (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao gerar áudio');
        }
        res.download(outputPath, 'audio.mp3', (err) => {
            if (err) {
                console.error(err);
            }
            // Remover o arquivo após o download
            fs.unlinkSync(outputPath);
        });
    });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
