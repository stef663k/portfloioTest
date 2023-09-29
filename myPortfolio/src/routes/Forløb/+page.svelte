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
    </style>
    <title>Forløb</title>
</header>

<div class="forløbh1">
    <h1>Forløb</h1>
</div>
<div>
    <div class="G2" >
    </div>  
    <div class="P1">
    </div>
    <div class="H1">
    </div>
    <div class="P2">
    </div>
     <div class="H2">
    </div>
     <div class="P3">
    </div>
     <div class="H3">
    </div>
     <div class="P4">
    </div>
     <div class="H4">
    </div>
     <div class="P5">
    </div>
     <div class="H5">
    </div>
     <div class="P6">
    </div>
     <div class="H6">
    </div>
     <div class="P7">
    </div>
</div>