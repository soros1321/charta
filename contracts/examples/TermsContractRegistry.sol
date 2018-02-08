pragma solidity 0.4.18;


contract TermsContractRegistry {
    mapping (bytes32 => address) public symbolToTermsContractAddress;

    function setSimpleInterestTermsContractAddress(string symbol, address termsContract) public {
        symbolToTermsContractAddress[keccak256(
            symbol,
            "SimpleInterestTermsContract"
        )] = termsContract;
    }

    function getSimpleInterestTermsContractAddress(string symbol) public view returns (address) {
        return symbolToTermsContractAddress[keccak256(
            symbol,
            "SimpleInterestTermsContract"
        )];
    }
}
