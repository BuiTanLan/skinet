using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController(StoreContext context) : BaseApiController
{
    [HttpGet("notfound")]
    public ActionResult GetNotFoundRequest()
    {
        var thing = context.Products.Find(42);
        if (thing is null)
        {
            return NotFound(new ApiResponse(404));
        }
        return Ok();
    }
    [HttpGet("servererror")]
    public ActionResult GetServerError()
    {
        var thing = context.Products.Find(42);

        var thingToReturn = thing.ToString();

        return Ok();
    }

    [HttpGet("badrequest")]
    public ActionResult GetBadRequest()
    {
        return BadRequest(new ApiResponse(400));
    }

    [HttpGet("badrequest/{id}")]
    public ActionResult GetNotFoundRequest(int id)
    {
        return Ok();
    }
}
