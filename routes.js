export function newRoute(r,calback){
    const response = {
       send: function(s){
           document.body.innerHTML += s
       },
       url:location.href.replace(r,"")
    }

    if (document.URL.search(r) > 0){
        calback(response)
    }

    return {
        isInRoute : function(){
            var returns = false
            if (document.URL.search(r) > 0){
                returns = true
            }
            return (returns)
        }
    }
}