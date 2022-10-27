let date = document.getElementById('data')
let week = document.getElementById('week')
let month = document.getElementById('month')
let gradus = document.getElementById('gradus')
let input = document.getElementById('input')
let country = document.getElementById('country')
const span2 = document.querySelector('.span2')
const span1 = document.querySelector('.span1')
const span3 = document.querySelector('.span3')
const span4 = document.querySelector('.span4')
const span4_1 = document.querySelector('.span4_1')
let btn = document.getElementById('btn')
let day = document.getElementById('day')
let data = new Date();
const key = 'b0a180365028efd48ad31f46940fc2a5'
const xhr = new XMLHttpRequest();

input.addEventListener('keydown', (e) => {
    if(e.which === 13){
        xhr.open('GET',`http://api.weatherstack.com/current?access_key=${key}&query=${input.value}`)
        xhr.send()
    }
   
})
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.response)
        console.log(data);
       gradus.textContent = data.current.feelslike
       country.textContent = data.location.name
       span1.textContent = data.current.wind_speed
       span2.textContent = data.current.pressure
       span3.textContent = data.current.precip
       span4.textContent = data.current.humidity
       span4_1.textContent = data.current.humidity


    }
}

switch(data.getDay()){
    case 0: {
        week.textContent = 'Воскресенье'
    }break;
    case 1: {
        week.textContent = 'Понедельник'
    }break;
    case 2: {
        week.textContent = 'Вторник';
    }break;
    case 3: {
        week.textContent = 'Среда'
    }break;
    case 4: {
        week.textContent = 'Четверг'
    }break;
    case 5: {
        week.textContent = 'Пятница'
    }break;
    case 6: {
        week.textContent = 'Субота'
    }break;
}
switch (data.getMonth())
{
  case 0: month.textContent="января"; break;
  case 1: month.textContent="Февраля"; break;
  case 2: month.textContent="Марта"; break;
  case 3: month.textContent="Апреля"; break;
  case 4: month.textContent="Мае"; break;
  case 5: month.textContent="Июня"; break;
  case 6: month.textContent="Июля"; break;
  case 7: month.textContent="Августа"; break;
  case 8: month.textContent="Сентября"; break;
  case 9: month.textContent = "Октября"; break;
  case 10: month.textContent="Ноября"; break;
  case 11: month.textContent="Декабря"; break;
}
day.textContent = data.getDate()

