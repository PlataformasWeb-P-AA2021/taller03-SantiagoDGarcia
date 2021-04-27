$(document).ready(function() {
      var url = "https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json";

      $( ".generarbtn" ).click(function() {
            // Funcion del boton
            $.ajax({
                  dataType: 'json',
                  url: url 
            }).then(function(data) {
                  var info ="";
                  for(var i=0; i<data.length; i++){
                        //console.log(data[i].Languages);
                        info = "<tr> <td>"+ data[i]["CLDR display name"]   +"</td> "+
                                          "<td>"+ data[i]["Capital"]   +"</td> "+
                                          "<td>"+ data[i]["FIPS"]   +"</td> "+
                                          "<td>"+ data[i]["FIFA"]   +"</td> "+
                                          "<td>"+ data[i]["Continent"]   +"</td> "+
                                          "<td>"+ data[i]["Languages"]   +"</td> "+
                                          "<td>"+ data[i]["Geoname ID"]   +"</td> "+
                                          "<td>"+ data[i]["DS"]   +"</td> "+
                                    "</tr>"+ info;
                  }
                  $('table').append(info);
            }) 
      }); 
});