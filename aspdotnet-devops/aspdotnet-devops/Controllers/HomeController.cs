using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace aspdotnet_devops.Controllers
{
    public class HomeController : Controller
    {
    
        public ActionResult Index()
        {
            return View();
        }

        //Adding the testing comments
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        //Adding the testing comments
        public ActionResult Contact()
        {
        /////
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
