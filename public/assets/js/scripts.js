(() => {
  "use strict";

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  jQuery(function () {
    jQuery("form").submit(function (event) {
      event.preventDefault();
      return false;
    });
  });
  $(".sev_check").click(function (e) {
    $(".sev_check").not(this).prop("checked", false);
  });
  $(document).ready(function () {
    $(".image-link").magnificPopup({ type: "image" });
  });
  $(".datepicker").datepicker();
})();

function togglePassword() {
  var confirm_password = document.getElementById("confirm_password");
  var toggle_icon = document.getElementById("toggle-icon");
  if (confirm_password.type === "password") {
    confirm_password.type = "text";
    toggle_icon.innerHTML = '<i class="fas fa-eye"></i>';
  } else {
    confirm_password.type = "password";
    toggle_icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
  }
}

function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");
  var mainContent = document.querySelector(".main-content");
  var menuIcon = document.querySelector(".menu-icon");

  sidebar.classList.add("active");
  mainContent.classList.add("active");
  menuIcon.classList.add("active");
}

function closeSidebar() {
  var sidebar = document.querySelector(".sidebar");
  var mainContent = document.querySelector(".main-content");

  sidebar.classList.remove("active");
  mainContent.classList.remove("active");
}

function openPopup() {
  var popup = document.getElementById("manage-users-panel");
  // popup.style.opacity = "1";
  popup.classList.add("active");
}

function closePopup() {
  var popup = document.getElementById("manage-users-panel");
  // popup.style.opacity = "0";
  popup.classList.remove("active");
}

function selectAllCheckboxes() {
  var checkboxes = document.getElementsByClassName("checkbox");
  var selectAllCheckbox = document.getElementById("allCheckbox");

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = selectAllCheckbox.checked;
  }
}
