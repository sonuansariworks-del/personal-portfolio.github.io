   function showSuccess() {
        setTimeout(function () {
          document.getElementById("success-message").style.display = "block";
          document.querySelector("form").reset();
        }, 500);
      }