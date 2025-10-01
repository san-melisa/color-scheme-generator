const selectEl = document.getElementById("schemas")
const schemeBtn = document.getElementById("get-scheme")

schemeBtn.addEventListener("click", () => {
    document.getElementById("hex-container").innerHTML = ""
    const value = selectEl.value.toLowerCase()
    const fetchedText = `https://www.thecolorapi.com/scheme?hex=F55A5A&mode=${value}&count=5`
    fetch(fetchedText)
        .then(response => response.json())
        .then(data => {
            let hexCodes = ``
            data.colors.forEach((color, index) => {
                console.log(color.hex.value)
                const hexVal = color.hex.value
                const divEl = `el-${index+1}`
                document.getElementById(divEl).style.backgroundColor = hexVal

                document.getElementById("hex-container").innerHTML += 
                `
                    <p>${hexVal}</p>
                `

            })

        })
        
})