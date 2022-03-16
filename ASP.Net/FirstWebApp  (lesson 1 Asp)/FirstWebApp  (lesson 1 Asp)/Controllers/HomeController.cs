using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApp___lesson_1_Asp_.Controllers
{
    public class HomeController:Controller
    {
        public string Test()
        { 
            return "Test Merc";
        }
        public string Salam()
        {
            return   "Salamlama";
        }
    }
}
