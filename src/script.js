document.getElementById('create-job').addEventListener('click', function() {
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        jobType: document.getElementById('job-type').value,
        jobSource: document.getElementById('job-source').value,
        jobDescription: document.getElementById('job-description').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zip-code').value,
        area: document.getElementById('area').value,
        startDate: document.getElementById('start-date').value,
        startTime: document.getElementById('start-time').value,
        endTime: document.getElementById('end-time').value,
        testSelect: document.getElementById('test-select').value
    };

    fetch('https://api.pipedrive.com/v1/activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Job created successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to create job.');
    });
});

document.getElementById('save-info').addEventListener('click', function() {
    // Functionality for saving info locally or other actions
    alert('Info saved locally!');
});