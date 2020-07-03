const russianNames = $('#russianNames')
const maryusRecording =$('#maryusRecording')

function buildHtmlList(array,list) {
  for (i = 0; i < array.length; i++) {
    const name = array[i].name;
    const count = array[i].count;

    $(list).append(
      `<div class="row">
      <div class="col-sm-4">${i + 1}</div>
      <div class="col-sm-4">${name}</div>
      <div class="col-sm-4">${count}</div>
    </div>`
    )
  }
}

buildHtmlList(russianNamesArray, russianNames);
buildHtmlList(remindMaryusToRecord, maryusRecording);
// console.log(russianNames[0].name)