const { Command } = require('discord-akairo');

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping', 'hello']
    });
  }

  async exec(msg) {
    const sent = await msg.util.reply('pong!');
    const timeDiff = (sent.editedAt || sent.createdAt) - (msg.editedAt || msg.createdAt);
    return msg.util.reply([
      'Pong!',
      `🔂 **RTT**: ${timeDiff} ms`,
      `💟 **Heartbeat**: ${Math.round(this.client.ws.ping)} ms`
    ]);
  }
}

module.exports = PingCommand;
