
//exercises:1

function outerFunction() {
    var outerVariable = 'I am an outer variable';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Creating an instance of the closure
  var myClosure = outerFunction();
  
  // Invoking the inner function
  myClosure(); // Output: "I am an outer variable"


  //exercises:2

  function outFunction() {
    var outVariable = 'It is an outer variable';
  
    function innerFunction1() {
      console.log('Inner Function 1:', outVariable);
    }
  
    function innerFunction2() {
      console.log('Inner Function 2:', outVariable);
    }
  
    function innerFunction3() {
      console.log('Inner Function 3:', outVariable);
    }
  
    return {
      inner1: innerFunction1,
      inner2: innerFunction2,
      inner3: innerFunction3
    };
  }
  
  // Creating an instance of the closure
  var myClosure = outFunction();
  
  // Invoking the inner functions
  myClosure.inner1(); // Output: "Inner Function 1: I am an outer variable"
  myClosure.inner2(); // Output: "Inner Function 2: I am an outer variable"
  myClosure.inner3(); // Output: "Inner Function 3: I am an outer variable"
  

  //exercise:3
  function createPersonAccount(firstName, lastName) {
    const incomes = new Map();
    const expenses = new Map();
  
    function addIncome(description, amount) {
      incomes.set(description, amount);
    }
  
    function addExpense(description, amount) {
      expenses.set(description, amount);
    }
  
    function calculateTotal(map) {
      let total = 0;
      for (let amount of map.values()) {
        total += amount;
      }
      return total;
    }
  
    function totalIncome() {
      return calculateTotal(incomes);
    }
  
    function totalExpense() {
      return calculateTotal(expenses);
    }
  
    function accountInfo() {
      const incomeList = [...incomes.entries()]
        .map(([description, amount]) => `${description}: $${amount}`)
        .join('\n');
      const expenseList = [...expenses.entries()]
        .map(([description, amount]) => `${description}: $${amount}`)
        .join('\n');
  
      const info = `
        Account Information for ${firstName} ${lastName}:
        ---------------------------------------------
        Incomes:
        ${incomeList}
  
        Expenses:
        ${expenseList}
  
        Total Income: $${totalIncome()}
        Total Expenses: $${totalExpense()}
        Account Balance: $${accountBalance()}
      `;
      return info;
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      addIncome,
      addExpense,
      totalIncome,
      totalExpense,
      accountInfo,
      accountBalance
    };
  }
  
  // Usage example:
  const myAccount = createPersonAccount('John', 'Doe');
  
  myAccount.addIncome('Salary', 3000);
  myAccount.addIncome('Bonus', 500);
  
  myAccount.addExpense('Rent', 1000);
  myAccount.addExpense('Groceries', 200);
  myAccount.addExpense('Utilities', 150);
  
  console.log(myAccount.accountInfo());
  
  