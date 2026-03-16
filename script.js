const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

input.addEventListener("keypress", function(event){

if(event.key === "Enter"){

let command = input.value;

output.innerHTML += "<div>> " + command + "</div>";

processCommand(command);

input.value = "";

}

});


function processCommand(cmd){

if(cmd === "ping router"){

output.innerHTML += "<div>Ping 172.16.50.1 - Router ativo</div>";

}

else if(cmd === "ping server"){

output.innerHTML += "<div>Ping 172.16.50.10 - Servidor Apache respondendo</div>";

}

else if(cmd === "ping client"){

output.innerHTML += "<div>Cliente conectado via DHCP</div>";

}

else if(cmd === "status"){

output.innerHTML += "<div>Router: OK</div>";
output.innerHTML += "<div>Servidor: OK</div>";
output.innerHTML += "<div>Cliente: OK</div>";

}

else if(cmd === "help"){

output.innerHTML += "<div>Comandos disponíveis:</div>";
output.innerHTML += "<div>ping router</div>";
output.innerHTML += "<div>ping server</div>";
output.innerHTML += "<div>ping client</div>";
output.innerHTML += "<div>status</div>";

}

else{

output.innerHTML += "<div>Comando não reconhecido</div>";

}

output.scrollTop = output.scrollHeight;

}
