const { Client, GatewayIntentBits } = require('discord.js');

// Configuração dos acessos do Bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Mensagem que avisa no painel quando o bot ligou
client.once('ready', () => {
    console.log(`✅ O bot ${client.user.tag} está online e funcionando!`);
});

// Resposta ao comando !ping
client.on('messageCreate', (message) => {
    // Ignora mensagens enviadas por outros bots
    if (message.author.bot) return;

    // Se alguém digitar exatamente "!ping"
    if (message.content === '!ping') {
        message.reply('Mesa! 🪑');
    }
});

// Cole o seu token atualizado entre as aspas abaixo:
client.login('MTQ0MDI2MzIyODQ5MDkwNzY1OA.GK7ks5.-QV142X-tm-xd2bpwDYoA4-w8yd7CQhAVtmfXE');
