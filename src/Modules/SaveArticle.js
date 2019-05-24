import axios from 'axios'

const apiUrl ='http://localhost:3000'

const saveArticle = async () => {

  const path = apiUrl + '/api/v1/articles';
  return new Promise ((resolve, reject) => {
    axios.post(path, {
      params: { article: {
        title: title,
        ingress: ingress,
        body: body,
        image: image,
        written_by: written_by
      }}
    } , {
        headers: headers
      })
      .then(response => {
        resolve
      })
    })
}


export default saveArticle