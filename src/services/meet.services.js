import axios from 'axios';

const API = 'https://015898a5.ngrok.io/'

// var config = {
//   headers: {
//     'Content-Type': 'application/json',
//     'HTTP-COMPANY-TOKEN': 'UCKTA95Jda1JDq1cgq5VrYSGDBX7XxbVW1vDCfijnViJabPMko'
//   }
// };

/*GetVacants */
export const getVacantsServices = () => {
  return  axios.post(`${API}/create-meeting.php`, { email:'jfvilladiego3@gmail.com', date: '2020-05-05', hour: '10:56:00'  } )
}
