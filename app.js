setInterval(() => {
  clock()
}, 1000);
const clock = ()=>{
  const aiguilleSecondes = document.querySelector('.aiguille-secondes')
const aiguilleMinutes = document.querySelector('.aiguille-minutes')
const aiguilleHeures = document.querySelector('.aiguille-heures')
const today = new Date()
h = today.getHours()
m = today.getMinutes()
s = today.getSeconds()

const secondsFraction = s/60
const minutesFraction = (secondsFraction + m)/60
const hoursFraction = (minutesFraction + h)/12

aiguilleSecondes.style.transform = `rotate(${secondsFraction*360}deg)`
aiguilleMinutes.style.transform = `rotate(${minutesFraction*360}deg)`
aiguilleHeures.style.transform = `rotate(${hoursFraction*360}deg)`

}
clock()