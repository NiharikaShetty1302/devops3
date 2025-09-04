document.getElementById("ecetForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const phone = document.getElementById("phone").value;

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset(); // Optional: reset the form after submission
<<<<<<< HEAD
});//script.js//js2
=======
});
>>>>>>> 3b3a5b4f423340b27a26f2f22c0a030133ad19e9
