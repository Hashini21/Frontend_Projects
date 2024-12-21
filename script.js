$(document).ready(function () {
  // Regex patterns
  const nameRegex = /^[A-Za-z\s]{1,100}$/; // Letters and spaces, min 1, max 100
  const addressRegex = /^[A-Za-z0-9\s,.-]{2,400}$/; // Letters, numbers, spaces, and punctuation, min 2, max 400
  const usernameRegex = /^[A-Za-z0-9_]+$/; // Alphanumeric and underscores
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Helper function to show error
  function showError(input, message) {
    const errorElement = $(input).next(".error-message");
    errorElement.text(message).show();
  }

  // Function to hide error
  function hideError(input) {
    const errorElement = $(input).next(".error-message");
    errorElement.hide();
  }

  // Validation on blur for each field
  $("#firstname, #lastname").on("blur", function () {
    const value = $(this).val().trim();
    if (!value) {
      showError(this, "Please fill this field.");
    } else if (!nameRegex.test(value)) {
      showError(this, "Must be 1-100 letters or spaces.");
    } else {
      hideError(this);
    }
  });

  $("#address").on("blur", function () {
    const value = $(this).val().trim();
    if (!value) {
      showError(this, "Please fill this field.");
    } else if (!addressRegex.test(value)) {
      showError(this, "Must be 2-400 valid characters (letters, numbers, punctuation).");
    } else {
      hideError(this);
    }
  });

  $("#username").on("blur", function () {
    const value = $(this).val().trim();
    if (!value) {
      showError(this, "Please fill this field.");
    } else if (!usernameRegex.test(value)) {
      showError(this, "Username can only contain letters, numbers, or underscores.");
    } else {
      hideError(this);
    }
  });

  $("#email").on("blur", function () {
    const value = $(this).val().trim();
    if (!value) {
      showError(this, "Please fill this field.");
    } else if (!emailRegex.test(value)) {
      showError(this, "Enter a valid email address.");
    } else {
      hideError(this);
    }
  });

  // Form submission
  $("#userForm").on("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate all fields
    let hasError = false;
    $("#firstname, #lastname, #address, #username, #email").each(function () {
      $(this).trigger("blur");
      if ($(this).next(".error-message").is(":visible")) {
        hasError = true;
      }
    });

    if (!hasError) {
      // Store data in localStorage for demonstration
      localStorage.setItem("firstname", $("#firstname").val().trim());
      localStorage.setItem("lastname", $("#lastname").val().trim());
      localStorage.setItem("address", $("#address").val().trim());
      localStorage.setItem("username", $("#username").val().trim());
      localStorage.setItem("email", $("#email").val().trim());

      // Redirect to the profile page
      window.location.href = "profile.html";
    }
  });
});
