
        const html = 
        `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
      </head>
      <body>
      <div class="card" style="width: 18rem;">
      
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text"><p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data.id}</li>
          <li class="list-group-item"><a href="mailto:${data.mail}" class="card-link">${data.mail}</a></li>
          <li class="list-group-item">${data.officenumber}</li>
        </ul>
       
      </div>
        
      </div>
      </body>
      </html>`
      
      
      
      fs.writeFile('start.html', html, (err) =>
            err ? console.log(err) : console.log('Success!')
          );