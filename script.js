function calculateEMI() {
    const P = parseFloat(document.getElementById("principal").value);
    const R = parseFloat(document.getElementById("interest").value);
    const N = parseInt(document.getElementById("tenure").value);
  
    if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
      document.getElementById("result").innerText = "Please enter valid inputs.";
      return;
    }
  
    const r = R / (12 * 100); // monthly interest rate
    const n = N * 12;         // tenure in months
  
    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    document.getElementById("result").innerText = `Your Monthly EMI is ₹${emi}`;
  }
  