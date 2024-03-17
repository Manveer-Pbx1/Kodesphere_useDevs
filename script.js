const bulb = document.getElementById('bulb');
const fan = document.getElementById('fan');
const led = document.getElementById('led');
const ac = document.getElementById('ac');
const deviceContent =  document.getElementById('deviceContent');
bulb.addEventListener('click', () => { 
bulb.style.border = '1px solid rgb(229,229,299)';
bulb.style.backgroundColor = 'white';
fan.style.border = '0px';
fan.style.backgroundColor = 'transparent';
led.style.backgroundColor = '';
led.style.border = 'none';
ac.style.backgroundColor = 'none';
ac.style.border = 'none';
deviceContent.innerHTML = `
<table
id = "deviceContent"
class="mt-4 w-full"><thead class="text-left"><tr><th
        class="font-semibold text-neutral-600 px-5 py-4 text-sm">Parameters</th><th
        class="font-semibold text-neutral-600 px-5 py-4 text-sm">Type</th><th
        class="font-semibold text-neutral-600 px-5 py-4 text-sm">Value</th><th
        class="font-semibold text-neutral-600 px-5 py-4 text-sm">Description</th></tr></thead><tbody
class="text-left"><tr><td
        class="font-normal px-5 py-3 text-sm">teamid</td><td
        class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
        class="font-normal px-5 py-3 text-sm">Your teams
        unique id</td></tr><tr><td
        class="font-normal px-5 py-3 text-sm">device</td><td
        class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
        class="font-normal px-5 py-3 text-sm">bulb</td></tr><tr><td
        class="font-normal px-5 py-3 text-sm">value</td><td
        class="font-normal px-5 py-3 text-sm text-green-600">Integer</td><td
        class="font-normal px-5 py-3 text-sm">0 -
        1</td><td
        class="font-normal px-5 py-3 text-sm">Turn the bulb on or off</td></tr></tbody></table>
    
`
});

fan.addEventListener('click', () => {
bulb.style.border = 'none';
bulb.style.backgroundColor = 'transparent';
fan.style.border = '1 px solid rgb(229,229,299)';
fan.style.backgroundColor = 'white';
led.style.backgroundColor = '';
led.style.border = 'none';
ac.style.backgroundColor = 'none';
ac.style.border = 'none';
    deviceContent.innerHTML = `
    <table
                        id = "deviceContent"
                    class="mt-4 w-full"><thead class="text-left"><tr><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Parameters</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Type</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Value</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Description</th></tr></thead><tbody
                        class="text-left"><tr><td
                                class="font-normal px-5 py-3 text-sm">teamid</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
                                class="font-normal px-5 py-3 text-sm">Your teams
                                unique id</td></tr><tr><td
                                class="font-normal px-5 py-3 text-sm">device</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
                                class="font-normal px-5 py-3 text-sm">fan</td></tr><tr><td
                                class="font-normal px-5 py-3 text-sm">value</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">Integer</td><td
                                class="font-normal px-5 py-3 text-sm">0 -
                                5</td><td
                                class="font-normal px-5 py-3 text-sm">Control
                                the speed of the
                                fan</td></tr></tbody></table>
    `
});
led.addEventListener('click', () => {
bulb.style.border = 'none';
bulb.style.backgroundColor = 'transparent';
fan.style.border = 'none';
fan.style.backgroundColor = 'transparent';
led.style.border = '1 px solid rgb(229,229,299)';
led.style.backgroundColor = 'white';
ac.style.backgroundColor = 'transparent';
ac.style.border = 'none';
    deviceContent.innerHTML = `
    <table
                        id = "deviceContent"
                    class="mt-4 w-full"><thead class="text-left"><tr><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Parameters</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Type</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Value</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Description</th></tr></thead><tbody
                        class="text-left"><tr><td
                                class="font-normal px-5 py-3 text-sm">teamid</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
                                class="font-normal px-5 py-3 text-sm">Your teams
                                unique id</td></tr><tr><td
                                class="font-normal px-5 py-3 text-sm">device</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
                                class="font-normal px-5 py-3 text-sm">led</td></tr><tr><td
                                class="font-normal px-5 py-3 text-sm">value</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
                                class="font-normal px-5 py-3 text-sm">#000000 - #ffffff</td><td
                                class="font-normal px-5 py-3 text-sm">Control
                                the brightness of the
                                led</td></tr></tbody></table>
    `
});
ac.addEventListener('click', () => {
    bulb.style.border = 'none';
    bulb.style.backgroundColor = 'transparent';
    fan.style.border = 'none';
    fan.style.backgroundColor = 'transparent';
    led.style.backgroundColor = 'transparent';
    led.style.border = 'none';
    ac.style.backgroundColor = 'white';
    ac.style.border = '1 px solid rgb(229,229,299)';
    deviceContent.innerHTML = `
    <table
                        id = "deviceContent"
                    class="mt-4 w-full"><thead class="text-left"><tr><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Parameters</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Type</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Value</th><th
                                class="font-semibold text-neutral-600 px-5 py-4 text-sm">Description</th></tr></thead><tbody
                        class="text-left"><tr><td
                                class="font-normal px-5 py-3 text-sm">teamid</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
                                class="font-normal px-5 py-3 text-sm">Your teams
                                unique id</td></tr><tr><td
                                class="font-normal px-5 py-3 text-sm">device</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">String</td><td
                                class="font-normal px-5 py-3 text-sm">ac</td></tr><tr><td
                                class="font-normal px-5 py-3 text-sm">value</td><td
                                class="font-normal px-5 py-3 text-sm text-green-600">JSON</td><td
                                class="font-normal px-5 py-3 text-sm">{ "temp": 25, "state": 0, }</td><td
                                class="font-normal px-5 py-3 text-sm">Control
                                the temperature of the
                                ac</td></tr></tbody></table>
    `
});
