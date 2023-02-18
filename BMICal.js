class BMICal {

  constructor () {
  }

  bmiCal(height, weight) {
    let bmiStatus = weight / Math.pow(height * 0.01, 2)

    return bmiStatus
  }
}

let resultBMI = new BMICal()
let submit = document.querySelector(`#submit`)
let result = document.querySelector(`#result`)

submit.addEventListener(`click`, () => {
  let data1 = document.querySelector(`#data1`)
  let data2 = document.querySelector(`#data2`)

  result.innerHTML = resultBMI.bmiCal(data1.value, data2.value)
})
