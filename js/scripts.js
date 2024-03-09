// const startBtn = document.querySelector('.start-button')
// const dayErr = document.querySelector('.day-error')
// const monthErr = document.querySelector('.month-error')
// const yearErr = document.querySelector('.year-error')

// const spanYear = document.querySelector('.year-num')
// const spanMonth = document.querySelector('.month-num')
// const spanDay = document.querySelector('.day-num')

// const day = document.getElementById('day')
// const month = document.getElementById('month')
// const year = document.getElementById('year')

// const labelD = document.querySelector('label[for = day]')
// const labelM = document.querySelector('label[for = month]')
// const labelY = document.querySelector('label[for = year]')

// const allInputs = [day, month, year]
// const allErr = [dayErr, monthErr, yearErr]
// const labels = document.querySelectorAll('label')

// const goApp = () => {
// 	checkDte()
// }

// const checkDte = () => {
// 	spanYear.textContent = '--'
// 	spanMonth.textContent = '--'
// 	spanDay.textContent = '--'
// 	const today = new Date()
// 	for (let i = 0; i < allInputs.length; i++) {
// 		allInputs[i].style.border = '2px solid var(--Light-grey)'
// 		labels[i].style.color = 'var(--Smokey-grey'
// 		allErr[i].innerHTML = ''
// 	}

// 	if (day.value === '') {
// 		dayErr.innerHTML = 'This filed is requred'
// 		day.style.border = '3px solid red'
// 		labelD.style.color = 'red'
// 	} else if (day.value > 31) {
// 		day.style.border = '3px solid red'
// 		labelD.style.color = 'red'
// 		dayErr.innerHTML = 'Must be a valid day'
// 	} else {
// 		createDateVar()
// 	}
// 	if (month.value === '') {
// 		monthErr.innerHTML = 'This filed is requred'
// 		month.style.border = '3px solid red'
// 		labelM.style.color = 'red'
// 	} else if (month.value > 12) {
// 		month.style.border = '3px solid red'
// 		labelM.style.color = 'red'
// 		monthErr.innerHTML = 'Must be a valid month'
// 	} else {
// 		createDateVar()
// 	}
// 	if (year.value === '') {
// 		yearErr.innerHTML = 'This filed is requred'
// 		year.style.border = '3px solid red'
// 		labelY.style.color = 'red'
// 	} else if (year.value > today.getFullYear()) {
// 		year.style.border = '3px solid red'
// 		labelY.style.color = 'red'
// 		yearErr.innerHTML = 'Year must be in past'
// 		spanYear.textContent = '--'
// 		spanMonth.textContent = '--'
// 		spanDay.textContent = '--'
// 	} else {
// 		createDateVar()
// 	}
// }
// const createDateVar = () => {
// 	const dVar = day.value
// 	const mVar = month.value
// 	const yVar = year.value

// 	if (dVar === '' || mVar === '' || yVar === '') {
// 		console.log('zero')
// 	} else {
// 		conutDte()
// 	}
// }

// const conutDte = () => {
// 	const today = new Date()
// 	const concatenatedDate = new Date(`${year.value} ${month.value} ${day.value}`)

// 	const result = today - concatenatedDate

// 	const oneDay = 1000 * 60 * 60 * 24
// 	const oneMonth = 30.44 * oneDay
// 	const oneYear = 365.25 * oneDay

// 	const yearResault = Math.floor(result / (oneDay * 365.25))
// 	const monthResault = Math.floor(result / (oneDay * 30.436875)) % 12
// 	const daysResault = Math.floor(((today - concatenatedDate) / oneDay) % 30)

// 	if (isNaN(yearResault || monthResault || daysResault)) {
// 		spanYear.textContent = '--'
// 		spanMonth.textContent = '--'
// 		spanDay.textContent = '--'
// 	} else {
// 		spanYear.textContent = yearResault
// 		spanMonth.textContent = monthResault
// 		spanDay.textContent = daysResault
// 	}
// }

// startBtn.addEventListener('click', goApp)

const startBtn = document.querySelector('.start-button')
const dayErr = document.querySelector('.day-error')
const monthErr = document.querySelector('.month-error')
const yearErr = document.querySelector('.year-error')
const spanYear = document.querySelector('.year-num')
const spanMonth = document.querySelector('.month-num')
const spanDay = document.querySelector('.day-num')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const labelD = document.querySelector('label[for = day]')
const labelM = document.querySelector('label[for = month]')
const labelY = document.querySelector('label[for = year]')
const allInputs = [day, month, year]
const allErr = [dayErr, monthErr, yearErr]
const labels = document.querySelectorAll('label')
const goApp = () => {
	checkDte()
}
const checkDte = () => {
	spanYear.textContent = '--'
	spanMonth.textContent = '--'
	spanDay.textContent = '--'
	const today = new Date()
	for (let i = 0; i < allInputs.length; i++) {
		allInputs[i].style.border = '2px solid var(--Light-grey)'
		labels[i].style.color = 'var(--Smokey-grey'
		allErr[i].innerHTML = ''
	}
	if (day.value === '') {
		dayErr.innerHTML = 'This filed is requred'
		day.style.border = '3px solid red'
		labelD.style.color = 'red'
	} else if (day.value > 31) {
		day.style.border = '3px solid red'
		labelD.style.color = 'red'
		dayErr.innerHTML = 'Must be a valid day'
	} else {
		createDateVar()
	}
	if (month.value === '') {
		monthErr.innerHTML = 'This filed is requred'
		month.style.border = '3px solid red'
		labelM.style.color = 'red'
	} else if (month.value > 12) {
		month.style.border = '3px solid red'
		labelM.style.color = 'red'
		monthErr.innerHTML = 'Must be a valid month'
	} else {
		createDateVar()
	}
	if (year.value === '') {
		yearErr.innerHTML = 'This filed is requred'
		year.style.border = '3px solid red'
		labelY.style.color = 'red'
	} else if (year.value > today.getFullYear()) {
		year.style.border = '3px solid red'
		labelY.style.color = 'red'
		yearErr.innerHTML = 'Year must be in past'
		spanYear.textContent = '--'
		spanMonth.textContent = '--'
		spanDay.textContent = '--'
	} else {
		createDateVar()
	}
}
const createDateVar = () => {
	const dVar = day.value
	const mVar = month.value
	const yVar = year.value
	if (dVar === '' || mVar === '' || yVar === '') {
		console.log('zero')
	} else {
		conutDte()
	}
}
const conutDte = () => {
	const today = new Date()
	const concatenatedDate = new Date(`${year.value} ${month.value} ${day.value}`)
	const result = today - concatenatedDate
	const oneDay = 1000 * 60 * 60 * 24
	const oneMonth = 30.44 * oneDay
	const oneYear = 365.25 * oneDay
	const yearResault = Math.floor(result / (oneDay * 365.25))
	const monthResault = Math.floor(result / (oneDay * 30.436875)) % 12
	const daysResault = Math.floor(((today - concatenatedDate) / oneDay) % 30)
	if (isNaN(yearResault || monthResault || daysResault)) {
		spanYear.textContent = '--'
		spanMonth.textContent = '--'
		spanDay.textContent = '--'
	} else {
		spanYear.textContent = yearResault
		spanMonth.textContent = monthResault
		spanDay.textContent = daysResault
	}
}
startBtn.addEventListener('click', goApp)
