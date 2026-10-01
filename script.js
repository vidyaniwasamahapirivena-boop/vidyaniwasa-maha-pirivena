// Website loaded message
console.log("කෑ/විද්‍යානිවාස මහ පිරිවෙන වෙබ් අඩවිය ආරම්භ විය.");

// Navigation links
document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Page section:", link.textContent);

    });

});