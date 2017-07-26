import axios from 'axios';

export const fetchDummyUsers = (callback) => {
  axios.get('https://gist.githubusercontent.com/hafeez1042/a220842fa7cd564164d7202521b4aa18/raw/b5a29d9b152ad87d63e180cedb86181d63380c5a/gistfile1.txt')
  .then(reponse => {
    callback(reponse.data);
  });
};
