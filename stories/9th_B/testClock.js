import "./testClock.css"

export const testClock = () => {
    setInterval(
        () => {
            const secondHand = document.querySelector('.second')
            const minuteHand = document.querySelector('.minute')
            const hourHand = document.querySelector('.hour')

            const now = new Date();

            const testSeconds = now.getSeconds()
            const secondDegrees = ((testSeconds / 60 ) * 360) + 90
            secondHand.style.transform = `rotate(${secondDegrees}deg)`

            const testMinutes = now.getMinutes()
            const minuteDegrees = ((testMinutes / 60) * 360) + ((testSeconds / 60) * 6) + 90
            minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

            const testHours = now.getHours()
            const hourDegrees = ((testHours / 12) * 360) + ((testMinutes / 60) * 30) + 90
            hourHand.style.transform = `rotate(${hourDegrees}deg)`
        }      
    ), 1000

    return `
        <div class="clock">
            <div class="hand hour"></div>
            <div class="hand minute"></div>
            <div class="hand second"></div>
        </div>
    `
}
