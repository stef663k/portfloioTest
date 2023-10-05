<script>
    import { text } from "@sveltejs/kit";
    import { onMount } from "svelte";

     
    const currentDate = new Date();

       /**
     * @type {{ [key: string]: { date: Date, name: string } }}
     */
    const dates = {
        G2: { date: new Date('2021-01-18'), name: "Grundforløb 2" },
        P1: { date: new Date('2021-09-15'), name: "Praktikforløb 1" },
        H1: { date: new Date('2022-02-28'), name: "Hovedforløb 1" },
        P2: {date: new Date('2022-05-12'), name: "Praktikforløb 2"},
        H2: {date: new Date('2022-08-01'), name: "Hovedforløb 2"},
        P3: {date: new Date('2022-10-08'), name: "Praktikforløb 3"},
        H3: {date: new Date('2023-10-09'), name: "Hovedforløb 3"},
        P4: {date: new Date('2023-12-16'), name: "Praktikforløb 4"},
        H4: {date: new Date('2024-10-07'), name: "Hovedforløb 4"},
        P5: {date: new Date('2024-10-16'), name: "Praktikforløb 5"},
        H5: {date: new Date('2025-01-29'), name: "Hovedforløb 5"},
        P6: {date: new Date('2025-04-09'), name: "Praktikforløb 6"},
        H6: {date: new Date('2025-10-20'), name: "Hovedforløb 6"},
        p7: {date: new Date('2025-11-22'), name: "Praktikforløb 7"},
        Slut: {date: new Date('2025-12-31'), name: "Slut"}
    };

    /**
     * @param {Date} date 
     * @returns {string} 
     */
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year} ${month} ${day}`;
    }

    onMount(() => {
        for (const key in dates) {
            if (dates.hasOwnProperty(key)) {
                const course = dates[key];
                const element = document.getElementById(`date${key}`);
                if (element) {
                    if (currentDate >= course.date) {
                        element.textContent = course.name;
                        element.classList.add("completed");
                    } else {
                        element.textContent = course.name;
                        element.classList.add("upcoming");
                    }
                }
            }
        }
    });

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
            padding: 10px
        }
        span{
            padding: 10px;
            width: 50%;
            border: 1px solid;
            color: white;
            background-color: #998d7b;
        }
        span:hover{
            background-color: #807667;
        }
        .completed{
            background-color: darkgrey;
            color: black;
            text-decoration: line-through;
        }
        .completed:hover{
            background-color: grey;
        }

    </style>
    <title>Forløb</title>
</header>

<div class="forløbh1">
    <h1>Forløb</h1>
</div>
<div class="dates">
    <br/>
    {#each Object.keys(dates) as key}
        <span id={'date${key}'} class={key} >
            ({formatDate(dates[key].date)}) - {dates[key].name}
        </span>
    {/each}
    <br/>
</div>