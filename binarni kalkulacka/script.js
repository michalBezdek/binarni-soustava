function binaryToDecimal(binary) {
          let decimal = 0;
          let power = binary.length - 1;
          for (let digit of binary) {
              decimal += parseInt(digit) * Math.pow(2, power);
              power--;
          }
          return decimal;
      }
      
      function decimalToBinary(decimal) {
          let binary = '';
          while (decimal > 0) {
              binary = (decimal % 2) + binary;
              decimal = Math.floor(decimal / 2);
          }
          return binary;
      }
      
      function convertBinaryToDecimal() {
          const binaryInput = document.getElementById("binaryInput").value;
          const decimalOutput = document.getElementById("decimalOutput");
          const decimalNumber = binaryToDecimal(binaryInput);
          decimalOutput.textContent = "Desítkové číslo: " + decimalNumber;
      }
      
      function convertDecimalToBinary() {
          const decimalInput = parseInt(document.getElementById("decimalInput").value);
          const binaryOutput = document.getElementById("binaryOutput");
          const binaryNumber = decimalToBinary(decimalInput);
          binaryOutput.textContent = "Binární číslo: " + binaryNumber;
      }
      