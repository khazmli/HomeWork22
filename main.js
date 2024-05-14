
// task 1 // 
function kokHesabla(eded) {
    let a = Math.sqrt(eded);

    if (!isNaN(a) && a !== Infinity) {
        console.log(`Daxil etdiyiniz ədədin kökaltı ${a}`);
    } else {
        console.log(`${a} Ədədindən kökalti cixmadı`);
    }
};

kokHesabla(12);


// Task 2 // 


let samit = 0;
let sait = 0;

function samitSaitTap(str) {

    for (let i = 0; i < str.length; i++) {

        let herf = str[i];
        let boslug = 0;
        switch (herf) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                sait++;
            case " ":
                boslug++;
                break;

            default: samit++;
                break;
        }

    }

    console.log(`${sait} sait herf ve ${samit} samit herf var`);

}
samitSaitTap("Togrul Necesen");

// task 3 // 

function stringCevir(array) {
    let textString = ""
    for (let i = 0; i < array.length; i++) {
        textString = textString + array[i];   
    }
    console.log(textString);
        return textString;
}
stringCevir(["sa", 5 ,"lam"]);