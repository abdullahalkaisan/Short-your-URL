

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const longLink = input.value;

    const loadApiData = async()=>{


            const apiKey = `https://api.shrtco.de/v2/shorten?url=${longLink}`;
            const res = await fetch(apiKey);
            const data = await res.json();

        // console.log(data);
        
        // displayData(data);
        const getShortUrl = data.result.short_link;
        console.log(getShortUrl);
        const shortLinkShow =document.querySelector("#shortLinkShow");
        const providedLink = document.querySelector("#providedLink");
        const linkArea = document.querySelector("#linkArea");
        const copyBtn = document.querySelector("#copyBtn");
        const toast = document.querySelector("#toast");
        const lottiAnimation = document.querySelector("#lottiAnimation");



        copyBtn.addEventListener("click", ()=>{
            navigator.clipboard.writeText(getShortUrl);
            toast.classList.remove("hidden")
            setTimeout(() => {
                toast.classList.add("hidden")
            }, 3000);


        })


        shortLinkShow.innerHTML = getShortUrl;
        providedLink.innerHTML = longLink;
        linkArea.classList.remove("hidden");
        lottiAnimation.classList.remove("hidden")
        input.value = "";
    }



loadApiData()


// const displayData =(data)=>{
//     const getShortUrl = data.result.short_link;

// }

})




