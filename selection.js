async function selectionSort(){
    console.log("Selection sort");
    const bar=document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
        let minValue=i;
        bar[i].style.background="#9B7EDE";//i bar where swap will happen is purple
        for (let j = i+1; j < bar.length; j++) {
            bar[j].style.background="#001F54"; //current j bar is blue
            
            await wait(200);

            if(parseInt(bar[j].style.height) < parseInt(bar[minValue].style.height)){
                if(minValue!=i){
                    bar[minValue].style.background="black";//old min is black
                }
                
                minValue=j;
                bar[minValue].style.background="#A62639";//new min red bar
            }
            else{
                bar[j].style.background="black";
            }
        }
        // await wait(200);
        //swap
        let temp=bar[i].style.height;
        bar[i].style.height=bar[minValue].style.height;
        bar[minValue].style.height=temp;
        bar[minValue].style.background="black";
        bar[i].style.background="#08605F";
    }
}