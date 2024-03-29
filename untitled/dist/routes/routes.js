"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constructor
 *
 * @class BaseRoute
 */
var BaseRoute = /** @class */ (function () {
    /**
     * Constructor
     *
     * @class BaseRoute
     * @constructor
     */
    function BaseRoute() {
        //initialize variables
        this.title = "My New TypeScript Web app";
        this.scripts = [];
        this.coursestask = [];
    }
    /**
     * Add a JS external file to the request.
     *
     * @class BaseRoute
     * @method addScript
     * @param src {string} The src to the external JS file.
     * @return {BaseRoute} Self for chaining
     */
    BaseRoute.prototype.addScript = function (src) {
        this.scripts.push(src);
        return this;
    };
    /**
     * Render a page.
     *
     * @class BaseRoute
     * @method render
     * @param req {Request} The request object.
     * @param res {Response} The response object.
     * @param view {String} The view to render.
     * @param options {Object} Additional options to append to the view's local scope.
     * @return void
     */
    BaseRoute.prototype.render = function (req, res, view, options) {
        //add constants
        res.locals.BASE_URL = "/";
        //add scripts
        res.locals.scripts = this.scripts;
        //add coursestask
        res.locals.coursestask = this.coursestask;
        //add title
        res.locals.title = this.title;
        //render view
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=routes.js.map