const userType = document.getElementById("userType");
const studentContent = document.getElementById("studentContent");
const otherContent = document.getElementById("otherContent");

// Load saved user type if available
const savedType = localStorage.getItem("user_type");
if (savedType) {
  userType.value = savedType;
  updateView(savedType);
}

// When user changes selection
userType.addEventListener("change", () => {
  const selected = userType.value;
  localStorage.setItem("user_type", selected);  // remember selection
  updateView(selected);
});

// Show student content if student is selected
function updateView(type) {
  if (type === "student") {
    studentContent.style.display = "block";
    otherContent.style.display = "none";
  } else {
    studentContent.style.display = "none";
    otherContent.style.display = "block";
  }
}
