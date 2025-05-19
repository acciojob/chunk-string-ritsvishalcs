function stringChop(str, size) {
  // Handle null or empty string
  if (str === null || str === "") {
    return [];
  }

  size = Number(size); // Convert size to a number

  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
