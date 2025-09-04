document.getElementById("ecetForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const phone = document.getElementById("phone").value;

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset(); 
});
