const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

/* thoughts:
0. if the input is empty put out alert 
1. create a regex that will confirm if a number is in the correct format
	a. is this really the whole thing? both seems too easy and too hard lol 
	b. do I need to creat a different regex for each formatting case? 
	c. is it worth cleaning up the input first just to make sure there are the right amount of numbers? 
2. use the regex to put out the alert if it isn't formatted correctly 
3. clean up the string so it's just numbers
4. if it's 11 digits long then the first digit needs to be 1 to match the US global code
5. if it is formatted correctly, add a child to the resultsDIV with the text "Valid US number: " + input.value 
6. if it isn't formatted correctly, add a child to the resultsDiv with the text "Invalid US number: " + input.value 
7. clear button needs to remove all the child Div elements from the restults div 

  */

const regexAreaCode1 = /^\([0-9]{3}\)\s{0,1}[0-9]{3}(-|\s{0,1})[0-9]{4}$/; /*checks variations of area code in parenthesis */
const regexAreaCode2 = /^[0-9]{3}(-|\s{0,1})[0-9]{3}(-|\s{0,1})[0-9]{4}$/; /*checks area code no parenthesis */
const regexCountryCode1 = /^1\s{0,1}\([0-9]{3}\)\s{0,1}[0-9]{3}(-|\s{0,1})[0-9]{4}$/; /*checks for country code only matches with 1, and parenthasis */
const regexCountryCode2 =  /^1\s{0,1}[0-9]{3}(-|\s{0,1})[0-9]{3}(-|\s{0,1})[0-9]{4}$/; /* country code but no parenthesis */

const validPhoneNumbers = [regexAreaCode1, regexAreaCode2, regexCountryCode1, regexCountryCode2];

function isValid (num) {
	return validPhoneNumbers.some((regex) => regex.test(num));
}

function clearResults () {
	 userInput.value = "";
	 resultsDiv.innerHTML = "";
}

/* need to either figure out append child, add innerHTML maybe?
I think I can just update the innerHTML of the resultsDiv and use the += to continually update it, need to change flex on restults so that its normal column
but starts at flex-end */


function checkUserInput (input) {
	if (input === "") {
		alert("Please provide a phone number") 
	} else if (isValid(input)) {
		resultsDiv.innerHTML += `<p class="results">Valid US number: ${input}</p>`;
	} else {
		resultsDiv.innerHTML += `<p class="results">Invalid US number: ${input}</p>`
	}
	userInput.value = "";
}

/* for the clear function I think I can just set the innerHTML of the resutlsDiv to an empty string and that will clear it */

checkBtn.addEventListener("click", () => {checkUserInput(userInput.value)});

clearBtn.addEventListener("click", () => {clearResults()});