import "./analogueClock.css"


export const analogueDisplay = () => {
    setInterval (
        () => {
            const secondHand = document.querySelector('.second-hand')
            const minuteHand = document.querySelector('.minute-hand')
            const hourHand = document.querySelector('.hour-hand')

            const now = new Date();

            const acSeconds = now.getSeconds()
            const secondsDegree = ((acSeconds / 60 ) * 360) + 90
            secondHand.style.transform = `rotate(${secondsDegree}deg)`

            const acMinutes = now.getMinutes()
            const minutesDegree = ((acMinutes / 60) * 360) + (( (acSeconds / 60) / 60) * 360)  + 90
            minuteHand.style.transform = `rotate(${minutesDegree}deg)`

            const acHours = now.getHours()
            const hoursDegree = (( acHours / 12) * 360) + (( (acMinutes / 60) / 12) * 360) + 90
            hourHand.style.transform = `rotate(${hoursDegree}deg)`
        }

    ), 1000

    return `
        <div class="acBackground">
            <div class="clock-face clock-face-one">
                <div class="clock-position top-ten lesser-right">I</div>
                <div class="clock-position top-ten lesser-left">XI</div>

                <div class="clock-position twelve">XII</div>

                <div class="clock-position top-eighty wider-right">II</div>        
                <div class="clock-position top-eighty wider-left">X</div>
            </div>

            <div class="clock-face-two clock-flex">       
                <div>IX</div>

                <div class="clock-hands">
                    <div class="second-hand"></div>
                    <div class="ac-hand minute-hand"></div>
                    <div class="ac-hand hour-hand"></div>
                </div>

                <div>III</div>
            </div>

            <div class="clock-face clock-face-three">
                <div class="clock-position bottom-eighty wider-right">IV</div>
                <div class="clock-position bottom-eighty wider-left">VIII</div>

                <div class="clock-position six">VI</div>

                <div class="clock-position bottom-ten lesser-right">V</div>     
                <div class="clock-position bottom-ten lesser-left">VII</div>
            </div>
        </div>
    `
} 