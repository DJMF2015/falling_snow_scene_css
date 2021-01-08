//Additonal to do...
//   <---------------------------->  
//add random fas sleet icon effect
//Add some sound effects - ESSENTIAL
//Add other effects such as clock or 'lightnening' flash; - ESSENTIAL
//make moble responsive for siff screensizes - ESSENTIAL

setInterval(createSnowFlake, 50)

function createSnowFlake() {
    const snow_flake = document.createElement('i')

    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake')
    snow_flake.style.left = `${Math.random() * window.innerWidth}px`;
    //between 2-5 secs duration
    snow_flake.style.animationDuration = `${Math.random() * 3 + 2 + 's'}`;
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = `${Math.random() * 10 + 10 + 'px'}`;
    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, meltDuration())

    function meltDuration() {
        return 5000;
    }
};