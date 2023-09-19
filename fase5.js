export const changeSaturatedDonut = (dataDonuts) => {
    dataDonuts.forEach(donut => {
         let newTrans = donut.nutrition_facts.nutrition.fat.fat_type.trans; 
         if (donut.nutrition_facts.nutrition.cholesterol.amount > 10) {
           newTrans = 3.2+"g"; 
         }
         console.log(`${donut.name}: ${newTrans}`);
     });
     console.log("--------------------------------------------------------------------------------------");
 }

 export const changeAmountCarbohydrateDonut = (dataDonuts) => {
    dataDonuts.forEach(donut => {
         let newAmount = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount;
         if (donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars > 50) {
           newAmount = 42+"g"; 
         }
         console.log(`${donut.name}: ${newAmount}`);
     });
     console.log("--------------------------------------------------------------------------------------");
 }

export const createNewVitamine = (dataDonuts) => {

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

export const changeDailyValueDonut = (dataDonuts) => {


    dataDonuts.forEach(donut => {

        const newDailyValue = donut.nutrition_facts.nutrition.carbohydrate.daily_value = 53+"%";
        console.log(`${donut.name} --> Daily_value: ${newDailyValue}`);
    })
    console.log("--------------------------------------------------------------------------------------");
 }

export const createAlergenAtribute = (dataDonuts) => {

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