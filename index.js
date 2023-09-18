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
       mostFibreDonuts(dataDonuts); 
       listDonutsAndCalories(dataDonuts); 
       listDonutsAndCarbohydrates(dataDonuts);
       donutsMediumCalories(dataDonuts);
   
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

const mostFibreDonuts = (dataDonuts) => {

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
}

const listDonutsAndCalories = (dataDonuts) => {
    dataDonuts.forEach(donut => {
        const calories = donut.nutrition_facts.nutrition.calories;
        console.log(`${donut.name} --> Calorías: ${calories}`);
    });
}

const listDonutsAndCarbohydrates = (dataDonuts) => {

    dataDonuts.forEach(donut => {
        const carbohydrate = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
        const sugar = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        const dailyValue = donut.nutrition_facts.nutrition.carbohydrate.daily_value;
        const amount = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount;
        console.log(`${donut.name} --> ValorDiario: ${dailyValue} --> Cantidad: ${amount} --> Fibra: ${carbohydrate}g --> Azucar: ${sugar}g`);
    })
}

const donutsMediumCalories = (dataDonuts) => {
    
    let totalCalories = 0;

    dataDonuts.forEach(donut => {
        const calories = donut.nutrition_facts.nutrition.calories;
        totalCalories += calories;
    });

    const mediumCalories = totalCalories / dataDonuts.length;
    console.log(`La media de calorías de todos los donuts es: ${mediumCalories}`);
}
        // console.log(sugar.replace(/[^\d]/g, ''));
        //console.log(dataDonuts.items.item[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)