fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response: ", data);
    // document.body.innerHTML = data;
    data.forEach((launchObj) => {
        const patchImage = launchObj?.links?.patch?.small;
        const imgElement = document.createElement("img");
     
        if(patchImage !== null){
            imgElement.setAttribute("src", patchImage);
            imgElement.setAttribute("width", 200);
            document.body.appendChild(imgElement);
        }
       
      });

  })
  .catch( (err) => console.log(err));