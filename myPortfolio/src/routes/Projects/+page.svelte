<script>
    import calculator from "$lib/images/calculator.png";
    import server from "$lib/images/server.png";
    import scraper from "$lib/images/scraper.png";
    import svelteImage from "$lib/images/svelte.png";
    import zig from "$lib/images/zig.png";
    import maui from "$lib/images/dotnet-removebg-preview.png";
</script>
<head>
    <style>
        ul {
            list-style-type: none;
        }
        a {
            text-decoration: none;
        }
        .projectName {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
    
        }
    
        .project-container {
            display: flex;
            justify-content: space-between;
            width: 80%;
            margin-top: 20px;
        }
    
        .github-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-basis: 45%;
            background-color: #blanchedalmond;
            padding: 20px;
            margin-bottom: 10px;
            text-align: center;
            border: 1px solid;
        }

        .azure-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-basis: 45%;
            background-color: #blanchedalmond;
            padding: 20px;
            margin-bottom: 10px;
            display: block;
            border: 1px solid;
        }
        li {

            /* margin-bottom: 30px;
             */
        }
        .svelteIng {
            width: 20%;
        }
        .webserverImg, .calculatorImg, .webscraperImg, .svelteImg, .zigImg, .mauiImg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 128px;
            height: 128px;
            margin: 0 auto;
        }
        .webserverImg:hover, .calculatorImg:hover, .webscraperImg:hover, .svelteImg:hover, .zigImg:hover, .mauiImg:hover {
            background-color: #e5d3b8;
        }
        .containers {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        }
        .azContainer {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        }
    </style>
    <title>Projects</title>
</head>
<body>
    <div class="projectName">
        <h1>Projects</h1>

        <div class="project-container">
            <div class="github-container">
                <h3>Github content</h3>
                <ul class="containers">
                    <li>
                        <div class="webserverImg">
                            <a href="https://github.com/stef663k/WebServer"><img src={server} alt="this is an icon for a web server"/></a>
                        </div>
                        <a href="https://github.com/stef663k/WebServer">WebServer</a>
                    </li>
                    <li>
                        <div class="calculatorImg">
                            <a href="https://github.com/stef663k/ZigConsoleCalculator"><img src={calculator} alt="Icon of an calculator"/></a>
                        </div>
                        <a href="https://github.com/stef663k/ZigConsoleCalculator">ZigConsoleCalculator</a>
                    </li>
                    <li>
                        <div class="webscraperImg">
                            <a href="https://github.com/stef663k/Webscraper"><img src={scraper} alt="This is an icon of a scraper"/></a>
                        </div>
                        <a href="https://github.com/stef663k/Webscraper">Webscraper</a>
                    </li>
                </ul>
            </div>
            <div class="azure-container">
                <h3>Azure content</h3>
                <ul class="azContainer">
                    <li>
                        <div class="svelteImg">
                            <a href="https://dev.azure.com/stef663k/Svelte%20projects"><img src={svelteImage} alt="image of svelte icon"/></a>
                        </div>
                        <a href="https://dev.azure.com/stef663k/Svelte%20projects">Svelte beginning</a>
                    </li>
                    <li>
                        <div class="zigImg">
                            <a href="https://dev.azure.com/stef663k/Zig%20projects"><img src={zig} alt="image og zig programming language logo"/></a>
                        </div>
                        <a href="https://dev.azure.com/stef663k/Zig%20projects">Various zig prjects</a>
                    </li>
                    <li>
                        <div class="mauiImg">
                            <a href="https://dev.azure.com/stef663k/FirstMauiApp"><img src={maui} alt="Image of dotnet logo surfing"/></a>
                        </div>
                        <a href="https://dev.azure.com/stef663k/FirstMauiApp">Portfolio made in MAUI</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</body>

