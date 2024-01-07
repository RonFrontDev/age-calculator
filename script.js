document.addEventListener('DOMContentLoaded', function () {
  // Function to calculate age and update the result
  function calculateAge() {
    // Get input values
    const day = parseInt(document.getElementById('day').value) || 0;
    const month = parseInt(document.getElementById('month').value) || 0;
    const year = parseInt(document.getElementById('year').value) || 0;

    // Validate inputs
    if (day <= 0 || month <= 0 || year <= 0) {
      alert('Please enter valid values for day, month, and year.');
      return;
    }

    // Calculate age
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);

    // Check if the birthdate is in the future
    if (currentDate < birthDate) {
      alert('Please enter a valid birthdate in the past.');
      return;
    }

    // Calculate age components
    let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();

    // Adjust age if birthday hasn't occurred this year yet
    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDate.getDate() < day)
    ) {
      ageInYears--;
    }

    const ageInMonths =
      (currentDate.getMonth() - birthDate.getMonth() + 12) % 12;
    const ageInDays = Math.floor(
      (currentDate - birthDate) / (24 * 60 * 60 * 1000)
    );

    // Update result in the HTML
    document.querySelector(
      '.age-calculator__result--number.years'
    ).textContent = ageInYears;
    document.querySelector(
      '.age-calculator__result--number.months'
    ).textContent = ageInMonths;
    document.querySelector('.age-calculator__result--number.days').textContent =
      ageInDays;
  }

  // Attach click event to the submit button
  document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    calculateAge();
  });
});
