<script>
     
    const currentDate = new Date();

       /**
     * @type {{ [key: string]: Date }}
     */
    const dates = {
        G2: new Date('2021-01-18'),
        P1: new Date('2021-09-15'),
        H1: new Date('2022-02-28'),
        P2: new Date('2022-05-12'),
        H2: new Date('2022-08-01'),
        P3: new Date('2022-10-08'),
        H3: new Date('2023-10-09'),
        P4: new Date('2023-12-16'),
        H4: new Date('2024-10-07'),
        P5: new Date('2024-10-16'),
        H5: new Date('2025-01-29'),
        P6: new Date('2025-04-09'),
        H6: new Date('2025-10-20'),
        p7: new Date('2025-11-22'),
        Slut: new Date('2025-12-31')
    };

    /**
     * Format a date as a string.
     * @param {Date} date - The date to format.
     * @returns {string} The formatted date string.
     */
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year} ${month} ${day}`;
    }

    for (const key in dates) {
        if (dates.hasOwnProperty(key)) {
            if (currentDate >= dates[key]) {
                const element = document.getElementById(`date${key}`);
                if (element) {
                    element.textContent = `(${formatDate(dates[key])}) - Completed`;
                }
            } else {
                const element = document.getElementById(`date${key}`);
                if (element) {
                    element.textContent = `(${formatDate(dates[key])}) - Upcoming`;
                }
            }
        }
    }


</script>
<header>
    <style>
        .forløbh1 {
            display: flex;
            justify-content: center;
        }
        .dates{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            border: 1px solid;
            padding: 10px
        }
        span{
            padding: 10px;
            width: 50%;
            border: 1px solid;
        }
    </style>
    <title>Forløb</title>
</header>

<div class="forløbh1">
    <h1>Forløb</h1>
</div>
<div class="dates">
    <span class="grundforløb" id="dateG2">Grundforløb 2</span>
    <span class="p1" id="dateP1">Praktikforløb 1</span>
    <span class="h1" id="dateH1">Hovedforløb 1</span>
    <span class="p2" id="dateP2">praktikforløb 2</span>
    <span class="h2" id="dateH2">Hovedforløb 2</span>
    <span class="p3" id="dateP3">Praktikforløb 3</span>
    <span class="h3" id="dateH3"> Hovedforløb 3</span>
    <span class="p4" id="dateP4">Praktikforløb 4</span>
    <span class="h4" id="dateH4"> Hovedforløb 4</span>
    <span class="p5" id="dateP5"> Praktikforløb 5</span>
    <span class="h5" id="dateH5">Hovedforløb 5</span>
    <span class="p6" id="dateP6">Praktikforløb 6</span>
    <span class="h6" id="dateH6">Hovedforløb 6</span>
    <span class="p7" id="dateP7">Praktikforløb 7</span>
    <span class="slut" id="dateSlut">SLUT</span>
</div>