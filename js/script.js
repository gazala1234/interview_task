function toggleOptions(option) {
    const allOptions = document.querySelectorAll('.bundle-options');
    const selectedOptions = document.getElementById(`options${option}`);
  
    // Hide all other options
    allOptions.forEach(options => options.style.display = 'none');
  
    // Show or hide the selected options
    if (selectedOptions.style.display === 'block') {
      selectedOptions.style.display = 'none';
    } else {
      selectedOptions.style.display = 'block';
    }
}
  