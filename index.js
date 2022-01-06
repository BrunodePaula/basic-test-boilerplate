function update() {
  var selectSunlight = document.getElementById('sunlight');
  var selectWater = document.getElementById('water');
  var selectChew = document.getElementById('chew');
  var sunlight = selectSunlight.options[selectSunlight.selectedIndex].value;
  var water = selectWater.options[selectWater.selectedIndex].value;
  var chew = selectChew.options[selectChew.selectedIndex].value;
  console.log(sunlight);
  console.log(water);
  console.log(chew);
  console.log('aiaiaiaiia');

  let dados = { sunlight, water, chew };
  consultaApi(dados);
  // if (sunlight & water & chew !== null) {
  // } else {
  //   console.log('deu ruim');
  // }
}

function consultaApi({ sunlight, water, chew }) {
  console.log(sunlight, water, chew);
  let url;
  if (sunlight | water | chew !== '') {
    url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunlight}&water=${water}&pets=${chew}`;
  }

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
      document.getElementById('teste').innerHTML = '<ol><li>html data</li></ol>';
    })
    .catch(function (error) {
      console.log(error);
    });
};