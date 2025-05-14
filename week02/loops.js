const days = 6;
const limit = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
    else {
        continue;
    }
}
let i = 0;
while ( i < studentReport.length) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach((value) => {
    if (value < 30) {
        console.log(value);
    }
})

for (i in studentReport) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
        const options = { weekday: "long" };
        let date = new Date();
        let nextDate = new Date();
        nextDate.setDate(date.getDate() + i -1);
        let nextDateString = new Intl.DateTimeFormat('en-US', options).format(nextDate);
        console.log(nextDateString);
    }
}


