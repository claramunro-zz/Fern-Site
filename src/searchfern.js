export class SearchFern {
  returnTheFern() {
    return new Promise((resolve, reject) => {

      let request = new XMLHttpRequest();
      let url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;
      
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
          alert("Error with the API request");
        }
      };

      
      request.open("GET", url, true);
      request.send();
    });
  }
}