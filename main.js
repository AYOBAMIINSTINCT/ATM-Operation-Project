// My Account Details
let accountDetails = {
  accountName: "Ayodeji Abolaji",
  pin: 1234,
  accountBalance: 10000,
};

// Alert Message
alert(`Welcome to FRED ATM Service,
    Kindly click 'OK' to continue.`);

// My account name and pin prompt
let accountName = prompt("Enter your name:");
let accountPin = +prompt("Enter your PIN:");

// To Verify the name and PIN entered
if (
  accountName !== accountDetails.accountName ||
  accountPin !== accountDetails.pin
) {
  alert("Invalid Name or PIN.");
} else {
  // Prompt for operation
  let accountOperation = prompt(
    `Choose an operation:
        1. Savings
        2. Current`
  );

  // Account Operations
  if (accountOperation === "1" || accountOperation === "2") {
    let subOperation = prompt(`Select an Operation:
        1. Withdrawal
        2. Account Balance
        3. Transfer
        4. Quick Teller
        5. Quit`);

    // Sub-Operations
    if (subOperation === "1") {
      // Withdrawal operation
      let withdrawalAmount = +prompt("Enter your withdrawal amount:");
      if (
        withdrawalAmount > 0 &&
        withdrawalAmount <= accountDetails.accountBalance
      ) {
        accountDetails.accountBalance -= withdrawalAmount;
        alert(
          `Withdrawal successful! Remaining balance: $${accountDetails.accountBalance}`
        );
      } else {
        alert("Invalid withdrawal amount or insufficient balance.");
      }
    } else if (subOperation === "2") {
      // Account Balance operation
      alert(`Your current balance: $${accountDetails.accountBalance}`);
    } else if (subOperation === "3") {
      // Bank Transfer
      let transferAmount = +prompt("Enter the transfer amount:");
      if (
        transferAmount > 0 &&
        transferAmount <= accountDetails.accountBalance
      ) {
        let recipientAccount = prompt("Enter recipient's account number:");

        //Recipient Details object
        let recipientDetails = {
          accountName: "Alfred",
          accountNumber: "123456789",
        };

        if (recipientAccount === recipientDetails.accountNumber) {
          // My transfer
          accountDetails.accountBalance -= transferAmount;
          alert(
            `Transfer successful! Updated balance: $${accountDetails.accountBalance}`
          );
        } else {
          alert("Recipient account not found.");
        }
      } else {
        alert("Invalid transfer amount or insufficient balance.");
      }
    } else if (subOperation === "4") {
      // Quick Teller operation
      let quickTellerOption = prompt(`Select a Quick Teller option:
          1. Buy Recharge Card
          2. Pay for Cable Bills`);

      if (quickTellerOption === "1") {
        // Recharge Mobile Credit
        let mobileNumber = prompt("Enter the mobile number:");
        let rechargeAmount = +prompt("Enter the recharge amount:");

        if (
          rechargeAmount > 0 &&
          rechargeAmount <= accountDetails.accountBalance
        ) {
          // recharge card
          accountDetails.accountBalance -= rechargeAmount;
          alert(
            `Recharge successful! Remaining balance: $${accountDetails.accountBalance}`
          );
        } else {
          alert("Invalid recharge amount or insufficient balance.");
        }
      } else if (quickTellerOption === "2") {
        // Pay for Cable Services
        let cableProvider = prompt("Enter the cable provider:");
        let subscriptionAmount = +prompt("Enter the subscription amount:");

        if (
          subscriptionAmount > 0 &&
          subscriptionAmount <= accountDetails.accountBalance
        ) {
          // subscription
          accountDetails.accountBalance -= subscriptionAmount;
          alert(
            `Payment for ${cableProvider} successful! Remaining balance: $${accountDetails.accountBalance}`
          );
        } else {
          alert("Invalid subscription amount or insufficient balance.");
        }
      } else {
        alert("Invalid Quick Teller option.");
      }
    } else if (subOperation === "5") {
      // Quit
      alert("Thank you for using FRED ATM Service. Have a great day!");
    } else {
      alert("Invalid sub-operation.");
    }
  } else {
    alert("You did not choose the right operation.");
  }
}
