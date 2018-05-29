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

var Loader = function () { }
Loader.prototype = {
    require: function (scripts, callback) {
        this.loadCount      = 0;
        this.totalRequired  = scripts.length;
        this.callback       = callback;

        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function (evt) {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function (src) {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}
// Usage
/*
var l = new Loader();
l.require([
    "example-script-1.js",
    "example-script-2.js"], 
    function() {
        // Callback
        console.log('All Scripts Loaded');
    });
*/

Event.fire = function(event, el) {
  if (el)
    document.querySelector(el).dispatchEvent(new Event(event));
  else
    document.dispatchEvent(new Event(event));
}

Event.listen = function(event, elemOrCallback, callback) {
  if (typeof elemOrCallback === 'function')
    document.addEventListener(event, elemOrCallback);
  else
    document.querySelector(elemOrCallback).addEventListener(event, callback);
}

// Usage
// Event.fire('hello') // fire Event to dom
// Event.fire('hello', '#root') // fire Event to specific element
// Event.listen('hello', () => console.log('Hello'));  // listen an Event of dom
// Event.listen() // listen specific Event of el
