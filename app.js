const input = document.getElementById('input');
const button = document.getElementById('button');
const span = document.getElementById('span');

button.addEventListener('click', palindrome);

function palindrome() {
    if (!input.value) {
        alert('Please Enter Something')
    } else {
        /* it removes special characters, spaces and make lowercase*/
        let removeChar = input.value.replace(/[^A-Z0-9]/ig, "").toLowerCase();

        /* it reverses removeChar for comparison*/
        let checkPalindrome = removeChar.split('').reverse().join('');

        /* it Checks to see if input.value (USer Input) is a Palindrome or not*/
        if (removeChar === checkPalindrome) {
            span.innerText = `Yes, ${input.value} is a Palindrome`;
        } else {
            span.innerText = `No, ${input.value} is not a Palindrome`;
        }
    }
    input.value = '';
}