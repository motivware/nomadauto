async function fetchVINAPI() {
  await fetch('http://api.carmd.com/v3.0/decode?vin=' + document.getElementById("vinlookup").value, {
    method: 'GET', 
    credentials: 'include',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
      "authorization": "Basic NzQ0NzdhYjMtMmU4OC00YmNhLThmMjMtN2YzZjBkN2ZmMDc1",
      "partner-token": "d57aa1f80cc547a6bf227bbf7218eb61"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(data){
      console.log(data.data.year)
      document.getElementById('vin').value = document.getElementById('vinlookup').value;
      document.getElementById('make').value = data.data.make;
      document.getElementById('model').value = data.data.model;
      document.getElementById('year').value = data.data.year;
      document.getElementById('engine').value = data.data.engine;
      document.getElementById('trim').value = data.data.trim;
      document.getElementById('manufacturer').value = data.data.manufacturer;
      document.getElementById('transmission').value = data.data.transmission;
  });
}
;
