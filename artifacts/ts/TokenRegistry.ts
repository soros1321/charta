export const TokenRegistry = 
{
  "contractName": "TokenRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "name": "getTokenIndexBySymbol",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "name": "getTokenAddressBySymbol",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolHashToTokenAttributes",
      "outputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenIndex",
          "type": "uint256"
        },
        {
          "name": "numDecimals",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_numDecimals",
          "type": "uint256"
        }
      ],
      "name": "setTokenAttributes",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getTokenAddressByIndex",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getTokenSymbolByIndex",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_symbol",
          "type": "string"
        }
      ],
      "name": "getNumDecimalsFromSymbol",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getNumDecimalsByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenSymbolList",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenSymbolListLength",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611040806100536000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e1e1bb3146100bf5780633550b6d9146101305780633dbe284a146101cd5780635644061c146102425780635715c5b7146102c75780636e7cbb0d1461032a57806380ec8587146103c657806382f69430146104375780638da5cb5b1461046e57806395f121bf146104c3578063c51ccb401461055f578063f2fde38b1461058e575b600080fd5b34156100ca57600080fd5b61011a600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506105c7565b6040518082815260200191505060405180910390f35b341561013b57600080fd5b61018b600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061065c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101d857600080fd5b6101f2600480803560001916906020019091905050610711565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b341561024d57600080fd5b6102c5600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061075b565b005b34156102d257600080fd5b6102e86004808035906020019091905050610aa8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561033557600080fd5b61034b6004808035906020019091905050610b68565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561038b578082015181840152602081019050610370565b50505050905090810190601f1680156103b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103d157600080fd5b610421600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610c21565b6040518082815260200191505060405180910390f35b341561044257600080fd5b6104586004808035906020019091905050610cb6565b6040518082815260200191505060405180910390f35b341561047957600080fd5b610481610ce2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104ce57600080fd5b6104e46004808035906020019091905050610d07565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610524578082015181840152602081019050610509565b50505050905090810190601f1680156105515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561056a57600080fd5b610572610dba565b604051808260ff1660ff16815260200191505060405180910390f35b341561059957600080fd5b6105c5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dce565b005b6000806000836040518082805190602001908083835b60208310151561060257805182526020820191506020810190506020830392506105dd565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902091506001600083600019166000191681526020019081526020016000209050806001015492505050919050565b6000806000836040518082805190602001908083835b6020831015156106975780518252602082019150602081019050602083039250610672565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020915060016000836000191660001916815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692505050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b6000610765610f23565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107c057600080fd5b61010061010260009054906101000a900460ff1660ff161015156107e357600080fd5b846040518082805190602001908083835b60208310151561081957805182526020820191506020810190506020830392506107f4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150600160008360001916600019168152602001908152602001600020606060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614156109e45783816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508281604001818152505061010260009054906101000a900460ff1660ff1681602001818152505084600261010260009054906101000a900460ff1660ff166101008110151561099757fe5b0190805190602001906109ab929190610f5b565b50610102600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff16021790555050610a27565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050828160400181815250505b8060016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050505050505050565b60008060028361010081101515610abb57fe5b019050610b60818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b565780601f10610b2b57610100808354040283529160200191610b56565b820191906000526020600020905b815481529060010190602001808311610b3957829003601f168201915b505050505061065c565b915050919050565b610b70610fdb565b60028261010081101515610b8057fe5b018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c155780601f10610bea57610100808354040283529160200191610c15565b820191906000526020600020905b815481529060010190602001808311610bf857829003601f168201915b50505050509050919050565b6000806000836040518082805190602001908083835b602083101515610c5c5780518252602082019150602081019050602083039250610c37565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902091506001600083600019166000191681526020019081526020016000209050806002015492505050919050565b6000610cc0610fdb565b6000610ccb84610b68565b9150610cd682610c21565b90508092505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028161010081101515610d1757fe5b016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610db25780601f10610d8757610100808354040283529160200191610db2565b820191906000526020600020905b815481529060010190602001808311610d9557829003601f168201915b505050505081565b61010260009054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e2957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610e6557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f9c57805160ff1916838001178555610fca565b82800160010185558215610fca579182015b82811115610fc9578251825591602001919060010190610fae565b5b509050610fd79190610fef565b5090565b602060405190810160405280600081525090565b61101191905b8082111561100d576000816000905550600101610ff5565b5090565b905600a165627a7a723058202c3ff281b6947c3c4294c7ffb1913a9e8eb392c23b968a83ade86fb5b4d912e70029",
  "deployedBytecode": "0x6060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e1e1bb3146100bf5780633550b6d9146101305780633dbe284a146101cd5780635644061c146102425780635715c5b7146102c75780636e7cbb0d1461032a57806380ec8587146103c657806382f69430146104375780638da5cb5b1461046e57806395f121bf146104c3578063c51ccb401461055f578063f2fde38b1461058e575b600080fd5b34156100ca57600080fd5b61011a600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506105c7565b6040518082815260200191505060405180910390f35b341561013b57600080fd5b61018b600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061065c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101d857600080fd5b6101f2600480803560001916906020019091905050610711565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b341561024d57600080fd5b6102c5600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061075b565b005b34156102d257600080fd5b6102e86004808035906020019091905050610aa8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561033557600080fd5b61034b6004808035906020019091905050610b68565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561038b578082015181840152602081019050610370565b50505050905090810190601f1680156103b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103d157600080fd5b610421600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610c21565b6040518082815260200191505060405180910390f35b341561044257600080fd5b6104586004808035906020019091905050610cb6565b6040518082815260200191505060405180910390f35b341561047957600080fd5b610481610ce2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104ce57600080fd5b6104e46004808035906020019091905050610d07565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610524578082015181840152602081019050610509565b50505050905090810190601f1680156105515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561056a57600080fd5b610572610dba565b604051808260ff1660ff16815260200191505060405180910390f35b341561059957600080fd5b6105c5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dce565b005b6000806000836040518082805190602001908083835b60208310151561060257805182526020820191506020810190506020830392506105dd565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902091506001600083600019166000191681526020019081526020016000209050806001015492505050919050565b6000806000836040518082805190602001908083835b6020831015156106975780518252602082019150602081019050602083039250610672565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020915060016000836000191660001916815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692505050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b6000610765610f23565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107c057600080fd5b61010061010260009054906101000a900460ff1660ff161015156107e357600080fd5b846040518082805190602001908083835b60208310151561081957805182526020820191506020810190506020830392506107f4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150600160008360001916600019168152602001908152602001600020606060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614156109e45783816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508281604001818152505061010260009054906101000a900460ff1660ff1681602001818152505084600261010260009054906101000a900460ff1660ff166101008110151561099757fe5b0190805190602001906109ab929190610f5b565b50610102600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff16021790555050610a27565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050828160400181815250505b8060016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050505050505050565b60008060028361010081101515610abb57fe5b019050610b60818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b565780601f10610b2b57610100808354040283529160200191610b56565b820191906000526020600020905b815481529060010190602001808311610b3957829003601f168201915b505050505061065c565b915050919050565b610b70610fdb565b60028261010081101515610b8057fe5b018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c155780601f10610bea57610100808354040283529160200191610c15565b820191906000526020600020905b815481529060010190602001808311610bf857829003601f168201915b50505050509050919050565b6000806000836040518082805190602001908083835b602083101515610c5c5780518252602082019150602081019050602083039250610c37565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902091506001600083600019166000191681526020019081526020016000209050806002015492505050919050565b6000610cc0610fdb565b6000610ccb84610b68565b9150610cd682610c21565b90508092505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028161010081101515610d1757fe5b016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610db25780601f10610d8757610100808354040283529160200191610db2565b820191906000526020600020905b815481529060010190602001808311610d9557829003601f168201915b505050505081565b61010260009054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e2957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610e6557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f9c57805160ff1916838001178555610fca565b82800160010185558215610fca579182015b82811115610fc9578251825591602001919060010190610fae565b5b509050610fd79190610fef565b5090565b602060405190810160405280600081525090565b61101191905b8082111561100d576000816000905550600101610ff5565b5090565b905600a165627a7a723058202c3ff281b6947c3c4294c7ffb1913a9e8eb392c23b968a83ade86fb5b4d912e70029",
  "sourceMap": "717:4338:3:-;;;509:10:11;501:5;;:18;;;;;;;;;;;;;;;;;;717:4338:3;;;;;;",
  "deployedSourceMap": "717:4338:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3580:256;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2545:263;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;757:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1323:1110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3249:188;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3972:120;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4323:260:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4822:231;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;834:34:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;874:34:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;3580:256:3;3648:4;3664:18;3714:34;3695:7;3685:18;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;3664:39:3;;3751:27;:39;3779:10;3751:39;;;;;;;;;;;;;;;;;3714:76;;3808:10;:21;;;3801:28;;3580:256;;;;;:::o;2545:263::-;2615:7;2634:18;2684:34;2665:7;2655:18;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;2634:39:3;;2721:27;:39;2749:10;2721:39;;;;;;;;;;;;;;;;;2684:76;;2778:10;:23;;;;;;;;;;;;2771:30;;2545:263;;;;;:::o;757:71::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1323:1110::-;1525:18;1648:33;;:::i;:::-;653:5:11;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1510:3:3;1486:21;;;;;;;;;;;:27;;;1478:36;;;;;;;;1556:7;1546:18;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1525:39:3;;1684:27;:39;1712:10;1684:39;;;;;;;;;;;;;;;;;1648:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1773:1;1738:37;;:10;:23;;;:37;;;1734:587;;;1882:13;1856:10;:23;;:39;;;;;;;;;;;1934:12;1909:10;:22;;:37;;;;;1984:21;;;;;;;;;;;1960:45;;:10;:21;;:45;;;;;2061:7;2020:15;2036:21;;;;;;;;;;;2020:38;;;;;;;;;;;;:48;;;;;;;;;;;;:::i;:::-;;2082:21;;:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1734:587;;;2246:13;2220:10;:23;;:39;;;;;;;;;;;2298:12;2273:10;:22;;:37;;;;;1734:587;2416:10;2374:27;:39;2402:10;2374:39;;;;;;;;;;;;;;;;;:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1323:1110;;;;;:::o;3249:188::-;3315:7;3334:21;3358:15;3374:6;3358:23;;;;;;;;;;3334:47;;3399:31;3423:6;3399:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:23;:31::i;:::-;3392:38;;3249:188;;;;:::o;3972:120::-;4037:6;;:::i;:::-;4062:15;4078:6;4062:23;;;;;;;;;;4055:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3972:120;;;:::o;4323:260::-;4394:4;4410:18;4460:34;4441:7;4431:18;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;4410:39:3;;4497:27;:39;4525:10;4497:39;;;;;;;;;;;;;;;;;4460:76;;4554:10;:22;;;4547:29;;4323:260;;;;;:::o;4822:231::-;4887:4;4903:20;;:::i;:::-;4966:16;4926:29;4948:6;4926:21;:29::i;:::-;4903:52;;4985:32;5010:6;4985:24;:32::i;:::-;4966:51;;5035:11;5028:18;;4822:231;;;;;:::o;238:20:11:-;;;;;;;;;;;;;:::o;834:34:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;874:::-;;;;;;;;;;;;;:::o;832:169:11:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;717:4338:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\n/**\n * The TokenRegistry is a basic registry mapping token symbols\n * to their known, deployed addresses on the current blockchain.\n *\n * Note that the TokenRegistry does *not* mediate any of the\n * core protocol's business logic, but, rather, is a helpful\n * utility for Terms Contracts to use in encoding, decoding, and\n * resolving the addresses of currently deployed tokens.\n *\n * At this point in time, administration of the Token Registry is\n * under Dharma Labs' control.  With more sophisticated decentralized\n * governance mechanisms, we intend to shift ownership of this utility\n * contract to the Dharma community.\n */\ncontract TokenRegistry is Ownable {\n    mapping (bytes32 => TokenAttributes) public symbolHashToTokenAttributes;\n    string[256] public tokenSymbolList;\n    uint8 public tokenSymbolListLength;\n\n    struct TokenAttributes {\n        // The ERC20 contract address.\n        address tokenAddress;\n        // The index in `tokenSymbolList` where the token's symbol can be found.\n        uint tokenIndex;\n        // The number of digits that come after the decimal place when displaying token value.\n        uint numDecimals;\n    }\n\n    /**\n     * Maps the given symbol to the given token attributes.\n     */\n    function setTokenAttributes(\n        string _symbol,\n        address _tokenAddress,\n        uint _numDecimals\n    )\n        public onlyOwner\n    {\n        require(tokenSymbolListLength < 256);\n\n        bytes32 symbolHash = keccak256(_symbol);\n\n        // Attempt to retrieve the token's attributes from the registry.\n        TokenAttributes memory attributes = symbolHashToTokenAttributes[symbolHash];\n\n        if (attributes.tokenAddress == address(0)) {\n            // The token has not yet been added to the registry.\n            attributes.tokenAddress = _tokenAddress;\n            attributes.numDecimals = _numDecimals;\n            attributes.tokenIndex = tokenSymbolListLength;\n\n            tokenSymbolList[tokenSymbolListLength] = _symbol;\n            tokenSymbolListLength++;\n        } else {\n            // The token has already been added to the registry; update attributes.\n            attributes.tokenAddress = _tokenAddress;\n            attributes.numDecimals = _numDecimals;\n        }\n\n        // Update this contract's storage.\n        symbolHashToTokenAttributes[symbolHash] = attributes;\n    }\n\n    /**\n     * Given a symbol, resolves the current address of the token the symbol is mapped to.\n     */\n    function getTokenAddressBySymbol(string _symbol) public view returns (address) {\n        bytes32 symbolHash = keccak256(_symbol);\n\n        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];\n\n        return attributes.tokenAddress;\n    }\n\n    /**\n     * Given the known index of a token within the registry's symbol list,\n     * returns the address of the token mapped to the symbol at that index.\n     *\n     * This is a useful utility for compactly encoding the address of a token into a\n     * TermsContractParameters string -- by encoding a token by its index in a\n     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.\n     */\n    function getTokenAddressByIndex(uint _index) public view returns (address) {\n        string storage symbol = tokenSymbolList[_index];\n\n        return getTokenAddressBySymbol(symbol);\n    }\n\n    /**\n     * Given a symbol, resolves the index of the token the symbol is mapped to within the registry's\n     * symbol list.\n     */\n    function getTokenIndexBySymbol(string _symbol) public view returns (uint) {\n        bytes32 symbolHash = keccak256(_symbol);\n\n        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];\n\n        return attributes.tokenIndex;\n    }\n\n    /**\n     * Given an index, resolves the symbol of the token at that index in the registry's\n     * token symbol list.\n     */\n    function getTokenSymbolByIndex(uint _index) public view returns (string) {\n        return tokenSymbolList[_index];\n    }\n\n    /**\n     * Given the symbol for a token, returns the number of decimals as provided in\n     * the associated TokensAttribute struct.\n     *\n     * Example:\n     *   getNumDecimalsFromSymbol(\"REP\");\n     *   => 18\n     */\n    function getNumDecimalsFromSymbol(string _symbol) public view returns (uint) {\n        bytes32 symbolHash = keccak256(_symbol);\n\n        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];\n\n        return attributes.numDecimals;\n    }\n\n    /**\n     * Given the index for a token in the registry, returns the number of decimals as provided in\n     * the associated TokensAttribute struct.\n     *\n     * Example:\n     *   getNumDecimalsByIndex(1);\n     *   => 18\n     */\n    function getNumDecimalsByIndex(uint _index) public view returns (uint) {\n        string memory symbol = getTokenSymbolByIndex(_index);\n\n        uint numDecimals = getNumDecimalsFromSymbol(symbol);\n\n        return numDecimals;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
      "exportedSymbols": {
        "TokenRegistry": [
          1420
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 1194,
        "name": "PragmaDirective",
        "src": "0:23:3"
      },
      {
        "attributes": {
          "SourceUnit": 2916,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 1421,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1195,
        "name": "ImportDirective",
        "src": "25:59:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            2915
          ],
          "contractKind": "contract",
          "documentation": "The TokenRegistry is a basic registry mapping token symbols\nto their known, deployed addresses on the current blockchain.\n * Note that the TokenRegistry does *not* mediate any of the\ncore protocol's business logic, but, rather, is a helpful\nutility for Terms Contracts to use in encoding, decoding, and\nresolving the addresses of currently deployed tokens.\n * At this point in time, administration of the Token Registry is\nunder Dharma Labs' control.  With more sophisticated decentralized\ngovernance mechanisms, we intend to shift ownership of this utility\ncontract to the Dharma community.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1420,
            2915
          ],
          "name": "TokenRegistry",
          "scope": 1421
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 2915,
                  "type": "contract Ownable"
                },
                "id": 1196,
                "name": "UserDefinedTypeName",
                "src": "743:7:3"
              }
            ],
            "id": 1197,
            "name": "InheritanceSpecifier",
            "src": "743:7:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolHashToTokenAttributes",
              "scope": 1420,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct TokenRegistry.TokenAttributes storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct TokenRegistry.TokenAttributes storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 1198,
                    "name": "ElementaryTypeName",
                    "src": "766:7:3"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "TokenAttributes",
                      "referencedDeclaration": 1214,
                      "type": "struct TokenRegistry.TokenAttributes storage pointer"
                    },
                    "id": 1199,
                    "name": "UserDefinedTypeName",
                    "src": "777:15:3"
                  }
                ],
                "id": 1200,
                "name": "Mapping",
                "src": "757:36:3"
              }
            ],
            "id": 1201,
            "name": "VariableDeclaration",
            "src": "757:71:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolList",
              "scope": 1420,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref[256] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "string storage ref[256] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 1202,
                    "name": "ElementaryTypeName",
                    "src": "834:6:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "323536",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 256",
                      "value": "256"
                    },
                    "id": 1203,
                    "name": "Literal",
                    "src": "841:3:3"
                  }
                ],
                "id": 1204,
                "name": "ArrayTypeName",
                "src": "834:11:3"
              }
            ],
            "id": 1205,
            "name": "VariableDeclaration",
            "src": "834:34:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolListLength",
              "scope": 1420,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 1206,
                "name": "ElementaryTypeName",
                "src": "874:5:3"
              }
            ],
            "id": 1207,
            "name": "VariableDeclaration",
            "src": "874:34:3"
          },
          {
            "attributes": {
              "canonicalName": "TokenRegistry.TokenAttributes",
              "name": "TokenAttributes",
              "scope": 1420,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "tokenAddress",
                  "scope": 1214,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 1208,
                    "name": "ElementaryTypeName",
                    "src": "987:7:3"
                  }
                ],
                "id": 1209,
                "name": "VariableDeclaration",
                "src": "987:20:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "tokenIndex",
                  "scope": 1214,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 1210,
                    "name": "ElementaryTypeName",
                    "src": "1098:4:3"
                  }
                ],
                "id": 1211,
                "name": "VariableDeclaration",
                "src": "1098:15:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "numDecimals",
                  "scope": 1214,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 1212,
                    "name": "ElementaryTypeName",
                    "src": "1218:4:3"
                  }
                ],
                "id": 1213,
                "name": "VariableDeclaration",
                "src": "1218:16:3"
              }
            ],
            "id": 1214,
            "name": "StructDefinition",
            "src": "915:326:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenAttributes",
              "payable": false,
              "scope": 1420,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 1298,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 1215,
                        "name": "ElementaryTypeName",
                        "src": "1360:6:3"
                      }
                    ],
                    "id": 1216,
                    "name": "VariableDeclaration",
                    "src": "1360:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenAddress",
                      "scope": 1298,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1217,
                        "name": "ElementaryTypeName",
                        "src": "1384:7:3"
                      }
                    ],
                    "id": 1218,
                    "name": "VariableDeclaration",
                    "src": "1384:21:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_numDecimals",
                      "scope": 1298,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1219,
                        "name": "ElementaryTypeName",
                        "src": "1415:4:3"
                      }
                    ],
                    "id": 1220,
                    "name": "VariableDeclaration",
                    "src": "1415:17:3"
                  }
                ],
                "id": 1221,
                "name": "ParameterList",
                "src": "1350:88:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1224,
                "name": "ParameterList",
                "src": "1468:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2889,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 1222,
                    "name": "Identifier",
                    "src": "1454:9:3"
                  }
                ],
                "id": 1223,
                "name": "ModifierInvocation",
                "src": "1454:9:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3022,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1225,
                            "name": "Identifier",
                            "src": "1478:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1207,
                                  "type": "uint8",
                                  "value": "tokenSymbolListLength"
                                },
                                "id": 1226,
                                "name": "Identifier",
                                "src": "1486:21:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "323536",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 256",
                                  "value": "256"
                                },
                                "id": 1227,
                                "name": "Literal",
                                "src": "1510:3:3"
                              }
                            ],
                            "id": 1228,
                            "name": "BinaryOperation",
                            "src": "1486:27:3"
                          }
                        ],
                        "id": 1229,
                        "name": "FunctionCall",
                        "src": "1478:36:3"
                      }
                    ],
                    "id": 1230,
                    "name": "ExpressionStatement",
                    "src": "1478:36:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1232
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 1298,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 1231,
                            "name": "ElementaryTypeName",
                            "src": "1525:7:3"
                          }
                        ],
                        "id": 1232,
                        "name": "VariableDeclaration",
                        "src": "1525:18:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3013,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 1233,
                            "name": "Identifier",
                            "src": "1546:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1216,
                              "type": "string memory",
                              "value": "_symbol"
                            },
                            "id": 1234,
                            "name": "Identifier",
                            "src": "1556:7:3"
                          }
                        ],
                        "id": 1235,
                        "name": "FunctionCall",
                        "src": "1546:18:3"
                      }
                    ],
                    "id": 1236,
                    "name": "VariableDeclarationStatement",
                    "src": "1525:39:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1238
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "attributes",
                          "scope": 1298,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct TokenRegistry.TokenAttributes memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "TokenAttributes",
                              "referencedDeclaration": 1214,
                              "type": "struct TokenRegistry.TokenAttributes storage pointer"
                            },
                            "id": 1237,
                            "name": "UserDefinedTypeName",
                            "src": "1648:15:3"
                          }
                        ],
                        "id": 1238,
                        "name": "VariableDeclaration",
                        "src": "1648:33:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct TokenRegistry.TokenAttributes storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1201,
                              "type": "mapping(bytes32 => struct TokenRegistry.TokenAttributes storage ref)",
                              "value": "symbolHashToTokenAttributes"
                            },
                            "id": 1239,
                            "name": "Identifier",
                            "src": "1684:27:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1232,
                              "type": "bytes32",
                              "value": "symbolHash"
                            },
                            "id": 1240,
                            "name": "Identifier",
                            "src": "1712:10:3"
                          }
                        ],
                        "id": 1241,
                        "name": "IndexAccess",
                        "src": "1684:39:3"
                      }
                    ],
                    "id": 1242,
                    "name": "VariableDeclarationStatement",
                    "src": "1648:75:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "tokenAddress",
                              "referencedDeclaration": 1209,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1238,
                                  "type": "struct TokenRegistry.TokenAttributes memory",
                                  "value": "attributes"
                                },
                                "id": 1243,
                                "name": "Identifier",
                                "src": "1738:10:3"
                              }
                            ],
                            "id": 1244,
                            "name": "MemberAccess",
                            "src": "1738:23:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 1245,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1765:7:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 1246,
                                "name": "Literal",
                                "src": "1773:1:3"
                              }
                            ],
                            "id": 1247,
                            "name": "FunctionCall",
                            "src": "1765:10:3"
                          }
                        ],
                        "id": 1248,
                        "name": "BinaryOperation",
                        "src": "1738:37:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "tokenAddress",
                                      "referencedDeclaration": 1209,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1238,
                                          "type": "struct TokenRegistry.TokenAttributes memory",
                                          "value": "attributes"
                                        },
                                        "id": 1249,
                                        "name": "Identifier",
                                        "src": "1856:10:3"
                                      }
                                    ],
                                    "id": 1251,
                                    "name": "MemberAccess",
                                    "src": "1856:23:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1218,
                                      "type": "address",
                                      "value": "_tokenAddress"
                                    },
                                    "id": 1252,
                                    "name": "Identifier",
                                    "src": "1882:13:3"
                                  }
                                ],
                                "id": 1253,
                                "name": "Assignment",
                                "src": "1856:39:3"
                              }
                            ],
                            "id": 1254,
                            "name": "ExpressionStatement",
                            "src": "1856:39:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "numDecimals",
                                      "referencedDeclaration": 1213,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1238,
                                          "type": "struct TokenRegistry.TokenAttributes memory",
                                          "value": "attributes"
                                        },
                                        "id": 1255,
                                        "name": "Identifier",
                                        "src": "1909:10:3"
                                      }
                                    ],
                                    "id": 1257,
                                    "name": "MemberAccess",
                                    "src": "1909:22:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1220,
                                      "type": "uint256",
                                      "value": "_numDecimals"
                                    },
                                    "id": 1258,
                                    "name": "Identifier",
                                    "src": "1934:12:3"
                                  }
                                ],
                                "id": 1259,
                                "name": "Assignment",
                                "src": "1909:37:3"
                              }
                            ],
                            "id": 1260,
                            "name": "ExpressionStatement",
                            "src": "1909:37:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "tokenIndex",
                                      "referencedDeclaration": 1211,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1238,
                                          "type": "struct TokenRegistry.TokenAttributes memory",
                                          "value": "attributes"
                                        },
                                        "id": 1261,
                                        "name": "Identifier",
                                        "src": "1960:10:3"
                                      }
                                    ],
                                    "id": 1263,
                                    "name": "MemberAccess",
                                    "src": "1960:21:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1207,
                                      "type": "uint8",
                                      "value": "tokenSymbolListLength"
                                    },
                                    "id": 1264,
                                    "name": "Identifier",
                                    "src": "1984:21:3"
                                  }
                                ],
                                "id": 1265,
                                "name": "Assignment",
                                "src": "1960:45:3"
                              }
                            ],
                            "id": 1266,
                            "name": "ExpressionStatement",
                            "src": "1960:45:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "string storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "string storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1205,
                                          "type": "string storage ref[256] storage ref",
                                          "value": "tokenSymbolList"
                                        },
                                        "id": 1267,
                                        "name": "Identifier",
                                        "src": "2020:15:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1207,
                                          "type": "uint8",
                                          "value": "tokenSymbolListLength"
                                        },
                                        "id": 1268,
                                        "name": "Identifier",
                                        "src": "2036:21:3"
                                      }
                                    ],
                                    "id": 1269,
                                    "name": "IndexAccess",
                                    "src": "2020:38:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1216,
                                      "type": "string memory",
                                      "value": "_symbol"
                                    },
                                    "id": 1270,
                                    "name": "Identifier",
                                    "src": "2061:7:3"
                                  }
                                ],
                                "id": 1271,
                                "name": "Assignment",
                                "src": "2020:48:3"
                              }
                            ],
                            "id": 1272,
                            "name": "ExpressionStatement",
                            "src": "2020:48:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint8"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1207,
                                      "type": "uint8",
                                      "value": "tokenSymbolListLength"
                                    },
                                    "id": 1273,
                                    "name": "Identifier",
                                    "src": "2082:21:3"
                                  }
                                ],
                                "id": 1274,
                                "name": "UnaryOperation",
                                "src": "2082:23:3"
                              }
                            ],
                            "id": 1275,
                            "name": "ExpressionStatement",
                            "src": "2082:23:3"
                          }
                        ],
                        "id": 1276,
                        "name": "Block",
                        "src": "1777:339:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "tokenAddress",
                                      "referencedDeclaration": 1209,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1238,
                                          "type": "struct TokenRegistry.TokenAttributes memory",
                                          "value": "attributes"
                                        },
                                        "id": 1277,
                                        "name": "Identifier",
                                        "src": "2220:10:3"
                                      }
                                    ],
                                    "id": 1279,
                                    "name": "MemberAccess",
                                    "src": "2220:23:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1218,
                                      "type": "address",
                                      "value": "_tokenAddress"
                                    },
                                    "id": 1280,
                                    "name": "Identifier",
                                    "src": "2246:13:3"
                                  }
                                ],
                                "id": 1281,
                                "name": "Assignment",
                                "src": "2220:39:3"
                              }
                            ],
                            "id": 1282,
                            "name": "ExpressionStatement",
                            "src": "2220:39:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "numDecimals",
                                      "referencedDeclaration": 1213,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1238,
                                          "type": "struct TokenRegistry.TokenAttributes memory",
                                          "value": "attributes"
                                        },
                                        "id": 1283,
                                        "name": "Identifier",
                                        "src": "2273:10:3"
                                      }
                                    ],
                                    "id": 1285,
                                    "name": "MemberAccess",
                                    "src": "2273:22:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1220,
                                      "type": "uint256",
                                      "value": "_numDecimals"
                                    },
                                    "id": 1286,
                                    "name": "Identifier",
                                    "src": "2298:12:3"
                                  }
                                ],
                                "id": 1287,
                                "name": "Assignment",
                                "src": "2273:37:3"
                              }
                            ],
                            "id": 1288,
                            "name": "ExpressionStatement",
                            "src": "2273:37:3"
                          }
                        ],
                        "id": 1289,
                        "name": "Block",
                        "src": "2122:199:3"
                      }
                    ],
                    "id": 1290,
                    "name": "IfStatement",
                    "src": "1734:587:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct TokenRegistry.TokenAttributes storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct TokenRegistry.TokenAttributes storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1201,
                                  "type": "mapping(bytes32 => struct TokenRegistry.TokenAttributes storage ref)",
                                  "value": "symbolHashToTokenAttributes"
                                },
                                "id": 1291,
                                "name": "Identifier",
                                "src": "2374:27:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1232,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 1292,
                                "name": "Identifier",
                                "src": "2402:10:3"
                              }
                            ],
                            "id": 1293,
                            "name": "IndexAccess",
                            "src": "2374:39:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1238,
                              "type": "struct TokenRegistry.TokenAttributes memory",
                              "value": "attributes"
                            },
                            "id": 1294,
                            "name": "Identifier",
                            "src": "2416:10:3"
                          }
                        ],
                        "id": 1295,
                        "name": "Assignment",
                        "src": "2374:52:3"
                      }
                    ],
                    "id": 1296,
                    "name": "ExpressionStatement",
                    "src": "2374:52:3"
                  }
                ],
                "id": 1297,
                "name": "Block",
                "src": "1468:965:3"
              }
            ],
            "id": 1298,
            "name": "FunctionDefinition",
            "src": "1323:1110:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressBySymbol",
              "payable": false,
              "scope": 1420,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 1321,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 1299,
                        "name": "ElementaryTypeName",
                        "src": "2578:6:3"
                      }
                    ],
                    "id": 1300,
                    "name": "VariableDeclaration",
                    "src": "2578:14:3"
                  }
                ],
                "id": 1301,
                "name": "ParameterList",
                "src": "2577:16:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1321,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1302,
                        "name": "ElementaryTypeName",
                        "src": "2615:7:3"
                      }
                    ],
                    "id": 1303,
                    "name": "VariableDeclaration",
                    "src": "2615:7:3"
                  }
                ],
                "id": 1304,
                "name": "ParameterList",
                "src": "2614:9:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1306
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 1321,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 1305,
                            "name": "ElementaryTypeName",
                            "src": "2634:7:3"
                          }
                        ],
                        "id": 1306,
                        "name": "VariableDeclaration",
                        "src": "2634:18:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3013,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 1307,
                            "name": "Identifier",
                            "src": "2655:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1300,
                              "type": "string memory",
                              "value": "_symbol"
                            },
                            "id": 1308,
                            "name": "Identifier",
                            "src": "2665:7:3"
                          }
                        ],
                        "id": 1309,
                        "name": "FunctionCall",
                        "src": "2655:18:3"
                      }
                    ],
                    "id": 1310,
                    "name": "VariableDeclarationStatement",
                    "src": "2634:39:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1312
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "attributes",
                          "scope": 1321,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "struct TokenRegistry.TokenAttributes storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "TokenAttributes",
                              "referencedDeclaration": 1214,
                              "type": "struct TokenRegistry.TokenAttributes storage pointer"
                            },
                            "id": 1311,
                            "name": "UserDefinedTypeName",
                            "src": "2684:15:3"
                          }
                        ],
                        "id": 1312,
                        "name": "VariableDeclaration",
                        "src": "2684:34:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct TokenRegistry.TokenAttributes storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1201,
                              "type": "mapping(bytes32 => struct TokenRegistry.TokenAttributes storage ref)",
                              "value": "symbolHashToTokenAttributes"
                            },
                            "id": 1313,
                            "name": "Identifier",
                            "src": "2721:27:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1306,
                              "type": "bytes32",
                              "value": "symbolHash"
                            },
                            "id": 1314,
                            "name": "Identifier",
                            "src": "2749:10:3"
                          }
                        ],
                        "id": 1315,
                        "name": "IndexAccess",
                        "src": "2721:39:3"
                      }
                    ],
                    "id": 1316,
                    "name": "VariableDeclarationStatement",
                    "src": "2684:76:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1304
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "tokenAddress",
                          "referencedDeclaration": 1209,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1312,
                              "type": "struct TokenRegistry.TokenAttributes storage pointer",
                              "value": "attributes"
                            },
                            "id": 1317,
                            "name": "Identifier",
                            "src": "2778:10:3"
                          }
                        ],
                        "id": 1318,
                        "name": "MemberAccess",
                        "src": "2778:23:3"
                      }
                    ],
                    "id": 1319,
                    "name": "Return",
                    "src": "2771:30:3"
                  }
                ],
                "id": 1320,
                "name": "Block",
                "src": "2624:184:3"
              }
            ],
            "id": 1321,
            "name": "FunctionDefinition",
            "src": "2545:263:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressByIndex",
              "payable": false,
              "scope": 1420,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 1339,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1322,
                        "name": "ElementaryTypeName",
                        "src": "3281:4:3"
                      }
                    ],
                    "id": 1323,
                    "name": "VariableDeclaration",
                    "src": "3281:11:3"
                  }
                ],
                "id": 1324,
                "name": "ParameterList",
                "src": "3280:13:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1339,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1325,
                        "name": "ElementaryTypeName",
                        "src": "3315:7:3"
                      }
                    ],
                    "id": 1326,
                    "name": "VariableDeclaration",
                    "src": "3315:7:3"
                  }
                ],
                "id": 1327,
                "name": "ParameterList",
                "src": "3314:9:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1329
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbol",
                          "scope": 1339,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "string storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 1328,
                            "name": "ElementaryTypeName",
                            "src": "3334:6:3"
                          }
                        ],
                        "id": 1329,
                        "name": "VariableDeclaration",
                        "src": "3334:21:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1205,
                              "type": "string storage ref[256] storage ref",
                              "value": "tokenSymbolList"
                            },
                            "id": 1330,
                            "name": "Identifier",
                            "src": "3358:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1323,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 1331,
                            "name": "Identifier",
                            "src": "3374:6:3"
                          }
                        ],
                        "id": 1332,
                        "name": "IndexAccess",
                        "src": "3358:23:3"
                      }
                    ],
                    "id": 1333,
                    "name": "VariableDeclarationStatement",
                    "src": "3334:47:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1327
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_storage_ptr",
                                  "typeString": "string storage pointer"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1321,
                              "type": "function (string memory) view returns (address)",
                              "value": "getTokenAddressBySymbol"
                            },
                            "id": 1334,
                            "name": "Identifier",
                            "src": "3399:23:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1329,
                              "type": "string storage pointer",
                              "value": "symbol"
                            },
                            "id": 1335,
                            "name": "Identifier",
                            "src": "3423:6:3"
                          }
                        ],
                        "id": 1336,
                        "name": "FunctionCall",
                        "src": "3399:31:3"
                      }
                    ],
                    "id": 1337,
                    "name": "Return",
                    "src": "3392:38:3"
                  }
                ],
                "id": 1338,
                "name": "Block",
                "src": "3324:113:3"
              }
            ],
            "id": 1339,
            "name": "FunctionDefinition",
            "src": "3249:188:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenIndexBySymbol",
              "payable": false,
              "scope": 1420,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 1362,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 1340,
                        "name": "ElementaryTypeName",
                        "src": "3611:6:3"
                      }
                    ],
                    "id": 1341,
                    "name": "VariableDeclaration",
                    "src": "3611:14:3"
                  }
                ],
                "id": 1342,
                "name": "ParameterList",
                "src": "3610:16:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1362,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1343,
                        "name": "ElementaryTypeName",
                        "src": "3648:4:3"
                      }
                    ],
                    "id": 1344,
                    "name": "VariableDeclaration",
                    "src": "3648:4:3"
                  }
                ],
                "id": 1345,
                "name": "ParameterList",
                "src": "3647:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1347
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 1362,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 1346,
                            "name": "ElementaryTypeName",
                            "src": "3664:7:3"
                          }
                        ],
                        "id": 1347,
                        "name": "VariableDeclaration",
                        "src": "3664:18:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3013,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 1348,
                            "name": "Identifier",
                            "src": "3685:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1341,
                              "type": "string memory",
                              "value": "_symbol"
                            },
                            "id": 1349,
                            "name": "Identifier",
                            "src": "3695:7:3"
                          }
                        ],
                        "id": 1350,
                        "name": "FunctionCall",
                        "src": "3685:18:3"
                      }
                    ],
                    "id": 1351,
                    "name": "VariableDeclarationStatement",
                    "src": "3664:39:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1353
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "attributes",
                          "scope": 1362,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "struct TokenRegistry.TokenAttributes storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "TokenAttributes",
                              "referencedDeclaration": 1214,
                              "type": "struct TokenRegistry.TokenAttributes storage pointer"
                            },
                            "id": 1352,
                            "name": "UserDefinedTypeName",
                            "src": "3714:15:3"
                          }
                        ],
                        "id": 1353,
                        "name": "VariableDeclaration",
                        "src": "3714:34:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct TokenRegistry.TokenAttributes storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1201,
                              "type": "mapping(bytes32 => struct TokenRegistry.TokenAttributes storage ref)",
                              "value": "symbolHashToTokenAttributes"
                            },
                            "id": 1354,
                            "name": "Identifier",
                            "src": "3751:27:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1347,
                              "type": "bytes32",
                              "value": "symbolHash"
                            },
                            "id": 1355,
                            "name": "Identifier",
                            "src": "3779:10:3"
                          }
                        ],
                        "id": 1356,
                        "name": "IndexAccess",
                        "src": "3751:39:3"
                      }
                    ],
                    "id": 1357,
                    "name": "VariableDeclarationStatement",
                    "src": "3714:76:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1345
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "tokenIndex",
                          "referencedDeclaration": 1211,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1353,
                              "type": "struct TokenRegistry.TokenAttributes storage pointer",
                              "value": "attributes"
                            },
                            "id": 1358,
                            "name": "Identifier",
                            "src": "3808:10:3"
                          }
                        ],
                        "id": 1359,
                        "name": "MemberAccess",
                        "src": "3808:21:3"
                      }
                    ],
                    "id": 1360,
                    "name": "Return",
                    "src": "3801:28:3"
                  }
                ],
                "id": 1361,
                "name": "Block",
                "src": "3654:182:3"
              }
            ],
            "id": 1362,
            "name": "FunctionDefinition",
            "src": "3580:256:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenSymbolByIndex",
              "payable": false,
              "scope": 1420,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 1374,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1363,
                        "name": "ElementaryTypeName",
                        "src": "4003:4:3"
                      }
                    ],
                    "id": 1364,
                    "name": "VariableDeclaration",
                    "src": "4003:11:3"
                  }
                ],
                "id": 1365,
                "name": "ParameterList",
                "src": "4002:13:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1374,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 1366,
                        "name": "ElementaryTypeName",
                        "src": "4037:6:3"
                      }
                    ],
                    "id": 1367,
                    "name": "VariableDeclaration",
                    "src": "4037:6:3"
                  }
                ],
                "id": 1368,
                "name": "ParameterList",
                "src": "4036:8:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1368
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1205,
                              "type": "string storage ref[256] storage ref",
                              "value": "tokenSymbolList"
                            },
                            "id": 1369,
                            "name": "Identifier",
                            "src": "4062:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1364,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 1370,
                            "name": "Identifier",
                            "src": "4078:6:3"
                          }
                        ],
                        "id": 1371,
                        "name": "IndexAccess",
                        "src": "4062:23:3"
                      }
                    ],
                    "id": 1372,
                    "name": "Return",
                    "src": "4055:30:3"
                  }
                ],
                "id": 1373,
                "name": "Block",
                "src": "4045:47:3"
              }
            ],
            "id": 1374,
            "name": "FunctionDefinition",
            "src": "3972:120:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getNumDecimalsFromSymbol",
              "payable": false,
              "scope": 1420,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 1397,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 1375,
                        "name": "ElementaryTypeName",
                        "src": "4357:6:3"
                      }
                    ],
                    "id": 1376,
                    "name": "VariableDeclaration",
                    "src": "4357:14:3"
                  }
                ],
                "id": 1377,
                "name": "ParameterList",
                "src": "4356:16:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1397,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1378,
                        "name": "ElementaryTypeName",
                        "src": "4394:4:3"
                      }
                    ],
                    "id": 1379,
                    "name": "VariableDeclaration",
                    "src": "4394:4:3"
                  }
                ],
                "id": 1380,
                "name": "ParameterList",
                "src": "4393:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1382
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 1397,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 1381,
                            "name": "ElementaryTypeName",
                            "src": "4410:7:3"
                          }
                        ],
                        "id": 1382,
                        "name": "VariableDeclaration",
                        "src": "4410:18:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3013,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 1383,
                            "name": "Identifier",
                            "src": "4431:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1376,
                              "type": "string memory",
                              "value": "_symbol"
                            },
                            "id": 1384,
                            "name": "Identifier",
                            "src": "4441:7:3"
                          }
                        ],
                        "id": 1385,
                        "name": "FunctionCall",
                        "src": "4431:18:3"
                      }
                    ],
                    "id": 1386,
                    "name": "VariableDeclarationStatement",
                    "src": "4410:39:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1388
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "attributes",
                          "scope": 1397,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "struct TokenRegistry.TokenAttributes storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "TokenAttributes",
                              "referencedDeclaration": 1214,
                              "type": "struct TokenRegistry.TokenAttributes storage pointer"
                            },
                            "id": 1387,
                            "name": "UserDefinedTypeName",
                            "src": "4460:15:3"
                          }
                        ],
                        "id": 1388,
                        "name": "VariableDeclaration",
                        "src": "4460:34:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct TokenRegistry.TokenAttributes storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1201,
                              "type": "mapping(bytes32 => struct TokenRegistry.TokenAttributes storage ref)",
                              "value": "symbolHashToTokenAttributes"
                            },
                            "id": 1389,
                            "name": "Identifier",
                            "src": "4497:27:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1382,
                              "type": "bytes32",
                              "value": "symbolHash"
                            },
                            "id": 1390,
                            "name": "Identifier",
                            "src": "4525:10:3"
                          }
                        ],
                        "id": 1391,
                        "name": "IndexAccess",
                        "src": "4497:39:3"
                      }
                    ],
                    "id": 1392,
                    "name": "VariableDeclarationStatement",
                    "src": "4460:76:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1380
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "numDecimals",
                          "referencedDeclaration": 1213,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1388,
                              "type": "struct TokenRegistry.TokenAttributes storage pointer",
                              "value": "attributes"
                            },
                            "id": 1393,
                            "name": "Identifier",
                            "src": "4554:10:3"
                          }
                        ],
                        "id": 1394,
                        "name": "MemberAccess",
                        "src": "4554:22:3"
                      }
                    ],
                    "id": 1395,
                    "name": "Return",
                    "src": "4547:29:3"
                  }
                ],
                "id": 1396,
                "name": "Block",
                "src": "4400:183:3"
              }
            ],
            "id": 1397,
            "name": "FunctionDefinition",
            "src": "4323:260:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getNumDecimalsByIndex",
              "payable": false,
              "scope": 1420,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 1419,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1398,
                        "name": "ElementaryTypeName",
                        "src": "4853:4:3"
                      }
                    ],
                    "id": 1399,
                    "name": "VariableDeclaration",
                    "src": "4853:11:3"
                  }
                ],
                "id": 1400,
                "name": "ParameterList",
                "src": "4852:13:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1419,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 1401,
                        "name": "ElementaryTypeName",
                        "src": "4887:4:3"
                      }
                    ],
                    "id": 1402,
                    "name": "VariableDeclaration",
                    "src": "4887:4:3"
                  }
                ],
                "id": 1403,
                "name": "ParameterList",
                "src": "4886:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1405
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbol",
                          "scope": 1419,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "string memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 1404,
                            "name": "ElementaryTypeName",
                            "src": "4903:6:3"
                          }
                        ],
                        "id": 1405,
                        "name": "VariableDeclaration",
                        "src": "4903:20:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "string memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1374,
                              "type": "function (uint256) view returns (string memory)",
                              "value": "getTokenSymbolByIndex"
                            },
                            "id": 1406,
                            "name": "Identifier",
                            "src": "4926:21:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1399,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 1407,
                            "name": "Identifier",
                            "src": "4948:6:3"
                          }
                        ],
                        "id": 1408,
                        "name": "FunctionCall",
                        "src": "4926:29:3"
                      }
                    ],
                    "id": 1409,
                    "name": "VariableDeclarationStatement",
                    "src": "4903:52:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1411
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "numDecimals",
                          "scope": 1419,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 1410,
                            "name": "ElementaryTypeName",
                            "src": "4966:4:3"
                          }
                        ],
                        "id": 1411,
                        "name": "VariableDeclaration",
                        "src": "4966:16:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1397,
                              "type": "function (string memory) view returns (uint256)",
                              "value": "getNumDecimalsFromSymbol"
                            },
                            "id": 1412,
                            "name": "Identifier",
                            "src": "4985:24:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1405,
                              "type": "string memory",
                              "value": "symbol"
                            },
                            "id": 1413,
                            "name": "Identifier",
                            "src": "5010:6:3"
                          }
                        ],
                        "id": 1414,
                        "name": "FunctionCall",
                        "src": "4985:32:3"
                      }
                    ],
                    "id": 1415,
                    "name": "VariableDeclarationStatement",
                    "src": "4966:51:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1403
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1411,
                          "type": "uint256",
                          "value": "numDecimals"
                        },
                        "id": 1416,
                        "name": "Identifier",
                        "src": "5035:11:3"
                      }
                    ],
                    "id": 1417,
                    "name": "Return",
                    "src": "5028:18:3"
                  }
                ],
                "id": 1418,
                "name": "Block",
                "src": "4893:160:3"
              }
            ],
            "id": 1419,
            "name": "FunctionDefinition",
            "src": "4822:231:3"
          }
        ],
        "id": 1420,
        "name": "ContractDefinition",
        "src": "717:4338:3"
      }
    ],
    "id": 1421,
    "name": "SourceUnit",
    "src": "0:5056:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x6d59ddc5fcee25e0e8b9da9c19eacaaa77ce1d02"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x5833e409d1c61e4d3139654db5faea6ee819a664"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-23T18:12:24.875Z"
}