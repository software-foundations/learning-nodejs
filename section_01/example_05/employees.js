const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const chineses = employees => employees.pais == "China"

const women = employees => employees.genero == "F"

const lowestSalary = (employee, currentEmployee) => {

    return employee.salario < currentEmployee.salario ? employee : currentEmployee
}

axios.get(url).then(response => {
    const employees = response.data

    console.log(employees)

    const employee = employees
        .filter(chineses)
        .filter(women)
        .reduce(lowestSalary)

    console.log(employee)
})