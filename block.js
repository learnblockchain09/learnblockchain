
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

}

module.exports = Block; //Export an Modul