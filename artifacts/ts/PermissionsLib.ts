export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "sourceMap": "610:2090:13:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "610:2090:13:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\nlibrary PermissionsLib {\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(Permissions storage self, address agent)\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n    }\n\n    function revokeAuthorization(Permissions storage self, address agent)\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionsLib": [
          5369
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
        "id": 5191,
        "name": "PragmaDirective",
        "src": "584:23:13"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5369
          ],
          "name": "PermissionsLib",
          "scope": 5370
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 5369,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 5203,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => bool)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5192,
                        "name": "ElementaryTypeName",
                        "src": "677:7:13"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5193,
                        "name": "ElementaryTypeName",
                        "src": "688:4:13"
                      }
                    ],
                    "id": 5194,
                    "name": "Mapping",
                    "src": "668:25:13"
                  }
                ],
                "id": 5195,
                "name": "VariableDeclaration",
                "src": "668:36:13"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 5203,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => uint256)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5196,
                        "name": "ElementaryTypeName",
                        "src": "723:7:13"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 5197,
                        "name": "ElementaryTypeName",
                        "src": "734:4:13"
                      }
                    ],
                    "id": 5198,
                    "name": "Mapping",
                    "src": "714:25:13"
                  }
                ],
                "id": 5199,
                "name": "VariableDeclaration",
                "src": "714:38:13"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 5203,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address[] storage pointer",
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
                        "id": 5200,
                        "name": "ElementaryTypeName",
                        "src": "786:7:13"
                      }
                    ],
                    "id": 5201,
                    "name": "ArrayTypeName",
                    "src": "786:9:13"
                  }
                ],
                "id": 5202,
                "name": "VariableDeclaration",
                "src": "786:26:13"
              }
            ],
            "id": 5203,
            "name": "StructDefinition",
            "src": "639:180:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorize",
              "payable": false,
              "scope": 5369,
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
                      "name": "self",
                      "scope": 5246,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5203,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5204,
                        "name": "UserDefinedTypeName",
                        "src": "844:11:13"
                      }
                    ],
                    "id": 5205,
                    "name": "VariableDeclaration",
                    "src": "844:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 5246,
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
                        "id": 5206,
                        "name": "ElementaryTypeName",
                        "src": "870:7:13"
                      }
                    ],
                    "id": 5207,
                    "name": "VariableDeclaration",
                    "src": "870:13:13"
                  }
                ],
                "id": 5208,
                "name": "ParameterList",
                "src": "843:41:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5209,
                "name": "ParameterList",
                "src": "906:0:13"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 5210,
                            "name": "Identifier",
                            "src": "916:7:13"
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
                                      "typeIdentifier": "t_struct$_Permissions_$5203_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5356,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 5211,
                                "name": "Identifier",
                                "src": "924:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5205,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5212,
                                "name": "Identifier",
                                "src": "940:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5207,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5213,
                                "name": "Identifier",
                                "src": "946:5:13"
                              }
                            ],
                            "id": 5214,
                            "name": "FunctionCall",
                            "src": "924:28:13"
                          }
                        ],
                        "id": 5215,
                        "name": "FunctionCall",
                        "src": "916:37:13"
                      }
                    ],
                    "id": 5216,
                    "name": "ExpressionStatement",
                    "src": "916:37:13"
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
                                  "member_name": "authorized",
                                  "referencedDeclaration": 5195,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5205,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5217,
                                    "name": "Identifier",
                                    "src": "964:4:13"
                                  }
                                ],
                                "id": 5220,
                                "name": "MemberAccess",
                                "src": "964:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5207,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5219,
                                "name": "Identifier",
                                "src": "980:5:13"
                              }
                            ],
                            "id": 5221,
                            "name": "IndexAccess",
                            "src": "964:22:13"
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
                            "id": 5222,
                            "name": "Literal",
                            "src": "989:4:13"
                          }
                        ],
                        "id": 5223,
                        "name": "Assignment",
                        "src": "964:29:13"
                      }
                    ],
                    "id": 5224,
                    "name": "ExpressionStatement",
                    "src": "964:29:13"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (address) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5202,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5205,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5225,
                                    "name": "Identifier",
                                    "src": "1003:4:13"
                                  }
                                ],
                                "id": 5228,
                                "name": "MemberAccess",
                                "src": "1003:21:13"
                              }
                            ],
                            "id": 5229,
                            "name": "MemberAccess",
                            "src": "1003:26:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5207,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5230,
                            "name": "Identifier",
                            "src": "1030:5:13"
                          }
                        ],
                        "id": 5231,
                        "name": "FunctionCall",
                        "src": "1003:33:13"
                      }
                    ],
                    "id": 5232,
                    "name": "ExpressionStatement",
                    "src": "1003:33:13"
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
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 5199,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5205,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5233,
                                    "name": "Identifier",
                                    "src": "1046:4:13"
                                  }
                                ],
                                "id": 5236,
                                "name": "MemberAccess",
                                "src": "1046:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5207,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5235,
                                "name": "Identifier",
                                "src": "1064:5:13"
                              }
                            ],
                            "id": 5237,
                            "name": "IndexAccess",
                            "src": "1046:24:13"
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
                              "operator": "-",
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
                                      "member_name": "authorizedAgents",
                                      "referencedDeclaration": 5202,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5205,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 5238,
                                        "name": "Identifier",
                                        "src": "1073:4:13"
                                      }
                                    ],
                                    "id": 5239,
                                    "name": "MemberAccess",
                                    "src": "1073:21:13"
                                  }
                                ],
                                "id": 5240,
                                "name": "MemberAccess",
                                "src": "1073:28:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 5241,
                                "name": "Literal",
                                "src": "1104:1:13"
                              }
                            ],
                            "id": 5242,
                            "name": "BinaryOperation",
                            "src": "1073:32:13"
                          }
                        ],
                        "id": 5243,
                        "name": "Assignment",
                        "src": "1046:59:13"
                      }
                    ],
                    "id": 5244,
                    "name": "ExpressionStatement",
                    "src": "1046:59:13"
                  }
                ],
                "id": 5245,
                "name": "Block",
                "src": "906:206:13"
              }
            ],
            "id": 5246,
            "name": "FunctionDefinition",
            "src": "825:287:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeAuthorization",
              "payable": false,
              "scope": 5369,
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
                      "name": "self",
                      "scope": 5325,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5203,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5247,
                        "name": "UserDefinedTypeName",
                        "src": "1147:11:13"
                      }
                    ],
                    "id": 5248,
                    "name": "VariableDeclaration",
                    "src": "1147:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 5325,
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
                        "id": 5249,
                        "name": "ElementaryTypeName",
                        "src": "1173:7:13"
                      }
                    ],
                    "id": 5250,
                    "name": "VariableDeclaration",
                    "src": "1173:13:13"
                  }
                ],
                "id": 5251,
                "name": "ParameterList",
                "src": "1146:41:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5252,
                "name": "ParameterList",
                "src": "1209:0:13"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 5253,
                            "name": "Identifier",
                            "src": "1388:7:13"
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
                                      "typeIdentifier": "t_struct$_Permissions_$5203_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5340,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 5254,
                                "name": "Identifier",
                                "src": "1396:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5248,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5255,
                                "name": "Identifier",
                                "src": "1409:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5250,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5256,
                                "name": "Identifier",
                                "src": "1415:5:13"
                              }
                            ],
                            "id": 5257,
                            "name": "FunctionCall",
                            "src": "1396:25:13"
                          }
                        ],
                        "id": 5258,
                        "name": "FunctionCall",
                        "src": "1388:34:13"
                      }
                    ],
                    "id": 5259,
                    "name": "ExpressionStatement",
                    "src": "1388:34:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5261
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 5325,
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
                            "id": 5260,
                            "name": "ElementaryTypeName",
                            "src": "1433:4:13"
                          }
                        ],
                        "id": 5261,
                        "name": "VariableDeclaration",
                        "src": "1433:25:13"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
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
                              "member_name": "agentToIndex",
                              "referencedDeclaration": 5199,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5248,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5262,
                                "name": "Identifier",
                                "src": "1461:4:13"
                              }
                            ],
                            "id": 5263,
                            "name": "MemberAccess",
                            "src": "1461:17:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5250,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5264,
                            "name": "Identifier",
                            "src": "1479:5:13"
                          }
                        ],
                        "id": 5265,
                        "name": "IndexAccess",
                        "src": "1461:24:13"
                      }
                    ],
                    "id": 5266,
                    "name": "VariableDeclarationStatement",
                    "src": "1433:52:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5268
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 5325,
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
                            "id": 5267,
                            "name": "ElementaryTypeName",
                            "src": "1495:4:13"
                          }
                        ],
                        "id": 5268,
                        "name": "VariableDeclaration",
                        "src": "1495:23:13"
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
                          "operator": "-",
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
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5202,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5269,
                                    "name": "Identifier",
                                    "src": "1521:4:13"
                                  }
                                ],
                                "id": 5270,
                                "name": "MemberAccess",
                                "src": "1521:21:13"
                              }
                            ],
                            "id": 5271,
                            "name": "MemberAccess",
                            "src": "1521:28:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 5272,
                            "name": "Literal",
                            "src": "1552:1:13"
                          }
                        ],
                        "id": 5273,
                        "name": "BinaryOperation",
                        "src": "1521:32:13"
                      }
                    ],
                    "id": 5274,
                    "name": "VariableDeclarationStatement",
                    "src": "1495:58:13"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5276
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 5325,
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
                            "id": 5275,
                            "name": "ElementaryTypeName",
                            "src": "1563:7:13"
                          }
                        ],
                        "id": 5276,
                        "name": "VariableDeclaration",
                        "src": "1563:19:13"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorizedAgents",
                              "referencedDeclaration": 5202,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5248,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5277,
                                "name": "Identifier",
                                "src": "1585:4:13"
                              }
                            ],
                            "id": 5278,
                            "name": "MemberAccess",
                            "src": "1585:21:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5268,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 5279,
                            "name": "Identifier",
                            "src": "1607:18:13"
                          }
                        ],
                        "id": 5280,
                        "name": "IndexAccess",
                        "src": "1585:41:13"
                      }
                    ],
                    "id": 5281,
                    "name": "VariableDeclarationStatement",
                    "src": "1563:63:13"
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
                                  "member_name": "authorized",
                                  "referencedDeclaration": 5195,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5282,
                                    "name": "Identifier",
                                    "src": "1689:4:13"
                                  }
                                ],
                                "id": 5283,
                                "name": "MemberAccess",
                                "src": "1689:15:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5250,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5284,
                                "name": "Identifier",
                                "src": "1705:5:13"
                              }
                            ],
                            "id": 5285,
                            "name": "IndexAccess",
                            "src": "1689:22:13"
                          }
                        ],
                        "id": 5286,
                        "name": "UnaryOperation",
                        "src": "1682:29:13"
                      }
                    ],
                    "id": 5287,
                    "name": "ExpressionStatement",
                    "src": "1682:29:13"
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
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5202,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5288,
                                    "name": "Identifier",
                                    "src": "1792:4:13"
                                  }
                                ],
                                "id": 5291,
                                "name": "MemberAccess",
                                "src": "1792:21:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5261,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 5290,
                                "name": "Identifier",
                                "src": "1814:20:13"
                              }
                            ],
                            "id": 5292,
                            "name": "IndexAccess",
                            "src": "1792:43:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5276,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 5293,
                            "name": "Identifier",
                            "src": "1838:11:13"
                          }
                        ],
                        "id": 5294,
                        "name": "Assignment",
                        "src": "1792:57:13"
                      }
                    ],
                    "id": 5295,
                    "name": "ExpressionStatement",
                    "src": "1792:57:13"
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
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 5199,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5296,
                                    "name": "Identifier",
                                    "src": "1920:4:13"
                                  }
                                ],
                                "id": 5299,
                                "name": "MemberAccess",
                                "src": "1920:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5276,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 5298,
                                "name": "Identifier",
                                "src": "1938:11:13"
                              }
                            ],
                            "id": 5300,
                            "name": "IndexAccess",
                            "src": "1920:30:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5261,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 5301,
                            "name": "Identifier",
                            "src": "1953:20:13"
                          }
                        ],
                        "id": 5302,
                        "name": "Assignment",
                        "src": "1920:53:13"
                      }
                    ],
                    "id": 5303,
                    "name": "ExpressionStatement",
                    "src": "1920:53:13"
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
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 5199,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5304,
                                    "name": "Identifier",
                                    "src": "1990:4:13"
                                  }
                                ],
                                "id": 5305,
                                "name": "MemberAccess",
                                "src": "1990:17:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5250,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5306,
                                "name": "Identifier",
                                "src": "2008:5:13"
                              }
                            ],
                            "id": 5307,
                            "name": "IndexAccess",
                            "src": "1990:24:13"
                          }
                        ],
                        "id": 5308,
                        "name": "UnaryOperation",
                        "src": "1983:31:13"
                      }
                    ],
                    "id": 5309,
                    "name": "ExpressionStatement",
                    "src": "1983:31:13"
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
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5202,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5310,
                                    "name": "Identifier",
                                    "src": "2088:4:13"
                                  }
                                ],
                                "id": 5311,
                                "name": "MemberAccess",
                                "src": "2088:21:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5268,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 5312,
                                "name": "Identifier",
                                "src": "2110:18:13"
                              }
                            ],
                            "id": 5313,
                            "name": "IndexAccess",
                            "src": "2088:41:13"
                          }
                        ],
                        "id": 5314,
                        "name": "UnaryOperation",
                        "src": "2081:48:13"
                      }
                    ],
                    "id": 5315,
                    "name": "ExpressionStatement",
                    "src": "2081:48:13"
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
                          "operator": "-=",
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
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 5202,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 5316,
                                    "name": "Identifier",
                                    "src": "2139:4:13"
                                  }
                                ],
                                "id": 5319,
                                "name": "MemberAccess",
                                "src": "2139:21:13"
                              }
                            ],
                            "id": 5320,
                            "name": "MemberAccess",
                            "src": "2139:28:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1",
                              "value": "1"
                            },
                            "id": 5321,
                            "name": "Literal",
                            "src": "2171:1:13"
                          }
                        ],
                        "id": 5322,
                        "name": "Assignment",
                        "src": "2139:33:13"
                      }
                    ],
                    "id": 5323,
                    "name": "ExpressionStatement",
                    "src": "2139:33:13"
                  }
                ],
                "id": 5324,
                "name": "Block",
                "src": "1209:970:13"
              }
            ],
            "id": 5325,
            "name": "FunctionDefinition",
            "src": "1118:1061:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorized",
              "payable": false,
              "scope": 5369,
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
                      "name": "self",
                      "scope": 5340,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5203,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5326,
                        "name": "UserDefinedTypeName",
                        "src": "2207:11:13"
                      }
                    ],
                    "id": 5327,
                    "name": "VariableDeclaration",
                    "src": "2207:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 5340,
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
                        "id": 5328,
                        "name": "ElementaryTypeName",
                        "src": "2233:7:13"
                      }
                    ],
                    "id": 5329,
                    "name": "VariableDeclaration",
                    "src": "2233:13:13"
                  }
                ],
                "id": 5330,
                "name": "ParameterList",
                "src": "2206:41:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5340,
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
                        "id": 5331,
                        "name": "ElementaryTypeName",
                        "src": "2295:4:13"
                      }
                    ],
                    "id": 5332,
                    "name": "VariableDeclaration",
                    "src": "2295:4:13"
                  }
                ],
                "id": 5333,
                "name": "ParameterList",
                "src": "2294:6:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5333
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
                              "member_name": "authorized",
                              "referencedDeclaration": 5195,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5327,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5334,
                                "name": "Identifier",
                                "src": "2322:4:13"
                              }
                            ],
                            "id": 5335,
                            "name": "MemberAccess",
                            "src": "2322:15:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5329,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 5336,
                            "name": "Identifier",
                            "src": "2338:5:13"
                          }
                        ],
                        "id": 5337,
                        "name": "IndexAccess",
                        "src": "2322:22:13"
                      }
                    ],
                    "id": 5338,
                    "name": "Return",
                    "src": "2315:29:13"
                  }
                ],
                "id": 5339,
                "name": "Block",
                "src": "2305:46:13"
              }
            ],
            "id": 5340,
            "name": "FunctionDefinition",
            "src": "2185:166:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isNotAuthorized",
              "payable": false,
              "scope": 5369,
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
                      "name": "self",
                      "scope": 5356,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5203,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5341,
                        "name": "UserDefinedTypeName",
                        "src": "2382:11:13"
                      }
                    ],
                    "id": 5342,
                    "name": "VariableDeclaration",
                    "src": "2382:24:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 5356,
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
                        "id": 5343,
                        "name": "ElementaryTypeName",
                        "src": "2408:7:13"
                      }
                    ],
                    "id": 5344,
                    "name": "VariableDeclaration",
                    "src": "2408:13:13"
                  }
                ],
                "id": 5345,
                "name": "ParameterList",
                "src": "2381:41:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5356,
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
                        "id": 5346,
                        "name": "ElementaryTypeName",
                        "src": "2470:4:13"
                      }
                    ],
                    "id": 5347,
                    "name": "VariableDeclaration",
                    "src": "2470:4:13"
                  }
                ],
                "id": 5348,
                "name": "ParameterList",
                "src": "2469:6:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5348
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
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
                                      "typeIdentifier": "t_struct$_Permissions_$5203_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5340,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 5349,
                                "name": "Identifier",
                                "src": "2498:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5342,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 5350,
                                "name": "Identifier",
                                "src": "2511:4:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5344,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 5351,
                                "name": "Identifier",
                                "src": "2517:5:13"
                              }
                            ],
                            "id": 5352,
                            "name": "FunctionCall",
                            "src": "2498:25:13"
                          }
                        ],
                        "id": 5353,
                        "name": "UnaryOperation",
                        "src": "2497:26:13"
                      }
                    ],
                    "id": 5354,
                    "name": "Return",
                    "src": "2490:33:13"
                  }
                ],
                "id": 5355,
                "name": "Block",
                "src": "2480:50:13"
              }
            ],
            "id": 5356,
            "name": "FunctionDefinition",
            "src": "2357:173:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedAgents",
              "payable": false,
              "scope": 5369,
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
                      "name": "self",
                      "scope": 5368,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 5203,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 5357,
                        "name": "UserDefinedTypeName",
                        "src": "2565:11:13"
                      }
                    ],
                    "id": 5358,
                    "name": "VariableDeclaration",
                    "src": "2565:24:13"
                  }
                ],
                "id": 5359,
                "name": "ParameterList",
                "src": "2564:26:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5368,
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
                            "id": 5360,
                            "name": "ElementaryTypeName",
                            "src": "2638:7:13"
                          }
                        ],
                        "id": 5361,
                        "name": "ArrayTypeName",
                        "src": "2638:9:13"
                      }
                    ],
                    "id": 5362,
                    "name": "VariableDeclaration",
                    "src": "2638:9:13"
                  }
                ],
                "id": 5363,
                "name": "ParameterList",
                "src": "2637:11:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5363
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "authorizedAgents",
                          "referencedDeclaration": 5202,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5358,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 5364,
                            "name": "Identifier",
                            "src": "2670:4:13"
                          }
                        ],
                        "id": 5365,
                        "name": "MemberAccess",
                        "src": "2670:21:13"
                      }
                    ],
                    "id": 5366,
                    "name": "Return",
                    "src": "2663:28:13"
                  }
                ],
                "id": 5367,
                "name": "Block",
                "src": "2653:45:13"
              }
            ],
            "id": 5368,
            "name": "FunctionDefinition",
            "src": "2536:162:13"
          }
        ],
        "id": 5369,
        "name": "ContractDefinition",
        "src": "610:2090:13"
      }
    ],
    "id": 5370,
    "name": "SourceUnit",
    "src": "584:2117:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xbf37a603566fb5b978771702a7754463d81bcad0"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc13d026d7e4e6c2864240aa1f26bb436c6271338"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:08:49.582Z"
}