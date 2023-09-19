export const listDonutsAndBatters = (dataDonuts) => {

    dataDonuts.forEach(donut => {
        const batters = donut.batters.batter; 
   
        const batterTypes = batters.map(batter => batter.type);
            console.log(`${donut.name} --> Tipos de Masas: ${batterTypes.join(", ")}`);
        
    });
    console.log("--------------------------------------------------------------------------------------");
}

export const listDonutsAndToppings = (dataDonuts) => {
    
    dataDonuts.forEach(donut => {
        const toppings = donut.topping; 
   
        const toppingTypes = toppings.map(topping => topping.type);
            console.log(`${donut.name} --> Tipos de Toppings: ${toppingTypes.join(", ")}`);     
    });
    console.log("5--------------------------------------------------------------------------------------");
}