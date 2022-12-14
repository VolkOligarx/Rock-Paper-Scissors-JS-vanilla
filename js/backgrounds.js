const blue = 'url(./img/cityBackground.gif) no-repeat';
const orange = 'url(./img/orangeCityBackground.gif) no-repeat';
const midnight = 'url(./img/midnightCityBackground.gif) no-repeat';
const night = 'url(./img/nightCityBackground.gif) no-repeat';
const industry = 'url(./img/industryCityBackground.gif) no-repeat';
const highIndustry = 'url(./img/highIndustryCityBackground.gif) no-repeat';

const bigBrother = 'url(./img/bigBrotherWatchingUBg.gif) no-repeat'
const bigManCyberBg = 'url(./img/bigManCyberBg.gif) no-repeat';
const bigMoonCity = 'url(./img/bigMoonCity.webp) no-repeat';
const blackSmokingManBg = 'url(./img/blackSmokingManBg.gif) no-repeat';
const coffeeBg = 'url(./img/coffeeBg.webp) no-repeat';
const colorEyesBg = 'url(./img/colorEyesBg.gif) no-repeat';
const cyberPunkHackerBg = 'url(./img/cyberPunkHackerBg.webp) no-repeat';
const sepiaManCyberBg = 'url(./img/sepiaManCyberBg.webp) no-repeat';
const smokingRainBg = 'url(./img/smokingRainBg.gif) no-repeat';
const sportRunnerBg = 'url(./img/sportRunnerBg.gif) no-repeat';
const walkingPeopleBg = 'url(./img/walkingPeopleBg.gif) no-repeat';
const widthOrangeCity = 'url(./img/widthOrangeCity.gif) no-repeat';
let bgArray
let random
let randomBg
let counter

function bgSwitcher(pic) {
    body.style.background = pic;
    body.style.backgroundPosition = 'center';
    body.style.backgroundSize = 'cover';
}

function glitch(pic) {
    body.style.animation = 'blick 1.995s linear 18s';
    setTimeout(() => {
        body.style.background = pic;
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
        body.style.animation = ''
    }, 19950);
}

function lossBackgrounds() {
    bgSwitcher(blue);
    glitch(orange);
    setTimeout(() => {
    bgSwitcher(orange);
    glitch(midnight);
}, 20000);
setTimeout(() => {
    bgSwitcher(midnight);
    glitch(midnight);
}, 40000);
setTimeout(() => {
    bgSwitcher(night);
    glitch(night);
}, 60000);
setTimeout(() => {
    bgSwitcher(industry);
    glitch(industry);
}, 80000);
setTimeout(() => {
    bgSwitcher(highIndustry);
    glitch(highIndustry);
}, 100000);

setInterval(() => {
    bgSwitcher(blue);
    glitch(blue);

    setTimeout(() => {
        bgSwitcher(orange);
        glitch(orange);

        setTimeout(() => {
            bgSwitcher(midnight);
            glitch(midnight);

            setTimeout(() => {
                bgSwitcher(night);
                glitch(night);

                setTimeout(() => {
                    bgSwitcher(industry);
                    glitch(industry);

                    setTimeout(() => {
                        bgSwitcher(highIndustry);
                        glitch(highIndustry); 
                    }, 20000);
                }, 20000);
            }, 20000);
        }, 20000);
    }, 20000);
}, 120000);
}


function widthBackgrounds() {
    glitch(widthOrangeCity);
    bgSwitcher(widthOrangeCity);
    bgArray = [bigBrother, bigManCyberBg, bigMoonCity, blackSmokingManBg, coffeeBg, colorEyesBg, cyberPunkHackerBg, sepiaManCyberBg, smokingRainBg, sportRunnerBg, walkingPeopleBg]

    setInterval(() => {
        if (bgArray.length === 1) {
            bgArray = [bigBrother, bigManCyberBg, bigMoonCity, blackSmokingManBg, coffeeBg, colorEyesBg, cyberPunkHackerBg, sepiaManCyberBg, smokingRainBg, sportRunnerBg, walkingPeopleBg, widthOrangeCity]
            console.log('reset');
        }
        counter = bgArray.length
        random = Math.round(Math.random()* counter);
        glitch(bgArray[random]);
        bgSwitcher(bgArray[random]);
        bgArray.splice(random, 1);
    }, 20000);
}
