
const SHA256 = require("crypto-js/sha256");

// Klasse

class Block{

    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash;   // Hash des vorhergehenden Blocks
        this.hash = hash;           // eigener Hash
        this.data = data;                  // Daten
    }

    toString(){         // für Debugging-Zwecke
        return ` Block -
        Timestamp:  ${this.timestamp}
        lastHash:   ${this.lastHash}
        hash:       ${this.hash}
        data:       ${this.data}    
        `
        
    }

    static genesis(){   // 1. Block der chain
        return new this("Genesis time", "-----", "xABC123", ["data1", "data2","..."]);    // call constructor
    }

    static mineBlock(lastBlock, ownData,){  // weitere Blocks in der Chain
        const timestamp = Date.now();       // Zeit in ms seit 01.01.1970 / Standart aus der UNIX-Welt
        const lastHash  = lastBlock.hash;    // Hash-Wert des Vorgängers
        const hash      = Block.hash(timestamp,lastHash,ownData);
    
        return new this(timestamp,lastHash,hash,ownData); 



    }

    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();

    }


}

module.exports = Block; //Export als Modul