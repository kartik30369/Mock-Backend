import fs from 'fs'; // to read and write files.

let obj = JSON.parse(fs.readFileSync('./org_data.json', 'utf8')); // get data from json file and convert into JSON

let arr = [];
obj.forEach(unit => {
    arr.push({name: unit.name, height: unit.height, mass: unit.mass,film_num: unit.films.length}); 
    //push selected fields from orginal object in this case only name, height, mass and number of films
});

fs.writeFileSync("./data.json",JSON.stringify(arr,null,2));// write modified arr to JSON file
