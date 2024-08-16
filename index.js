const input = document.getElementById("input")


function reverseString(str) {

  return str.split("").reverse().join("") //this is a new thing i have learnt which is using split function without anything will give each and every letter involved in the string

}

function check() {

  const value = input.value
  const reverse = reverseString(value)

  if (value === reverse) {
    alert("PALINDROME")
  }
  else {
    alert("Nope")
  }
}
