const { Command } =  require('discord-akairo');

class DownloadCommand extends Command {
  constructor() {
    super('download', {
      aliases: ['download', 'dl'],
      category: 'hackintosh',
      args: [
        {
          id: 'dl',
          type: 'string',
          default: ''
        }
      ],
      clientPermissions: ['SEND_MESSAGES'],
      description: {
        content: 'Verlinkung zum Download-Bereich des Forums. Hier sind u.A. der Clover Configurator, Kext Updater usw. zu finden. Alternativ benötigtes Tool angeben und du erhälst eine direkte Verlinkung',
        usage: '<optional: direktverlinkung>',
        examples: ['!download', '!dl kextupdater']
      }
    });
  }

  async exec(msg, args) {
    if(args.dl === '') return msg.util.send(':link: https://www.hackintosh-forum.de/forum/board/150-download-center/');
    switch (args.dl.toLowerCase()) {
        case 'clover':
            await msg.util.send('<:clover:582656182712401920> __Clover Bootloader__\n:link: https://www.hackintosh-forum.de/forum/thread/22146-clover-bootloader-aktuelle-und-%C3%A4ltere-versionen/');
            break;
        case 'kextupdater':
        case 'kext updater':
        case 'ku':
            await msg.util.send('<:kextupdater:582659686499876894> __Kext-Updater__\n:link: https://www.hackintosh-forum.de/forum/thread/32621-kext-updater/');
            break;
        case 'hackintool':
            await msg.util.send('<:hackintool:582660546080276515> __Hackintool__\n:link: https://www.hackintosh-forum.de/forum/thread/38316-hackintool-ehemals-intel-fb-patcher/');
            break;
        case 'opencore':
        case 'oc':
            await msg.util.send('<:opencore:582661613069271041> __OpenCore Bootloader__\n:link: https://www.hackintosh-forum.de/forum/thread/42852-opencore-bootloader-aktuelle-und-%C3%A4ltere-versionen/');
            break;
        case 'cloverconfigurator':
        case 'clover configurator':
        case 'cc':
            await msg.util.send('<:clover:582656182712401920> __Clover Configurator__\n:link: https://www.hackintosh-forum.de/forum/thread/22033-clover-configurator-immer-aktuell/');
            break;
        case 'kexte':
            await msg.util.send('<:Kext:538124012711313428> __Kexte-Bereich__\n:link: https://www.hackintosh-forum.de/forum/board/61-kexte/');
            break;
        case 'maciasl':
        case 'dsdt':
            await msg.util.send('<:maciasl:602266877150101517> __MaciASL__\n:link: https://www.hackintosh-forum.de/forum/thread/14919-maciasl/');
            break;
        case 'tinu':
            await msg.util.send('<:Tinu:685220259514417165> __TINU__\n:link: https://www.hackintosh-forum.de/forum/thread/36941-tinu-oder-besser-gesagt-tinu-is-not-uni/');
            break;
        case 'treeswitcher':
            await msg.uti.send('<:treeswitcher:685221133204586603> __Treeswitcher__\n:link: https://www.hackintosh-forum.de/forum/thread/43836-treeswitcher-apple-seed-%C3%A4ndern-sowie-installer-applications-direkt-herunterladen/');
            break;
        default:
            await msg.util.send(':anger: Das was du suchst, kenne ich (noch) nicht. Aber hier haste Salz <:PJSalt:538118528075563045>');
    }
  }
}

module.exports = DownloadCommand;
