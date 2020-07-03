// List Population 

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

// Issac Population 

const issacList = $('#issacList');
const issacCount = 10;


function buildIssacList (count) {

  let issacImgList = ``;
  for (i = 0; i < count; i++){
    issacImgList = issacImgList + `<img src="./assets/images/mutemics.jpg" alt="Issac" />`
  }

  issacList.append(
    `<h1>Issac Saying "Mute Your Mics!"</h1>
    <div class="issacPics">
      ${issacImgList}
    </div>
    <h5>${count} times</h5>`
  )
}

buildIssacList(issacCount);