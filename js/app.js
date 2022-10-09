document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".pindata tbody").innerHTML = "";
    let pin = this.pin.value
    let url = "https://api.postalpincode.in/pincode/" + pin;

    fetch(url).then(i => i.json()).then(i => {
        let res = i

        if (i[0].status == "Error") {
            document.querySelector(".err").textContent = "no pincode found"
        }
        else {
            let data = i[0].PostOffice;
            data.forEach((j, k) => {
                document.querySelector(".pindata tbody").innerHTML += `<tr>  <td>${+k + 1}</td> <td>${j.Name}</td> <td>${j.Block}</td> <td>${j.District}</td><td>${j.Division}</td> <td>${j.Region}</td><td>${j.State}</td>  </tr>`




                console.log(res);



            })
        }

    })

})
