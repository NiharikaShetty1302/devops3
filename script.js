body {
  font-family: sans-serif;
  background: #eef;
  padding: 20px;
}
form {
  background: white;
  padding: 20px;
  max-width: 400px;
  border-radius: 5px;
  margin: auto;
}
label {
  display: block;
  margin-bottom: 10px;
}
input, select, textarea {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
}
button {
  margin-top: 10px;
  padding: 6px 12px;
}
body {
  font-family: sans-serif;
  background: #eef;
  padding: 20px;
}
form {
  background: white;
  padding: 20px;
  max-width: 400px;
  border-radius: 5px;
  margin: auto;
}
label {
  display: block;
  margin-bottom: 10px;
}
input, select, textarea {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
}
button {
  margin-top: 10px;
  padding: 6px 12px;
}

document.getElementById("ecetForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const phone = document.getElementById("phone").value;

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset(); // Optional: reset the form after submission
});