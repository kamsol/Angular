using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    public class Employee
    {

        public int EmployeeID { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public int Salary { get
            {
                
                switch (Title)
                {
                    case "Manager":
                        return 60000;
                    case "Accountant":
                        return 50000;
                    case "Programmer":
                        return 55000;
                    case "Secratary":
                        return 40000;
                    default:
                        return 0;
                }

            }
        }
    }
}
