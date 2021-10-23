const buildTeam = (team) => {
    const cardsArray = []

    const buildManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
        <h3>${manager.name}</h3>
        <h5>ICON Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.email}</li>
          <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
      </div>
      `
    }

    const buildEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
        <h3>${engineer.name}</h3>
        <h5>ICON Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.id}</li>
          <li class="list-group-item">${engineer.email}</li>
          <li class="list-group-item">${engineer.github}</li>
        </ul>
      </div>
      `
    }

    const buildIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3>${intern.name}</h3>
          <h5>ICON Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.email}</li>
          <li class="list-group-item">${intern.school}</li>
        </ul>
      </div>
      `
    }

    cardsArray.push(team.filter(employee=> employee.getRole()=== "Manager")
                    .map(manager=> buildManager(manager)))

    cardsArray.push(team.filter(employee=> employee.getRole()==="Engineer")
                    .map(engineer=>buildEngineer(engineer)).join(""))
    
    cardsArray.push(team.filter(employee=> employee.getRole()==="Intern")
                    .map(intern=>buildIntern(intern)))

    return cardsArray.join("")
}

 module.exports = team =>{
     return`
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Layout</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="style.css">
    </head>
    <body>
        <header class = "bg-danger text-white w-auto text-center" style="height: 9rem">
            <h1 class = "pt-5 mb-0">My Team</h1>
        </header>
        ${buildTeam(team)}
    </body>
    </html>
     `
 }