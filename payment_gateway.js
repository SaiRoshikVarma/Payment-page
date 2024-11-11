document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll("input[type=radio][name=unit]");
    const totalDisplay = document.querySelector(".total");
  
    radioButtons.forEach(radio => {
      radio.addEventListener("change", updateUI);
    });
  
    function updateUI() {
      updateTotal();
      updateSelections();
    }
  
    function updateTotal() {
      let total = 0;
      if (document.getElementById("oneUnit").checked) total = 10;
      else if (document.getElementById("twoUnit").checked) total = 18;
      else if (document.getElementById("threeUnit").checked) total = 24;
      totalDisplay.textContent = `Total: $${total}.00 USD`;
    }
  
    function updateSelections() {
      const selectedUnit = document.querySelector("input[type=radio][name=unit]:checked");
      document.querySelectorAll(".selection").forEach(sel => {
        sel.style.display = "none";
      });
      
      if (selectedUnit) {
        const selectedValue = selectedUnit.value;
        const selectionId = `selection${selectedValue}`;
        document.getElementById(selectionId).style.display = "block";
      }
    }
  
    updateTotal();
    updateSelections();
  });
  