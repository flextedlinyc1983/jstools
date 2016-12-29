var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


$.fn.demoalert = function(){
    console.log(this);
}

$.fn.mytoolbox = function() {
    return this.each(function() {
        alert("this.innerHTML:"+this.innerHTML);
    });
};

function AndroidManifest(path) {
    this.path = path;
    this.doc = xml.parseElementtreeSync(path);
    if (this.doc.getroot().tag !== 'manifest') {
        throw new Error(path + ' has incorrect root node name (expected "manifest")');
    }
}

AndroidManifest.prototype.getVersionName = function() {
    return this.doc.getroot().attrib['android:versionName'];
};

apiLevels = [5,1,8]
apiLevels.sort(function(a,b){return b-a;});

var index = 5;
while (index) {
    index --;
    console.log(index);
}


getArticleList().then(function(articles){
    return getArticle(articles[0].id);
}).then(function(article){
    return getAuthor(article.authorId);
}).then(function(author){
    alert(author.email);
});

function getAuthor(id){
    return new Promise(function(resolve, reject){
        $.ajax("http://beta.json-generator.com/api/json/get/E105pDLh",{
            author: id
        }).done(function(result){
            resolve(result);
        })
    });
}

function getArticle(id){
    return new Promise(function(resolve, reject){
        $.ajax("http://beta.json-generator.com/api/json/get/EkI02vUn",{
            id: id
        }).done(function(result){
            resolve(result);
        })
    });
}

function getArticleList(){
    return new Promise(function(resolve, reject){
       $.ajax(
        "http://beta.json-generator.com/api/json/get/Ey8JqwIh")
        .done(function(result){
            resolve(result);
        }); 
    });
}




var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var messages = [], progressListeners = [], resolvedPromise;

var deferred = object_create(defer.prototype);
var promise = object_create(Promise.prototype);

promise.promiseDispatch = function (resolve, op, operands) {
    var args = array_slice(arguments);
    if (messages) {
        messages.push(args);
        if (op === "when" && operands[1]) { // progress operand
            progressListeners.push(operands[1]);
        }
    } else {
        Q.nextTick(function () {
            resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
        });
    }
};

function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}


function TestApply1() {
    this.each(function(){
        alert(this.innerHTML);
    });
}
TestApply1.apply($('.selected'));


function obj() {
    this.myName = "點部落";
}
function TestApply3(arg1, arg2) {
    alert(this.myName + arg1 + arg2);
}
TestApply3.apply(new obj(), ['是個', '好地方']);


function test(n){
    var b = 10;
    var c = 20;
    eval('a'+n+'=b*c');
}
test(6);


function addDiv(options) {
    var defaults = {
        border: "solid 1px black",
        backgroundColor: "#cccccc",
        width: "200px",
        height: "50px",
        margin: "10px",
    };
    var settings = $.extend(defaults, options);
    $("<div></div>").css(settings).appendTo("body");
}
addDiv({ width: "400px" });
addDiv({ backgroundColor: "orange", height: "100px" });


var obj = {'name': 'ted'};
var handler = function(){ alert(this.name) };
$(document).on('click', $.proxy(handler, obj));

$('body').click(function (){ 
    setTimeout($.proxy(function() { 
        $(this).addClass('aNewClass'); 
    },this), 1000);
});


var Animal = function(){};
Animal.prototype.breath = function(){console.log("breath")};
var Dog = function(){};
Dog.prototype = new Animal();
Dog.prototype.wag = function(){console.log('wag')};
var SuperDog = function(){};
SuperDog.prototype = new Dog();
SuperDog.prototype.fly = function(){console.log('fly')};
var superdog = new SuperDog();
superdog.breath();
superdog.wag();
superdog.fly();