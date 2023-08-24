

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const longLink = input.value;




    function validateURL(longLink) {
        // Regular expression to match a valid URL.
        const regex = /^(https?:\/\/)?[a-zA-Z0-9-_\.]+\.[a-zA-Z]{2,}$/;
      
        // Check if the URL matches the regular expression.
        if (regex.test(longLink)) {
          return true;
        } else {
          return false;
        }
      }
      
      // Get the URL from the user.
    //   const url = prompt("Enter a URL:");
      
      // Validate the URL.
      const isValid = validateURL(longLink);
      
      // Display an alert if the URL is valid.
      if (isValid) {
        alert("The URL is valid.");
      } else {
        alert("The URL is not valid.");
      }




    console.log(longLink);

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




