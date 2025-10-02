const selectEl = document.getElementById("schemas")
const schemeBtn = document.getElementById("get-scheme")
const box = document.getElementById("colorBox")
const picker = document.getElementById("colorPicker")
let color = "#F55A5A"
let value = "monochrome"

box.addEventListener("click", () => {
    picker.click()
})

picker.addEventListener("input", () => {
    color = picker.value
    box.style.backgroundColor = color
    console.log(color)
})



schemeBtn.addEventListener("click", () => {
   getScheme()
})


function getScheme() {
    box.style.backgroundColor = color
    color = color.replace("#","")
    document.getElementById("hex-container").innerHTML = ""
    value = selectEl.value.toLowerCase()
    const fetchedText = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${value}&count=5`
    console.log(fetchedText)
    fetch(fetchedText)
        .then(response => response.json())
        .then(data => {
            let hexCodes = ``
            data.colors.forEach((c, index) => {
                console.log(c.hex.value)
                const hexVal = c.hex.value
                const divEl = `el-${index+1}`
                document.getElementById(divEl).style.backgroundColor = hexVal

                document.getElementById("hex-container").innerHTML += 
                `
                    <p>${hexVal}</p>
                `

            })

        })
        
}

getScheme()