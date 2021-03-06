export const TokenTransferProxy = 
{
  "contractName": "TokenTransferProxy",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedTransferAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeTransferAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedTransferAgents",
      "outputs": [
        {
          "name": "authorizedAgents",
          "type": "address[]"
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
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
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
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610d4f8061006d6000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b521461009e57806315dacbea146100d75780633f4ba83a1461016f5780635c975abb146101845780638456cb59146101b15780638da5cb5b146101c657806394ae6e711461021b5780639c20030214610254578063f2fde38b146102be575b600080fd5b34156100a957600080fd5b6100d5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102f7565b005b34156100e257600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610369565b604051808215151515815260200191505060405180910390f35b341561017a57600080fd5b61018261048e565b005b341561018f57600080fd5b61019761054c565b604051808215151515815260200191505060405180910390f35b34156101bc57600080fd5b6101c461055f565b005b34156101d157600080fd5b6101d961061f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022657600080fd5b610252600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610644565b005b341561025f57600080fd5b6102676106b6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102aa57808201518184015260208101905061028f565b505050509050019250505060405180910390f35b34156102c957600080fd5b6102f5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106cd565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035257600080fd5b61036681600161082290919063ffffffff16565b50565b600061037f33600161094a90919063ffffffff16565b151561038a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561046957600080fd5b6102c65a03f1151561047a57600080fd5b505050604051805190509050949350505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e957600080fd5b600060149054906101000a900460ff16151561050457600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ba57600080fd5b600060149054906101000a900460ff161515156105d657600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561069f57600080fd5b6106b38160016109a390919063ffffffff16565b50565b6106be610c92565b6106c86001610be5565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561076457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61082c8282610c7d565b151561083757600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816108a79190610ca6565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008060006109b2858561094a565b15156109bd57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515610a1f57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515610ab057fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515610b9557fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081610bdd9190610cd2565b505050505050565b610bed610c92565b81600201805480602002602001604051908101604052809291908181526020018280548015610c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610c27575b50505050509050919050565b6000610c89838361094a565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610ccd57818360005260206000209182019101610ccc9190610cfe565b5b505050565b815481835581811511610cf957818360005260206000209182019101610cf89190610cfe565b5b505050565b610d2091905b80821115610d1c576000816000905550600101610d04565b5090565b905600a165627a7a7230582080fa4140c220a4f2ba1859ca74e09c9936f8791759a773310dc73991aa80c0cc0029",
  "deployedBytecode": "0x606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b521461009e57806315dacbea146100d75780633f4ba83a1461016f5780635c975abb146101845780638456cb59146101b15780638da5cb5b146101c657806394ae6e711461021b5780639c20030214610254578063f2fde38b146102be575b600080fd5b34156100a957600080fd5b6100d5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102f7565b005b34156100e257600080fd5b610155600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610369565b604051808215151515815260200191505060405180910390f35b341561017a57600080fd5b61018261048e565b005b341561018f57600080fd5b61019761054c565b604051808215151515815260200191505060405180910390f35b34156101bc57600080fd5b6101c461055f565b005b34156101d157600080fd5b6101d961061f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022657600080fd5b610252600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610644565b005b341561025f57600080fd5b6102676106b6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102aa57808201518184015260208101905061028f565b505050509050019250505060405180910390f35b34156102c957600080fd5b6102f5600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106cd565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035257600080fd5b61036681600161082290919063ffffffff16565b50565b600061037f33600161094a90919063ffffffff16565b151561038a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561046957600080fd5b6102c65a03f1151561047a57600080fd5b505050604051805190509050949350505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e957600080fd5b600060149054906101000a900460ff16151561050457600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ba57600080fd5b600060149054906101000a900460ff161515156105d657600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561069f57600080fd5b6106b38160016109a390919063ffffffff16565b50565b6106be610c92565b6106c86001610be5565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561076457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61082c8282610c7d565b151561083757600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816108a79190610ca6565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008060006109b2858561094a565b15156109bd57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515610a1f57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515610ab057fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515610b9557fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081610bdd9190610cd2565b505050505050565b610bed610c92565b81600201805480602002602001604051908101604052809291908181526020018280548015610c7157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610c27575b50505050509050919050565b6000610c89838361094a565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610ccd57818360005260206000209182019101610ccc9190610cfe565b5b505050565b815481835581811511610cf957818360005260206000209182019101610cf89190610cfe565b5b505050565b610d2091905b80821115610d1c576000816000905550600101610d04565b5090565b905600a165627a7a7230582080fa4140c220a4f2ba1859ca74e09c9936f8791759a773310dc73991aa80c0cc0029",
  "sourceMap": "1247:1389:4:-;;;268:5:9;247:26;;;;;;;;;;;;;;;;;;;;509:10:11;501:5;;:18;;;;;;;;;;;;;;;;;;1247:1389:4;;;;;;",
  "deployedSourceMap": "1247:1389:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1515:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;2325:309;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:9;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1771:164:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;2030:186;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;832:169:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;1515:148:4;653:5:11;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1614:42:4;1649:6;1614:24;:34;;:42;;;;:::i;:::-;1515:148;:::o;2325:309::-;2475:13;2512:49;2550:10;2512:24;:37;;:49;;;;:::i;:::-;2504:58;;;;;;;;2586:6;2580:26;;;2607:5;2614:3;2619:7;2580:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2573:54;;2325:309;;;;;;:::o;833:87:9:-;653:5:11;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:9;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:11;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:9;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:11:-;;;;;;;;;;;;;:::o;1771:164:4:-;653:5:11;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1876:52:4;1921:6;1876:24;:44;;:52;;;;:::i;:::-;1771:164;:::o;2030:186::-;2114:26;;:::i;:::-;2163:46;:24;:44;:46::i;:::-;2156:53;;2030:186;:::o;832:169:11:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;825:287:6:-;924:28;940:4;946:5;924:15;:28::i;:::-;916:37;;;;;;;;989:4;964;:15;;:22;980:5;964:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1003:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1030:5;1003:33;;;;;;;;;;;;;;;;;;;;;;;1104:1;1073:4;:21;;:28;;;;:32;1046:4;:17;;:24;1064:5;1046:24;;;;;;;;;;;;;;;:59;;;;825:287;;:::o;2185:166::-;2295:4;2322;:15;;:22;2338:5;2322:22;;;;;;;;;;;;;;;;;;;;;;;;;2315:29;;2185:166;;;;:::o;1118:1061::-;1433:25;1495:23;1563:19;1396:25;1409:4;1415:5;1396:12;:25::i;:::-;1388:34;;;;;;;;1461:4;:17;;:24;1479:5;1461:24;;;;;;;;;;;;;;;;1433:52;;1552:1;1521:4;:21;;:28;;;;:32;1495:58;;1585:4;:21;;1607:18;1585:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;1563:63;;1689:4;:15;;:22;1705:5;1689:22;;;;;;;;;;;;;;;;1682:29;;;;;;;;;;;1838:11;1792:4;:21;;1814:20;1792:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;1953:20;1920:4;:17;;:30;1938:11;1920:30;;;;;;;;;;;;;;;:53;;;;1990:4;:17;;:24;2008:5;1990:24;;;;;;;;;;;;;;;1983:31;;;2088:4;:21;;2110:18;2088:41;;;;;;;;;;;;;;;;;;;2081:48;;;;;;;;;;;2171:1;2139:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1118:1061;;;;;:::o;2536:162::-;2638:9;;:::i;:::-;2670:4;:21;;2663:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:162;;;:::o;2357:173::-;2470:4;2498:25;2511:4;2517:5;2498:12;:25::i;:::-;2497:26;2490:33;;2357:173;;;;:::o;1247:1389:4:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The TokenTransferProxy is a proxy contract for transfering principal\n * and fee payments and repayments between agents and keepers in the Dharma\n * ecosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\n * protocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\n * creditors will not have to grant new transfer approvals to a new contract's address.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract TokenTransferProxy is Pausable {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions internal tokenTransferPermissions;\n\n    /**\n     * Add address to list of agents authorized to initiate `transferFrom` calls\n     */\n    function addAuthorizedTransferAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.authorize(_agent);\n    }\n\n    /**\n     * Remove address from list of agents authorized to initiate `transferFrom` calls\n     */\n    function revokeTransferAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.revokeAuthorization(_agent);\n    }\n\n    /**\n     * Return list of agents authorized to initiate `transferFrom` calls\n     */\n    function getAuthorizedTransferAgents()\n        public\n        view\n        returns (address[] authorizedAgents)\n    {\n        return tokenTransferPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Transfer specified token amount from _from address to _to address on give token\n     */\n    function transferFrom(\n        address _token,\n        address _from,\n        address _to,\n        uint _amount\n    )\n        public\n        returns (bool _success)\n    {\n        require(tokenTransferPermissions.isAuthorized(msg.sender));\n\n        return ERC20(_token).transferFrom(_from, _to, _amount);\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenTransferProxy.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenTransferProxy.sol",
      "exportedSymbols": {
        "TokenTransferProxy": [
          1503
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
        "id": 1422,
        "name": "PragmaDirective",
        "src": "584:23:4"
      },
      {
        "attributes": {
          "SourceUnit": 1143,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 1504,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1423,
        "name": "ImportDirective",
        "src": "609:28:4"
      },
      {
        "attributes": {
          "SourceUnit": 2762,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 1504,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1424,
        "name": "ImportDirective",
        "src": "638:60:4"
      },
      {
        "attributes": {
          "SourceUnit": 2959,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 1504,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1425,
        "name": "ImportDirective",
        "src": "699:59:4"
      },
      {
        "attributes": {
          "contractDependencies": [
            2761,
            2915
          ],
          "contractKind": "contract",
          "documentation": "The TokenTransferProxy is a proxy contract for transfering principal\nand fee payments and repayments between agents and keepers in the Dharma\necosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\nprotocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\ncreditors will not have to grant new transfer approvals to a new contract's address.\n * Author: Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1503,
            2761,
            2915
          ],
          "name": "TokenTransferProxy",
          "scope": 1504
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
                  "name": "Pausable",
                  "referencedDeclaration": 2761,
                  "type": "contract Pausable"
                },
                "id": 1426,
                "name": "UserDefinedTypeName",
                "src": "1278:8:4"
              }
            ],
            "id": 1427,
            "name": "InheritanceSpecifier",
            "src": "1278:8:4"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 2395,
                  "type": "library PermissionsLib"
                },
                "id": 1428,
                "name": "UserDefinedTypeName",
                "src": "1299:14:4"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 2229,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1429,
                "name": "UserDefinedTypeName",
                "src": "1318:26:4"
              }
            ],
            "id": 1430,
            "name": "UsingForDirective",
            "src": "1293:52:4"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenTransferPermissions",
              "scope": 1503,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 2229,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1431,
                "name": "UserDefinedTypeName",
                "src": "1351:26:4"
              }
            ],
            "id": 1432,
            "name": "VariableDeclaration",
            "src": "1351:60:4"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedTransferAgent",
              "payable": false,
              "scope": 1503,
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
                      "name": "_agent",
                      "scope": 1446,
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
                        "id": 1433,
                        "name": "ElementaryTypeName",
                        "src": "1551:7:4"
                      }
                    ],
                    "id": 1434,
                    "name": "VariableDeclaration",
                    "src": "1551:14:4"
                  }
                ],
                "id": 1435,
                "name": "ParameterList",
                "src": "1550:16:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1438,
                "name": "ParameterList",
                "src": "1604:0:4"
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
                    "id": 1436,
                    "name": "Identifier",
                    "src": "1590:9:4"
                  }
                ],
                "id": 1437,
                "name": "ModifierInvocation",
                "src": "1590:9:4"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 2272,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1432,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenTransferPermissions"
                                },
                                "id": 1439,
                                "name": "Identifier",
                                "src": "1614:24:4"
                              }
                            ],
                            "id": 1441,
                            "name": "MemberAccess",
                            "src": "1614:34:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1434,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 1442,
                            "name": "Identifier",
                            "src": "1649:6:4"
                          }
                        ],
                        "id": 1443,
                        "name": "FunctionCall",
                        "src": "1614:42:4"
                      }
                    ],
                    "id": 1444,
                    "name": "ExpressionStatement",
                    "src": "1614:42:4"
                  }
                ],
                "id": 1445,
                "name": "Block",
                "src": "1604:59:4"
              }
            ],
            "id": 1446,
            "name": "FunctionDefinition",
            "src": "1515:148:4"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeTransferAgentAuthorization",
              "payable": false,
              "scope": 1503,
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
                      "name": "_agent",
                      "scope": 1460,
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
                        "id": 1447,
                        "name": "ElementaryTypeName",
                        "src": "1813:7:4"
                      }
                    ],
                    "id": 1448,
                    "name": "VariableDeclaration",
                    "src": "1813:14:4"
                  }
                ],
                "id": 1449,
                "name": "ParameterList",
                "src": "1812:16:4"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1452,
                "name": "ParameterList",
                "src": "1866:0:4"
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
                    "id": 1450,
                    "name": "Identifier",
                    "src": "1852:9:4"
                  }
                ],
                "id": 1451,
                "name": "ModifierInvocation",
                "src": "1852:9:4"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 2351,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1432,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenTransferPermissions"
                                },
                                "id": 1453,
                                "name": "Identifier",
                                "src": "1876:24:4"
                              }
                            ],
                            "id": 1455,
                            "name": "MemberAccess",
                            "src": "1876:44:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1448,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 1456,
                            "name": "Identifier",
                            "src": "1921:6:4"
                          }
                        ],
                        "id": 1457,
                        "name": "FunctionCall",
                        "src": "1876:52:4"
                      }
                    ],
                    "id": 1458,
                    "name": "ExpressionStatement",
                    "src": "1876:52:4"
                  }
                ],
                "id": 1459,
                "name": "Block",
                "src": "1866:69:4"
              }
            ],
            "id": 1460,
            "name": "FunctionDefinition",
            "src": "1771:164:4"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedTransferAgents",
              "payable": false,
              "scope": 1503,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1461,
                "name": "ParameterList",
                "src": "2066:2:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "authorizedAgents",
                      "scope": 1471,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 1462,
                            "name": "ElementaryTypeName",
                            "src": "2114:7:4"
                          }
                        ],
                        "id": 1463,
                        "name": "ArrayTypeName",
                        "src": "2114:9:4"
                      }
                    ],
                    "id": 1464,
                    "name": "VariableDeclaration",
                    "src": "2114:26:4"
                  }
                ],
                "id": 1465,
                "name": "ParameterList",
                "src": "2113:28:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1465
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getAuthorizedAgents",
                              "referencedDeclaration": 2394,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1432,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenTransferPermissions"
                                },
                                "id": 1466,
                                "name": "Identifier",
                                "src": "2163:24:4"
                              }
                            ],
                            "id": 1467,
                            "name": "MemberAccess",
                            "src": "2163:44:4"
                          }
                        ],
                        "id": 1468,
                        "name": "FunctionCall",
                        "src": "2163:46:4"
                      }
                    ],
                    "id": 1469,
                    "name": "Return",
                    "src": "2156:53:4"
                  }
                ],
                "id": 1470,
                "name": "Block",
                "src": "2146:70:4"
              }
            ],
            "id": 1471,
            "name": "FunctionDefinition",
            "src": "2030:186:4"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 1503,
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
                      "name": "_token",
                      "scope": 1502,
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
                        "id": 1472,
                        "name": "ElementaryTypeName",
                        "src": "2356:7:4"
                      }
                    ],
                    "id": 1473,
                    "name": "VariableDeclaration",
                    "src": "2356:14:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 1502,
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
                        "id": 1474,
                        "name": "ElementaryTypeName",
                        "src": "2380:7:4"
                      }
                    ],
                    "id": 1475,
                    "name": "VariableDeclaration",
                    "src": "2380:13:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 1502,
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
                        "id": 1476,
                        "name": "ElementaryTypeName",
                        "src": "2403:7:4"
                      }
                    ],
                    "id": 1477,
                    "name": "VariableDeclaration",
                    "src": "2403:11:4"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 1502,
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
                        "id": 1478,
                        "name": "ElementaryTypeName",
                        "src": "2424:4:4"
                      }
                    ],
                    "id": 1479,
                    "name": "VariableDeclaration",
                    "src": "2424:12:4"
                  }
                ],
                "id": 1480,
                "name": "ParameterList",
                "src": "2346:96:4"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 1502,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 1481,
                        "name": "ElementaryTypeName",
                        "src": "2475:4:4"
                      }
                    ],
                    "id": 1482,
                    "name": "VariableDeclaration",
                    "src": "2475:13:4"
                  }
                ],
                "id": 1483,
                "name": "ParameterList",
                "src": "2474:15:4"
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
                            "id": 1484,
                            "name": "Identifier",
                            "src": "2504:7:4"
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isAuthorized",
                                  "referencedDeclaration": 2366,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1432,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "tokenTransferPermissions"
                                    },
                                    "id": 1485,
                                    "name": "Identifier",
                                    "src": "2512:24:4"
                                  }
                                ],
                                "id": 1486,
                                "name": "MemberAccess",
                                "src": "2512:37:4"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3019,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 1487,
                                    "name": "Identifier",
                                    "src": "2550:3:4"
                                  }
                                ],
                                "id": 1488,
                                "name": "MemberAccess",
                                "src": "2550:10:4"
                              }
                            ],
                            "id": 1489,
                            "name": "FunctionCall",
                            "src": "2512:49:4"
                          }
                        ],
                        "id": 1490,
                        "name": "FunctionCall",
                        "src": "2504:58:4"
                      }
                    ],
                    "id": 1491,
                    "name": "ExpressionStatement",
                    "src": "2504:58:4"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1483
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
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transferFrom",
                              "referencedDeclaration": 2940,
                              "type": "function (address,address,uint256) external returns (bool)"
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
                                  "type": "contract ERC20",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2958,
                                      "type": "type(contract ERC20)",
                                      "value": "ERC20"
                                    },
                                    "id": 1492,
                                    "name": "Identifier",
                                    "src": "2580:5:4"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1473,
                                      "type": "address",
                                      "value": "_token"
                                    },
                                    "id": 1493,
                                    "name": "Identifier",
                                    "src": "2586:6:4"
                                  }
                                ],
                                "id": 1494,
                                "name": "FunctionCall",
                                "src": "2580:13:4"
                              }
                            ],
                            "id": 1495,
                            "name": "MemberAccess",
                            "src": "2580:26:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1475,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 1496,
                            "name": "Identifier",
                            "src": "2607:5:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1477,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 1497,
                            "name": "Identifier",
                            "src": "2614:3:4"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1479,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 1498,
                            "name": "Identifier",
                            "src": "2619:7:4"
                          }
                        ],
                        "id": 1499,
                        "name": "FunctionCall",
                        "src": "2580:47:4"
                      }
                    ],
                    "id": 1500,
                    "name": "Return",
                    "src": "2573:54:4"
                  }
                ],
                "id": 1501,
                "name": "Block",
                "src": "2494:140:4"
              }
            ],
            "id": 1502,
            "name": "FunctionDefinition",
            "src": "2325:309:4"
          }
        ],
        "id": 1503,
        "name": "ContractDefinition",
        "src": "1247:1389:4"
      }
    ],
    "id": 1504,
    "name": "SourceUnit",
    "src": "584:2053:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x0406e7bcf302f7a1fe2470f6450ae3196372c831"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x18eb4152c68dd8c618929303a40b5e48b2123e6a"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-23T18:13:33.372Z"
}