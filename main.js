//TASK 1. 

var CountryList = [

    {
    
     country: "Україна",
    
     capital:"Київ",
     count: 40000000
    
    },
    
    {
    
     country: "Грузія",
    
     capital:"Тбілісі",
    
    count: 10000000
    
    },
    
    {
    
     country: "Великобританія",
    
     capital:"Лондон",
     count: 100000000
    
    },
    
    {
    
     country: "США",
    
     capital:"Вашингтон",
    
    count: 300000000
    
    }];
    


  

    let colorTitle = document.createElement("h1");
    colorTitle.classList.add("title")
    let titleValue = "population statistics of the world".split('');

    for (let i = 0; i < titleValue.length; i++) {
    let letter = document.createElement("span");
    letter.textContent = titleValue[i];
    letter.style.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()    
    colorTitle.append(letter);
    }

    document.body.append(colorTitle)
 

    let list = document.createElement("ol");
    
    list.classList.add("list");

    
    document.body.appendChild(list);


    for (let i = 0; i < CountryList.length; i++) {
        
        let item = document.createElement("li");

        item.classList.add("one-country");

        let subList = document.createElement("ol");


        for (let key in CountryList[i]) {
           
            let million = 1e6;
            let li = document.createElement("li");
            if (CountryList[i][key] == 'Україна' || CountryList[i][key] == 'Київ' ) {
                
                let span = document.createElement('span');

                span.textContent = CountryList[i][key];
                
                if (CountryList[i][key] == 'Україна') {
                    span.classList.add('yellow')
                } else {
                    span.classList.add('blue');
                }
                li.textContent = `${key} : `;
                li.append(span)
            
            
            } else {
                li.textContent = `${key} : ${key != 'count' ? CountryList[i][key] : CountryList[i][key] / million + ' млн'}`;
            }
            subList.append(li);

        }


        item.append(subList);

        list.appendChild(item);
    
}
    

// Task 2  Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).
let colorTitle2 = document.createElement("h1");
colorTitle2.classList.add("title")
let titleValue2 = "task2".split('');

for (let i = 0; i < titleValue2.length; i++) {
let letter = document.createElement("span");
letter.textContent = titleValue2[i];
letter.style.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()    
colorTitle2.append(letter);
}

document.body.append(colorTitle2)

let words = ["apple", "car", "lemon", "water", "piano", "fotball", "Ukraine"];

let listItems = document.createElement('ul');
listItems.classList.add('second-list');
document.body.append(listItems);

for (let i = 0; i < words.length; i++) {
    let word = document.createElement("li");
    word.textContent = words[i];
    word.classList.add('word')
    listItems.append(word);
}

let buttons = document.createElement("div");

buttons.classList.add("section_buttons");

document.body.append(buttons);

for (let i = 0; i < 6; i++) {
    let button = document.createElement("span");
    button.textContent = "Change colour";

    button.style.width = "100px";
    button.style.height = "50px";
    button.style.padding = "10px"
    button.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    button.style.cursor = "pointer";
    button.onclick = function (event) {
        listItems.style.color = event.target.style.backgroundColor;
    };
    buttons.append(button);

}
