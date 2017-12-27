const notifier = require('node-notifier');

const DiscordRPC = require('discord-rpc');
const ClientId = "395367932714024960";

const rpc = new DiscordRPC.Client({
	transport: 'ipc'
});

let time = new Date();
let diamonds = 0;


rpc.on('ready', () => {
	console.log(`Starting with clientId ${ClientId}`);
	notifier.notify({
		title: 'Diamond Minder 2015',
		message: 'Connected to Discord',
	});
	
	setInterval(()=>{
		rpc.setActivity({
			details: `Mining Diamonds.`,
			state: `${diamonds} Diamonds Mined.`,
			time,
			largeImageKey: 'diamond_pickaxe_minecraft',
			instance: false,
		});
		diamonds++;
	}, 1000 * 60);
});

rpc.login(ClientId).catch(console.error);
