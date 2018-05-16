using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [Produces("application/json")]
    [Route("api/Employee")]
    public class EmployeeController : Controller
    {
        private static List<Employee> employee_list = new List<Employee>
        {
            new Employee{EmployeeID = 1, Name = "John Smith" , Title = "Manager"},
            new Employee{EmployeeID = 2, Name = "Edward Burger" , Title = "Programmer",},
            new Employee{EmployeeID = 3, Name = "Anthony Radd" , Title = "Accountant"},
            new Employee{EmployeeID = 4, Name = "Sara Style" , Title = "Secratary"},
        };

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return employee_list;
        }

        [HttpPost]
        public Employee Post([FromBody]Employee value)
        {
            employee_list.Add(value);
            return value;
        }
    }
}