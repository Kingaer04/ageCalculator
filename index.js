let birth = new Date()

let birthyear = birth.getFullYear()
let birthmonth = birth.getMonth() + 1
let birthday = birth.getDay()

let day = document.querySelectorAll(".inputs")[0]
let  month = document.querySelectorAll(".inputs")[1]
let year = document.querySelectorAll(".inputs")[2]
let submit = document.querySelector(".submit")

let r_day = document.querySelectorAll(".input-text")[2]
let r_month = document.querySelectorAll(".input-text")[1]
let r_year = document.querySelectorAll(".input-text")[0]

submit.addEventListener("click", function(){
    if(day.value == "" || month.value == "" || year.value == ""){
        document.querySelector(".required").style.visibility = "visible"
        $(".text").each(function(){
            $(this).css("color", "red")
        })
        $(".inputs").each(function(){
            $(this).css("border-color", "red")
        })
    }
    else if(day.value.length > 0 || month.value.length > 0 || year.value.length > 0){
        document.querySelector(".required").style.visibility = "hidden"
        $(".text").each(function(){
            $(this).css("color", "black")
        })
        $(".inputs").each(function(){
            $(this).css("border-color", "black")
        })
        let year2 = birthyear - parseInt(year.value);
        let months2 = birthmonth - parseInt(month.value);
        let day2 = birthmonth - parseInt(day.value)
        let isValid = true

        if (month.value == 2) {
            if((day.value > 29) || (day.value == 29 && !((year.value % 4 == 0) && (year.value % 100 != 0) || (year.value == 0)))) {
                isValid = false;
            }
        }
        else if(month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) {
            if(day.value > 30) {
                isValid = false
            }
        }
        else{
            if(day.value > 31){
                isValid = false;
            }
        }

        if(!isValid) {
            document.querySelector(".invalid").style.visibility = "visible"
        $(".text").each(function(){
            $(this).css("color", "red")
        })
        $(".inputs").each(function(){
            $(this).css("border-color", "red")
        })
        }
        else{
            document.querySelector(".invalid").style.visibility = "hidden"
            r_day.style.border = "none"
            r_day.style.marginTop = "30px"
            r_day.style.color = "rgb(77, 6, 241)"
            r_day.innerHTML = Math.abs(day2)
            r_day.style.background = "none"
            r_day.style.marginRight = "50px"
            r_month.style.border = "none"
            r_month.style.marginTop = "30px"
            r_month.style.color = "rgb(77, 6, 241)"
            r_month.innerHTML = Math.abs(months2)
            r_month.style.background = "none"
            r_month.style.marginRight = "50px"
            r_year.style.border = "none"
            r_year.style.marginTop = "30px"
            r_year.style.color = "rgb(77, 6, 241)"
            r_year.innerHTML = year2
            r_year.style.background = "none"
            r_year.style.marginRight = "50px"
        }
    }
})
