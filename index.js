const { Client, User, MessageEmbed } = require("discord.js");
const client = new Client();

// message.channel.send(":sparkless: <@everyone> :sparkless:")

client.on("ready", () => {
    console.log("I am ready!");
    
    // console.log(random);
});

client.on("message", (message)=> {
    const b = Math.floor(Math.random() * (0 + 12) + 1);
    const cmd = message.content;
    let usuario = message.author;
    const send = message.channel
    const insultos = ["puta", "pvta", "pvt4","PUTA","PVTA","PVT4","Puta","Pvta","Pvt4","puto", "pvto", "pvt0","PUTO","PVTO","PVT0","Puto","Pvto","Pvt0","Pendejo","pendejo","PENDEJO","idiota","inutil","mrk","marica","gonorrea","malparido","pelotudos","mierda","mrd","boludo","coma mierda","sapo","malparida","sapa","pelotudo","pelotuda,","chimba","catre","verga","pirobo","piroba","choto","monda","pito","setenta","estupido","pendeja","estupido","JA","ja","xD","XD","xd"];
    console.log(`${usuario.tag} dice ${cmd}`)
    
    for (const insulto of insultos) {
        const replies = [`mas ${insulto} usted malparido`, `mas ${insulto} usted bobo`, `mas ${insulto} usted hijueputa`, `mas ${insulto} usted estupido`,`mas ${insulto} usted veneco`,`mas ${insulto} usted rancio`,"no joda", `Cagaste`,`por favor sea mas respetuos@`,"Deje de ser sapo igualado estupido, vaya y coma mierda", "Vaya duermas es que malparido","Haga su tarea pirobo chino pa vago"]

        if(usuario.id != "810308828020604968" ){
            if(cmd.match(insulto)){
                message.reply(replies[b])
            }
        }
    }


});
client.login("ODEwMzA4ODI4MDIwNjA0OTY4.YChw5w.y6W4be1AbhKSjYbs2c6B7rOwuHM");