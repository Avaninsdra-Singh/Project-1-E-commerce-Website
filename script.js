const adAds = [
    { src: "Images/svg/ad1.svg", alt: "1" },
    { src: "Images/svg/ad2.svg", alt: "2" },
    { src: "Images/svg/ad3.svg", alt: "3" },
    { src: "Images/svg/ad4.svg", alt: "4" },
    { src: "Images/svg/ad5.svg", alt: "5" },
    { src: "Images/svg/ad6.svg", alt: "6" }
];

const adContainer = document.querySelector("#ad");
if (adContainer) {
    let index = 0;

    setInterval(() => {
        const { src, alt } = adAds[index];
        const span = document.createElement("span");
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        span.appendChild(img);
        adContainer.appendChild(span);

        index = (index + 1) % adAds.length;
    }, 1000); // repeat every 9 seconds
} else {
    console.warn('No element with id="ad" found');
}