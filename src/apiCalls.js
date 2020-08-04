export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}


export const postUrl = (title, urlToShorten) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST', 
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      urlToShorten
    })
  })
}

// export const postReservation = (name, date, time, number) => {
//   return fetch('http://localhost:3001/api/v1/reservations', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name,
//       date,
//       time,
//       number
//     })
//   })
// }