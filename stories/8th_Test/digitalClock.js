import "./digitalClock.css"
import alarmClockImg from "./clockAssets/alramClockSvg.svg"

// const clockDisplay = () => { 
//     document.getElementById('test').innerHTML = "Bessie's Clock"
// }

// clockDisplay()


export const clockDisplay = () => {

    setInterval(
        () => {
            const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
            const day = new Date().getDay();
            const thisDay = days[day] 

            const hours = new Date().getHours();
            const minutes = new Date().getMinutes();
            const seconds = new Date().getSeconds();
            const twelveHourClock = hours % 12 ? hours % 12 : 12;

            const mySeconds  = seconds < 10 ? '0'+ seconds : seconds;
            const myMinutes = minutes < 10 ? '0' + minutes : minutes;
            const myHours = twelveHourClock < 10 ? '0' + twelveHourClock : twelveHourClock;

            document.getElementById('hours').innerHTML= myHours;
            document.getElementById('minutes').innerHTML= myMinutes;
            document.getElementById('seconds').innerHTML= mySeconds;
            
            
            if(hours >= 12) {
                document.getElementById('timeIndicator').innerHTML="PM"
            }
            
            document.querySelectorAll('.day').forEach(element => {
                if(element.textContent === thisDay){
                    element.classList.add('current_day')
                }else {
                    element.classList.remove('current_day')
                }
            });


            // const weekDays = document.querySelectorAll('.weekDays')
            // console.log(weekDays)

            // document.getElementById('day_' + day).style.color="red"

        }, 100
    ) 
    
    
    return ` 
        <div id="clockBackground">
            <div class="clockContainer">
                <div class="weekDays">
                    <div class="day">MON</div>
                    <div class="day">TUE</div>
                    <div class="day">WED</div>
                    <div class="day">THUR</div>
                    <div class="day">FRI</div>
                    <div class="day">SAT</div>
                    <div class="day">SUN</div>
                </div>    

                <div class="clockDigits">
                    <img src="${ alarmClockImg }" alt="A digital clock" class="alarmClockImg color">
                    <div class="time"><span id="hours" class="color">00</span>:<span id="minutes" class="color">00</span>:<span id="seconds" class="color">00</span></div>
                    <div id="timeIndicator">AM</div>
                </div>
            </div>
        </div>
    `
}


// export const clockDisplay = ({maritalStatus, gender, hobby, position}) => {
//     console.log(`My name is ${name}, I am a ${gender}, I love ${hobby}, and I am an ${position} at Book your treat. 
//     I am happily ${maritalStatus}` )
// }

