const { parse } = require("dotenv")

module.export = (baseUurl) => (req, res) => {
    const parsedUrl = new Url(req.url, baseUrl)
    const params = {}
    parsedUrl.searhParams.forEach( (value, key) => params[key] =  value);
    req.pathname = parsedUrl.pathname
    req.params = params;
}