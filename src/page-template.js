const buildTeam = (team) => {
    const cardsArray = []

    const buildManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
          ${manager.name}
          ICON Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.email}</li>
          <li class="list-group-item">${manager.email}</li>
          <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
      </div>
      `
    }

    const buildEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
          ${engineer.name}
          ICON Engineer
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.id}</li>
          <li class="list-group-item">${engineer.email}</li>
          <li class="list-group-item">${engineer.email}</li>
          <li class="list-group-item">${engineer.github}</li>
        </ul>
      </div>
      `
    }

    const buildIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
          ${intern.name}
          ICON Intern
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.email}</li>
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
    </head>
    <body>
        ${buildTeam(team)}
    </body>
    </html>
     `
 }