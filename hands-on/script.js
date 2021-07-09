    var average = $('#average');

    const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Jane", age: 20 }
    ];

    students.forEach((element) => {

        // do stuff with data
        let name = element.name;
        let age = element.age;

        average.append(`<tr><td>${name}</td><td>${age}</td></tr>`);
    
    });

    const wait = (time) => {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        });
    }

    $('#rata').click(function () {
        console.log("calculation start");
        const totalAge = students.reduce((acc, { age }) => acc + age, 0);
        const hasil = totalAge / students.length;
        wait(5000)
        .then(res => console.log("age is " + hasil, res))
        .catch(console.log);
        wait(2000)
        .then(() => {
            console.log("second call started");
            console.log("second call finished");
        })
        wait(4000)
        .then(() => {
            console.log("third call started");
        })
        .then(() => console.log("third call finished"))
    });
