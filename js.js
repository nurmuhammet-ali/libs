function addClass(el,new_class){
       var i,n=0;

       new_class=new_class.split(",");

       for(i=0;i<new_class.length;i++){
               if((" "+el.className+" ").indexOf(" "+new_class[i]+" ")==-1){
                       el.className+=" "+new_class[i];
                       n++;
               }
       }

       return n;
}

// usage 
// `<button onclick="addClass(this, 'round')">Add a class</button>`
