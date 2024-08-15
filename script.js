document.getElementById('create-job').addEventListener('click', function() {
    const formData = {
        "title": "dealtest",
        "b7e0f97d82114e3cc9ac478c389d851fc9c42fc5": document.getElementById('first-name').value,
        "281da790a7f201b172295a39485a73b28e2442d8": document.getElementById('last-name').value,
        "0b6de990369efa3b4b01b1299b539f0aa62aafbc": document.getElementById('phone').value,
        "09173afb57472a6fa0ce2fe22cc345e82d989a46": document.getElementById('email').value,
        "98022b6bfadcfa07776368251a45bf7f319e2cd7": document.getElementById('job-type').value,
        "3c8e2e9554592e9cf53a159ac3ae32312b0a7790": document.getElementById('job-source').value,
        "1d37aa30acdab57d9849d01a30b4701366b062bc": document.getElementById('job-description').value,
        "e87fc817565c73075d235dafb6ecc4e013877bd3": document.getElementById('address').value,
        "99f5496c69cddfb1c576e09fee6e08de0319da3c": document.getElementById('city').value,
        "c2ec20f703e3e69354cd86e5df7f888132b0c221": document.getElementById('state').value,
        "126f1d2509f991c522b64cfd88b9a889019e95c9": document.getElementById('zip-code').value,
        "126f1d2509f991c522b64cfd88b9a889019e95c9": document.getElementById('area').value,
        "d2da51ad02501fac19b5d23f442ecbdf94de5046": document.getElementById('start-date').value,
        "9919c72a53be9529d482ab71e14cd0b10f6d0858": document.getElementById('start-time').value,
        "9919c72a53be9529d482ab71e14cd0b10f6d0858": document.getElementById('end-time').value,
        "89f9c541a79dd12f0a6d2a604abc794786e42bf2": document.getElementById('test-select').value
    };

    const apiToken = '6b22188182dcb57bb62abfe354ffca192727c3a0';
    
    fetch(`https://api.pipedrive.com/v1/deals?api_token=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const dealId = data.data.id;
            const updatedTitle = `JOB#${dealId}`;

            return fetch(`https://api.pipedrive.com/v1/deals/${dealId}?api_token=${apiToken}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "title": updatedTitle })
            });
        } else {
            throw new Error('Failed to create deal: ' + data.error);
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Job is created');
            window.location.href = `https://rosti-sandbox.pipedrive.com/deal/${dealId}`;
        } else {
            alert('Failed to update deal title: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to create or update deal.');
    });
});

document.getElementById('save-info').addEventListener('click', function() {
    alert('Info saved locally!');
});