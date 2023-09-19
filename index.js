const getAllDonuts = async() => {
    return fetch(`https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json`)
    .then(response => response.json())

}

const fetchAsyncData = async () => {
    try{
        const responseData = await getAllDonuts();
        const dataDonuts = responseData["items"].item;

       mostSugarDonuts(dataDonuts);
       mostIronDonuts(dataDonuts);
       mostProteinDonuts(dataDonuts);
       minFibreDonuts(dataDonuts); 
       listDonutsAndCalories(dataDonuts); 
       listDonutsAndCarbohydrates(dataDonuts);
       donutsMediumCalories(dataDonuts);
       sumFatSaturated(dataDonuts);
       listDonutsAndBatters(dataDonuts);
       listDonutsAndToppings(dataDonuts);
       changeSaturatedDonut(dataDonuts);
       changeAmountCarbohydrateDonut(dataDonuts);
       createNewVitamine(dataDonuts);
       changeDailyValueDonut(dataDonuts);
       createAlergenAtribute(dataDonuts);
   
    }catch(error){
        console.log(error.message)
    }
}
fetchAsyncData();

const mostSugarDonuts = (dataDonuts) => {

    let mostSugarDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars = 
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.replace(/[^\d]/g, '')      
    })
    
    mostSugarDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars 
        - x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        console.log("1 --------------------------------------------------------------------------------------");
        console.log(`El donut con más azúcar es :  ${mostSugarDonut[0].name}`);

}

const mostIronDonuts = (dataDonuts) => {

    let mostIronDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.vitamines[3].percent = 
        donut.nutrition_facts.nutrition.vitamines[3].percent.replace(/%/g, '')      
    })
    
    mostIronDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.vitamines[3].percent 
        - x.nutrition_facts.nutrition.vitamines[3].percent);
         console.log(`El donut con más hierro es :  ${mostIronDonut[0].name}`);
}

const mostProteinDonuts = (dataDonuts) => {

    let mostProteinDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.proteine = 
        donut.nutrition_facts.nutrition.proteine.replace(/[^\d]/g, '')      
    })
    
    mostProteinDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.proteine
        - x.nutrition_facts.nutrition.proteine);
        console.log(`El donut con más proteina es :  ${mostProteinDonut[0].name}`);
}

const minFibreDonuts = (dataDonuts) => {

    let minFibreDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre = 
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.replace(/[^\d]/g, '')      
    })
    
    minFibreDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre
        + x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre);
     
    const minFibreDonuts = dataDonuts[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;

    const minFibreDonutsArray = dataDonuts.filter(donut =>
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre === minFibreDonuts);

        console.log(`Los donuts con menos fibra son:  ${minFibreDonutsArray.map(donut => donut.name).join(', ')}`);   
        console.log("2 --------------------------------------------------------------------------------------");
}

const listDonutsAndCalories = (dataDonuts) => {
    dataDonuts.forEach(donut => {
        const calories = donut.nutrition_facts.nutrition.calories;
        console.log(`${donut.name} --> Calorías: ${calories}`);
    });
    console.log("--------------------------------------------------------------------------------------");
}

const listDonutsAndCarbohydrates = (dataDonuts) => {

    dataDonuts.forEach(donut => {
        const carbohydrate = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
        const sugar = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        const dailyValue = donut.nutrition_facts.nutrition.carbohydrate.daily_value;
        const amount = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount;
        console.log(`${donut.name} --> ValorDiario: ${dailyValue} --> Cantidad: ${amount} --> Fibra: ${carbohydrate}g --> Azucar: ${sugar}g`);
    })
    console.log("--------------------------------------------------------------------------------------");
}

const donutsMediumCalories = (dataDonuts) => {
    
    let totalCalories = 0;

    dataDonuts.forEach(donut => {
        const calories = donut.nutrition_facts.nutrition.calories;
        totalCalories += calories;
    });

    const mediumCalories = totalCalories / dataDonuts.length;
    console.log(`La media de calorías de todos los donuts es: ${mediumCalories}`);
    console.log("--------------------------------------------------------------------------------------");
}

const sumFatSaturated = (dataDonuts) => {
    
    let totalSaturatedFat = 0;

    dataDonuts.forEach(donut => {
        const saturatedFat = donut.nutrition_facts.nutrition.fat.fat_type.saturated;
        totalSaturatedFat += parseFloat(saturatedFat.replace(/[^\d.]/g, ''));
    });

    console.log(`La suma de grasas saturadas de todos los donuts es: ${totalSaturatedFat}g`);
    console.log("3  --------------------------------------------------------------------------------------");
}


const listDonutsAndBatters = (dataDonuts) => {

    dataDonuts.forEach(donut => {
        const batters = donut.batters.batter; 
   
        const batterTypes = batters.map(batter => batter.type);
            console.log(`${donut.name} --> Tipos de Masas: ${batterTypes.join(", ")}`);
        
    });
    console.log("--------------------------------------------------------------------------------------");
}

const listDonutsAndToppings = (dataDonuts) => {
    
    dataDonuts.forEach(donut => {
        const toppings = donut.topping; 
   
        const toppingTypes = toppings.map(topping => topping.type);
            console.log(`${donut.name} --> Tipos de Toppings: ${toppingTypes.join(", ")}`);     
    });
    console.log("5--------------------------------------------------------------------------------------");
}

const changeSaturatedDonut = (dataDonuts) => {
    dataDonuts.forEach(donut => {
         let newTrans = donut.nutrition_facts.nutrition.fat.fat_type.trans; 
         if (donut.nutrition_facts.nutrition.cholesterol.amount > 10) {
           newTrans = 3.2+"g"; 
         }
         console.log(`${donut.name}: ${newTrans}`);
     });
     console.log("--------------------------------------------------------------------------------------");
 }

 const changeAmountCarbohydrateDonut = (dataDonuts) => {
    dataDonuts.forEach(donut => {
         let newAmount = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount;
         if (donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars > 50) {
           newAmount = 42+"g"; 
         }
         console.log(`${donut.name}: ${newAmount}`);
     });
     console.log("--------------------------------------------------------------------------------------");
 }

const createNewVitamine = (dataDonuts) => {

    dataDonuts.forEach(donut => {
        if (donut.name === "Magic Fusion") {
           
            const newVitamin = {
                type: "Nitacina",
                percent: "0%", 
            };
            donut.nutrition_facts.nutrition.vitamines.push(newVitamin);
            console.log(donut.name, donut.nutrition_facts.nutrition.vitamines);
        }
        
    });
    console.log("--------------------------------------------------------------------------------------");
}

const changeDailyValueDonut = (dataDonuts) => {


    dataDonuts.forEach(donut => {

        const newDailyValue = donut.nutrition_facts.nutrition.carbohydrate.daily_value = 53+"%";
        console.log(`${donut.name} --> Daily_value: ${newDailyValue}`);
    })
    console.log("--------------------------------------------------------------------------------------");
 }

const createAlergenAtribute = (dataDonuts) => {

    dataDonuts.forEach(donut => {
        if (donut.name === "Relaxing Alchemy") {
           
            const newAlergen = {
                id: "1006",
                type: "Gluten-Free",
            };
 
            donut.alergen = newAlergen;

            console.log(`${donut.name} --> Alergen:` ,donut.alergen);
        }
    });
    console.log("--------------------------------------------------------------------------------------");
}

       