export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
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
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          2580
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
        "id": 2397,
        "name": "PragmaDirective",
        "src": "584:23:7"
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
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2580
          ],
          "name": "MockContract",
          "scope": 2581
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 2580,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 2398,
                "name": "ElementaryTypeName",
                "src": "638:7:7"
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
                  "type": "bytes32",
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
                      "type": "type(bytes32)",
                      "value": "bytes32"
                    },
                    "id": 2399,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:7"
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
                    "id": 2400,
                    "name": "Literal",
                    "src": "697:1:7"
                  }
                ],
                "id": 2401,
                "name": "FunctionCall",
                "src": "689:10:7"
              }
            ],
            "id": 2402,
            "name": "VariableDeclaration",
            "src": "638:61:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 2580,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 2403,
                    "name": "ElementaryTypeName",
                    "src": "804:6:7"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2404,
                        "name": "ElementaryTypeName",
                        "src": "814:7:7"
                      }
                    ],
                    "id": 2405,
                    "name": "ArrayTypeName",
                    "src": "814:9:7"
                  }
                ],
                "id": 2406,
                "name": "Mapping",
                "src": "795:29:7"
              }
            ],
            "id": 2407,
            "name": "VariableDeclaration",
            "src": "795:61:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 2580,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bytes32))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 2408,
                    "name": "ElementaryTypeName",
                    "src": "871:6:7"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bytes32)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2409,
                        "name": "ElementaryTypeName",
                        "src": "890:7:7"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2410,
                        "name": "ElementaryTypeName",
                        "src": "901:7:7"
                      }
                    ],
                    "id": 2411,
                    "name": "Mapping",
                    "src": "881:28:7"
                  }
                ],
                "id": 2412,
                "name": "Mapping",
                "src": "862:48:7"
              }
            ],
            "id": 2413,
            "name": "VariableDeclaration",
            "src": "862:75:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 2580,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 2414,
                    "name": "ElementaryTypeName",
                    "src": "952:6:7"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2415,
                        "name": "ElementaryTypeName",
                        "src": "971:7:7"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2416,
                        "name": "ElementaryTypeName",
                        "src": "982:4:7"
                      }
                    ],
                    "id": 2417,
                    "name": "Mapping",
                    "src": "962:25:7"
                  }
                ],
                "id": 2418,
                "name": "Mapping",
                "src": "943:45:7"
              }
            ],
            "id": 2419,
            "name": "VariableDeclaration",
            "src": "943:68:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockReturnValue",
              "payable": false,
              "scope": 2580,
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
                      "name": "functionName",
                      "scope": 2444,
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
                        "id": 2420,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:7"
                      }
                    ],
                    "id": 2421,
                    "name": "VariableDeclaration",
                    "src": "1052:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 2444,
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
                        "id": 2422,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:7"
                      }
                    ],
                    "id": 2423,
                    "name": "VariableDeclaration",
                    "src": "1081:21:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 2444,
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
                        "id": 2424,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:7"
                      }
                    ],
                    "id": 2425,
                    "name": "VariableDeclaration",
                    "src": "1112:19:7"
                  }
                ],
                "id": 2426,
                "name": "ParameterList",
                "src": "1042:95:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2427,
                "name": "ParameterList",
                "src": "1145:0:7"
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
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2407,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 2428,
                                    "name": "Identifier",
                                    "src": "1155:22:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2421,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 2429,
                                    "name": "Identifier",
                                    "src": "1178:12:7"
                                  }
                                ],
                                "id": 2430,
                                "name": "IndexAccess",
                                "src": "1155:36:7"
                              }
                            ],
                            "id": 2431,
                            "name": "MemberAccess",
                            "src": "1155:41:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2423,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 2432,
                            "name": "Identifier",
                            "src": "1197:13:7"
                          }
                        ],
                        "id": 2433,
                        "name": "FunctionCall",
                        "src": "1155:56:7"
                      }
                    ],
                    "id": 2434,
                    "name": "ExpressionStatement",
                    "src": "1155:56:7"
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
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2413,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 2435,
                                    "name": "Identifier",
                                    "src": "1221:17:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2421,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 2436,
                                    "name": "Identifier",
                                    "src": "1239:12:7"
                                  }
                                ],
                                "id": 2438,
                                "name": "IndexAccess",
                                "src": "1221:31:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2423,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 2437,
                                "name": "Identifier",
                                "src": "1253:13:7"
                              }
                            ],
                            "id": 2439,
                            "name": "IndexAccess",
                            "src": "1221:46:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2425,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 2440,
                            "name": "Identifier",
                            "src": "1270:11:7"
                          }
                        ],
                        "id": 2441,
                        "name": "Assignment",
                        "src": "1221:60:7"
                      }
                    ],
                    "id": 2442,
                    "name": "ExpressionStatement",
                    "src": "1221:60:7"
                  }
                ],
                "id": 2443,
                "name": "Block",
                "src": "1145:143:7"
              }
            ],
            "id": 2444,
            "name": "FunctionDefinition",
            "src": "1018:270:7"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getMockReturnValue",
              "payable": false,
              "scope": 2580,
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
                      "name": "functionName",
                      "scope": 2460,
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
                        "id": 2445,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:7"
                      }
                    ],
                    "id": 2446,
                    "name": "VariableDeclaration",
                    "src": "1322:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 2460,
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
                        "id": 2447,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:7"
                      }
                    ],
                    "id": 2448,
                    "name": "VariableDeclaration",
                    "src": "1343:21:7"
                  }
                ],
                "id": 2449,
                "name": "ParameterList",
                "src": "1321:44:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 2460,
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
                        "id": 2450,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:7"
                      }
                    ],
                    "id": 2451,
                    "name": "VariableDeclaration",
                    "src": "1411:24:7"
                  }
                ],
                "id": 2452,
                "name": "ParameterList",
                "src": "1410:26:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2452
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2413,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 2453,
                                "name": "Identifier",
                                "src": "1458:17:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2446,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 2454,
                                "name": "Identifier",
                                "src": "1476:12:7"
                              }
                            ],
                            "id": 2455,
                            "name": "IndexAccess",
                            "src": "1458:31:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2448,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 2456,
                            "name": "Identifier",
                            "src": "1490:13:7"
                          }
                        ],
                        "id": 2457,
                        "name": "IndexAccess",
                        "src": "1458:46:7"
                      }
                    ],
                    "id": 2458,
                    "name": "Return",
                    "src": "1451:53:7"
                  }
                ],
                "id": 2459,
                "name": "Block",
                "src": "1441:70:7"
              }
            ],
            "id": 2460,
            "name": "FunctionDefinition",
            "src": "1294:217:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "reset",
              "payable": false,
              "scope": 2580,
              "stateMutability": "nonpayable",
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
                "id": 2461,
                "name": "ParameterList",
                "src": "1531:2:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2462,
                "name": "ParameterList",
                "src": "1541:0:7"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            2464
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 2533,
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
                                "id": 2463,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:7"
                              }
                            ],
                            "id": 2464,
                            "name": "VariableDeclaration",
                            "src": "1556:6:7"
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
                            "id": 2465,
                            "name": "Literal",
                            "src": "1565:1:7"
                          }
                        ],
                        "id": 2466,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
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
                              "referencedDeclaration": 2464,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 2467,
                            "name": "Identifier",
                            "src": "1568:1:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 2468,
                            "name": "Literal",
                            "src": "1572:2:7"
                          }
                        ],
                        "id": 2469,
                        "name": "BinaryOperation",
                        "src": "1568:6:7"
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
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2464,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 2470,
                                "name": "Identifier",
                                "src": "1576:1:7"
                              }
                            ],
                            "id": 2471,
                            "name": "UnaryOperation",
                            "src": "1576:3:7"
                          }
                        ],
                        "id": 2472,
                        "name": "ExpressionStatement",
                        "src": "1576:3:7"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                2474
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 2533,
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
                                    "id": 2473,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:7"
                                  }
                                ],
                                "id": 2474,
                                "name": "VariableDeclaration",
                                "src": "1595:26:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "string memory"
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
                                      "type": "string memory[10] memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2579,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 2475,
                                        "name": "Identifier",
                                        "src": "1624:15:7"
                                      }
                                    ],
                                    "id": 2476,
                                    "name": "FunctionCall",
                                    "src": "1624:17:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2464,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 2477,
                                    "name": "Identifier",
                                    "src": "1642:1:7"
                                  }
                                ],
                                "id": 2478,
                                "name": "IndexAccess",
                                "src": "1624:20:7"
                              }
                            ],
                            "id": 2479,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:7"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
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
                                          "type": "bytes memory",
                                          "type_conversion": true
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
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(bytes storage pointer)",
                                              "value": "bytes"
                                            },
                                            "id": 2480,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:7"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2474,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 2481,
                                            "name": "Identifier",
                                            "src": "1669:12:7"
                                          }
                                        ],
                                        "id": 2482,
                                        "name": "FunctionCall",
                                        "src": "1663:19:7"
                                      }
                                    ],
                                    "id": 2483,
                                    "name": "MemberAccess",
                                    "src": "1663:26:7"
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
                                    "id": 2484,
                                    "name": "Literal",
                                    "src": "1693:1:7"
                                  }
                                ],
                                "id": 2485,
                                "name": "BinaryOperation",
                                "src": "1663:31:7"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            2487
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 2533,
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
                                                "id": 2486,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:7"
                                              }
                                            ],
                                            "id": 2487,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:7"
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
                                            "id": 2488,
                                            "name": "Literal",
                                            "src": "1728:1:7"
                                          }
                                        ],
                                        "id": 2489,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
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
                                              "referencedDeclaration": 2487,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 2490,
                                            "name": "Identifier",
                                            "src": "1731:1:7"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "length",
                                              "referencedDeclaration": null,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2407,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 2491,
                                                    "name": "Identifier",
                                                    "src": "1735:22:7"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2474,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 2492,
                                                    "name": "Identifier",
                                                    "src": "1758:12:7"
                                                  }
                                                ],
                                                "id": 2493,
                                                "name": "IndexAccess",
                                                "src": "1735:36:7"
                                              }
                                            ],
                                            "id": 2494,
                                            "name": "MemberAccess",
                                            "src": "1735:43:7"
                                          }
                                        ],
                                        "id": 2495,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:7"
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
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2487,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 2496,
                                                "name": "Identifier",
                                                "src": "1780:1:7"
                                              }
                                            ],
                                            "id": 2497,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:7"
                                          }
                                        ],
                                        "id": 2498,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:7"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                2500
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 2533,
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
                                                    "id": 2499,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:7"
                                                  }
                                                ],
                                                "id": 2500,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:7"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "bytes32[] storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 2407,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 2501,
                                                        "name": "Identifier",
                                                        "src": "1831:22:7"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 2474,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 2502,
                                                        "name": "Identifier",
                                                        "src": "1854:12:7"
                                                      }
                                                    ],
                                                    "id": 2503,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:7"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2487,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 2504,
                                                    "name": "Identifier",
                                                    "src": "1868:1:7"
                                                  }
                                                ],
                                                "id": 2505,
                                                "name": "IndexAccess",
                                                "src": "1831:39:7"
                                              }
                                            ],
                                            "id": 2506,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:7"
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
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
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
                                                          "type": "mapping(bytes32 => bool)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 2419,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 2507,
                                                            "name": "Identifier",
                                                            "src": "1899:13:7"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 2474,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 2508,
                                                            "name": "Identifier",
                                                            "src": "1913:12:7"
                                                          }
                                                        ],
                                                        "id": 2509,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:7"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 2500,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 2510,
                                                        "name": "Identifier",
                                                        "src": "1927:13:7"
                                                      }
                                                    ],
                                                    "id": 2511,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:7"
                                                  }
                                                ],
                                                "id": 2512,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:7"
                                              }
                                            ],
                                            "id": 2513,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:7"
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
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bytes32"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bytes32)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 2413,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 2514,
                                                            "name": "Identifier",
                                                            "src": "1970:17:7"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 2474,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 2515,
                                                            "name": "Identifier",
                                                            "src": "1988:12:7"
                                                          }
                                                        ],
                                                        "id": 2516,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:7"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 2500,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 2517,
                                                        "name": "Identifier",
                                                        "src": "2002:13:7"
                                                      }
                                                    ],
                                                    "id": 2518,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:7"
                                                  }
                                                ],
                                                "id": 2519,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:7"
                                              }
                                            ],
                                            "id": 2520,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:7"
                                          }
                                        ],
                                        "id": 2521,
                                        "name": "Block",
                                        "src": "1785:250:7"
                                      }
                                    ],
                                    "id": 2522,
                                    "name": "ForStatement",
                                    "src": "1714:321:7"
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
                                          "operator": "delete",
                                          "prefix": true,
                                          "type": "tuple()"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "type": "bytes32[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2407,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 2523,
                                                "name": "Identifier",
                                                "src": "2060:22:7"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2474,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 2524,
                                                "name": "Identifier",
                                                "src": "2083:12:7"
                                              }
                                            ],
                                            "id": 2525,
                                            "name": "IndexAccess",
                                            "src": "2060:36:7"
                                          }
                                        ],
                                        "id": 2526,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:7"
                                      }
                                    ],
                                    "id": 2527,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:7"
                                  }
                                ],
                                "id": 2528,
                                "name": "Block",
                                "src": "1696:415:7"
                              }
                            ],
                            "id": 2529,
                            "name": "IfStatement",
                            "src": "1659:452:7"
                          }
                        ],
                        "id": 2530,
                        "name": "Block",
                        "src": "1581:540:7"
                      }
                    ],
                    "id": 2531,
                    "name": "ForStatement",
                    "src": "1551:570:7"
                  }
                ],
                "id": 2532,
                "name": "Block",
                "src": "1541:586:7"
              }
            ],
            "id": 2533,
            "name": "FunctionDefinition",
            "src": "1517:610:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "functionCalledWithArgs",
              "payable": false,
              "scope": 2580,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 2556,
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
                        "id": 2534,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:7"
                      }
                    ],
                    "id": 2535,
                    "name": "VariableDeclaration",
                    "src": "2165:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 2556,
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
                        "id": 2536,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:7"
                      }
                    ],
                    "id": 2537,
                    "name": "VariableDeclaration",
                    "src": "2186:12:7"
                  }
                ],
                "id": 2538,
                "name": "ParameterList",
                "src": "2164:35:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2539,
                "name": "ParameterList",
                "src": "2221:0:7"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
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
                                  "type": "mapping(bytes32 => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2419,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 2540,
                                    "name": "Identifier",
                                    "src": "2231:13:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2535,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 2541,
                                    "name": "Identifier",
                                    "src": "2245:12:7"
                                  }
                                ],
                                "id": 2543,
                                "name": "IndexAccess",
                                "src": "2231:27:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2537,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 2542,
                                "name": "Identifier",
                                "src": "2259:4:7"
                              }
                            ],
                            "id": 2544,
                            "name": "IndexAccess",
                            "src": "2231:33:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 2545,
                            "name": "Literal",
                            "src": "2267:4:7"
                          }
                        ],
                        "id": 2546,
                        "name": "Assignment",
                        "src": "2231:40:7"
                      }
                    ],
                    "id": 2547,
                    "name": "ExpressionStatement",
                    "src": "2231:40:7"
                  },
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
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2407,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 2548,
                                    "name": "Identifier",
                                    "src": "2281:22:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2535,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 2549,
                                    "name": "Identifier",
                                    "src": "2304:12:7"
                                  }
                                ],
                                "id": 2550,
                                "name": "IndexAccess",
                                "src": "2281:36:7"
                              }
                            ],
                            "id": 2551,
                            "name": "MemberAccess",
                            "src": "2281:41:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2537,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 2552,
                            "name": "Identifier",
                            "src": "2323:4:7"
                          }
                        ],
                        "id": 2553,
                        "name": "FunctionCall",
                        "src": "2281:47:7"
                      }
                    ],
                    "id": 2554,
                    "name": "ExpressionStatement",
                    "src": "2281:47:7"
                  }
                ],
                "id": 2555,
                "name": "Block",
                "src": "2221:114:7"
              }
            ],
            "id": 2556,
            "name": "FunctionDefinition",
            "src": "2133:202:7"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "wasFunctionCalledWithArgs",
              "payable": false,
              "scope": 2580,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 2572,
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
                        "id": 2557,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:7"
                      }
                    ],
                    "id": 2558,
                    "name": "VariableDeclaration",
                    "src": "2376:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 2572,
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
                        "id": 2559,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:7"
                      }
                    ],
                    "id": 2560,
                    "name": "VariableDeclaration",
                    "src": "2397:12:7"
                  }
                ],
                "id": 2561,
                "name": "ParameterList",
                "src": "2375:35:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 2572,
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
                        "id": 2562,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:7"
                      }
                    ],
                    "id": 2563,
                    "name": "VariableDeclaration",
                    "src": "2458:14:7"
                  }
                ],
                "id": 2564,
                "name": "ParameterList",
                "src": "2457:16:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2564
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                              "type": "mapping(bytes32 => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2419,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 2565,
                                "name": "Identifier",
                                "src": "2495:13:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2558,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 2566,
                                "name": "Identifier",
                                "src": "2509:12:7"
                              }
                            ],
                            "id": 2567,
                            "name": "IndexAccess",
                            "src": "2495:27:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2560,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 2568,
                            "name": "Identifier",
                            "src": "2523:4:7"
                          }
                        ],
                        "id": 2569,
                        "name": "IndexAccess",
                        "src": "2495:33:7"
                      }
                    ],
                    "id": 2570,
                    "name": "Return",
                    "src": "2488:40:7"
                  }
                ],
                "id": 2571,
                "name": "Block",
                "src": "2478:57:7"
              }
            ],
            "id": 2572,
            "name": "FunctionDefinition",
            "src": "2341:194:7"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFunctionList",
              "payable": false,
              "scope": 2580,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2573,
                "name": "ParameterList",
                "src": "2565:2:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 2579,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory[10] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "string storage ref[10] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 2574,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 2575,
                            "name": "Literal",
                            "src": "2593:2:7"
                          }
                        ],
                        "id": 2576,
                        "name": "ArrayTypeName",
                        "src": "2586:10:7"
                      }
                    ],
                    "id": 2577,
                    "name": "VariableDeclaration",
                    "src": "2586:24:7"
                  }
                ],
                "id": 2578,
                "name": "ParameterList",
                "src": "2585:26:7"
              }
            ],
            "id": 2579,
            "name": "FunctionDefinition",
            "src": "2541:71:7"
          }
        ],
        "id": 2580,
        "name": "ContractDefinition",
        "src": "610:2004:7"
      }
    ],
    "id": 2581,
    "name": "SourceUnit",
    "src": "584:2031:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-19T23:50:06.581Z"
}