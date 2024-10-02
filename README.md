# Projeto de Conversor de Texto para Áudio com Tema Acessível

Este projeto é um Conversor de Texto para Áudio com uma interface amigável e um modo acessível, pensado especialmente para pessoas com daltonismo. O usuário pode inserir texto, convertê-lo em áudio, limpar o campo de texto e alternar entre temas, melhorando a acessibilidade visual.

# Funcionalidades

- *Conversão de Texto para Áudio:* O usuário insere um texto no formulário e, ao clicar em "Converter Áudio", o texto é convertido em um arquivo de áudio para download.
- *Limpar Texto:* O botão "Limpar" remove o texto inserido no campo.
- *Acessibilidade:* Design focado em melhorar a visualização para pessoas com deficiência de visão de cores, com botões e contrastes ajustados para facilitar a leitura e a navegação.
- *Responsividade:* O layout da página é responsivo, garantindo que ela se adapte bem a diferentes tamanhos de tela, incluindo dispositivos móveis.

# Tecnologias Utilizadas

- *Node.js:* Plataforma usada para criar o servidor backend.
- *Express:* Framework utilizado para gerenciar as rotas e servir a aplicação.
- *gTTS (Google Text-to-Speech):* Biblioteca usada para converter o texto em áudio.
- *Body-Parser:* Middleware para processar dados enviados via formulário.
- *fs (File System):* Utilizado para manipular arquivos no Node.js.
- *HTML5:* Estrutura da página.
- *CSS3:* Estilização da interface, incluindo o modo acessível para daltonismo.
- *JavaScript:* Manipulação do DOM, interação com botões e conversão de texto em áudio.

# Como Usar

**Converter Texto para Áudio:**

- Insira o texto desejado no campo de texto.
- Clique no botão "Converter Áudio" para baixar o arquivo de áudio gerado.

**Limpar Texto:**

- Clique no botão "Limpar" para apagar o texto inserido.

# Alterar Tema:

- Clique no botão "Acessibilidade" para alternar o modo de cores e melhorar a visualização.

# Estrutura do Projeto

```plaintext
/TEXTO-TO-SPEECH/
│
├── node_modules/       # Dependências do Node.js
├── public/             # Pasta pública para arquivos estáticos
│   ├── css/            # Estilos CSS
│   │   └── style.css   # Arquivo principal de estilos
│   ├── js/             # Scripts JavaScript
│   │   └── script.js   # Arquivo principal de scripts
│   └── index.html      # Página HTML principal
├── package-lock.json   # Controle de versões de dependências
├── package.json        # Informações sobre o projeto e dependências
├── server.js           # Servidor Node.js para rodar a aplicação
└── README.md           # Documentação do projeto (este arquivo)
└── vercel.json         # Configuração executada na Vercel
```

# Instalação e execução

- *Clone o repositório:* 
```plaintext
git clone https://github.com/seu-usuario/texto-to-speech.git
```
- *Entre na pasta raiz:*
```plaintext
cd texto-to-speech
```
- *Use o comando para instalar todas bibliotecas* 
```plaintext
npm install express body-parser gtts
```
- *Use o comando para iniciar o servidor* 
```plaintext
npm start
```
- *Abra seu navegador e acesse:*
```plaintext
http://localhost:3000
```

# Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

# Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Esse `README.md` fornece uma visão clara sobre as bibliotecas usadas e como o projeto funciona, além de instruções para instalação e uso.


# Autor

Marcelo Medeiros dos Santos - marcelomederi11@gmail.com