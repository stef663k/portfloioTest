<script>
    import { onMount } from "svelte";
    import Alpaca from "$lib/images/alpaca3.jpg";

    let showMobileMenu = false;

    const navItems = [
        {label: "", href: "/", isLogo: true},
        {label: "Home", href: "/"},
        {label: "Projects", href:"/Projects"},
        {label: "Forløb", href: "/Forløb"},
        {label: "Karakterbevis", href: "/Karakterbevis"}
    ];

    const handleMobileClick = () => (showMobileMenu = !showMobileMenu);

    const mediaQueryHandler = e =>{

        if(!e.matches){
            showMobileMenu = false;
        }
    };

    onMount(() => {
        const mediaListener = window.matchMedia("(max-width: 767px)");

        mediaListener.addEventListener('change',mediaQueryHandler);
    });
</script>

<nav>
    <div class="inner">

        <div on:click={handleMobileClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
          <div class="middle-line"></div>  
        </div>
        <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
            {#each navItems as item}
                <li>
                    {#if item.isLogo}
                        <a href={item.href}>
                            <img class="logo-image" src={Alpaca} alt="Alpaca Logo"  />
                        </a>
                    {:else}
                        <a href={item.href}>{item.label}</a>
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
</nav>

<body>

</body>

<slot />

<style>
    nav {
        background-color: rgba(0, 0, 0, 0.8);
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        height: 60px;
    }

    .innner {

        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 100%;
    }

    a {
        display: flex;
        justify-self: left;
        align-self: center;
        height: 100%;
    }

    body {
        background-color: blanchedalmond;
    }

    .logo-image {
        display: flex;
        object-fit: cover;
        justify-self: center;
        align-self: center;
        height: 100%;
        margin-top: 5px;
    }

    .mobile-icon {
        width: 25px;
        height: 25px;
        position: relative;
        cursor: pointer;
    }

    .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition: all 0.4s;
        transform-origin: center;
    }

    .mobile-icon:before,
    .middle-line {
        top: 0;
    }

    .mobile-icon:after,
    .middle-line {
        bottom: 0;
    }

    .mobile-icon::before {
        width: 66%;
    }

    .mobile-icon:after {
        width: 33%;
    }

    .middle-line {
        margin: auto;
    }

    .mobile-iconh:hover:before,
    .mobile-icon:hover:after,
    .mobile-icon.active:before,
    .mobile-icon.active:after,
    .mobile-icon.active .middle-line {
        width: 100%;
    }

    .mobile-icon.active:before,
    .mobile-icon.active:after{
        top: 50%;
        transform: rotate(-45deg);
    }

    .mobile-icon.active .middle-line {
        transform: rotate(-45deg);
    }

    .navbar-list {
        display: none;
        width: 100%;
        justify-content:flex-start;
        margin: 0;
        padding: 0 40px;
    }

    .navbar-list.mobile {
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        display: block;
        height: calc(100% - 45%);
        bottom: 0;
        left: 0;
    }

    .navbar-list li {
        list-style: none;
        position: relative;
    }

    .navbar-list li::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        /* background-color: #424245; */
        margin: 20px;
    }

    .navbar-list a {
        color: #fff;
        text-decoration: none;
        display: flex;
        height: 45px;
        align-items: center;
        padding: 0 10px;
        font-size: 18px;
        margin-top: 5px;
    }

     @media only screen and (min-width: 767px) {
        .mobile-icon {
        display: none;}
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }

</style>