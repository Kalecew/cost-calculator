const basePrice = 6000
let totalPrice = 0
const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const radioType = document.querySelectorAll('[name="type"]')
const radioBuilding = document.querySelectorAll('[name="building"]')
const radioRooms = document.querySelectorAll('[name="rooms"]')
const checkCeiling = document.querySelector('[name="ceiling"]')
const checkWalls = document.querySelector('[name="walls"]')
const checkFloor = document.querySelector('[name="floor"]')
const totalPriceElem = document.querySelector('#total-price')
const inputs = document.querySelectorAll('input')
const addCostSquare = value => {totalPrice += parseFloat(value)*parseInt(squareInput.value)}
const addCost = value => {totalPrice *= parseFloat(value)}
const updateTotalPrice = () => {
	totalPrice = 0
	// вычисление суммы в зависимости от площади
	addCostSquare(basePrice)
	if (checkCeiling.checked) addCostSquare(checkCeiling.value)
	if (checkFloor.checked) addCostSquare(checkFloor.value)

	// добавления к общей сумме
	radioType.forEach(radio => {if (radio.checked) addCost(radio.value)})
	radioBuilding.forEach(radio => {if (radio.checked) addCost(radio.value)})
	radioRooms.forEach(radio => {if (radio.checked) addCost(radio.value)})	
	if (checkWalls.checked) addCost(checkWalls.value)

	// вывод на экран
	totalPrice = parseInt(totalPrice)
	const formatter = new Intl.NumberFormat('ru')
	totalPriceElem.innerText = formatter.format(totalPrice)
}
squareInput.addEventListener('input', () => {
	squareRange.value = squareInput.value
})
squareRange.addEventListener('input', () => {
	squareInput.value = squareRange.value
})
inputs.forEach(input => {
	input.addEventListener('input', updateTotalPrice)
})
updateTotalPrice()