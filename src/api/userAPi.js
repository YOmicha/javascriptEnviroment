import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl =  getBaseUrl();

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}

function onSuccess(response){
  return response.json();
}
