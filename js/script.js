let dropdown_btn = document.getElementById('dropdown_btn');
let dropdown_block = document.getElementById('dropdown_block');
let send_data_btn = document.getElementById('send_data_btn');
let input_search = document.getElementById('input_search');

let data = `
[
    {
      "0": "8",
      "1": "Aizkraukles novads",
      "id": "8",
      "data": "Aizkraukles novads"
    },
    {
      "0": "9",
      "1": "Alūksnes novads",
      "id": "9",
      "data": "Alūksnes novads"
    },
    {
      "0": "10",
      "1": "Augšdaugavas novads",
      "id": "10",
      "data": "Augšdaugavas novads"
    },
    {
      "0": "12",
      "1": "Balvu novads",
      "id": "12",
      "data": "Balvu novads"
    },
    {
      "0": "13",
      "1": "Bauskas novads",
      "id": "13",
      "data": "Bauskas novads"
    },
    {
      "0": "14",
      "1": "Cēsu novads",
      "id": "14",
      "data": "Cēsu novads"
    },
    {
      "0": "1",
      "1": "Daugavpils ",
      "id": "1",
      "data": "Daugavpils "
    },
    {
      "0": "15",
      "1": "Dienvidkurzemes novads",
      "id": "15",
      "data": "Dienvidkurzemes novads"
    },
    {
      "0": "16",
      "1": "Dobeles novads",
      "id": "16",
      "data": "Dobeles novads"
    },
    {
      "0": "17",
      "1": "Gulbenes novads",
      "id": "17",
      "data": "Gulbenes novads"
    },
    {
      "0": "2",
      "1": "Jelgava ",
      "id": "2",
      "data": "Jelgava "
    },
    {
      "0": "18",
      "1": "Jelgavas novads",
      "id": "18",
      "data": "Jelgavas novads"
    },
    {
      "0": "19",
      "1": "Jēkabpils novads",
      "id": "19",
      "data": "Jēkabpils novads"
    },
    {
      "0": "3",
      "1": "Jūrmala ",
      "id": "3",
      "data": "Jūrmala "
    },
    {
      "0": "20",
      "1": "Krāslavas novads",
      "id": "20",
      "data": "Krāslavas novads"
    },
    {
      "0": "21",
      "1": "Kuldīgas novads",
      "id": "21",
      "data": "Kuldīgas novads"
    },
    {
      "0": "4",
      "1": "Liepāja ",
      "id": "4",
      "data": "Liepāja "
    },
    {
      "0": "23",
      "1": "Limbažu novads",
      "id": "23",
      "data": "Limbažu novads"
    },
    {
      "0": "25",
      "1": "Ludzas novads",
      "id": "25",
      "data": "Ludzas novads"
    },
    {
      "0": "24",
      "1": "Līvānu novads",
      "id": "24",
      "data": "Līvānu novads"
    },
    {
      "0": "26",
      "1": "Madonas novads",
      "id": "26",
      "data": "Madonas novads"
    },
    {
      "0": "27",
      "1": "Mārupes novads",
      "id": "27",
      "data": "Mārupes novads"
    },
    {
      "0": "28",
      "1": "Ogres novads",
      "id": "28",
      "data": "Ogres novads"
    },
    {
      "0": "29",
      "1": "Olaines novads",
      "id": "29",
      "data": "Olaines novads"
    },
    {
      "0": "30",
      "1": "Preiļu novads",
      "id": "30",
      "data": "Preiļu novads"
    },
    {
      "0": "32",
      "1": "Ropažu novads",
      "id": "32",
      "data": "Ropažu novads"
    },
    {
      "0": "5",
      "1": "Rēzekne ",
      "id": "5",
      "data": "Rēzekne "
    },
    {
      "0": "31",
      "1": "Rēzeknes novads",
      "id": "31",
      "data": "Rēzeknes novads"
    },
    {
      "0": "6",
      "1": "Rīga",
      "id": "6",
      "data": "Rīga"
    },
    {
      "0": "33",
      "1": "Salaspils novads",
      "id": "33",
      "data": "Salaspils novads"
    },
    {
      "0": "34",
      "1": "Saldus novads",
      "id": "34",
      "data": "Saldus novads"
    },
    {
      "0": "35",
      "1": "Saulkrastu novads",
      "id": "35",
      "data": "Saulkrastu novads"
    },
    {
      "0": "36",
      "1": "Siguldas novads",
      "id": "36",
      "data": "Siguldas novads"
    },
    {
      "0": "37",
      "1": "Smiltenes novads",
      "id": "37",
      "data": "Smiltenes novads"
    },
    {
      "0": "38",
      "1": "Talsu novads",
      "id": "38",
      "data": "Talsu novads"
    },
    {
      "0": "39",
      "1": "Tukuma novads",
      "id": "39",
      "data": "Tukuma novads"
    },
    {
      "0": "40",
      "1": "Valkas novads",
      "id": "40",
      "data": "Valkas novads"
    },
    {
      "0": "41",
      "1": "Valmieras novads",
      "id": "41",
      "data": "Valmieras novads"
    },
    {
      "0": "42",
      "1": "Varakļānu novads",
      "id": "42",
      "data": "Varakļānu novads"
    },
    {
      "0": "7",
      "1": "Ventspils ",
      "id": "7",
      "data": "Ventspils "
    },
    {
      "0": "43",
      "1": "Ventspils novads",
      "id": "43",
      "data": "Ventspils novads"
    },
    {
      "0": "11",
      "1": "Ādažu novads",
      "id": "11",
      "data": "Ādažu novads"
    },
    {
      "0": "22",
      "1": "Ķekavas novads",
      "id": "22",
      "data": "Ķekavas novads"
    }
  ]
`;

let list_checkboxes = JSON.parse(data);

let count = 0;

for(let i = 0; i < list_checkboxes.length; i++){

    if(i % 11 == 0){
        count++;
        dropdown_block.innerHTML += `<ul class="content__input-checkboxes__list checkboxes__list-" data-column="column-${count}">
                <li class="content__input-checkboxes__item">
                    <label class="content__checkboxes-item__label">
                        <input class="content__checboxes-item__check" type="checkbox" data-id="${list_checkboxes[i].id}">
                        <p class="content__checkboxes-item__text">${list_checkboxes[i].data}</p>
                    </label>
                </li>
        </ul>`
    }else{
        document.querySelector("[data-column=column-"+count+"]").innerHTML +=`
                <li class="content__input-checkboxes__item">
                    <label class="content__checkboxes-item__label">
                        <input class="content__checboxes-item__check" type="checkbox"  data-id="${list_checkboxes[i].id}">
                        <p class="content__checkboxes-item__text">${list_checkboxes[i].data}</p>
                    </label>
                </li>
        `;
    }
    
}


dropdown_btn.addEventListener('click', function(){
    dropdown_block.classList.toggle('active')
});

let checkboxes = document.querySelectorAll('.content__checboxes-item__check');

let send_data = function(){

    let checked_values = [];

    for(let i = 0; i < checkboxes.length; i++){

        if(checkboxes[i].checked){
            checked_values.push(checkboxes[i]);
        }

    }

    let data = []
    
    for(let i = 0; i < checked_values.length; i++){

        let data_object = {};

        data_object["id"] = checked_values[i].getAttribute('data-id');
        data_object["data"] = checked_values[i].nextElementSibling.innerText;


        data.push(data_object);
    }
    

    let parent_object = {};
    parent_object.checkboxes = data;
    parent_object.search_string = input_search.value;

    data = JSON.stringify(parent_object)

    const uri = "get_data.php";
    const xmlhttp = new XMLHttpRequest();
    const fd = new FormData();

    xmlhttp.open("POST", uri, true);
    
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let response = JSON.parse(xmlhttp.responseText);
        }
            
    }
    
    fd.append('data', data);

    xmlhttp.send(fd);

};


send_data_btn.addEventListener('click', send_data, false);


