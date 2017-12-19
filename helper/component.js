module.exports = {
  breadcrumbs : url =>{
    let
      baseArray = url.split('/'),
      breadcrumbs = baseArray.slice(1)
      return breadcrumbs
  }
}