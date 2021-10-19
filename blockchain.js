// Import

const Block = require("./block");

class Blockchain{

    constructor(){
        this.chain = [Block.genesis()];     // Array m. Genesis-Block
        
    }

    addBlock(data){

        const lastBlock = this.chain[this.chain.length -1]
        const block = Block.mineBlock(lastBlock,data);
        this.chain.push(block);

        // return block;  // bin mir nicht sicher


    }
}

module.exports = Blockchain;


