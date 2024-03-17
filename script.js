document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fan-input").addEventListener("change", function () {
        // Sample POST request to /devices endpoint
        fetch("https://kodessphere-api.vercel.app/devices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                teamid: "ufiBTpc",
                device: "fan",
                value: document.getElementById("fan-input").value
                // You can add more data as required
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(alert("Data was successfully updated!"))
        .catch(error => console.error("Error:", error));
    });
    document.getElementById("bulb-input").addEventListener("click", function () {
// Sample POST request to /devices endpoint for controlling the bulb
fetch("https://kodessphere-api.vercel.app/devices", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        teamid: "ufiBTpc",
        device: "Bulb",
        value: document.getElementById("bulb-input").value
    })
})
.then(response => response.json())
.then(data => console.log(data))
.then(alert("Data was successfully updated!"))
.catch(error => console.error("Error:", error));
});
document.getElementById('fan-input').addEventListener('change', function(){
fetch("https://kodessphere-api.vercel.app/devices", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        teamid: "ufiBTpc",
        device: "fan",
        value: document.getElementById('fan-input').value
    })
})
.then(response => response.json())
.then(data => console.log(data))
.then(alert("Data was successfully updated!"))
.catch(error => console.error("Error:", error));

})

document.getElementById("bulb-input").addEventListener('change', function(){
fetch("https://kodessphere-api.vercel.app/devices", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        teamid: "ufiBTpc",
        device: "bulb",
        value: document.getElementById('bulb-input').value
    })
}).then((res) => {
    console.log(res);
    return res.json();
}).then((out) => {
    console.log(out);
})
})

document.getElementById("led-input").addEventListener("change", function () {
// Sample POST request to /devices endpoint for controlling the bulb
fetch("https://kodessphere-api.vercel.app/devices", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        teamid: "ufiBTpc",
        device: "Led",
        value: document.getElementById('led-input').value
    })
})
.then(response => response.json())
.then(data => console.log(data))
.then(alert("Data was successfully updated!"))
.catch(error => console.error("Error:", error));
});

document.getElementById("ac-input").addEventListener("change", function () {
    fetch("https://kodessphere-api.vercel.app/devices", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            teamid: "ufiBTpc",
            device: "ac",
            value: {"temp": document.getElementById('temp').value, "state": document.getElementById('state').value}
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
    alert("Data was updated")
    });




//GET REQUEST...ARGHHH
function fetchDeviceDetails(teamId) {
fetch(`https://kodessphere-api.vercel.app/devices/${teamId}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data => {
    console.log("Device details:", data);
})
.catch(error => console.error("Error:", error));
}

const teamId = "ufiBTpc";

fetchDeviceDetails(teamId);

document.getElementById("fetch-device-details-button").addEventListener("click", function () {
fetchDeviceDetails(teamId);
});


});
// function presentDeviceDetails(deviceDetails) {
//         // Example: Presenting device details in a table
//         const deviceDetailsContainer = document.getElementById("device-details-container");
//         deviceDetailsContainer.innerHTML = `
//             <h2>Device Details</h2>
//             <table class="table">
//                 <thead>
//                     <tr>
//                         <th>Device</th>
//                         <th>Value</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Fan</td>
//                         <td>${deviceDetails.fan}</td>
//                     </tr>
//                     <tr>
//                         <td>Bulb</td>
//                         <td>${deviceDetails.bulb}</td>
//                     </tr>

//                 </tbody>
//             </table>
//         `;
//     }