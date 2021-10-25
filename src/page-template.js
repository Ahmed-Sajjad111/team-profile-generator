const buildTeam = (team) => {
    const cardsArray = []

    const buildManager = (manager) => {
        return `
        <div class="card mt-4 mx-4" id="employee-card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
        <h3>${manager.name}</h3>
        <h5><i class="fas fa-mug-hot"></i> Manager</h5>
        </div>
        <div class ="card-backgrounds">
            <ul class="list-group list-group-flush mx-3 my-4">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
      </div>
      `
    }

    const buildEngineer = (engineer) => {
        return `
        <div class="card mt-4 mx-4" id="employee-card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
        <h3>${engineer.name}</h3>
        <h5><i class="fas fa-glasses"></i> Engineer</h5>
        </div>
        <div class ="card-backgrounds">
        <ul class="list-group list-group-flush mx-3 my-4">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li class="list-group-item">Github: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
      </div>
      `
    }

    const buildIntern = (intern) => {
        return `
        <div class="card mt-4 mx-4" id="employee-card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3>${intern.name}</h3>
          <h5><i class="fas fa-user-graduate"></i> Intern</h5>
        </div>
        <div class ="card-backgrounds">
        <ul class="list-group list-group-flush mx-3 my-4">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
      </div>
      `
    }

    cardsArray.push(team.filter(employee=> employee.getRole()=== "Manager")
                    .map(manager=> buildManager(manager)))

    cardsArray.push(team.filter(employee=> employee.getRole()==="Engineer")
                    .map(engineer=>buildEngineer(engineer)).join(""))
    
    cardsArray.push(team.filter(employee=> employee.getRole()==="Intern")
                    .map(intern=>buildIntern(intern)).join(""))

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
        <script src="https://kit.fontawesome.com/262643332d.js" crossorigin="anonymous"></script>
        <link rel="Stylesheet" href="style.css">
    </head>
    <body>
        <header class = "bg-danger text-white w-auto text-center mb-5" style="height: 9rem">
            <h1 class = "pt-5 mb-0">My Team</h1>
        </header>
        <div id="team-container" class="mx-5 px-5">
            <div class ="d-flex flex-wrap justify-content-center">
                ${buildTeam(team)}
            </div>
        </div>
    </body>
    </html>
     `
 }