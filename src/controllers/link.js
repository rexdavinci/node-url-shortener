import Link from '../models/UrlShorten';
module.exports = {
  redirectLink: async (req, res)=>{
    const {code} = req.params;
    const foundLink = await Link.findOne({urlCode: code})
    if(foundLink){
      const actualLocation = foundLink.long_url
      res.redirect(actualLocation)
    }else{
      res.status(400).json({error: 'Link does not exists'})
    }
  }
}
