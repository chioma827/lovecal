function calculateLovePercentage(name1, name2) {  
    const combinedNames = name1.toLowerCase() + name2.toLowerCase();  // Combine names and convert to lowercase  
    let loveScore = 0;  // Start from 0  

    // Iterate over each character of the combined names and sum their char codes  
    for (let i = 0; i < combinedNames.length; i++) {  
        loveScore += combinedNames.charCodeAt(i);  
    }  

    // Normalize score to a percentage between 0 and 100  
    const lovePercentage = loveScore % 101;   

    return lovePercentage;  
}  

document.getElementById("calculateBtn").addEventListener("click", function() {  
    const name1 = document.getElementById("name1").value.trim();  
    const name2 = document.getElementById("name2").value.trim();  

    if (name1 === "" || name2 === "") {  
        alert("Please enter both names.");  
        return;  // Just exit if names are not provided  
    }  

    const lovePercentage = calculateLovePercentage(name1, name2);  
    const resultText = `Your love score is ${lovePercentage}%!`;  

    document.getElementById("resultText").innerText = resultText;  
    document.getElementById("result").classList.remove("hidden");  
});  

