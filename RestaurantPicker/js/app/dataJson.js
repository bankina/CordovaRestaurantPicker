var app = app || {};

document.addEventListener("deviceready", function () {
        
                (function getData() {
                $.getJSON('data/data.json', function(data) {
                  var items = [];
                
                  $.each(data, function(key, val) {
                    items.push('<li>' );
                    items.push( val.restautant );
                    items.push(' <i>' );  
                    items.push( val.height );
                    items.push(' </i>' );
                    items.push('</li>');
                  });
                
                  $('#restaurants-view > ul').html( items.join(''));
                        
                        
                });
            }(app));
    
            
});