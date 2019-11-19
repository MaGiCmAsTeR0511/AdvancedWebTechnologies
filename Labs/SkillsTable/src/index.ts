import * as $ from 'jquery';

$.ajax({
  type: 'GET',
  url: 'http://127.0.0.1:3001/',
  contentType: 'application/json; charset=utf-8',
  crossDomain: true,
  dataType: 'json'
})
  .then(data => console.log('Data received from jQuery: ', data))
  .catch(err => console.log('Error received from jQuery: ', err));
