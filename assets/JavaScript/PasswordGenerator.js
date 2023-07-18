const keys = {
    lowerCase: "qwertyuiopasdfghjklzxcvbnm",
    upperCase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    number: "1234567890",
    symbol: "`~!@#$%^&*()_+-={}|[]\:<>?,./",
}

const getKey = [
    function lowerCase() {
  return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
];
  
function createPassword() {
    const lower = document.getElementById("lowerCase").checked;
    const upper = document.getElementById("upperCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
        alert("Check at least one box");
        return;
      }
      const passwordBox = document.getElementById("passwordBox");
      const length = document.getElementById("length");
      let password = "";
      while (length.value > password.length) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;
        if (isChecked) {
          password += keyToAdd();
        }
      }
      passwordBox.innerHTML = password;
}