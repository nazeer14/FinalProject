const maniDiv = document.getElementById("main");
//function fetchData()
// {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//     .then((res)=> res.json())
//     .then((data) => console.log(data))
//     .catch((err)=> console.log(err))
// }
async function fetchData(){
    try{
        const res= await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await res.json();
        console.log(data);
        displayData(data)
    }
    catch(err){
        console.log(err)
    }

}
fetchData()
function displayData(){
    const setup= document.createElement('h1')
    setup.textContent=data.setup;
    const punchline = document.createElement('p')
    punchline.textContent=data.punchLine()
    maniDiv.append(setup,punchline)

}
