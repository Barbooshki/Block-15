document.addEventListener('DOMContentLoaded', function () {
    const flavorsInput = document.getElementById('flavorsInput');
    const countButton = document.getElementById('countButton');
    const flavorTable = document.getElementById('flavorTable').getElementsByTagName('tbody')[0];
    const flavorCountWrapper = document.getElementById('flavorCountWrapper');

    countButton.addEventListener('click', function () {
        const inputText = flavorsInput.value;
        const flavorsArray = inputText.split(',').map(flavor => flavor.trim());

        const flavorCounts = {};
        flavorsArray.forEach(flavor => {
            if (flavorCounts[flavor]) {
                flavorCounts[flavor]++;
            } else {
                flavorCounts[flavor] = 1;
            }
        });

        flavorTable.innerHTML = '';

        for (const flavor in flavorCounts) {
            const row = flavorTable.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = flavor;
            cell2.textContent = flavorCounts[flavor];
        };

        flavorCountWrapper.classList.remove('hidden');
    });
});