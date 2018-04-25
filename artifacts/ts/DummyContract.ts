export const DummyContract = 
{
  "contractName": "DummyContract",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeInFirstSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSecondSetAuthorizedAgents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "isAuthorizedInSecondSet",
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
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeInSecondSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFirstSetAuthorizedAgents",
      "outputs": [
        {
          "name": "",
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "authorizeInSecondSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "authorizeInFirstSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "isAuthorizedInFirstSet",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6108de8061001e6000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fe1b53314610093578063589e9a75146100cc5780637a381130146101365780638eb509a114610187578063a224cfac146101c0578063b38b5e581461022a578063bcd3486614610263578063c30563021461029c575b600080fd5b341561009e57600080fd5b6100ca600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102ed565b005b34156100d757600080fd5b6100df610304565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610122578082015181840152602081019050610107565b505050509050019250505060405180910390f35b341561014157600080fd5b61016d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061031b565b604051808215151515815260200191505060405180910390f35b341561019257600080fd5b6101be600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610338565b005b34156101cb57600080fd5b6101d361034f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102165780820151818401526020810190506101fb565b505050509050019250505060405180910390f35b341561023557600080fd5b610261600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610366565b005b341561026e57600080fd5b61029a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061037d565b005b34156102a757600080fd5b6102d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610394565b604051808215151515815260200191505060405180910390f35b6103018160006103b190919063ffffffff16565b50565b61030c610821565b61031660036105f3565b905090565b600061033182600361068b90919063ffffffff16565b9050919050565b61034c8160036103b190919063ffffffff16565b50565b610357610821565b61036160006105f3565b905090565b61037a8160036106e490919063ffffffff16565b50565b6103918160006106e490919063ffffffff16565b50565b60006103aa82600061068b90919063ffffffff16565b9050919050565b60008060006103c0858561068b565b15156103cb57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054925060018560020180549050039150846002018281548110151561042d57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690558085600201848154811015156104be57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905584600201828154811015156105a357fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600185600201818180549050039150816105eb9190610835565b505050505050565b6105fb610821565b8160020180548060200260200160405190810160405280929190818152602001828054801561067f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610635575b50505050509050919050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6106ee828261080c565b15156106f957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816107699190610861565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6000610818838361068b565b15905092915050565b602060405190810160405280600081525090565b81548183558181151161085c5781836000526020600020918201910161085b919061088d565b5b505050565b81548183558181151161088857818360005260206000209182019101610887919061088d565b5b505050565b6108af91905b808211156108ab576000816000905550600101610893565b5090565b905600a165627a7a7230582062a5c81d6d0ff38caf2fb6886421f03daf98efb145926c32474ddbb8614dd13d0029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fe1b53314610093578063589e9a75146100cc5780637a381130146101365780638eb509a114610187578063a224cfac146101c0578063b38b5e581461022a578063bcd3486614610263578063c30563021461029c575b600080fd5b341561009e57600080fd5b6100ca600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506102ed565b005b34156100d757600080fd5b6100df610304565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610122578082015181840152602081019050610107565b505050509050019250505060405180910390f35b341561014157600080fd5b61016d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061031b565b604051808215151515815260200191505060405180910390f35b341561019257600080fd5b6101be600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610338565b005b34156101cb57600080fd5b6101d361034f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102165780820151818401526020810190506101fb565b505050509050019250505060405180910390f35b341561023557600080fd5b610261600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610366565b005b341561026e57600080fd5b61029a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061037d565b005b34156102a757600080fd5b6102d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610394565b604051808215151515815260200191505060405180910390f35b6103018160006103b190919063ffffffff16565b50565b61030c610821565b61031660036105f3565b905090565b600061033182600361068b90919063ffffffff16565b9050919050565b61034c8160036103b190919063ffffffff16565b50565b610357610821565b61036160006105f3565b905090565b61037a8160036106e490919063ffffffff16565b50565b6103918160006106e490919063ffffffff16565b50565b60006103aa82600061068b90919063ffffffff16565b9050919050565b60008060006103c0858561068b565b15156103cb57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054925060018560020180549050039150846002018281548110151561042d57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690558085600201848154811015156104be57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905584600201828154811015156105a357fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600185600201818180549050039150816105eb9190610835565b505050505050565b6105fb610821565b8160020180548060200260200160405190810160405280929190818152602001828054801561067f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610635575b50505050509050919050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6106ee828261080c565b15156106f957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816107699190610861565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6000610818838361068b565b15905092915050565b602060405190810160405280600081525090565b81548183558181151161085c5781836000526020600020918201910161085b919061088d565b5b505050565b81548183558181151161088857818360005260206000209182019101610887919061088d565b5b505050565b6108af91905b808211156108ab576000816000905550600101610893565b5090565b905600a165627a7a7230582062a5c81d6d0ff38caf2fb6886421f03daf98efb145926c32474ddbb8614dd13d0029",
  "sourceMap": "653:1235:14:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "653:1235:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1080:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;1749:137;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1460:142:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1196:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;1608:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;969:105:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;860:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;1314:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1080:110;1138:45;1177:5;1138:18;:38;;:45;;;;:::i;:::-;1080:110;:::o;1749:137::-;1810:9;;:::i;:::-;1838:41;:19;:39;:41::i;:::-;1831:48;;1749:137;:::o;1460:142::-;1533:4;1556:39;1589:5;1556:19;:32;;:39;;;;:::i;:::-;1549:46;;1460:142;;;:::o;1196:112::-;1255:46;1295:5;1255:19;:39;;:46;;;;:::i;:::-;1196:112;:::o;1608:135::-;1668:9;;:::i;:::-;1696:40;:18;:38;:40::i;:::-;1689:47;;1608:135;:::o;969:105::-;1031:36;1061:5;1031:19;:29;;:36;;;;:::i;:::-;969:105;:::o;860:103::-;921:35;950:5;921:18;:28;;:35;;;;:::i;:::-;860:103;:::o;1314:140::-;1386:4;1409:38;1441:5;1409:18;:31;;:38;;;;:::i;:::-;1402:45;;1314:140;;;:::o;1118:1061:13:-;1433:25;1495:23;1563:19;1396:25;1409:4;1415:5;1396:12;:25::i;:::-;1388:34;;;;;;;;1461:4;:17;;:24;1479:5;1461:24;;;;;;;;;;;;;;;;1433:52;;1552:1;1521:4;:21;;:28;;;;:32;1495:58;;1585:4;:21;;1607:18;1585:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;1563:63;;1689:4;:15;;:22;1705:5;1689:22;;;;;;;;;;;;;;;;1682:29;;;;;;;;;;;1838:11;1792:4;:21;;1814:20;1792:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;1953:20;1920:4;:17;;:30;1938:11;1920:30;;;;;;;;;;;;;;;:53;;;;1990:4;:17;;:24;2008:5;1990:24;;;;;;;;;;;;;;;1983:31;;;2088:4;:21;;2110:18;2088:41;;;;;;;;;;;;;;;;;;;2081:48;;;;;;;;;;;2171:1;2139:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1118:1061;;;;;:::o;2536:162::-;2638:9;;:::i;:::-;2670:4;:21;;2663:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:162;;;:::o;2185:166::-;2295:4;2322;:15;;:22;2338:5;2322:22;;;;;;;;;;;;;;;;;;;;;;;;;2315:29;;2185:166;;;;:::o;825:287::-;924:28;940:4;946:5;924:15;:28::i;:::-;916:37;;;;;;;;989:4;964;:15;;:22;980:5;964:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1003:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1030:5;1003:33;;;;;;;;;;;;;;;;;;;;;;;1104:1;1073:4;:21;;:28;;;;:32;1046:4;:17;;:24;1064:5;1046:24;;;;;;;;;;;;;;;:59;;;;825:287;;:::o;2357:173::-;2470:4;2498:25;2511:4;2517:5;2498:12;:25::i;:::-;2497:26;2490:33;;2357:173;;;;:::o;653:1235:14:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"../libraries/PermissionsLib.sol\";\n\n\ncontract DummyContract {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions private firstPermissionSet;\n    PermissionsLib.Permissions private secondPermissionSet;\n\n    function authorizeInFirstSet(address agent) public {\n        firstPermissionSet.authorize(agent);\n    }\n\n    function authorizeInSecondSet(address agent) public {\n        secondPermissionSet.authorize(agent);\n    }\n\n    function revokeInFirstSet(address agent) public {\n        firstPermissionSet.revokeAuthorization(agent);\n    }\n\n    function revokeInSecondSet(address agent) public {\n        secondPermissionSet.revokeAuthorization(agent);\n    }\n\n    function isAuthorizedInFirstSet(address agent) public constant returns (bool) {\n        return firstPermissionSet.isAuthorized(agent);\n    }\n\n    function isAuthorizedInSecondSet(address agent) public constant returns (bool) {\n        return secondPermissionSet.isAuthorized(agent);\n    }\n\n    function getFirstSetAuthorizedAgents() public view returns (address[]) {\n        return firstPermissionSet.getAuthorizedAgents();\n    }\n\n    function getSecondSetAuthorizedAgents() public view returns (address[]) {\n        return secondPermissionSet.getAuthorizedAgents();\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/DummyContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/DummyContract.sol",
      "exportedSymbols": {
        "DummyContract": [
          5476
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
        "id": 5371,
        "name": "PragmaDirective",
        "src": "584:23:14"
      },
      {
        "attributes": {
          "SourceUnit": 5370,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
          "file": "../libraries/PermissionsLib.sol",
          "scope": 5477,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5372,
        "name": "ImportDirective",
        "src": "609:41:14"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5476
          ],
          "name": "DummyContract",
          "scope": 5477
        },
        "children": [
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 5369,
                  "type": "library PermissionsLib"
                },
                "id": 5373,
                "name": "UserDefinedTypeName",
                "src": "688:14:14"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 5203,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 5374,
                "name": "UserDefinedTypeName",
                "src": "707:26:14"
              }
            ],
            "id": 5375,
            "name": "UsingForDirective",
            "src": "682:52:14"
          },
          {
            "attributes": {
              "constant": false,
              "name": "firstPermissionSet",
              "scope": 5476,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 5203,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 5376,
                "name": "UserDefinedTypeName",
                "src": "740:26:14"
              }
            ],
            "id": 5377,
            "name": "VariableDeclaration",
            "src": "740:53:14"
          },
          {
            "attributes": {
              "constant": false,
              "name": "secondPermissionSet",
              "scope": 5476,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 5203,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 5378,
                "name": "UserDefinedTypeName",
                "src": "799:26:14"
              }
            ],
            "id": 5379,
            "name": "VariableDeclaration",
            "src": "799:54:14"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorizeInFirstSet",
              "payable": false,
              "scope": 5476,
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
                      "name": "agent",
                      "scope": 5391,
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
                        "id": 5380,
                        "name": "ElementaryTypeName",
                        "src": "889:7:14"
                      }
                    ],
                    "id": 5381,
                    "name": "VariableDeclaration",
                    "src": "889:13:14"
                  }
                ],
                "id": 5382,
                "name": "ParameterList",
                "src": "888:15:14"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5383,
                "name": "ParameterList",
                "src": "911:0:14"
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
                              "referencedDeclaration": 5246,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5377,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 5384,
                                "name": "Identifier",
                                "src": "921:18:14"
                              }
                            ],
                            "id": 5386,
                            "name": "MemberAccess",
                            "src": "921:28:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5381,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5387,
                            "name": "Identifier",
                            "src": "950:5:14"
                          }
                        ],
                        "id": 5388,
                        "name": "FunctionCall",
                        "src": "921:35:14"
                      }
                    ],
                    "id": 5389,
                    "name": "ExpressionStatement",
                    "src": "921:35:14"
                  }
                ],
                "id": 5390,
                "name": "Block",
                "src": "911:52:14"
              }
            ],
            "id": 5391,
            "name": "FunctionDefinition",
            "src": "860:103:14"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorizeInSecondSet",
              "payable": false,
              "scope": 5476,
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
                      "name": "agent",
                      "scope": 5403,
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
                        "id": 5392,
                        "name": "ElementaryTypeName",
                        "src": "999:7:14"
                      }
                    ],
                    "id": 5393,
                    "name": "VariableDeclaration",
                    "src": "999:13:14"
                  }
                ],
                "id": 5394,
                "name": "ParameterList",
                "src": "998:15:14"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5395,
                "name": "ParameterList",
                "src": "1021:0:14"
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
                              "referencedDeclaration": 5246,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5379,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 5396,
                                "name": "Identifier",
                                "src": "1031:19:14"
                              }
                            ],
                            "id": 5398,
                            "name": "MemberAccess",
                            "src": "1031:29:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5393,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5399,
                            "name": "Identifier",
                            "src": "1061:5:14"
                          }
                        ],
                        "id": 5400,
                        "name": "FunctionCall",
                        "src": "1031:36:14"
                      }
                    ],
                    "id": 5401,
                    "name": "ExpressionStatement",
                    "src": "1031:36:14"
                  }
                ],
                "id": 5402,
                "name": "Block",
                "src": "1021:53:14"
              }
            ],
            "id": 5403,
            "name": "FunctionDefinition",
            "src": "969:105:14"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeInFirstSet",
              "payable": false,
              "scope": 5476,
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
                      "name": "agent",
                      "scope": 5415,
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
                        "id": 5404,
                        "name": "ElementaryTypeName",
                        "src": "1106:7:14"
                      }
                    ],
                    "id": 5405,
                    "name": "VariableDeclaration",
                    "src": "1106:13:14"
                  }
                ],
                "id": 5406,
                "name": "ParameterList",
                "src": "1105:15:14"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5407,
                "name": "ParameterList",
                "src": "1128:0:14"
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
                              "referencedDeclaration": 5325,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5377,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 5408,
                                "name": "Identifier",
                                "src": "1138:18:14"
                              }
                            ],
                            "id": 5410,
                            "name": "MemberAccess",
                            "src": "1138:38:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5405,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5411,
                            "name": "Identifier",
                            "src": "1177:5:14"
                          }
                        ],
                        "id": 5412,
                        "name": "FunctionCall",
                        "src": "1138:45:14"
                      }
                    ],
                    "id": 5413,
                    "name": "ExpressionStatement",
                    "src": "1138:45:14"
                  }
                ],
                "id": 5414,
                "name": "Block",
                "src": "1128:62:14"
              }
            ],
            "id": 5415,
            "name": "FunctionDefinition",
            "src": "1080:110:14"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeInSecondSet",
              "payable": false,
              "scope": 5476,
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
                      "name": "agent",
                      "scope": 5427,
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
                        "id": 5416,
                        "name": "ElementaryTypeName",
                        "src": "1223:7:14"
                      }
                    ],
                    "id": 5417,
                    "name": "VariableDeclaration",
                    "src": "1223:13:14"
                  }
                ],
                "id": 5418,
                "name": "ParameterList",
                "src": "1222:15:14"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5419,
                "name": "ParameterList",
                "src": "1245:0:14"
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
                              "referencedDeclaration": 5325,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5379,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 5420,
                                "name": "Identifier",
                                "src": "1255:19:14"
                              }
                            ],
                            "id": 5422,
                            "name": "MemberAccess",
                            "src": "1255:39:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5417,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5423,
                            "name": "Identifier",
                            "src": "1295:5:14"
                          }
                        ],
                        "id": 5424,
                        "name": "FunctionCall",
                        "src": "1255:46:14"
                      }
                    ],
                    "id": 5425,
                    "name": "ExpressionStatement",
                    "src": "1255:46:14"
                  }
                ],
                "id": 5426,
                "name": "Block",
                "src": "1245:63:14"
              }
            ],
            "id": 5427,
            "name": "FunctionDefinition",
            "src": "1196:112:14"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorizedInFirstSet",
              "payable": false,
              "scope": 5476,
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
                      "name": "agent",
                      "scope": 5440,
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
                        "id": 5428,
                        "name": "ElementaryTypeName",
                        "src": "1346:7:14"
                      }
                    ],
                    "id": 5429,
                    "name": "VariableDeclaration",
                    "src": "1346:13:14"
                  }
                ],
                "id": 5430,
                "name": "ParameterList",
                "src": "1345:15:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5440,
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
                        "id": 5431,
                        "name": "ElementaryTypeName",
                        "src": "1386:4:14"
                      }
                    ],
                    "id": 5432,
                    "name": "VariableDeclaration",
                    "src": "1386:4:14"
                  }
                ],
                "id": 5433,
                "name": "ParameterList",
                "src": "1385:6:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5433
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isAuthorized",
                              "referencedDeclaration": 5340,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5377,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 5434,
                                "name": "Identifier",
                                "src": "1409:18:14"
                              }
                            ],
                            "id": 5435,
                            "name": "MemberAccess",
                            "src": "1409:31:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5429,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5436,
                            "name": "Identifier",
                            "src": "1441:5:14"
                          }
                        ],
                        "id": 5437,
                        "name": "FunctionCall",
                        "src": "1409:38:14"
                      }
                    ],
                    "id": 5438,
                    "name": "Return",
                    "src": "1402:45:14"
                  }
                ],
                "id": 5439,
                "name": "Block",
                "src": "1392:62:14"
              }
            ],
            "id": 5440,
            "name": "FunctionDefinition",
            "src": "1314:140:14"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorizedInSecondSet",
              "payable": false,
              "scope": 5476,
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
                      "name": "agent",
                      "scope": 5453,
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
                        "id": 5441,
                        "name": "ElementaryTypeName",
                        "src": "1493:7:14"
                      }
                    ],
                    "id": 5442,
                    "name": "VariableDeclaration",
                    "src": "1493:13:14"
                  }
                ],
                "id": 5443,
                "name": "ParameterList",
                "src": "1492:15:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5453,
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
                        "id": 5444,
                        "name": "ElementaryTypeName",
                        "src": "1533:4:14"
                      }
                    ],
                    "id": 5445,
                    "name": "VariableDeclaration",
                    "src": "1533:4:14"
                  }
                ],
                "id": 5446,
                "name": "ParameterList",
                "src": "1532:6:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5446
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isAuthorized",
                              "referencedDeclaration": 5340,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5379,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 5447,
                                "name": "Identifier",
                                "src": "1556:19:14"
                              }
                            ],
                            "id": 5448,
                            "name": "MemberAccess",
                            "src": "1556:32:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5442,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5449,
                            "name": "Identifier",
                            "src": "1589:5:14"
                          }
                        ],
                        "id": 5450,
                        "name": "FunctionCall",
                        "src": "1556:39:14"
                      }
                    ],
                    "id": 5451,
                    "name": "Return",
                    "src": "1549:46:14"
                  }
                ],
                "id": 5452,
                "name": "Block",
                "src": "1539:63:14"
              }
            ],
            "id": 5453,
            "name": "FunctionDefinition",
            "src": "1460:142:14"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFirstSetAuthorizedAgents",
              "payable": false,
              "scope": 5476,
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
                "id": 5454,
                "name": "ParameterList",
                "src": "1644:2:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5464,
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
                            "id": 5455,
                            "name": "ElementaryTypeName",
                            "src": "1668:7:14"
                          }
                        ],
                        "id": 5456,
                        "name": "ArrayTypeName",
                        "src": "1668:9:14"
                      }
                    ],
                    "id": 5457,
                    "name": "VariableDeclaration",
                    "src": "1668:9:14"
                  }
                ],
                "id": 5458,
                "name": "ParameterList",
                "src": "1667:11:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5458
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
                              "referencedDeclaration": 5368,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5377,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 5459,
                                "name": "Identifier",
                                "src": "1696:18:14"
                              }
                            ],
                            "id": 5460,
                            "name": "MemberAccess",
                            "src": "1696:38:14"
                          }
                        ],
                        "id": 5461,
                        "name": "FunctionCall",
                        "src": "1696:40:14"
                      }
                    ],
                    "id": 5462,
                    "name": "Return",
                    "src": "1689:47:14"
                  }
                ],
                "id": 5463,
                "name": "Block",
                "src": "1679:64:14"
              }
            ],
            "id": 5464,
            "name": "FunctionDefinition",
            "src": "1608:135:14"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getSecondSetAuthorizedAgents",
              "payable": false,
              "scope": 5476,
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
                "id": 5465,
                "name": "ParameterList",
                "src": "1786:2:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5475,
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
                            "id": 5466,
                            "name": "ElementaryTypeName",
                            "src": "1810:7:14"
                          }
                        ],
                        "id": 5467,
                        "name": "ArrayTypeName",
                        "src": "1810:9:14"
                      }
                    ],
                    "id": 5468,
                    "name": "VariableDeclaration",
                    "src": "1810:9:14"
                  }
                ],
                "id": 5469,
                "name": "ParameterList",
                "src": "1809:11:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5469
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
                              "referencedDeclaration": 5368,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5379,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 5470,
                                "name": "Identifier",
                                "src": "1838:19:14"
                              }
                            ],
                            "id": 5471,
                            "name": "MemberAccess",
                            "src": "1838:39:14"
                          }
                        ],
                        "id": 5472,
                        "name": "FunctionCall",
                        "src": "1838:41:14"
                      }
                    ],
                    "id": 5473,
                    "name": "Return",
                    "src": "1831:48:14"
                  }
                ],
                "id": 5474,
                "name": "Block",
                "src": "1821:65:14"
              }
            ],
            "id": 5475,
            "name": "FunctionDefinition",
            "src": "1749:137:14"
          }
        ],
        "id": 5476,
        "name": "ContractDefinition",
        "src": "653:1235:14"
      }
    ],
    "id": 5477,
    "name": "SourceUnit",
    "src": "584:1305:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x430cedcd9c44d3cb63598cd2d083d6d52383b967"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xe22e38310ea44861a1a3e6f0337468024b14d12b"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:08:49.583Z"
}