
function importCodeSample(){
  $('[data-include-html]').each(function(){

      // pega a url
      var url = $(this).attr('data-include-html');

      // faz o request
      var request = $.ajax({
          type        : "GET",
          url         : url,
          crossDomain : true,
      });

      var self = this;
      
      request.done(function(html){
        
        // pega o código entre a tag body
        var m = html.match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i);
        var bodytext = m[1];

        // coloca na primeira aba
        $(self).find('.js-tab-view').html(bodytext);

        // faz o highligth do código
        var code = Prism.highlight(bodytext, Prism.languages.markup, 'markup');
        
        // coloca na segunda aba
        $(self).find('.js-tab-code pre').html(code)

      })
  });  
}


