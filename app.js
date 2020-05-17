const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');

class HackClient extends AkairoClient {
  constructor() {
    super({
      ownerID: '207261911631396865',
      presence: {
        status: 'online',
        activity: {
          type: 'LISTENING',
          name: 'to your demands.',
        }
      }
    }, {
      disableEveryone: true
    });

    this.commandHandler = new CommandHandler(this, {
      directory: './commands/',
      prefix: '!',
      commandUtil: true,
      commandItilLIfetime: 60000,
      argumentDefaults: {
        prompt: {
          timeout: 'Zeit abgelaufen, der Befehl wurde abgebrochen.',
          ended: 'Too many retries, command cancelled.',
          retry: 'Parameter nicht gefunden, bitte erneut versuchen.',
          cancel: 'Befehl wurde abgebrochen.',
          retries: 4,
          time: 30000
        }
      },
      allowMention: true,
      handleEdits: true,
      ignorePermissions: '207261911631396865',
      ignoreCooldown: '207261911631396865'
    });

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: './events/inhibitors/',
      emitters: {
        process
      }
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: './events/listeners/'
    });

    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      inhibitorHandler: this.inhibitorHandler,
      listenerHandler: this.listenerHandler,
      process: process
    });

    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.commandHandler.useListenerHandler(this.listenerHandler);

    this.listenerHandler.loadAll();
    this.inhibitorHandler.loadAll();
    this.commandHandler.loadAll();
  }
}

const client = new HackClient();
client.login('MjEzNzk2NzIzMjA0NTU0NzUz.XsAP7A.O9ekfahXBXDQtZcxDnC8fULPK_M')
