function calculateAge() {
    const dobInp = document.getElementById('dob').value;
    if (!dobInp) {
      alert("Please select your date of birth.");
      return;
    }
  
    const dob = new Date(dobInp);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
  
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
   
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    document.getElementById('result').textContent = `You are ${age} years old.`;
  }
  