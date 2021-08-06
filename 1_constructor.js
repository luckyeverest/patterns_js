/* function Server(name, ip) {
    this.name = name
    this.ip = ip
}

Server.prototype.getUrl = function () {
    return `https://${this.ip}:3000`
} */
class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }
    getUrl = function () {
        return `https://${this.ip}`
    }
}

const dochland = new Server('german', '31.3.3')
console.log(dochland, dochland.getUrl())