const russianNames = $('#russianNames')

// Array is in russianNames.js
for (i = 0; i < russianNameArray.length; i++) {
  const name = russianNameArray[i].name;
  const count = russianNameArray[i].count;

  $(russianNames).append(
    `<div class="row">
      <div class="col-sm-4">${i + 1}</div>
      <div class="col-sm-4">${name}</div>
      <div class="col-sm-4">${count}</div>
    </div>`
  )
}

// console.log(russianNames[0].name)