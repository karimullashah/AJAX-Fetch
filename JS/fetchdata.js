let count = 0;
function fetchData() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let JSONobj = JSON.parse(this.responseText);
            printObject(JSONobj);
        }
    };
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
    xhttp.send();


    function printObject(obj) {
        console.log("hai")
        for (i = 0; i < obj.length; i++) {
            let textout = "";
            let innerDiv = document.createElement("div");
            innerDiv.setAttribute("style", "height:310px;background-color:red");
            innerDiv.setAttribute("id", `${count}div`)

            let innerDiv1 = document.createElement("div");
            innerDiv1.setAttribute("style", "height:300px;width:35%;background-color:blue;float:left;padding:25px;color:white");

            let innerTextBox = document.createElement("input");
            innerTextBox.setAttribute("type", "text")
            innerTextBox.setAttribute("id", `${count}text`);
            innerTextBox.value = obj[i].population;
            innerTextBox.disabled = true;

            textout = `CountryName : ${obj[i].name} <br> Capital : ${obj[i].capital} <br> Region : ${obj[i].region}
                        <br> Population :`

            // let accordian = document.createElement('input');
            // accordian.setAttribute("type","button");
            

            innerDiv1.innerHTML = textout;
            innerDiv1.appendChild(innerTextBox)

            let para = document.createElement("p")
            para.innerHTML = `<br> Currency :`

            innerDiv1.appendChild(para);
            // innerDiv1.insertAdjacentHTML("afterbegin",card);


            let innerDiv2 = document.createElement("div");
            innerDiv2.setAttribute("style", "height:300px;width:65%;background-color:black;float:left;padding:25px");

            let img = document.createElement("img");
            img.setAttribute("src", obj[i].flag);
            img.setAttribute("style", "width:250px;height:200px");
            innerDiv2.appendChild(img)

            let edit = document.createElement("input");
            edit.setAttribute("type", "button");
            edit.setAttribute("id", count);
            edit.setAttribute("value", "edit");
            edit.setAttribute("onclick", "editText(this.id)");
            edit.setAttribute("style", "margin-left:20px");

            innerDiv2.appendChild(edit);

            let remove = document.createElement("input");
            remove.setAttribute("type", "button");
            remove.setAttribute("id", count);
            remove.setAttribute("value", "delete");
            remove.setAttribute("onclick", "deleteRow(this.id)");
            innerDiv2.appendChild(remove);


            innerDiv.appendChild(innerDiv1);
            innerDiv.appendChild(innerDiv2);

            let outerDiv = document.getElementById("div");
            outerDiv.appendChild(innerDiv);

            count++;
        }
    }

    function getCurrency(obj) {
        //console.log(obj)
        text = "";
        for (let i = 0; i < obj.length; i++) {
            text += obj[i].code + "<br>" + obj[i].name + "<br>" + obj[i].symbol;
        }
        //console.log(text)
        return text;
    }
}
{/* <p>
  
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div> */}