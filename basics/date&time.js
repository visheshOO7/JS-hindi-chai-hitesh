// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// ******* type of myDate is Object *********
//console.log(typeof myDate);

// ++++++++ Creating my own date +++++++++

let myCreatedDate1 = new Date(2026, 0 , 16); // <-- notice '0' here is for January
//console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date(2026, 0 , 16, 15, 3, 45);
// let myCreatedDate2 = new Date("01-01-2001");
// let myCreatedDate2 = new Date("2001-01-01");

// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate2.getMilliseconds());

//customization of Locale String 

let newDate = new Date(2026,2,7);
console.log(
    newDate.toLocaleString('default',{
        weekday : "long",
        day:"2-digit",
    })
);
