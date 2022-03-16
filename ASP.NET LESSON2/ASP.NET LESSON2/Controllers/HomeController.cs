using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ASP.NET_LESSON2.Controllers
{
    public class HomeController : Controller
    {
        //public ContentResult Index()
        //{
        //    ContentResult contentResult = new ContentResult();
        //    contentResult.Content = "p224 content";
        //    contentResult.ContentType = "application/json";
        //    contentResult.StatusCode = (int?)HttpStatusCode.OK;

        //    return contentResult;
        //}

        //public JsonResult Index() {
        //    JsonResult jsonResult = new JsonResult("{name:Mesud,surname:Mirzezade}");
        //    return jsonResult;
        //}

        //public FileResult Index()
        //{
        //    FileResult fileResult = new FileResult();
        //    return fileResult;
        //}

        //public ViewResult Index()
        //{
        //    ViewResult viewResult = new ViewResult();
        //    viewResult.ViewName = "test";
        //    return viewResult;
        //}

        //    public void Index()
        //    //{
        //    //    ViewResult view = new ViewResult();
        //    //    JsonResult jsonResult = new JsonResult();
        //    //    ContentResult contentResult = new ContentResult();
        //    //    FileResult fileResult = new FileResult();

        //}
        //public ActionResult Index()
        //{
        //    if (false)
        //    {
        //        return new ViewResult{ViewName = "test"};
        //    }
        //    else if(false)
        //    {
        //        return new ContentResult { Content = "022" };
        //    }
        //    return NotFound("error");
        //}

        public IActionResult Index(int? id,string name)
        {
            //if (id != null)
            //{
            //    if (id > 0)
            //    {
            //        return Content($"a sifidan boyukdur {name}");
            //    }
            //    return Content("a KICIKDIR");
            //}
            ViewData["Name"]="Hamid";
            ViewData["SurName"] = "Hamid";

            return View(); 
        }
        public IActionResult About()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
    }
}
