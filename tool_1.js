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


$.widget( "custom.myprogressbar", {
    options: {
        value: '20'
    },
    getValue: function(){
        return this.options.value;
    },
    _create: function() {
        var progress = this.options.value + "%";
        this.element.text( progress );
    }
});

$('.progressDiv').myprogressbar({ 
    value: 70
});




<a id="size-12">12</a>
<a id="size-14">14</a>
<a id="size-26">26</a>
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size26 = makeSizer(26);
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-26').onclick = size26;


getXById = function() {
    var id = this.id;
    $.ajax({
        url:'/getx?id=' + id,
        success: function(response) {
            console.log(response);
        }
    });
}
$('.test').on('click', getXById);




var SingletonTester = (function () {
 
  // options: an object containing configuration options for the singleton
  // e.g var options = { name: "test", pointX: 5};
  function Singleton( options ) {
 
    // set options to the options supplied
    // or an empty object if none are provided
    options = options || {};
 
    // set some properties for our singleton
    this.name = "SingletonTester111";
 
    this.pointX = options.pointX || 6;
 
    this.pointY = options.pointY || 10;
 
  }
 
  // our instance holder
  var instance;
 
  // an emulation of static variables and methods
  var _static = {
 
    name: "SingletonTester222",
 
    // Method for getting an instance. It returns
    // a singleton instance of a singleton object
    getInstance: function( options ) {
      if( instance === undefined ) {
        instance = new Singleton( options );
      }
 
      return instance;
 
    }
  };
 
  return _static;
 
})();
 
var singletonTest = SingletonTester.getInstance({
  pointX: 5
});
 
// Log the output of pointX just to verify it is correct
// Outputs: 5
console.log( singletonTest.pointX );




function ObserverList(){
  this.observerList = [];
}
ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};
ObserverList.prototype.count = function(){
  return this.observerList.length;
};
ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};
ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
 
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};
ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};
<button id="addNewObserver">Add New Observer checkbox</button>
<input id="mainCheckbox" type="checkbox"/>
<div id="observersContainer"></div>
// Extend an object with an extension
function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}
// References to our DOM elements
var controlCheckbox = document.getElementById( "mainCheckbox" ),
  addBtn = document.getElementById( "addNewObserver" ),
  container = document.getElementById( "observersContainer" );
// Concrete Subject
// Extend the controlling checkbox with the Subject class
extend( controlCheckbox, new Subject() );
// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function(){
  controlCheckbox.notify( controlCheckbox.checked );
};
addBtn.onclick = addNewObserver;
// Concrete Observer
function addNewObserver(){
  // Create a new checkbox to be added
  var check = document.createElement( "input" );
  check.type = "checkbox";
  // Extend the checkbox with the Observer class
  extend( check, new Observer() );
  // Override with custom update behaviour
  check.update = function( value ){
    this.checked = value;
  };
  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver( check );
  // Append the item to the container
  container.appendChild( check );
}
// The Observer
function Observer(){
  this.update = function(){
    // ...
  };
}
function Subject(){
  this.observers = new ObserverList();
}
Subject.prototype.addObserver = function( observer ){
  this.observers.add( observer );
};
Subject.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};
Subject.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};









var MoneyStack = function(billSize) {
    this.billSize = billSize;
    this.next = null;
}
MoneyStack.prototype = {
    withdraw: function(amount) {
        var numOfBills = Math.floor(amount / this.billSize);
        if (numOfBills > 0) {
            // Eject the bills
            this._ejectMoney(numOfBills);
            // Shrink the amount by how much money we ejected
            amount = amount - (this.billSize * numOfBills);
        }
        // If there is any money left to withdraw and if we have
        // another stack in the line, pass the request on
        amount > 0 && this.next && this.next.withdraw(amount);
    },
    // set the stack that comes next in the chain
    setNextStack: function(stack) {
        this.next = stack;
    },
    // private method that ejects the money
    _ejectMoney: function(numOfBills) {
        console.log(numOfBills + " $" + this.billSize
            + " bill(s) has/have been spit out");
    }
}
var ATM = function() {
    // Create the stacks of money
    // We'll show you the implementation for this next
    var stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);
    // Set the hierarchy for the stacks
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);
    // Set the top stack as a property
    this.moneyStacks = stack100;
}
ATM.prototype.withdraw = function(amount) {
    this.moneyStacks.withdraw(amount);
}
// USAGE
var atm = new ATM();
atm.withdraw(186);





var retinaMacbook = (function() {
    //Private variables
    var RAM, addRAM;
    RAM = 4;
    //Private method
    addRAM = function (additionalRAM) {
        RAM += additionalRAM;
    };
    return {
        //Public variables and method 
        USB: undefined,
        insertUSB: function (device) {
            this.USB = device;
        },
        removeUSB: function () {
            var device = this.USB;
            this.USB = undefined;
            return device;
        }
    };
})();





(function(){
 
  var carManager = {
 
    // request information
    requestInfo: function( model, id ){
      return "The information for " + model + " with ID " + id + " is foobar";
    },
 
    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },
 
    // arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }
 
  };

    carManager.execute = function ( name ) {
        return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
    };
    
    carManager.execute( "buyVehicle", "Ford Escort", "453543" );

})();






$( '<p id="test">foo <em>bar</em></p>').appendTo("#testdiv");


function printArray(arr) {
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    console.log(arr[i]);
  }
}


var factorial = function factorial( number ) {
  if ( number < 2 ) {
    return 1;
  }
  return number * factorial( number - 1 );
};



(function( global ) {
  var Module = (function() {

    var data = "secret";

    return {
      // This is some boolean property
      bool: true,
      // Some string value
      string: "a string",
      // An array property
      array: [ 1, 2, 3, 4 ],
      // An object property
      object: {
        lang: "en-Us"
      },
      getData: function() {
        // get the current value of `data`
        return data;
      },
      setData: function( value ) {
        // set the value of `data` and return it
        return ( data = value );
      }
    };
  })();

  // Other things might happen here

  // expose our module to the global object
  global.Module = Module;

})( this );




$('#testdiv').delegate("#test","click",function(){
    alert('test')
})
$('#testdiv').unbind('click');



function gotop() {
    $("table, tbody").scrollTop(0);
}
gotop(0)


function parseIntWithLen(str ,len){
  if(str.length >= len){
    return str;
  }else{
    return parseIntWithLen("0"+str,len);
  }
}





(function ($) {
    $.fn.SLScrollToTop  = function(options) {
        var defaults    = {
            'id':           'scrollToTop',
            'className':    'scrollToTop',
            'image':        '',
            'text':         '^ Scroll to Top',
            'title':        'Scroll to Top',
            'duration':     500
        };
        
        var options     = $.extend(defaults, options);
        var $link       = $('<div />', {
            'id':       options.id,
            'html':     options.text,
            'title':    options.title,
            'class':    options.className
        }).appendTo('body').hide();

        if (options.image != '') {
            $('<img src="' + options.image + '" alt="' + options.title + '" />').prependTo($link);
        }

        $(window).scroll(function() {
            $this   = $(this);

            if ($this.scrollTop() != 0) {
                $link.fadeIn();
            } else {
                $link.fadeOut();
            }
        });

        $link.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, options.duration);
        });
    }
})(jQuery);


<div class="box-footer-button" node-type="box-submit" style="background: url(https://changyan.itc.cn/mdevp/extensions/mobile-cmt-box/031/imgs/button.png) no-repeat center;width:300px;height:300px"></div>



    $(document).ready(function(){
        navbar = $("#navbar");
        NavBtn = $("#NavBtn");
        fp_logo = $('#myNavHeader > a > img');
        fb_logo = $('#myNavHeader > ul > li > a > img');
        
        //滾動時觸發
        var scrollTimer = null;
        $(document).scroll(function() {
            if (scrollTimer) {
                clearTimeout(scrollTimer);   // clear any previous pending timer
            }
            scrollTimer = setTimeout(handleScroll, 100);   // set new timer
        });

        //點擊連結滑動到指定位置
        $(".scroll").click(function(event){
            if(typeof $(this.hash).offset() != 'undefined'){
                var nav_h = parseFloat(getCSS('height','HeaderStyle2').replace("px",""));//Header Bar的高度
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top - nav_h},1000); 
            }
        });


        //視窗縮放後觸發
        $(window).resize(function(){
            SetHeaderStyle();
        });
        //Navbar menu被關閉後(動畫結束後)觸發
        navbar.on('hidden.bs.collapse', function (){
            NavBarOpen = false;
            SetHeaderStyle();
        });
        //點擊Navbar button後觸發
        NavBtn.on('click', function () {
            if(!NavBarOpen)
            {
                NavBarOpen = true;
                SetHeaderStyle();
            }
        });

        //apply button event
        $("#Submit-header").on("click", function(e) {
            e.preventDefault();

            if( $("#InputShopName-header").val() == '' || $("#InputAddress-header").val() == '' ||
                $("#InputContactPerson-header").val() == '' || $("#InputPhone-header").val() == '' ||
                $("#InputEmail-header").val() == '' || $("#InputEIN-header").val() == '' )
                alert('請確保所有欄位皆已填寫完畢');
            else if( !validateEmail($("#InputEmail-header").val()) )
                alert('您的Email不符合規範, 請重新輸入');
            else if( $("#InputEIN-header").val().length != 8 || !( /^\d+$/.test($("#InputEIN-header").val()) ) )
                alert('您的統一編號有誤, 請重新輸入');
            else{
                //OK, Send Mail, Store DB
                var Post_obj = {
                    s_name: $("#InputShopName-header").val(),
                    s_type: $("#InputShopType-header").val(),
                    s_address: $("#InputAddress-header").val(),
                    s_contact_person: $("#InputContactPerson-header").val(),
                    s_phone: $("#InputPhone-header").val(),
                    s_email: $("#InputEmail-header").val(),
                    s_ein: $("#InputEIN-header").val()
                };

                $.post( "sendmail.php", Post_obj,
                    function(response1){
                        $.post( "/vendors/apply_db", Post_obj,
                            function(response2){
                                console.log(response2);
                                alert('已將申請資料送至本公司的服務信箱!');

                                $("#ApplyForm-header")[0].reset();
                        });
                });
            }
        });

        //Pop window will open
        $('#Modal-header').on('show.bs.modal', function (event) {
            //Prevent Background Page Scrolling
             $("body").addClass("modal-open");
        });

        //Pop window will close
        $('#Modal-header').on('hide.bs.modal', function (event) {
            $("body").removeClass("modal-open");
        });
        
        //When User press the close button
        $('#modal-close-header').click(function(){
            $('#Modal-header').modal('hide');
        });

        
        function handleScroll(){
            SetHeaderStyle();
            SetTopIcon();

            //如果滾到底部, 停止滾動動畫
            if($(window).scrollTop() + $(window).height() == $(document).height()){
                $('html, body').stop();
            }
        }

        function SetTopIcon(){
            if($(document).scrollTop() >= ($('#BaselineDOM').position().top+$('#BaselineDOM').outerHeight(true)) * 1.5
            && $('#BaselineDOM').outerHeight(true) != 0 
            && top_icon_flag)
                $('.top_icon').css('display','inline');
            else
                $('.top_icon').css('display','none');

        }   
    });
    
    $(window).load(function(){
        $('.fb_fanbox').css('display','inline-block');
        
        //首次執行
        SetHeaderStyle();
    });
    
    //滾動、Resize、影片播放以及按下Menu Button時設定Navbar Header樣式
    function SetHeaderStyle()
    {
        //滾動到影片底部後, 切換Header class,style以及圖片
        var nav_h = parseFloat(getCSS('height','HeaderStyle').replace("px",""));
        if($(document).scrollTop() >= $('#BaselineDOM').position().top+$('#BaselineDOM').outerHeight(true)-nav_h-50
        && $('#BaselineDOM').outerHeight(true) != 0)
        {
            $('nav:first').addClass('HeaderStyle2');
            $('nav:first').removeClass('HeaderStyle');
            fp_logo.attr("src","web/images/FP_LOGO.png");
            fb_logo.attr("src","web/images/FACEBOOK_LOGO_BLACK.png");
            $('.text_color').attr('style', 'color: gray !important');
            NavBarBelowBaseline = true;         
        }
        else{
            $('nav:first').addClass('HeaderStyle');
            $('nav:first').removeClass('HeaderStyle2');
            fp_logo.attr("src","web/images/FP_LOGO_WHITE.png");
            fb_logo.attr("src","web/images/FACEBOOK_LOGO.png");
            $('.text_color').attr('style', 'color: white !important');
            NavBarBelowBaseline = false;
        }   
    
        //設定collapse部分的樣式
        if(NavBarBelowBaseline && NavBarOpen && NavBtn.css('display') != 'none')
        {
            $('#navbar > ul > li').css('background','rgba(255,255,255,0.8)');
            navbar.detach(); //相當於剪下的功能
            navbar.appendTo('nav:first'); //貼上到指定的位置
            navbar.addClass('dropblock');
            navbar.removeClass('normalblock');
        }
        else if(!NavBarBelowBaseline && NavBarOpen && NavBtn.css('display') != 'none')
        {
            $('#navbar > ul > li').css('background','rgba(190,190,190,0.8)');
            navbar.detach(); //相當於剪下的功能
            navbar.appendTo('nav:first'); //貼上到指定的位置
            navbar.addClass('dropblock');
            navbar.removeClass('normalblock');
        }
        else
        {
            $('#navbar > ul > li').css('background','');
            navbar.detach(); //相當於剪下的功能
            navbar.appendTo('#myNavHeader'); //貼上到指定的位置
            navbar.addClass('normalblock');
            navbar.removeClass('dropblock');
        }
    }
    

    //Use to read css value which is not yet applied.
    function getCSS(prop, fromClass) {
        var $inspector = $("<div>").css('display', 'none').addClass(fromClass);
        $("body").append($inspector); // add to DOM, in order to read the CSS property
        try {
            return $inspector.css(prop);
        } finally {
            $inspector.remove(); // and remove from DOM
        }
    };

    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }   

    function DetectMobile() {
       if( navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)
         ){
            return true;
          }
         else {
            return false;
          }
    }













$.fn.exists = function () {
    return this.length > 0;
};


$.fn.HashTables = function(){

  var _HashTables = function(){
    this.items=new Array();
    this.keyArray=new Array();
    this.itemsCount=0;
    this.add = function(key,value){
      if(!this.containsKey(key)){
        this.items[key]=value;
        this.itemsCount++;
        this.keyArray.push(key);
      }else{
        //throw "key '"+key+"' allready exists."
        this.items[key]=value;
      }
    }
    this.get=function(key){
      if(this.containsKey(key))
        return this.items[key];
      else
        return typeof(this.items[key]);
    }
    this.remove = function(key){
      if(this.containsKey(key)){
        delete this.keyArray[key];
        delete this.items[key];
        this.itemsCount--;
      }else{
        throw "key '"+key+"' does not exists."
      }
    }
    this.containsKey= function(key){
      return typeof(this.items[key])!="undefined";
    }
    this.containsValue = function containsValue(value){
      for (var item in this.items){
        if(this.items[item]==value)
          return true;
      }
      return false;
    }
    this.contains = function(keyOrValue){
      return this.containsKey(keyOrValue) || this.containsValue(keyOrValue);
    }
    this.clear = function(){
      this.items=new Array();
      this.keyArray=new Array();
      this.itemsCount=0;
    }
    this.size = function(){
      return this.itemsCount;
    }
    this.isEmpty = function(){
      return this.size()==0;
    } 
    this.getItems = function(key){
      return this.items[key];
    }
  }
  return new _HashTables();
}


$('a').removeAttr('title');
$( "#greatphoto" ).attr({
    alt: "Beijing Brush Seller",
    title: "photo by Kelly Clark"
});
$('a').addClass('selected highlight');
$('a').removeClass('selected highlight');
$('p').css({
  color: 'red',
  'background-color': 'blue'
});
// 取得下拉選單 (select box) 的值
$('select.foo').val();
// 取得 checkbox 欄位的選取值
$('input:checkbox:checked').val();
// 取得 radio 欄位的選取值
$('input:radio[name=bar]:checked').val();
var offset = $($('a')[2]).offset();
$('a').eq(1).css({'background-color':'#000'})
$('a').filter('.selected');
$('a').not('.selected');

// 將 li 的父元素 (可能是 <ul> 或 <ol>) 背景改為紅色
$('li').parent().css('background-color', 'red');
// 將 li 的所有祖先元素背景都改為紅色 (直到 <html> 元素)
$('li').parents().css('background-color', 'red');
// 將 li 的所有 <p> 祖先元素背景都改為紅色
$('li').parents('p').css('background-color', 'red');
// 將有 .selected class 的 div 所有子元素顏色改為藍色
$('div').children('.selected').css('color', 'blue');

$('ul').find('a');
$('a', $('ul'));
$('p').before('<b>Hello</b>');
$('p').after('<b>Hello</b>'); 
$('.inner').wrap('<div class="new"></div>');
$('.hello').empty();
$('.hello').remove();
$('.hello').clone().appendTo('.goodbye');




$.get("http://beta.json-generator.com/api/json/get/Ey8JqwIh",function(result){
    console.log(result);
})

if(typeof Object.create !== "function"){
    Object.create = function (o) {
        function F() {
            
        }
        F.prototype = o;
        return new F();
    }
}



var Model = {

}





var addChange = function (ob) {
    ob.change = function (callback) {
        if(callback){
            if(!this._change) this._change = [];
            this._change.push(callback);
        }else{
            if(!this._change) return;
            for (var i = 0; i < this._change.length; i++) {
                this._change[i].apply(this);
            }
        }   
    };
};


var object = {};
object.name = 'ted';
addChange(object);
object.change(function(){
    alert('name: ' + this.name);
})


var User = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        if(!attrs.email || attrs.email.length < 3){        
            return "not less than three";
        }
    },
    defaults: {
        name: "anonymous"
    }
});
var user = new User({"email":"ga"}, {validate:true});



// user.bind('error', function(model,error){
//     console.log('v3');
//     console.log(error);
// });

user.validationError


user.set({"email":"ga"});

user.set({"email":"ga"},{error: function(model,error){
    console.log('v3')
    console.log(error)
}});


var Users = Backbone.Collection.extend({
    model: User
});
var users = new Users([{"name":"ted","email":"ted111"},{"name":"ted2","email":"ted222"}], { validate: true })
users.bind("add",function(user){
console.log(user.get("name"))
})
users.add([{"email":"ted111"}])

var Task = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("#connect-item-template").html()),
    render: function() {
        $(this.el).html(this.template(this.model.toJSON())); 
        return this;
    },
    el: $('ul.indexPage')
});   


var User = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        if(!attrs.email || attrs.email.length < 3){        
            return "not less than three";
        }
    },
    defaults: {
        name: "anonymous"
    }
});
var task = new  Task({model: new User({"name":"tedhhh","label_connectName":"123","connectName":'111',"isInUse":'tes',"inUse":"ttt","checked":'ok',"defaultValue":'ddd',"label_delete":'11111'})})
task.render();



var PageController = Backbone.Controller.extend({
    routes: {
        "connectOperation": connectOperation
    },
    connectOperation: function () {
        console.log('test')
    }
});








(function($) {
    $.Window = $(window);
    $.EVENTS = {
        ADD_STAGE: 'ADD_STAGE',
        REMOVE_STAGE: 'REMOVE_STAGE'
    }
    $.MallDialog = function() {
        var self = this;
        var infoCloseExpireDefault = 2000;
        self.infoCloseExpire = infoCloseExpireDefault;
        self.init = function() {
            $('.wrap > .content').append("<div class='dialog dialog-confirm' title=''><p></p><hr><div class='dialog-btn-group'><div class='btn btn-sm btn-pure-gray dialog-cancel-btn'>取消</div><div class='btn btn-sm btn-red dialog-enter-btn'>確定</div></div></div> ");
            $('.wrap > .content').append("<div class='dialog dialog-alert' title=''><p></p><hr><div class='dialog-btn-group'><div class='btn btn-sm btn-red dialog-enter-btn'>確定</div></div></div> ");
            $('.wrap > .content').append("<div class='dialog dialog-info' title=''><p></p></div> ");
            self.alertElemt = $(".dialog-alert");
            self.confirmElemt = $(".dialog-confirm");
            self.infoElemt = $(".dialog-info");
            self.confirmElemt.dialog({
                width: 400,
                autoOpen: false,
                modal: true,
                draggable: false,
                resizable: false
            });
            self.alertElemt.dialog({
                width: 400,
                autoOpen: false,
                modal: true,
                draggable: false,
                resizable: false
            });
            self.infoElemt.dialog({
                autoOpen: false,
                minHeight: 28,
                width: 280,
                modal: true,
                draggable: false,
                resizable: false,
                dialogClass: 'no-title-border',
                open: function(event, ui) {
                    setTimeout(function() {
                        self.infoElemt.dialog('close');
                        self.infoCloseExpire = infoCloseExpireDefault;
                    }, self.infoCloseExpire);
                }
            });
        }
        self.dialogClose = function() {
            self.alertElemt.dialog("close");
            self.confirmElemt.dialog("close");
            self.infoElemt.dialog('close');
        }
        self.info = function(title, content, expire) {
            if (typeof expire !== 'undefined' && expire !== null) {
                self.infoCloseExpire = expire;
            }
            self.infoElemt.closest('.ui-dialog').find('.ui-dialog-title').html(title);
            self.infoElemt.find('p').html(content);
            self.infoElemt.dialog('open');
        }
        self.alert = function(title, content, enterCallBack, closeCallBack) {
            self.alertElemt.closest('.ui-dialog').find('.ui-dialog-title').html(title);
            self.alertElemt.find('p').html(content);
            self.alertElemt.dialog('open');
            if (typeof enterCallBack === 'function') {
                self.alertElemt.find('.dialog-enter-btn').unbind('click');
                self.alertElemt.find('.dialog-enter-btn').on('click', enterCallBack);
            } else {
                self.alertElemt.find('.dialog-enter-btn').unbind('click');
                self.alertElemt.find('.dialog-enter-btn').on('click', function() {
                    self.alertElemt.dialog('close')
                });
            }
            if (typeof closeCallBack === 'function') {
                $(".dialog-alert").on("dialogclose", function() {
                    $(".dialog-alert").off("dialogclose");
                    closeCallBack();
                });
            }
        }
        self.confirm = function(title, content, enterCallBack, cancelCallBack) {
            self.confirmElemt.closest('.ui-dialog').find('.ui-dialog-title').html(title);
            self.confirmElemt.find('p').html(content);
            self.confirmElemt.dialog('open');
            if (typeof enterCallBack === 'function') {
                self.confirmElemt.find('.dialog-enter-btn').off('click');
                self.confirmElemt.find('.dialog-enter-btn').on('click', enterCallBack);
            } else {
                self.confirmElemt.find('.dialog-enter-btn').off('click');
                self.confirmElemt.find('.dialog-enter-btn').on('click', function() {
                    self.confirmElemt.dialog('close')
                });
            }
            if (typeof cancelCallBack === 'function') {
                self.confirmElemt.find('.dialog-cancel-btn').off('click');
                self.confirmElemt.find('.dialog-cancel-btn').on('click', cancelCallBack);
            } else {
                self.confirmElemt.find('.dialog-cancel-btn').off('click');
                self.confirmElemt.find('.dialog-cancel-btn').on('click', function() {
                    self.confirmElemt.dialog('close')
                });
            }
        }
    }
    $.MallDiaLoading = function() {
        var self = this;
        var body = $('body');
        self.open = function() {
            body.append('<div class="diaCover"></div>');
            body.append('<div class="diaLoading"></div>');
        }
        self.close = function() {
            $('.diaCover').remove();
            $('.diaLoading').remove();
        }
    }
    $.PriceStr = function(num) {
        var str = num + '';
        var length = 0;
        if (str.length % 3 != 0) {
            length = Math.floor(str.length / 3);
        } else {
            length = Math.floor(str.length / 4);
        }
        if (length > 0) {
            for (var i = 1; i <= length; i++) {
                str = str.splice((-3 * i) - (i - 1), 0, ',');
            }
        }
        return str;
    }
    $.PriceInt = function(str) {
        if (str) {
            var strArray = str.split(',');
            var num = '';
            $.each(strArray, function(key, val) {
                num += val;
            });
            return parseInt(num);
        } else {
            return 0;
        }
    }
    $.OBJ_TO_GET = function(obj) {
        var str = '';
        $.each(obj, function(key, val) {
            str += key + '=' + val + '&';
        });
        str = str.splice(-1, 1);
        return str;
    }
    $.GET_TO_OBJ = function() {
        var queryString = window.location.search.replace(/^\?/i, ''),
            parameterObj = {};
        $.each(queryString.split('&'), function(idx, string) {
            var keyValueArr = string.split('=');
            if (keyValueArr.length <= 1) {
                return true;
            }
            var key = keyValueArr[0];
            var value = keyValueArr[1];
            if (!key.trim()) {
                return true;
            }
            parameterObj[key] = decodeURIComponent(value.replace('+', '%20'));
        });
        return parameterObj;
    }
    $.MallOrderSort = function() {
        var self = this,
            that, status, index;
        self.initObj = {
            target: '',
            status: '',
        }
        self.init = function() {
            name = self.initObj.name, that = self.initObj.target, status = self.initObj.status;
            that.find('div').find('i').attr('class', '');
            self.Changes(name, status);
        };
        self.Changes = function(pName, pStatus) {
            if (pStatus == 'DESC') {
                pStatus = 'icon-arrow-down';
            } else if (pStatus == 'ASC') {
                pStatus = 'icon-arrow-up';
            }
            that.find('div').each(function(index) {
                var value = $(this).attr('name');
                if (value == pName) {
                    that.find('[name="' + value + '"]').find('i').attr('class', pStatus);
                } else {
                    that.find('[name="' + value + '"]').find('i').attr('class', '');
                }
            });
        }
        self.getStatus = function(name) {
            var sortStrArray = [];
            that.find('div').each(function(index) {
                var value = $(this).attr('name');
                if (value == name) {
                    sortStrArray.push(value);
                    sortStrArray.push((that.find('[name="' + value + '"]').find('i').hasClass('icon-arrow-down')) ? 'ASC' : 'DESC');
                    return false;
                }
            });
            return sortStrArray;
        }
    }
    $.MallGetReload = function() {
        var self = this;
        self.parameterObj = {};
        self.reloadInit = function() {
            if ($.GET_TO_OBJ()) {
                $.each($.GET_TO_OBJ(), function(key, value) {
                    self.parameterObj[key] = value;
                });
            }
            $('ul.pagination li a').click(function() {
                if (!$(this).parent().hasClass('disabled') && !$(this).parent().hasClass('active')) {
                    self.parameterObj.page = $(this).attr('href');
                    self.reload();
                }
                return false;
            });
            $('.page').on('change', function() {
                if ($(this).val() != '') {
                    self.parameterObj.page = $(this).val();
                    self.reload();
                }
                return false;
            });
        }
        self.reload = function() {
            var get_val = '',
                parameterLength = 0,
                index = 0;
            $.each(self.parameterObj, function(key, value) {
                if (value != '' && value != 'undefined') {
                    parameterLength++;
                }
            });
            $.each(self.parameterObj, function(key, value) {
                if (value != '' && value != 'undefined') {
                    index++;
                    if (index < parameterLength) {
                        get_val += key + '=' + decodeURIComponent(value) + '&';
                    } else {
                        get_val += key + '=' + decodeURIComponent(value);
                    }
                }
            });
            window.location.href = '?' + get_val;
        }
        self.getLink = function(parameterObj) {
            var get_val = '',
                parameterLength = 0,
                index = 0;
            $.each(parameterObj, function(key, value) {
                if (value != '' && value != 'undefined') {
                    parameterLength++;
                }
            });
            $.each(parameterObj, function(key, value) {
                if (value != '' && value != 'undefined') {
                    index++;
                    if (index < parameterLength) {
                        get_val += key + '=' + encodeURIComponent(value) + '&';
                    } else {
                        get_val += key + '=' + encodeURIComponent(value);
                    }
                }
            });
            return '?' + get_val;
        }
    }
    $.MallRandom = function(maxRandomNum, backLength) {
        var lengthNumArray = [],
            randomArray = [];
        for (var lNum = 1; lNum <= maxRandomNum; lNum++) {
            lengthNumArray.push(lNum);
        }
        for (var rNum = 0; rNum < backLength; rNum++) {
            var randomInt = Math.round(Math.random() * (lengthNumArray.length - 1));
            randomArray.push(lengthNumArray[randomInt] + '');
            lengthNumArray.splice(randomInt, 1);
        }
        return randomArray;
    }
})(jQuery);
String.prototype.splice = function(idx, rem, s) {
    return (this.slice(0, idx) + s + this.slice(idx + Math.abs(rem)));
};


/*
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 Jorn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $
 */
(function(a){a.fn.extend({autocomplete:function(b,c){var d=typeof b=="string";c=a.extend({},a.Autocompleter.defaults,{url:d?b:null,data:d?null:b,delay:d?a.Autocompleter.defaults.delay:10,max:c&&!c.scroll?10:150},c);c.highlight=c.highlight||function(e){return e};c.formatMatch=c.formatMatch||c.formatItem;return this.each(function(){new a.Autocompleter(this,c)})},result:function(b){return this.bind("result",b)},search:function(b){return this.trigger("search",[b])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(b){return this.trigger("setOptions",[b])},unautocomplete:function(){return this.trigger("unautocomplete")}});a.Autocompleter=function(l,g){var c={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var b=a(l).attr("autocomplete","off").addClass(g.inputClass);var j;var p="";var m=a.Autocompleter.Cache(g);var e=0;var u;var x={mouseDownOnSelect:false};var r=a.Autocompleter.Select(g,l,d,x);var w;a.browser.opera&&a(l.form).bind("submit.autocomplete",function(){if(w){w=false;return false}});b.bind((a.browser.opera?"keypress":"keyup")+".autocomplete input.autocomplete",function(y){e=1;u=y.keyCode;switch(y.keyCode){case c.UP:y.preventDefault();if(r.visible()){r.prev()}else{t(0,true)}break;case c.DOWN:y.preventDefault();if(r.visible()){r.next()}else{t(0,true)}break;case c.PAGEUP:y.preventDefault();if(r.visible()){r.pageUp()}else{t(0,true)}break;case c.PAGEDOWN:y.preventDefault();if(r.visible()){r.pageDown()}else{t(0,true)}break;case g.multiple&&a.trim(g.multipleSeparator)==","&&c.COMMA:case c.TAB:case c.RETURN:if(d()){y.preventDefault();w=true;return false}break;case c.ESC:r.hide();break;default:clearTimeout(j);j=setTimeout(t,g.delay);break}}).focus(function(){e++}).blur(function(){e=0;if(!x.mouseDownOnSelect){s()}}).click(function(){if(e++>1&&!r.visible()){t(0,true)}}).bind("search",function(){var y=(arguments.length>1)?arguments[1]:null;function z(D,C){var A;if(C&&C.length){for(var B=0;B<C.length;B++){if(C[B].result.toLowerCase()==D.toLowerCase()){A=C[B];break}}}if(typeof y=="function"){y(A)}else{b.trigger("result",A&&[A.data,A.value])}}a.each(h(b.val()),function(A,B){f(B,z,z)})}).bind("flushCache",function(){m.flush()}).bind("setOptions",function(){a.extend(g,arguments[1]);if("data" in arguments[1]){m.populate()}}).bind("unautocomplete",function(){r.unbind();b.unbind();a(l.form).unbind(".autocomplete")});function d(){var B=r.selected();if(!B){return false}var y=B.result;searchFuncAto(y);p=y;if(g.multiple){var E=h(b.val());if(E.length>1){var A=g.multipleSeparator.length;var D=a(l).selection().start;var C,z=0;a.each(E,function(F,G){z+=G.length;if(D<=z){C=F;return false}z+=A});E[C]=y;y=E.join(g.multipleSeparator)}y+=g.multipleSeparator}b.val(y);v();b.trigger("result",[B.data,B.value]);return true}function t(A,z){if(u==c.DEL){r.hide();return}var y=b.val();if(!z&&y==p){return}p=y;y=i(y);if(y.length>=g.minChars){b.addClass(g.loadingClass);if(!g.matchCase){y=y.toLowerCase()}f(y,k,v)}else{n();r.hide()}}function h(y){if(!y){return[""]}if(!g.multiple){return[a.trim(y)]}return a.map(y.split(g.multipleSeparator),function(z){return a.trim(y).length?a.trim(z):null})}function i(y){if(!g.multiple){return y}var A=h(y);if(A.length==1){return A[0]}var z=a(l).selection().start;if(z==y.length){A=h(y)}else{A=h(y.replace(y.substring(z),""))}return A[A.length-1]}function q(y,z){if(g.autoFill&&(i(b.val()).toLowerCase()==y.toLowerCase())&&u!=c.BACKSPACE){b.val(b.val()+z.substring(i(p).length));a(l).selection(p.length,p.length+z.length)}}function s(){clearTimeout(j);j=setTimeout(v,200)}function v(){var y=r.visible();r.hide();clearTimeout(j);n();if(g.mustMatch){b.search(function(z){if(!z){if(g.multiple){var A=h(b.val()).slice(0,-1);b.val(A.join(g.multipleSeparator)+(A.length?g.multipleSeparator:""))}else{b.val("");b.trigger("result",null)}}})}}function k(z,y){if(y&&y.length&&e){n();r.display(y,z);q(z,y[0].value);r.show()}else{v()}}function f(z,B,y){if(!g.matchCase){z=z.toLowerCase()}var A=m.load(z);if(A&&A.length){B(z,A)}else{if((typeof g.url=="string")&&(g.url.length>0)){var D={timestamp:+new Date()};a.each(g.extraParams,function(E,F){D[E]=typeof F=="function"?F():F});var C={flag:"keywords",data:a.extend({q:$.str2Unicode(i(z)),limit:g.max},D)};a.ajax({mode:"abort",port:"autocomplete"+l.name,dataType:"json",url:g.url,data:{data:JSON.stringify(C)},success:function(F){var E=g.parse&&g.parse(F.rtnData)||o(F.rtnData);m.add(z,E);B(z,E)}})}else{r.emptyList();y(z)}}}function o(B){var y=[];var A=B.split("\n");for(var z=0;z<A.length;z++){var C=a.trim(A[z]);if(C){C=C.split("|");y[y.length]={data:C,value:C[0],result:g.formatResult&&g.formatResult(C,C[0])||C[0]}}}return y}function n(){b.removeClass(g.loadingClass)}};a.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(b){return b[0]},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(c,b){return c.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180};a.Autocompleter.Cache=function(c){var f={};var d=0;function h(l,k){if(!c.matchCase){l=l.toLowerCase()}var j=l.indexOf(k);if(c.matchContains=="word"){j=l.toLowerCase().search("\\b"+k.toLowerCase())}if(j==-1){return false}return j==0||c.matchContains}function g(j,i){if(d>c.cacheLength){b()}if(!f[j]){d++}f[j]=i}function e(){if(!c.data){return false}var k={},j=0;if(!c.url){c.cacheLength=1}k[""]=[];for(var m=0,l=c.data.length;m<l;m++){var p=c.data[m];p=(typeof p=="string")?[p]:p;var o=c.formatMatch(p,m+1,c.data.length);if(o===false){continue}var n=o.charAt(0).toLowerCase();if(!k[n]){k[n]=[]}var q={value:o,data:p,result:c.formatResult&&c.formatResult(p)||o};k[n].push(q);if(j++<c.max){k[""].push(q)}}a.each(k,function(r,s){c.cacheLength++;g(r,s)})}setTimeout(e,25);function b(){f={};d=0}return{flush:b,add:g,populate:e,load:function(n){if(!c.cacheLength||!d){return null}if(!c.url&&c.matchContains){var m=[];for(var j in f){if(j.length>0){var o=f[j];a.each(o,function(p,k){if(h(k.value,n)){m.push(k)}})}}return m}else{if(f[n]){return f[n]}else{if(c.matchSubset){for(var l=n.length-1;l>=c.minChars;l--){var o=f[n.substr(0,l)];if(o){var m=[];a.each(o,function(p,k){if(h(k.value,n)){m[m.length]=k}});return m}}}}}return null}}};a.Autocompleter.Select=function(e,j,l,p){var i={ACTIVE:"ac_over"};var k,f=-1,r,m="",s=true,c,o;function n(){if(!s){return}c=a("<div/>").hide().addClass(e.resultsClass).css({"position":"absolute"}).appendTo(document.body);o=a("<ul/>").appendTo(c).mouseover(function(t){if(q(t).nodeName&&q(t).nodeName.toUpperCase()=="LI"){f=a("li",o).removeClass(i.ACTIVE).index(q(t));a(q(t)).addClass(i.ACTIVE)}}).click(function(t){a(q(t)).addClass(i.ACTIVE);l();j.focus();return false}).mousedown(function(){p.mouseDownOnSelect=true}).mouseup(function(){p.mouseDownOnSelect=false});if(e.width>0){c.css("width",e.width)}s=false}function q(u){var t=u.target;while(t&&t.tagName!="LI"){t=t.parentNode}if(!t){return[]}return t}function h(t){k.slice(f,f+1).removeClass(i.ACTIVE);g(t);var v=k.slice(f,f+1).addClass(i.ACTIVE);if(e.scroll){var u=0;k.slice(0,f).each(function(){u+=this.offsetHeight});if((u+v[0].offsetHeight-o.scrollTop())>o[0].clientHeight){o.scrollTop(u+v[0].offsetHeight-o.innerHeight())}else{if(u<o.scrollTop()){o.scrollTop(u)}}}}function g(t){f+=t;if(f<0){f=k.size()-1}else{if(f>=k.size()){f=0}}}function b(t){return e.max&&e.max<t?e.max:t}function d(){o.empty();var u=b(r.length);for(var v=0;v<u;v++){if(!r[v]){continue}var w=e.formatItem(r[v].data,v+1,u,r[v].value,m);if(w===false){continue}var t=a("<li/>").html(e.highlight(w,m)).addClass("ac_suggest").appendTo(o)[0];a.data(t,"ac_data",r[v])}k=o.find("li");if(e.selectFirst){k.slice(0,1).addClass(i.ACTIVE);f=0}if(a.fn.bgiframe){o.bgiframe()}}return{display:function(u,t){n();r=u;m=t;d()},next:function(){h(1)},prev:function(){h(-1)},pageUp:function(){if(f!=0&&f-8<0){h(-f)}else{h(-8)}},pageDown:function(){if(f!=k.size()-1&&f+8>k.size()){h(k.size()-1-f)}else{h(8)}},hide:function(){c&&c.hide();k&&k.removeClass(i.ACTIVE);f=-1},visible:function(){return c&&c.is(":visible")},current:function(){return this.visible()&&(k.filter("."+i.ACTIVE)[0]||e.selectFirst&&k[0])},show:function(){var v=a(j).offset();c.css({width:typeof e.width=="string"||e.width>0?e.width:"100%",top:(($("#searchArea").offset().top)+($("#searchArea").height())+parseInt($("#searchArea").css("padding-bottom")))}).show();if(e.scroll){o.scrollTop(0);o.css({maxHeight:e.scrollHeight,overflow:"auto"});if(a.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var t=0;k.each(function(){t+=this.offsetHeight});var u=t>e.scrollHeight;o.css("height",u?e.scrollHeight:t);if(!u){k.width(o.width()-parseInt(k.css("padding-left"))-parseInt(k.css("padding-right"))+123)}}}},selected:function(){var t=k&&k.filter("."+i.ACTIVE).removeClass(i.ACTIVE);return t&&t.length&&a.data(t[0],"ac_data")},emptyList:function(){o&&o.empty()},unbind:function(){c&&c.remove()}}};a.fn.selection=function(i,b){if(i!==undefined){return this.each(function(){if(this.createTextRange){var j=this.createTextRange();if(b===undefined||i==b){j.move("character",i);j.select()}else{j.collapse(true);j.moveStart("character",i);j.moveEnd("character",b);j.select()}}else{if(this.setSelectionRange){this.setSelectionRange(i,b)}else{if(this.selectionStart){this.selectionStart=i;this.selectionEnd=b}}}})}var g=this[0];if(g.createTextRange){var c=document.selection.createRange(),h=g.value,f="<->",d=c.text.length;c.text=f;var e=g.value.indexOf(f);g.value=h;this.selection(e,e+d);return{start:e,end:e+d}}else{if(g.selectionStart!==undefined){return{start:g.selectionStart,end:g.selectionEnd}}}}})(jQuery);

// Email autocomplete ��
(function(a){a.fn.extend({autocompleteEmail:function(b,c){var d=typeof b=="string";c=a.extend({},a.AutocompleteEmail.defaults,{url:d?b:null,data:d?null:b,delay:d?a.AutocompleteEmail.defaults.delay:10,max:c&&!c.scroll?10:150},c);c.highlight=c.highlight||function(e){return e};c.formatMatch=c.formatMatch||c.formatItem;return this.each(function(){new a.AutocompleteEmail(this,c)})},result:function(b){return this.bind("result",b)},search:function(b){return this.trigger("search",[b])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(b){return this.trigger("setOptions",[b])},unautocomplete:function(){return this.trigger("unautocomplete")}});a.AutocompleteEmail=function(l,g){var c={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var b=a(l).attr("autocomplete","off").addClass(g.inputClass);var j;var p="";var m=a.AutocompleteEmail.Cache(g);var e=0;var u;var x={mouseDownOnSelect:false};var r=a.AutocompleteEmail.Select(g,l,d,x);var w;a.browser.opera&&a(l.form).bind("submit.autocomplete",function(){if(w){w=false;return false}});b.bind((a.browser.opera?"keypress":"keydown")+".autocomplete",function(y){e=1;u=y.keyCode;switch(y.keyCode){case c.UP:y.preventDefault();if(r.visible()){r.prev()}else{t(0,true)}break;case c.DOWN:y.preventDefault();if(r.visible()){r.next()}else{t(0,true)}break;case c.PAGEUP:y.preventDefault();if(r.visible()){r.pageUp()}else{t(0,true)}break;case c.PAGEDOWN:y.preventDefault();if(r.visible()){r.pageDown()}else{t(0,true)}break;case g.multiple&&a.trim(g.multipleSeparator)==","&&c.COMMA:case c.TAB:case c.RETURN:if(d()){y.preventDefault();w=true;return false}break;case c.ESC:r.hide();break;default:clearTimeout(j);j=setTimeout(t,g.delay);break}}).focus(function(){e++}).blur(function(){e=0;if(!x.mouseDownOnSelect){s()}}).click(function(){if(e++>1&&!r.visible()){t(0,true)}}).bind("search",function(){var y=(arguments.length>1)?arguments[1]:null;function z(D,C){var A;if(C&&C.length){for(var B=0;B<C.length;B++){if(C[B].result.toLowerCase()==D.toLowerCase()){A=C[B];break}}}if(typeof y=="function"){y(A)}else{b.trigger("result",A&&[A.data,A.value])}}a.each(h(b.val()),function(A,B){f(B,z,z)})}).bind("flushCache",function(){m.flush()}).bind("setOptions",function(){a.extend(g,arguments[1]);if("data" in arguments[1]){m.populate()}}).bind("unautocomplete",function(){r.unbind();b.unbind();a(l.form).unbind(".autocomplete")});function d(){var B=r.selected();if(!B){return false}var y=B.result;p=y;if(g.multiple){var E=h(b.val());if(E.length>1){var A=g.multipleSeparator.length;var D=a(l).selection().start;var C,z=0;a.each(E,function(F,G){z+=G.length;if(D<=z){C=F;return false}z+=A});E[C]=y;y=E.join(g.multipleSeparator)}y+=g.multipleSeparator}b.val(y);v();b.trigger("result",[B.data,B.value]);return true}function t(A,z){if(u==c.DEL){r.hide();return}var y=b.val();if(!z&&y==p){return}p=y;y=i(y);if(y.length>=g.minChars){b.addClass(g.loadingClass);if(!g.matchCase){y=y.toLowerCase()}f(y,k,v)}else{n();r.hide()}}function h(y){if(!y){return[""]}if(!g.multiple){return[a.trim(y)]}return a.map(y.split(g.multipleSeparator),function(z){return a.trim(y).length?a.trim(z):null})}function i(y){if(!g.multiple){return y}var A=h(y);if(A.length==1){return A[0]}var z=a(l).selection().start;if(z==y.length){A=h(y)}else{A=h(y.replace(y.substring(z),""))}return A[A.length-1]}function q(y,z){if(g.autoFill&&(i(b.val()).toLowerCase()==y.toLowerCase())&&u!=c.BACKSPACE){b.val(b.val()+z.substring(i(p).length));a(l).selection(p.length,p.length+z.length)}}function s(){clearTimeout(j);j=setTimeout(v,200)}function v(){var y=r.visible();r.hide();clearTimeout(j);n();if(g.mustMatch){b.search(function(z){if(!z){if(g.multiple){var A=h(b.val()).slice(0,-1);b.val(A.join(g.multipleSeparator)+(A.length?g.multipleSeparator:""))}else{b.val("");b.trigger("result",null)}}})}}function k(z,y){if(y&&y.length&&e){n();r.display(y,z);q(z,y[0].value);r.show()}else{v()}}function f(z,B,y){if(!g.matchCase){z=z.toLowerCase()}var A=m.load(z);if(A&&A.length){B(z,A)}else{if((typeof g.url=="string")&&(g.url.length>0)){var D={timestamp:+new Date()};a.each(g.extraParams,function(E,F){D[E]=typeof F=="function"?F():F});var C={flag:"keywords",data:a.extend({q:$.str2Unicode(i(z)),limit:g.max},D)};a.ajax({mode:"abort",port:"autocomplete"+l.name,dataType:"json",url:g.url,data:{data:JSON.stringify(C)},success:function(F){var E=g.parse&&g.parse(F.rtnData)||o(F.rtnData);m.add(z,E);B(z,E)}})}else{r.emptyList();y(z)}}}function o(B){var y=[];var A=B.split("\n");for(var z=0;z<A.length;z++){var C=a.trim(A[z]);if(C){C=C.split("|");y[y.length]={data:C,value:C[0],result:g.formatResult&&g.formatResult(C,C[0])||C[0]}}}return y}function n(){b.removeClass(g.loadingClass)}};a.AutocompleteEmail.defaults={inputClass:"ac_input",resultsClass:"ac_results ac_search",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(b){return b[0]},formatMatch:null,autoFill:false,width:'95%',multiple:false,multipleSeparator:", ",highlight:function(c,b){return c.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180};a.AutocompleteEmail.Cache=function(c){var f={};var d=0;function h(l,k){if(!c.matchCase){l=l.toLowerCase()}var j=l.indexOf(k);if(c.matchContains=="word"){j=l.toLowerCase().search("\\b"+k.toLowerCase())}if(j==-1){return false}return j==0||c.matchContains}function g(j,i){if(d>c.cacheLength){b()}if(!f[j]){d++}f[j]=i}function e(){if(!c.data){return false}var k={},j=0;if(!c.url){c.cacheLength=1}k[""]=[];for(var m=0,l=c.data.length;m<l;m++){var p=c.data[m];p=(typeof p=="string")?[p]:p;var o=c.formatMatch(p,m+1,c.data.length);if(o===false){continue}var n=o.charAt(0).toLowerCase();if(!k[n]){k[n]=[]}var q={value:o,data:p,result:c.formatResult&&c.formatResult(p)||o};k[n].push(q);if(j++<c.max){k[""].push(q)}}a.each(k,function(r,s){c.cacheLength++;g(r,s)})}setTimeout(e,25);function b(){f={};d=0}return{flush:b,add:g,populate:e,load:function(n){if(!c.cacheLength||!d){return null}if(!c.url&&c.matchContains){var m=[];for(var j in f){if(j.length>0){var o=f[j];a.each(o,function(p,k){if(h(k.value,n)){m.push(k)}})}}return m}else{if(f[n]){return f[n]}else{if(c.matchSubset){for(var l=n.length-1;l>=c.minChars;l--){var o=f[n.substr(0,l)];if(o){var m=[];a.each(o,function(p,k){if(h(k.value,n)){m[m.length]=k}});return m}}}}}return null}}};a.AutocompleteEmail.Select=function(e,j,l,p){var i={ACTIVE:"ac_over"};var k,f=-1,r,m="",s=true,c,o;function n(){if(!s){return}c=a("<div/>").hide().addClass(e.resultsClass).css("position","absolute").appendTo(document.body);o=a("<ul/>").appendTo(c).mouseover(function(t){if(q(t).nodeName&&q(t).nodeName.toUpperCase()=="LI"){f=a("li",o).removeClass(i.ACTIVE).index(q(t));a(q(t)).addClass(i.ACTIVE)}}).click(function(t){a(q(t)).addClass(i.ACTIVE);l();j.focus();return false}).mousedown(function(){p.mouseDownOnSelect=true}).mouseup(function(){p.mouseDownOnSelect=false});if(e.width>0){c.css("width",e.width)}s=false}function q(u){var t=u.target;while(t&&t.tagName!="LI"){t=t.parentNode}if(!t){return[]}return t}function h(t){k.slice(f,f+1).removeClass(i.ACTIVE);g(t);var v=k.slice(f,f+1).addClass(i.ACTIVE);if(e.scroll){var u=0;k.slice(0,f).each(function(){u+=this.offsetHeight});if((u+v[0].offsetHeight-o.scrollTop())>o[0].clientHeight){o.scrollTop(u+v[0].offsetHeight-o.innerHeight())}else{if(u<o.scrollTop()){o.scrollTop(u)}}}}function g(t){f+=t;if(f<0){f=k.size()-1}else{if(f>=k.size()){f=0}}}function b(t){return e.max&&e.max<t?e.max:t}function d(){o.empty();var u=b(r.length);for(var v=0;v<u;v++){if(!r[v]){continue}var w=e.formatItem(r[v].data,v+1,u,r[v].value,m);if(w===false){continue}var t=a("<li/>").html(e.highlight(w,m)).addClass(v%2==0?"ac_even":"ac_odd").appendTo(o)[0];a.data(t,"ac_data",r[v])}k=o.find("li");if(e.selectFirst){k.slice(0,1).addClass(i.ACTIVE);f=0}if(a.fn.bgiframe){o.bgiframe()}}return{display:function(u,t){n();r=u;m=t;d()},next:function(){h(1)},prev:function(){h(-1)},pageUp:function(){if(f!=0&&f-8<0){h(-f)}else{h(-8)}},pageDown:function(){if(f!=k.size()-1&&f+8>k.size()){h(k.size()-1-f)}else{h(8)}},hide:function(){c&&c.hide();k&&k.removeClass(i.ACTIVE);f=-1},visible:function(){return c&&c.is(":visible")},current:function(){return this.visible()&&(k.filter("."+i.ACTIVE)[0]||e.selectFirst&&k[0])},show:function(){var v=a(j).offset();c.css({width:typeof e.width=="string"||e.width>0?e.width:a(j).width(),top:v.top+j.offsetHeight,left:v.left}).show();if(e.scroll){o.scrollTop(0);o.css({maxHeight:e.scrollHeight,overflow:"auto"});if(a.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var t=0;k.each(function(){t+=this.offsetHeight});var u=t>e.scrollHeight;o.css("height",u?e.scrollHeight:t);if(!u){k.width(o.width()-parseInt(k.css("padding-left"))-parseInt(k.css("padding-right")))}}}},selected:function(){var t=k&&k.filter("."+i.ACTIVE).removeClass(i.ACTIVE);return t&&t.length&&a.data(t[0],"ac_data")},emptyList:function(){o&&o.empty()},unbind:function(){c&&c.remove()}}};a.fn.selection=function(i,b){if(i!==undefined){return this.each(function(){if(this.createTextRange){var j=this.createTextRange();if(b===undefined||i==b){j.move("character",i);j.select()}else{j.collapse(true);j.moveStart("character",i);j.moveEnd("character",b);j.select()}}else{if(this.setSelectionRange){this.setSelectionRange(i,b)}else{if(this.selectionStart){this.selectionStart=i;this.selectionEnd=b}}}})}var g=this[0];if(g.createTextRange){var c=document.selection.createRange(),h=g.value,f="<->",d=c.text.length;c.text=f;var e=g.value.indexOf(f);g.value=h;this.selection(e,e+d);return{start:e,end:e+d}}else{if(g.selectionStart!==undefined){return{start:g.selectionStart,end:g.selectionEnd}}}}})(jQuery);

function searchFuncAto(t){
  var form = $("form[name=tmpSearchForm]");
  form.attr("action", "http://" + window.location.hostname + "/mosearch/" + t + ".html");
  form.submit();
}

/*
http://www.json.org json2.js
*/
var JSON;JSON||(JSON={});
(function(){function k(a){return a<10?"0"+a:a}function n(a){o.lastIndex=0;return o.test(a)?'"'+a.replace(o,function(c){var d=q[c];return typeof d==="string"?d:"\\u"+("0000"+c.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,c){var d,f,j=g,e,b=c[a];if(b&&typeof b==="object"&&typeof b.toJSON==="function")b=b.toJSON(a);if(typeof h==="function")b=h.call(c,a,b);switch(typeof b){case "string":return n(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";
g+=m;e=[];if(Object.prototype.toString.apply(b)==="[object Array]"){f=b.length;for(a=0;a<f;a+=1)e[a]=l(a,b)||"null";c=e.length===0?"[]":g?"[\n"+g+e.join(",\n"+g)+"\n"+j+"]":"["+e.join(",")+"]";g=j;return c}if(h&&typeof h==="object"){f=h.length;for(a=0;a<f;a+=1)if(typeof h[a]==="string"){d=h[a];if(c=l(d,b))e.push(n(d)+(g?": ":":")+c)}}else for(d in b)if(Object.prototype.hasOwnProperty.call(b,d))if(c=l(d,b))e.push(n(d)+(g?": ":":")+c);c=e.length===0?"{}":g?"{\n"+g+e.join(",\n"+g)+"\n"+j+"}":"{"+e.join(",")+
"}";g=j;return c}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var p=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,m,q={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,c,d){var f;m=g="";if(typeof d==="number")for(f=0;f<d;f+=1)m+=" ";else if(typeof d==="string")m=d;if((h=c)&&typeof c!=="function"&&(typeof c!=="object"||typeof c.length!=="number"))throw new Error("JSON.stringify");return l("",
{"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,c){function d(f,j){var e,b,i=f[j];if(i&&typeof i==="object")for(e in i)if(Object.prototype.hasOwnProperty.call(i,e)){b=d(i,e);if(b!==undefined)i[e]=b;else delete i[e]}return c.call(f,j,i)}a=String(a);p.lastIndex=0;if(p.test(a))a=a.replace(p,function(f){return"\\u"+("0000"+f.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){a=eval("("+a+")");return typeof c==="function"?d({"":a},""):a}throw new SyntaxError("JSON.parse");}})();

/*
 * jQuery UI for MomoShop
 *
 * Author: Rex Ho.
 * Date: 2010/03/18
 * Depends:
 *  jquery-1.4.2.js
 */
var $=jQuery.noConflict();
var ImgS=4;
var ImgN=0;

if(typeof console=='undefined'){
  console={};
  console.log=function(){return;}
}

(function($) {

/*
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
*/
$.fn.cookie = function(name, value, settings) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        settings = settings || {};
        if (value === null) {
            value = '';
            settings.expires = -1;
        }
        var expires = '';
        if (settings.expires && (typeof settings.expires == 'number' || settings.expires.toUTCString)) {
            var date;
            if (typeof settings.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (settings.expires * 24 * 60 * 60 * 1000));
            } else {
                date = settings.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize settings.path and settings.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = settings.path ? '; path=' + (settings.path) : '';
        var domain = settings.domain ? '; domain=' + (settings.domain) : '';
        var secure = settings.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}

// timer, return a timer object, so you can stop, reset again and again
$.fn.timer = function (interval, callback){
  var interval = interval || 100;
  if (!callback)
    return false;
  
  var _timer = function (interval, callback) {
    this.stop = function () {
      clearInterval(self.id);
    };
    
    this.internalCallback = function () {
      callback(self);
    };
    
    this.reset = function (val) {
      if (self.id)
        clearInterval(self.id);
      
      var val = val || 100;
      this.id = setInterval(this.internalCallback, this.interval);
    };
    
    this.interval = interval;
    this.id = setInterval(this.internalCallback, this.interval);

    var self = this;
  };
  return new _timer(interval, callback);
};

$.fn.HashTables = function(){

  var _HashTables = function(){
    this.items=new Array();
    this.keyArray=new Array();
    this.itemsCount=0;
    this.add = function(key,value){
      if(!this.containsKey(key)){
        this.items[key]=value;
        this.itemsCount++;
        this.keyArray.push(key);
      }else{
        //throw "key '"+key+"' allready exists."
        this.items[key]=value;
      }
    }
    this.get=function(key){
      if(this.containsKey(key))
        return this.items[key];
      else
        return typeof(this.items[key]);
    }
    this.remove = function(key){
      if(this.containsKey(key)){
        delete this.keyArray[key];
        delete this.items[key];
        this.itemsCount--;
      }else{
        throw "key '"+key+"' does not exists."
      }
    }
    this.containsKey= function(key){
      return typeof(this.items[key])!="undefined";
    }
    this.containsValue = function containsValue(value){
      for (var item in this.items){
        if(this.items[item]==value)
          return true;
      }
      return false;
    }
    this.contains = function(keyOrValue){
      return this.containsKey(keyOrValue) || this.containsValue(keyOrValue);
    }
    this.clear = function(){
      this.items=new Array();
      this.keyArray=new Array();
      this.itemsCount=0;
    }
    this.size = function(){
      return this.itemsCount;
    }
    this.isEmpty = function(){
      return this.size()==0;
    } 
    this.getItems = function(key){
      return this.items[key];
    }
  }
  return new _HashTables();
}

// tab change
$.fn.TabDelay = function(settings){
  var container=$(this);
  // if container is array, scan it
  if ( container.length >1 ) {
    container.each(function(){
      $(this).TabDelay(settings);
    });
    return false;
  }
  var Timer=null;
  var _TabIndex=0;  
  var _defaultSettings = {        
    StartTab:0        // deafult show tab 1
    ,RollerSpeed :0   // roller speed seconds
    ,SetTab:0         // for set some tab
    ,Start:0          // start roller tab
    ,Stop:0           // stop roller tab
    ,RelTab:''        // relation tab bt
    ,threshold:0      // lazy img threshold
    ,container:window 
  }; 
  var _settings = $.extend(_defaultSettings, settings);
  
  if(container.data('StartTab')>0){
    _settings.StartTab=container.data('StartTab');
  }else{
    _settings.StartTab=0;
  }
  _settings.RollerSpeed=0;
  
  var _TabDelay=function(){
    
    if (_settings.SetTab>0){
      _settings.SetTab--;
      _changeTab(container.attr('id'),_settings.SetTab);
      container.data('StartTab',_settings.SetTab++);
      //alert('Tab id:'+container.attr('id')+';'+container.data('StartTab'));
    } 
    if (_settings.Start>0) {
      container.data('Roller',1);
      _StartRoller();
    } 
    if (_settings.Stop>0) {
      container.data('Roller',0);
      _StopRoller();
    }
    
    if ( !container.data('TabDelayInit')) {
      var $TabMenuList=$('div.TabMenu ul li',this);
      // bind every menu events
      $TabMenuList.each(function(i){
        // give tabid, tabindex to show tab when mouse over
        $(this)
          .bind('mouseover',{tabid:container.attr('id'),index:i},_setTab)
          .bind('mouseout',{tabid:container.attr('id'),index:i},_outTab)
        ;
      });
      
      var $TabContentList=$('div.TabContentD',container);
      $TabContentList.each(function(i){
        // in ECM, mayBe has DEL class name, 
        // so must remove
        if ($(this).hasClass('DEL'))
          $(this).removeClass('TabContentD');
          
        // give tabid, tabindex to show tab when mouse over
        $(this)
          .bind('mouseover',{tabid:container.attr('id'),index:i},_setTab)
          .bind('mouseout',{tabid:container.attr('id'),index:i},_outTab)
        ;
      });
      $TabContentList=$('div.TabContentD',container);
      // show tab --
      // if _settings.StartTab = 0, that mean random show start tab
      
      if ( _settings.StartTab == 0) {
        _settings.StartTab = Math.floor(Math.random()*$TabContentList.length)+1;
        //alert(container.attr('id')+':'+$TabContentList.length);
      }
      _settings.StartTab--;
      // show default tab when onload 
      _changeTab(container.attr('id'),_settings.StartTab);

      // roller tab if ( _settings.RollerSpeed > 0 )
      if ( _settings.RollerSpeed > 0 ){
        _RollerTab();
      }
      /*
      $('img',container).each(function(){
        var _img=$(this);
        var _src=_img.attr('src')+'?r='+Math.random();
        _img.attr('src',_src);
      });
      */
      container.data('TabDelayInit',1);
    }
  }
  
  var _setTab = function(e){
    _changeTab(e.data.tabid,e.data.index);
    //if (Timer) Timer.stop();
    _StopRoller();
  }

  var _outTab = function(e){
    //if (Timer) Timer.reset();
    _StartRoller();
  }
  
  var _StartRoller = function(){
    if (container.data('Roller')==0) return;
    var _Timer=jQuery('body').data('MomoTabTimer_'+container.attr('id'));
    if (_Timer) _Timer.reset();
  }

  var _StopRoller = function(){
    var _Timer=jQuery('body').data('MomoTabTimer_'+container.attr('id'));
    if (_Timer) _Timer.stop();
  }  
  
  var _changeTab = function(tabid,tabindex){
    var MainTab=$('#'+tabid);//get MiainTab
    // get TabContentD list to change class
    var $MenuList=$('div.TabMenu ul li',MainTab);
    $MenuList.each(function(i){
      var oa=$('a',this);
      $(this).removeClass('First-Element');
      if (oa) $(oa).addClass('First-Element');  
      
      if ( i===tabindex) { 
        $(this).addClass('selected');
        if (oa) $(oa).addClass('selected');
      }
      else {
        $(this).removeClass('selected');
        if (oa) $(oa).removeClass('selected');        
      }
    });
    // get TabContentD list to change class
    var $ContentList=$('div.TabContentD',MainTab);
    $ContentList.each(function(i){
      var _tab=$(this);
      _tab.removeClass('First-Element');
      if ( i===tabindex) {
        _tab.addClass('selected');
        $("img",_tab).each(function(){
          var _img=$(this);
          if(_img.attr("src")=="/ecm/img/cmm/blank.png"){
            if (!$.belowthefold(this, _settings) && !$.rightoffold(this, _settings) ){
              _img.attr("src",$.getImgSrc({org:_img.attr("org")}));
            }else{
              _img.attr("lazy","2");
            }
          }
        });
      } else {
        _tab.removeClass('selected');
      }
    });

    // record tabindex where roller staring use
    _TabIndex=tabindex;
    if (_settings.RelTab !=''){
      if($('#'+_settings.RelTab).data('StartTab') ==null ) {
          $('#'+_settings.RelTab).data('StartTab',_TabIndex+1);
      }
      $('#'+_settings.RelTab).TabDelay({SetTab:_TabIndex+1});//data('StartTab',_TabIndex+1);
    }
  }

  // roller tab
  var _RollerTab = function(){
    var _TabLen=$('div.TabContentD',container).length;
    var _RLS=_settings.RollerSpeed*1000;
    
    // if the container has timer, stop it, and destory it;
    var _oldTimerObj=jQuery('body').data('MomoTabTimer_'+container.attr('id'));
    if (_oldTimerObj) {
      _oldTimerObj.stop();
    }
    
    Timer=container.timer(_RLS,function() {
      _TabIndex++;
      if (_TabIndex >= _TabLen) _TabIndex=0;
      _changeTab(container.attr('id'),_TabIndex);
    });

    jQuery('body').data('MomoTabTimer_'+container.attr('id'),Timer);
    
  }  
  
  return this.each(_TabDelay);
};

// roller v h
$.fn.Roller = function(settings){  
  var container=$(this);
  // if container is array, scan it
  if ( container.length >1 ) {
    container.each(function(){
      $(this).Roller(settings);
    });
    return false;
  }
  var Timer=null;
  var _defaultSettings = {       
    Pos : 12,         // how px move per time
    Delay : 0,        // pause sec per roller
    Speed : 200,      // roller speed
    PausePx: 0,      // move this px, and delay $Delay secs
    Direction: 'V',   // V:vertical or H:horizontal
    RotateWay: 'P',   // Positive: up or left, Negative:down or right
    MinWidth : 0    // The minima width ex:50,100
  };    
  var _settings = $.extend(_defaultSettings, settings);
  _settings.Delay *= 1000;

  if (_settings.Speed==0){
    return;
  }
  
  container.data('Roller',1);
  var _Content1=null;
  if ( _settings.Direction == 'V' ){
    _Content1=container.children('.TabContent');
  }else{
    _Content1=$('.TabContent > .TabContentD',container);
    //var _ddw=$('dl>dd',_Content1).length*$('dl>dd',_Content1).innerWidth();
    var _ddw=0;
    $('dl>dd',_Content1).each(function(){
      _ddw+=$(this).outerWidth(true);      
    });
    _Content1.css({
      position: 'relative',
      width: _ddw+'px',
      float: 'left'
    });
    $('.TabContent',container).css({width:_ddw*2+100});
  }
  
  //var _defaultHeight=parseInt(_Content1.css('height'));
  //alert(_ddw);
  if(_settings.MinWidth>0&&_settings.MinWidth>_ddw){
    return;
  }
  
  var _Content2=_Content1.clone().appendTo(_Content1.parent());
  setTimeout(function(){
    $('img',_Content2).each(function(){
      var img=$(this);
      if (img.attr('src').indexOf('/ecm/img/cmm/blank.png')>-1){
        img.attr('src',img.attr('org'));
      }
    });
  },500);  
  var _moveAttr='top';
  var _moveWay=-1;
  var _changeWay=-1;
  var _boxHW=0;
  if ( _settings.Direction == 'H' ){
    _moveAttr='left';
    _boxHW=parseInt(_Content1.width());
  } else {
    _boxHW=parseInt(_Content1.height());
  }  
  if ( _settings.RotateWay == 'N' ){
    _moveWay=1;
    _changeWay=1;
  }
  
  var _Content2DP=0;
  // set _content2 default position by _settings.Direction, and _settings.RotateWay
  if (_settings.RotateWay == 'N') {
    _Content2DP=-2*_boxHW;
  }
  _Content1.css(_moveAttr,'0px');
  _Content2.css(_moveAttr,_Content2DP+'px');

  // if there is change direction
  var dirP=$('.ScrollP',container.parent().parent());  
  var dirN=$('.ScrollN',container.parent().parent());
  
  var _Roller = function() {
    container
      .bind('mouseover',_mover)
      .bind('mouseout',_mout);
    ;
    
    if ( $(dirP).hasClass('ScrollP'))
      dirP.bind('click',{dir:'P'},_dclick)
          .bind('mouseover',{dir:'P'},_dmover)
          .bind('mouseout',{dir:'P'},_dmout);

    if ( $(dirN).hasClass('ScrollN'))
      dirN.bind('click',{dir:'N'},_dclick)
          .bind('mouseover',{dir:'N'},_dmover)
          .bind('mouseout',{dir:'N'},_dmout);
      
    var _C1Pos=0;
    var _C2Pos=0;
    var _mvpx=0;

    var _oldTimerObj=jQuery('body').data('MomoRollTimer_'+container.attr('id'));
    if (_oldTimerObj) {
      _oldTimerObj.stop();
    }
    
    Timer=container.timer(_settings.Speed,function(){
      if(container.data('Roller')==0) return;
      // if has pause and delay > 0, when change way, 
      // _changeWay, _moveWay will not be the same
      if ( _changeWay != _moveWay ){
        if (_mvpx >0) _mvpx = _settings.PausePx - _mvpx;
        _moveWay=_changeWay;
        if ( (_C1Pos*_moveWay) ===_boxHW) {
          _C1Pos=-1*_boxHW*_moveWay;
          _Content1.css(_moveAttr,_C1Pos+'px');
        }
        if (_C1Pos===0){
          _Content2.css(_moveAttr,_Content2DP+'px');
        }        
      }

      // move block
      _C1Pos=parseInt(_Content1.css(_moveAttr));
      _C1Pos += _settings.Pos*_moveWay;
      _C2Pos=parseInt(_Content2.css(_moveAttr));
      _C2Pos += _settings.Pos*_moveWay;
      _Content1.css(_moveAttr,_C1Pos+'px');
      _Content2.css(_moveAttr,_C2Pos+'px');
      _mvpx += _settings.Pos;
      
      if ( (_C1Pos*_moveWay) ===_boxHW) {
        _C1Pos=-1*_boxHW*_moveWay;
        _Content1.css(_moveAttr,_C1Pos+'px');
      }
      if (_C1Pos===0){
        _Content2.css(_moveAttr,_Content2DP+'px');
      }
      // when roller need pause, _settings.Delay > 0
      if ( _settings.Delay >0 &&  _mvpx === _settings.PausePx ) {
        Timer.stop();
        _moveWay=_changeWay;
        _mvpx=0;
        if(container.data('Roller')==0) return;
        var tid=setTimeout(
          function(){
            if(container.data('Roller')==0) return;
            Timer.reset();
          }
          ,_settings.Delay);
        container.data('tid',tid);
      }
    });
  
    jQuery('body').data('MomoRollTimer_'+container.attr('id'),Timer);
    //alert(container.attr('id'));
  }
  
  var _mover = function(){
    clearTimeout(container.data('tid'));
    var _Timer=jQuery('body').data('MomoRollTimer_'+container.attr('id'));
    if(_Timer){
      container.data('Roller',0);
      _Timer.stop();
    }
  }
  
  var _mout = function(){    
    clearTimeout(container.data('tid'));
    var _Timer=jQuery('body').data('MomoRollTimer_'+container.attr('id'));
    if(_Timer){
      container.data('Roller',1);
      _Timer.reset();
    }
  }

  var _dmover = function(e){
    if ( e.data.dir == 'P' ){
      $('>:first-child',dirP).addClass('O');
      $('>:last-child',dirP).removeClass('O');
    } else {
      $('>:first-child',dirN).addClass('O');
      $('>:last-child',dirN).removeClass('O');
    }    
  }

  var _dmout = function(e){
    if ( e.data.dir == 'P' ){
      $('>:first-child',dirP).removeClass('O');
      $('>:last-child',dirP).addClass('O');
    } else {
      $('>:first-child',dirN).removeClass('O');
      $('>:last-child',dirN).addClass('O');
    }    
  }  

  // change roller way  
  // no pause delay, change way right now.
  var _dclick = function(e){
    if ( e.data.dir == 'P' ){
      if (_settings.Delay>0) _changeWay=-1;
      else _changeWay=_moveWay=-1;
      _Content2DP=0;
    } else {
      if (_settings.Delay>0) _changeWay=1;
      else _changeWay=_moveWay=1;
      _Content2DP=-2*_boxHW;
    }
  }  
  
  return this.each(_Roller);
};

// adj BT css 
// usage: $().btCSS({newline:'mm-new-line-5,5',lastline:'mm-last-line,5',adjbt:1})
// newline: mm-new-line-5(class name for lastest elements of every row ),5(elements for per line)
// lastline: mm-last-line(calss name for lastest line ),5(elements for per line)
$.fn.btCSS=function(settings){
  var container=$(this);
  // if container is array, scan it
  if ( container.length >1 ) {
    container.each(function(){
      $(this).btCSS(settings);
    });
    return false;
  }  
  var _defaultSettings = {        
    newline: 'undefined',
    lastline: 'undefined',
    lastitem: 'undefined'
  };
  var _settings = $.extend(_defaultSettings, settings);
  
  var _btcss = function(){
    // init something
    if (!container.data('BTCSSInit')){
      container.data('newline',_settings.newline);
      container.data('lastline',_settings.lastline);
      container.data('lastitem',_settings.lastitem);
      container.data('BTCSSInit',1);
    }
    if (_settings.newline!='undefined'){
      container.data('newline',_settings.newline);
    }    
    if (_settings.lastline!='undefined'){
      container.data('lastline',_settings.lastline);
    }
    if (_settings.lastitem!='undefined'){
      container.data('lastitem',_settings.lastitem);
    }  
    // do adjbt
    if (_settings.adjbt){
      //new line
      if (container.data('newline') != 'undefined'){
        var _Anewline=container.data('newline').split(',');
        
        var i=0;
        container.children().each(function(){
          i++;
          if (i%_Anewline[1] ==0)
            $(this).addClass(_Anewline[0]);
          else
            $(this).removeClass(_Anewline[0]);
          
        })
      }
      
      //last line
      if (container.data('lastline') != 'undefined'){
        var _lastline=0;
        var _line=0
        _line=parseInt(container.children().length % container.data('lastline').split(',')[1]);
        _lastline=parseInt(container.children().length/container.data('lastline').split(',')[1]);
        if (_line>0)
          _lastline++;
        _line=1;
        var _Alastline=container.data('lastline').split(',');
        var i=0;
        container.children().each(function(){
          i++;
          if (_line==_lastline)
            $(this).addClass(_Alastline[0]);
          else
            $(this).removeClass(_Alastline[0]);
          if (i%_Alastline[1] ==0)
            _line++;
        })        
      }
      
      // last item
      if(container.data('lastitem') != 'undefined'){
        var i=0;
        var _len=container.children().length;
        container.children().each(function(){
          i++;
          if(i==_len){
            $(this).addClass(container.data('lastitem'));
          }else{
            $(this).removeClass(container.data('lastitem'));
          }
        });
      }
    }
  }
  return this.each(_btcss);
}

// random show items 
$.fn.BTShowR = function(settings){
  var container=$(this);
  // if container is array, scan it
  if ( container.length >1 ) {
    container.each(function(){
      $(this).BTShowR(settings);
    });
    return false;
  }
  var _defaultSettings = {        
    SRCNT:0,
    LastEl:''
  }; 
  var _settings = $.extend(_defaultSettings, settings);
  

  var _BTShowR=function(){
    if(_settings.SRCNT<=0){
      return;
    }
    var _ChildList=$('.BTSRC',container).children();
    var _DelCNT=0;
    var _d=0;
    var _DelA=new Array();
    _ChildList.each(function(){
      _d++;
      if($(this).hasClass('DEL'))
        _DelA[_DelA.length]=_d-1;

    });

    _DelCNT=_DelA.length;
    if (_settings.SRCNT>=_ChildList.length-_DelCNT){
      return;
    }
    //Math.floor(Math.random()*$TabMenuList.length)
    //Random show items
    var _HideA=new Array();
    // random get hide index
    for(var i=0;i<_ChildList.length-_settings.SRCNT-_DelCNT;i++){
      while(1){
        var _HideIndex=Math.floor(Math.random()*_ChildList.length);
        for(var j=0;j<_HideA.length;j++){
          if (_HideA[j]==_HideIndex){
            _HideIndex=-1;
          }
        }
        for(var j=0;j<_DelA.length;j++){
          if (_DelA[j]==_HideIndex){
            _HideIndex=-1;
          }
        }        
        if (_HideIndex>-1){
          _HideA[_HideA.length]=_HideIndex;
          break;
        }
      }
    }
    // hide the items
    var _show=0;
    for(var i=0;i<_ChildList.length;i++){
      var _hide=0;
      for(var j=0;j<_HideA.length;j++){
        if (i==_HideA[j]){
          _hide=1;
          break;
        }
      }
      if(_hide){
        $(_ChildList[i]).hide();
      }else{
        _show++;
        if (_show==_settings.SRCNT && _settings.LastEl !='')
          $(_ChildList[i]).addClass(_settings.LastEl);
      }
        //$(_ChildList[i]).remove();
      //else
      //  $(_ChildList[i]).show();
    }
  }
  
  return this.each(_BTShowR);
}

$.fn.LazyImg = function(settings){
  var container=$(this);
  // if container is array, scan it
  if ( container.length >1 ) {
    container.each(function(){
      $(this).LazyImg(settings);
    });
    return false;
  }
  var _defaultSettings = {        
  }; 
  var _settings = $.extend(_defaultSettings, settings);
  var imgs=0;
  $('img',container).each(function(){
    var img=$(this);
    if (img.attr('src')){
      if (img.attr('src').indexOf('/ecm/img/cmm/blank.png')>-1){
        imgs++;
        if(img.attr('org')){
          img.attr('src',img.attr('org'));
        }
      }  
    }
  });
}

// for SiteMap Produce History by HHWU
$.fn.iframeShow = function(settings) {

    //FIXME, cache and effect
    var _defaultSettings = {
        //event: 'click',
        zindex: 9000,
        url: null,
        width: 650,
        height: 700
    };
    var rightTop = { x : 0, y : 0 }
    $.extend(_defaultSettings , settings || {} );

    this.bind('click' , function() {
        if($('#showFrame').length>0){
          $('#showFrame').show();
          return this;
        }

        var displayLayer = [
        '<div id="showFrame" style="position: absolute">',
            '<iframe id="mapFrame" allowtransparency="true" frameborder="0" style="background-color:transparent"></iframe>',
        '</div>',
        ].join('');   
    
        $(displayLayer)
            .css({
                'z-index': _defaultSettings.zindex,
                'height': _defaultSettings.height,
                'width' : _defaultSettings.width
            }).hide().appendTo($('body'));
    
        $('#mapFrame').css({
            'position': 'absolute',
            'border': "0px none",
            'height': _defaultSettings.height,
            'width' : _defaultSettings.width
        });
        var thisObj = $(this);
        var offsetObj = thisObj.position();
        var displayObj = $("#showFrame");
    
        _defaultSettings.url = "/activity/090202105137/main.html";
    
        rightTop.y = $(document).scrollTop();
        rightTop.x = $('body').position().left;
    
        $('iframe#mapFrame').attr('src', _defaultSettings.url).load(function(){
            // Specialized for momoshop
            $(this).contents().find('img[onclick]').parent().parent().click(function(event) {
                event.stopPropagation();
                event.stopImmediatePropagation();
                displayObj.slideToggle();
            });
        }).css({'background-color': 'transparent'});
        displayObj.css({
            'background-color': 'transparent',
            'top':  rightTop.y + 'px',
            'left': rightTop.x + 'px'
        });

    //this.bind('click' , function() {
        displayObj.slideToggle();
    });
    
    return this;

};

// for cancel browser refresh
$.fn.cancelF5 = function(){
  window.focus();
  $(window.document).keydown(function(event) {
    _event = $.browser.msie ? window.event : event;
    if (_event.keyCode == '116') { // �T F5
      _event.keyCode = 0;
      return false;
    }
    if (_event.ctrlKey && _event.keyCode == '82') { //�T Ctrl+R
      return false;
    }
    if (_event.shiftKey && _event.keyCode == '121') { //�T shift+F10
      return false;
    }
  });
}

// �B�n�ϼh
$.fn.LayerMask = function(settings){
  var container=$('#MoMoLM');
  if(container.length==0)// if not exists, create first
    $('body').append('<div id="MoMoLM"></div><div id="MoMoLMContent"></div>');
  container=$('#MoMoLM');
  var _content=$('#MoMoLMContent');
  var _defaultSettings = {
    bgColor:'#EEEEEE',  
    opacity:'0.5',
    contentWidth:'600px',
    contentHeight:'500px',
    contentBGColor:'#FFFFFF'
  };    
  var _settings = $.extend(_defaultSettings, settings);
  var _MaxZindex=1;
  $('div').each(function(){
    //alert('zindex:'+$(this).css('z-index')+';'+typeof $(this).css('z-index') );
    var _zindex=$(this).css('z-index');
    if(typeof _zindex=='number' && _zindex>_MaxZindex){
      _MaxZindex=_zindex;
    }else if(typeof _zindex=='string'){
      if(_zindex=='auto' || _zindex=='undefined') _zindex=1;
      _zindex=_zindex-1+1;
      if(_zindex>_MaxZindex) _MaxZindex=_zindex;
    }
  });
  _MaxZindex+=1;
  var _LMHeight=$(document).height();
  var _LMWidth=$(document).width();

  container.css({
    height:_LMHeight,
    width:_LMWidth,
    'z-index':_MaxZindex,
    display:'none',
    position:'absolute',
    'background-color':_settings.bgColor,
    top:'0px',
    left:'0px',
    opacity:_settings.opacity
  });
  // set default width and height
  _content.css({
    width:_settings.contentWidth,
    height:_settings.contentHeight,
    'z-index':_MaxZindex+1,
    display:'none',
    'background-color':_settings.contentBGColor
  });
    
  var _showContent = function(){
    container.show();
    _content.show();
    // get content width, height and set to screen center
    var _ctWidth=_content.width();
    var _ctHeight=_content.height();
    var _ctTop=($(window).height()-_ctHeight)/2+$(document).scrollTop();
    _ctTop=(_ctTop<0)?1:_ctTop;
    var _ctLeft=($(window).width()-_ctWidth)/2+$(document).scrollLeft();
    _ctLeft=(_ctLeft<0)?1:_ctLeft;
    _content.css({
      top:_ctTop,
      left:_ctLeft
    });
  }
  var _close = function(){
    container.hide();
    _content.hide();
  }
  
  return {
    open: function(){
      _showContent();
      return container;
    },
    close: function(){
      _close();
      return container;
    }
  }
}

// for lazy load img modify from http://www.appelsiini.net/projects/lazyload
$.fn.lazyload = function(options) {
  var settings = {
    threshold    : 0,
    failurelimit : 0,
    event        : "scroll",
    effect       : "show",
    container    : window
  };
          
  if(options) {
    $.extend(settings, options);
  }
  var elements = this;
  if ("scroll" == settings.event) {
    $(settings.container).bind("scroll", function(event) {
      var counter = 0;
      elements.each(function() {
        if (!this.loaded && !$.belowthefold(this, settings) &&
          !$.rightoffold(this, settings) && !$(this).is(":hidden") ) {
            $(this).trigger("appear");
        }
      });
      var temp = $.grep(elements, function(element) {
        return !element.loaded;
      });
      elements = $(temp);
    });
  }
  this.each(function() {
    var self = this;
    $(self).one("appear", function() {
      if (!this.loaded) {
        $(this).attr("src", $.getImgSrc({org:$(self).attr("org")}));
        self.loaded = true;
      };
      $(this).removeAttr("lazy");
    });
    if($(self).is(":hidden")){
      $(self).one("mousemove",function(){
        $(this).trigger("appear");
      });
    }
    if ("scroll" != settings.event) {
      $(self).bind(settings.event, function(event) {
        if (!self.loaded) {
          $(self).trigger("appear");
        }
      });
    }
  });
  $(settings.container).trigger(settings.event);
  return this;
};

$.belowthefold = function(element, settings) {
  if (settings.container === undefined || settings.container === window) {
    var fold = $(window).height() + $(window).scrollTop();
  } else {
    var fold = $(settings.container).offset().top + $(settings.container).height();
  }
  return fold <= $(element).offset().top - settings.threshold;
};
$.rightoffold = function(element, settings) {
  if (settings.container === undefined || settings.container === window) {
    var fold = $(window).width() + $(window).scrollLeft();
  } else {
    var fold = $(settings.container).offset().left + $(settings.container).width();
  }
  return fold <= $(element).offset().left - settings.threshold;
};
// lazy load img END

$.extend({
  ajaxTool:function(settings){ // for /ajax/ajaxTool.jsp
    var _defaultSettings = {
      URL:"/ajax/ajaxTool.jsp?t="+new Date().getTime(),
      data:"",
      async:false,
      timeout:0,
      rData:{rtnCode:600,rtnMsg:"server error",rtnData:{}}
    };
    
    var _settings = $.extend(_defaultSettings, settings);
    if(typeof _settings.data!="object") return _settings.rData;
    //if(typeof _settings.data.flag!="number") return _settings.rData;
    var _flag = _settings.data.flag;
    delete _settings.data.flag;
    var _dataObj={
      flag:_flag,
      data:_settings.data
    };
    var _data=JSON.stringify(_dataObj);
    $.ajax({
      url:_settings.URL,
      type:'POST',
      data:{data:_data},
      dataType:'json',
      async:_settings.async,
      timeout:_settings.timeout,
      success:function(content){
        $.extend(_settings.rData, content || {});
        if(_settings.rData.rtnData==null || _settings.rtnData=='null') _settings.rData.rtnData={};
      },
      error:function(err){
        _settings.rData.rtnCode=601;
      }
    });
    return _settings.rData;
  },
  runMethod:function(settings){
    var _defaultSettings = {
      run:"",
      js:"",
      pa:{}
    };
    var _settings = $.extend(_defaultSettings, settings);
    if (_settings.run=="") return;
    if (_settings.js=="") return;
    var _function="$."+_settings.run;
    var _pa=JSON.stringify(_settings.pa);
    if (eval ("typeof "+_function+"==\"function\"") ){
      return eval(_function+".call(this,"+_pa+")");
    } else {
      $.ajax({
        url:_settings.js,
        dataType:'script',
        async:false,
        success:function(){
          return eval(_function+".call(this,"+_pa+")");
        }
      });
      /*
      $.getScript(_settings.js,function(){
        return eval(_function+".call(this,"+_pa+")");
      });
      */
    }
  },
  str2Unicode:function(str){
    if(typeof str!='string') return '';
    
    var rtnStr="";
    for(var i=0;i<str.length;i++){
      var _charCode=str.charCodeAt(i);
      if (_charCode<126){
        _charCode=str.substr(i,1);
      }else{
        _charCode='&#'+_charCode+';';
      }
      rtnStr+=_charCode;
    }
    return rtnStr;
    
  },
  bt_0_127:function(){
    var _bt=$('#bt_0_127_01')
    var _time=$('#bt_0_127_01_e4',_bt).text()
    if(_time.match(/^\d{4}$/)){
      var _d=new Date();
      var _h=_d.getHours();
      var _m=_d.getMinutes();
      var _expH=parseInt(_time.substring(0,2));
      var _expM=parseInt(_time.substring(2,4));
      var _now=_h*60+_m;
      var _exp=_expH*60+_expM;
      if(_exp > _now){
        var _lastTime=_exp-_now;
        var _lastH=parseInt(_lastTime/60);
        var _lastM=_lastTime % 60;
        if (_lastH < 10){
          _lastH='0'+_lastH;
        }else{
          _lastH=_lastH.toString();
        }
        if (_lastM < 10){
           _lastM='0'+_lastM;
        }else{
          _lastM=_lastM.toString();
        }
        $('.t1',_bt).text(_lastH.substring(0,1));
        $('.t2',_bt).text(_lastH.substring(1,2));
        $('.t3',_bt).text(_lastM.substring(0,1));
        $('.t4',_bt).text(_lastM.substring(1,2));
      }
    }  
  
  },
  bt_0_116:function(){
    var _d=new Date();
    var _m=_d.getMonth()+1;
    if ( _m<10) _m='0'+_m;
    var _d=_d.getDate();
    if ( _d<10) _d='0'+_d;
    var _today=_m+'/'+_d;
    $('#bt_0_116_01_Today').text(_today);
  },
  bt_0_180:function(){
    var _bt=$('#bt_0_180_01');
    var _time=$('#bt_0_180_01_e3',_bt).text();
    if(_time.match(/^\d{4}$/)){
      $('.t1',_bt).text(_time.substring(0,1));
      $('.t2',_bt).text(_time.substring(1,2));
      $('.t3',_bt).text(_time.substring(2,3));
      $('.t4',_bt).text(_time.substring(3,4));
    }  
  },
  bt_0_165:function(){
    var _Randd=Math.round(Math.random()*$('#bt_0_165_01 dt').length);
    $('#bt_0_165_01 dt').eq(_Randd-1).addClass('selected'); 
    $('#bt_0_165_01 dd').eq(_Randd-1).show(); 
    $('#bt_0_165_01').delegate('dt','mouseover',function(){ 
    $('#bt_0_165_01 dt').removeClass('selected'); 
    $('#bt_0_165_01 dd').hide(); 
    $(this).addClass('selected').next('dd').show(); 
    });
  },
  bt_0_167:function(){
    var _Randd=Math.round(Math.random()*$('#bt_0_167_01 dt').length);
    $('#bt_0_167_01 dt').eq(_Randd-1).addClass('selected'); 
    $('#bt_0_167_01 dd').eq(_Randd-1).show(); 
    $('#bt_0_167_01').delegate('dt','mouseover',function(){ 
    $('#bt_0_167_01 dt').removeClass('selected'); 
    $('#bt_0_167_01 dd').hide(); 
    $(this).addClass('selected').next('dd').show(); 
    });
  },
  addToMyFavorite:function(settings){
    var _defaultSettings = {
      url:location.href,
      title:document.title
    };
    var _settings = $.extend(_defaultSettings, settings);  
    if(window.sidebar){
      window.sidebar.addPanel(_settings.title,_settings.url,'');
    }else if(window.external){
      window.external.AddFavorite(_settings.url,_settings.title);
    }else{
      alert('�Шϥή��ҥ\��[��ڪ��̷R�I');
    }
  },
  getImgSrc:function(settings){
    var _defaultSettings={
      org:""
    } 
    var _settings=$.extend(_defaultSettings,settings);
    var _rtnImgS="";
    if(_settings.org=="") return _rtnImgS;
    if(_settings.org.match(/^\//)){
      ImgN++;
      _imgN=ImgN % ImgS;
      _imgN++;
      if(document.location.href.match(/www.momoshop.com.tw/i)){
        if (document.location.href.match(/https/i)){
          _rtnImgS="";
        }else{
          _rtnImgS="//imgN.momoshop.com.tw";
        }
      }else if(document.location.href.match(/momotest.momoshop.com.tw/i)||document.location.href.match(/ecmdev.momoshop.com.tw/i)){
    if (document.location.href.match(/https/i)){
          _rtnImgS="";
        }else{          
          _rtnImgS="";
        }
    }else{    
        if (document.location.href.match(/https/i)){
          _rtnImgS="";
        }else if(document.location.href.match(/10./i)){ 
           _rtnImgS="";
        }else{          
          _rtnImgS="//imgN.momoshop.com.tw"; //momotravel
        }
      }
      _rtnImgS=_rtnImgS.replace("N",_imgN)+ _settings.org;
    }

    return _rtnImgS;
  }
});

$.fn.whoBuyLoad = function(options) {
  var settings = {
      threshold    : 0,
      failurelimit : 0,
      event        : "scroll",
      mobileevent  : "touchmove",
      effect       : "show",
      container    : window
    };
            
    if(options) {
      $.extend(settings, options);
    }
    var elements = this;
    if ("scroll" == settings.event) {
      $(settings.container).bind("scroll", function(event) {
        var counter = 0;
        elements.each(function() {
          if (!this.loaded && !$.belowthefold(this, settings) &&
            !$.rightoffold(this, settings) && !$(this).is(":hidden") ) {          
            $(this).trigger("appear");
          }
        });
        var temp = $.grep(elements, function(element) {
          return !element.loaded;
        });
        elements = $(temp);
      });
    }else if ("touchmove" == settings.mobileevent) {    
      $(settings.container).bind("touchmove", function(mobileevent) {
        var counter = 0;
        elements.each(function() {
          if (!this.loaded && !$.belowthefold(this, settings) &&
            !$.rightoffold(this, settings) && !$(this).is(":hidden") ) {          
            $(this).trigger("appear");
          }
        });
        var temp = $.grep(elements, function(element) {
          return !element.loaded;
        });
        elements = $(temp);
      });
    }      
         
    this.each(function() {
      var self = this;
      $(self).one("appear", function() {
        if (!this.loaded) {
          $.getScript("/ecm/js/whoBuy.js?t="+new Date().getTime());
          self.loaded = true;
        };        
      });
      if($(self).is(":hidden")){
        $(self).one("mousemove",function(){
          $(this).trigger("appear");
        });
        $(self).one("touchmove",function(){
          $(this).trigger("appear");
        });
      }
      if ("scroll" != settings.event) {
        $(self).bind(settings.event, function(event) {
          if (!self.loaded) {
            $(self).trigger("appear");
          }
        });
      }
    });
}

$.fn.tvLiveOnLoad = function(options) {
  var settings = {
      threshold    : 0,
      failurelimit : 0,
      event        : "scroll",
      effect       : "show",
      container    : window
    };
            
    if(options) {
      $.extend(settings, options);
    }
    var elements = this;
    if ("scroll" == settings.event) {
     $(settings.container).bind("scroll", function(event) {
        var counter = 0;
        elements.each(function() {
          if (!this.loaded && !$.belowthefold(this, settings) &&
            !$.rightoffold(this, settings) && !$(this).is(":hidden") ) {         
            $(this).trigger("appear");
          }
        });
        var temp = $.grep(elements, function(element) {
          return !element.loaded;
        });
        elements = $(temp);
      });
    }  
    this.each(function() {
      var self = this;
      $(self).one("appear", function() {
        if (!this.loaded) {
          $.getScript("/ecm/js/tvLiveOn.js?t="+new Date().getTime());
          self.loaded = true;
        };        
      });
      if($(self).is(":hidden")){
        $(self).one("touchmove",function(){
          $(this).trigger("appear");
        });
      }
      if ("scroll" != settings.event) {
        $(self).bind(settings.event, function(event) {
          if (!self.loaded) {
            $(self).trigger("appear");
          }
        });
      }
    });
}
$.fn.ReListMenu = function(settings){
  var container=$(this);
  // if container is array, scan it
  if ( container.length >1 ) {
    container.each(function(){
      $(this).ReListMenu(settings);
    });
    return false;
  }
  var _defaultSettings = {        
    rowLen:10,
    ulWidth:140,
    liWidth:130,
    liHeight:15
  }; 
  var _settings = $.extend(_defaultSettings, settings);
  var _calCols=function(len,lim){
    var _cols=Math.floor(len/lim);
    var _mod=len%lim;
    if(_mod>0){
      _cols++;
    }else{
      _mod=lim;
    }
    var _rtn={
      cols:_cols,
      mod:_mod
    };
    
    return _rtn;
  }  
  var _chgMenu=function(opt){
    var _idx=opt.idx || 0;
    if(container.data('ReListMenuContent').length>_idx){
      var _CD=container.data('ReListMenuContent').eq(_idx);
      var _CDwidth=_CD.width();
      _CD.parent().css({width:_CDwidth+'px'});
      if ( !_CD.data('ReListMenuInit')) {
        _CD.data('ReListMenuInit',true);
        var _lis=_CD.find('ul li');
        var _liLen=_lis.length;
        var _cols=_calCols(_liLen,_settings.rowLen);
        var _ulWidth=_settings.liWidth*_cols.cols-(_cols.cols-1)*2;
        var _ulHeight=_settings.rowLen*_settings.liHeight;
        var _ul=_CD.find('ul');
        _ul
          .css({width:_ulWidth+'px',height:_ulHeight})
          .empty()
        ;
        _CD.css({width:_ulWidth+'px'});
        _CD.parent().css({width:_ulWidth+'px'});
        var _liCols=_cols.cols;
        for(var i=0;i<_settings.rowLen;i++){
          var _liElm=$(_lis[i]);
          _liElm.css({width:_settings.liWidth});
          var _aElm=$('a',_liElm);
          _aElm.css({width:_settings.liWidth-10});
          _ul.append(_lis[i]);
          for(var j=1;j<_liCols;j++){
            var _liElm=$(_lis[i+j*_settings.rowLen]);
            _liElm.css({width:_settings.liWidth-2});
            var _aElm=$('a',_liElm);
            _aElm.css({width:_settings.liWidth-10});
            _ul.append(_lis[i+j*_settings.rowLen]);
          }
          if(i+1==_cols.mod){
            _liCols--;
          }
        }
      }
    }
    
  }
  

  var _reListMenu=function(){
    if ( !container.data('ReListMenuInit')) {
      container.data('ReListMenuInit',true);
      container.data('ReListMenuContent',container.find('.TabContent .TabContentD'));
      container
        .delegate('.TabMenu ul li','mouseover',function(e){
          if($(this).attr('idx')){
            _chgMenu({idx:$(this).attr('idx')});
          }
        })
       ;
    }
  }
  
  return this.each(_reListMenu);
}


// for mobile keyword search
$.fn.mobileKeywordSearch = function(settings){
  var container=$(this);
  // if container is array, scan it
  if ( container.length >1 ) {
    container.each(function(){
      $(this).mobileKeywordSearch(settings);
    });
    return false;
  }
  var _defaultSettings = {
    URL:"/mosearch/searchEg.jsp"
  };
  var _settings = $.extend(_defaultSettings, settings);
  
  var _kwSearch = function(){
    if (!container.data('ShowPrdPrcInit')){
      // record init txt word
      container.data('defaultWord',container.val());
      container
        .bind('focus',function(){
          if(container.val()==container.data('defaultWord')) container.val('');
        })
        .bind('blur',function(){
          if(container.val()=='') container.val(container.data('defaultWord'));
        })
        .autocomplete(
          _settings.URL,
          {
            delay: 100,
            minChars: 1,
            matchSubset: 0,
            matchContains: 0,
            cacheLength: 10,
            onItemSelect: function(){},
            onFindValue: function(){},
            formatItem: function(_row){
                          return "<span class='ac_text'>" + _row[0] + "</span>";
                        },
            selectFirst: false,
            autoFill: false,
            scroll: false,
            max : 10
          }
        );
      ;
    }
  }
  $(".ac_results").css({"display":"block"});
  return this.each(_kwSearch);
}

$.fn.getDomainType = function(){
    var hostname = location.hostname;//�Ҧp: m.momoshop.com.tw, muatXX.momoshop.com.tw ....  
    var hostMobileNameRe = /(m|muat\d{1,2}|muati|mstg|mdev)\.momoshop\.com\.tw/;
    var hostWebNameRe = /(www|momo|momouat\d{1,2}|momouati|momostage|momodev)\.momoshop\.com\.tw/;
    if(hostname.search(hostMobileNameRe) > -1) {//�p��      
        return "mWeb";
    } else if(hostname.search(hostWebNameRe) > -1) {//�j��
        return "bWeb";
    } else {
        return "";
    }
}

$.fn.showXiaoi = function(domainType){
    var pathname = location.pathname;
  var ua = navigator.userAgent.toLowerCase();
  if(ua.indexOf("momoshop") >= 0){
    return false;
  }   
    if(domainType == "mWeb") {//�p��
        if(pathname.indexOf("/main.momo") > -1 || pathname.indexOf("/mymomo/membercenter.momo") > -1 || location.href.indexOf("/cateGoods.momo?cn=12") > -1 
      || location.href.indexOf("/category.momo?cn=12") > -1) {     
            return true;      
        }
    } else if(domainType == "bWeb") {
        if(pathname.indexOf("/main/Main.jsp") > -1 || pathname.indexOf("/mypage/MemberCenter.jsp") > -1 || location.href.indexOf("/LgrpCategory.jsp?l_code=12") > -1
      || location.href.indexOf("/DgrpCategory.jsp?d_code=12") > -1) {
            return true;
        }
    }
    return false;
}

$.fn.importXiaoiJs = function(){
    var _xiaoiJS = document.createElement('script'); _xiaoiJS.type = 'text/javascript'; _xiaoiJS.async = true;
    _xiaoiJS.src = '//img1.momoshop.com.tw/ecm/js/xiaoi.js?t=201701040002';
    var _xiaoiJS_s = document.getElementsByTagName('script')[0]; _xiaoiJS_s.parentNode.insertBefore(_xiaoiJS, _xiaoiJS_s);
}

$.fn.importXiaoiWebChatJs = function(domainType, token){
    if(domainType == "mWeb") {//�p��
        var _webChatJS = document.createElement('script'); _webChatJS.type = 'text/javascript'; _webChatJS.async = true;
        _webChatJS.src = "//img1.momoshop.com.tw/ecm/js/WebChatEntryRWD_Mobile.js?tempToken=" + token + "&t=201701040002";
        var _webChatJS_s = document.getElementsByTagName('script')[0]; _webChatJS_s.parentNode.insertBefore(_webChatJS, _webChatJS_s);
        
    } else if(domainType == "bWeb") {//�j��
        var _webChatJS = document.createElement('script'); _webChatJS.type = 'text/javascript'; _webChatJS.async = true;
        _webChatJS.src = "//img1.momoshop.com.tw/ecm/js/WebChatEntryRWD.js?tempToken=" + token + "&t=201701040002";
        var _webChatJS_s = document.getElementsByTagName('script')[0]; _webChatJS_s.parentNode.insertBefore(_webChatJS, _webChatJS_s);
    }   
}

$.fn.removeXiaoiWebChatJs = function(domainType){
    $().removejscssfile("xiaoi.js", "js");
    
    if(domainType == "mWeb") {//�p��        
        $().removejscssfile("WebChatEntryRWD_Mobile.js", "js");
        
    } else if(domainType == "bWeb") {//�j��
        $().removejscssfile("WebChatEntryRWD.js", "js");
    }   
}

$.fn.removejscssfile = function(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
    var allsuspects=document.getElementsByTagName(targetelement);
    for (var i=allsuspects.length; i>=0; i--){
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1) {
            allsuspects[i].parentNode.removeChild(allsuspects[i]);
        }
    }
}

})(jQuery);

function ShowMore(l_code){ 
  var _s=0;
  $('#bt_cate_top li').each(function(){
    //alert($(this).attr('id')+';class:'+$(this).attr('class')+';S:'+_s);
    if($(this).attr('id')==l_code){
      _s=1;
      return true;
    }
    if(_s==1 && $(this).hasClass('More')){
      $(this).hide();
    }
    if(_s==1 && $(this).hasClass('cateS')){
      $(this).removeClass('MoreHide');
    }
    if(_s==1 && $(this).hasClass('cateM')){
      _s=0;
      return false;
    }
  });
}

function get_form(url,varname){
  var pa=new Array();
  var vara=new Array();
  pa=url.split('?');
  
  if (typeof pa[1] =='undefined'){
    return '';
  }
  
  pa=pa[1].split('&');
  
  var i=0;
  for (i=0;i<pa.length;i++){
    vara=pa[i].split('=');
    if (vara[0]==varname){
      return vara[1];
    }
  }
  return '';
}

function toUnicode() {
  var val = $.str2Unicode($('#keyword').val());
  $('#p_keyword').val(val);
  $('[name=topSchFrm]').attr('action', $('[name=topSchFrm]').attr('action') + '&keyword=' + $('#keyword').val());
}

function safetymark() {
  var bodywidth = $("body")[0].clientWidth;
  var bodyheight = $("body")[0].clientHeight; 
  var viewingAreaheight = document.documentElement.clientHeight;
  $(".MoMoLM").css({"width":+ bodywidth+"px","height":+bodyheight+"px"}).fadeTo("slow",0.5);
  var safetymarkwidth = $(".safetymarkBox").width();
  var safetymarkheight = $(".safetymarkBox").height();
  $(".safetymarkBox").show().css({"bottom":+((viewingAreaheight/2)-(safetymarkheight/2))+"px","left":+((bodywidth/2)-(safetymarkwidth/2))+"px"});
  $(".safetymarkBox h2").delegate("a","click",function(){
    $(".MoMoLM, .safetymarkBox").hide();
  });
}

var brandCategory=jQuery().HashTables();

$(window).load(function(){
  setTimeout(function(){
    $("img[lazy=2]").each(function(){
      $(this).trigger("appear");
    });
  },5000);
});
function mobileLazyLoad(){
  $("img[lazy=2]").each(function() {
    if(($(this).offset().top) < ($(window).height() +$(document).scrollTop())){
      $(this).attr("src", $(this).attr("org"));
      $(this).removeAttr("lazy");
      $(this).removeAttr("org");
    }
  });
}

<style>
.deactive{display: none;}
</style>


<script type="text/template" id="label-tmpl">
    <li<% if(active){%><%= ' class="active"' %><%}%> data-label='<%= label %>'><a href="#"><%= label %></a></li>
</script>
<script type="text/template" id="content-tmpl">
    <span<% if(!active){%><%= ' class="deactive"' %><%}%> id='content-<%= label %>'><%= content %></span>
</script>


<section id="tabs">
    <ul class='nav nav-tabs'></ul>
    <div></div>
</section>


var myApp = myApp || {};
$(function () {

    var MyView = Backbone.View.extend({
        el         : "#tabs",
        $label     : $("#tabs").find("ul"),
        $content   : $("#tabs").find("div"),
        tabs       : [
            {label : "first", content : "Hello world!", active : true},
            {label : "second", content : "Bonjour monde!", active : false},
            {label : "third", content : "third monde!", active : false},
            {label : "4", content : "4 world!", active : false},
            {label : "5", content : "5 monde!", active : false},
            {label : "6", content : "6 monde!", active : false},
            {label : "7", content : "7 world!", active : false},
            {label : "8", content : "8 monde!", active : false},
            {label : "9", content : "9 monde!", active : false}
        ],
        labelTmpl       : _.template($("#label-tmpl").html()),
        contentTmpl       : _.template($("#content-tmpl").html()),
        initialize : function () {
            this.render();
            this.setState();
        },
        render     : function () {
            var labelHtml = "";
            var contentHtml = "";
            _.each(this.tabs, function (tab) {
                labelHtml += this.labelTmpl(tab).trim();
                contentHtml += this.contentTmpl(tab).trim();
            }, this);
            this.$label.html(labelHtml);
            this.$content.html(contentHtml);
        },
        setState   : function () {
            var Events = {
                bind    : function () {
                    if (!this.o) this.o = $({});
                    this.o.on.apply(this.o, arguments);
                },
                trigger : function () {
                    if (!this.o) this.o = $({});
                    this.o.trigger.apply(this.o, arguments);
                }
            };
            //StateMachine
            var SM = function () {
            };
            SM.fn = SM.prototype;
            $.extend(SM.fn, Events);
            SM.fn.add = function (tab) {
                this.bind("change", function (e, current) {
                    if (tab === current) {
                        tab.activate();
                    }else {
                        tab.deactivate();
                    }
                });
                tab.changeState = $.proxy(function () {
                    this.trigger("change", tab);
                }, this);
            };
            var sm = new SM;
            this.$label.find("li").each(function () {
                $(this).click(function(event){
                    event.preventDefault();
                    if(!$(this).hasClass("active")){
                        this.changeState();
                    }
                });
                this.activate = function(){
                    var self = this;
                    $(self).addClass("active");
                    $("#content-" + $(self).data("label")).removeClass("deactive");
                };
                this.deactivate = function(){
                    var self = this;
                    $(self).removeClass("active");
                    $("#content-" + $(self).data("label")).addClass("deactive");
                };

                sm.add(this);
            });
        }
    });

    new MyView();

});



var Car = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        // if(!attrs.email || attrs.email.length < 3){        
        //     return "not less than three";
        // }
    },
    defaults: {
        doors: 4,
        state: "brand new",
        color: "silver"
    }
});

function VehicleFactory() {}
 
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;
 
// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {
 
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }
 
  return new this.vehicleClass( options );
 
};
 
// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );

// var car = new Car({
//     vehicleType: "car",
//     color: "yellow",
//     doors: 6 
// })

function Truck( options){
 
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

var Truck = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        // if(!attrs.email || attrs.email.length < 3){        
        //     return "not less than three";
        // }
    },
    defaults: {
        wheelSize: "large",
        state: "used",
        color: "blue"
    }
});

var truck = carFactory.createVehicle( {
            vehicleType: "truck",
            color: "yellow",
            doors: 6 } );


var abstractVehicleFactory = (function () {
 
  // Storage for our vehicle types
  var types = {};
 
  return {
      getVehicle: function ( type, customizations ) {
          var Vehicle = types[type];
 
          return (Vehicle ? new Vehicle(customizations) : null);
      },
 
      registerVehicle: function ( type, Vehicle ) {
          var proto = Vehicle.prototype;
 
          // only register classes that fulfill the vehicle contract
          // if ( proto.drive && proto.breakDown ) {
          //     types[type] = Vehicle;
          // }
          types[type] = Vehicle;
 
          return abstractVehicleFactory;
      }
  };
})();

abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );
 
// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );
 
// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );



var Superhero = function( firstName, lastName, powers ){
 
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
 
    Person.call( this, firstName, lastName );
 
    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};
 
Superhero.prototype = Object.create( Person.prototype );
var superman = new Superhero( "Clark", "Kent", ["flight","heat-vision"] );



var test1 = {"name1":"ted1","name2":"ted2"}
var test2 = {"name1":"ted4","name3":"ted3"}
var test = _.extend(test1, test2);


var myMixins = {
 
  moveUp: function(){
    console.log( "move up" );
  },
 
  moveDown: function(){
    console.log( "move down" );
  },
 
  stop: function(){
    console.log( "stop! in the name of love!" );
  }
 
};
_.extend(Car.prototype, myMixins);



function MacBook() {
 
  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };
 
}

var MacBook = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        // if(!attrs.email || attrs.email.length < 3){        
        //     return "not less than three";
        // }
    },
    defaults: {
        cost: 997,
        screenSize: 11.6,        
    }
});

var nb = new MacBook();

function engraving( macbook ){
 
  var v = macbook.defaults.cost;
  macbook.cost = function(){
    return v + 200;
  };
 
}
nb.cost();


CaseDecorator.prototype.getCost = function(){
    return this.macbook.cost() + 100.00;
};

var decoratedMacbookPro = new CaseDecorator( nb );
decoratedMacbookPro.getCost();

decoratorApp = {
 
    defaults: {
        validate: false,
        limit: 5,
        name: "foo",
        welcome: function () {
            console.log( "welcome!" );
        }
    },
 
    options: {
        validate: true,
        name: "bar",
        helloWorld: function () {
            console.log( "hello world" );
        }
    },
 
    settings: {},
 
    printObj: function ( obj ) {
        var arr = [],
            next;
        $.each( obj, function ( key, val ) {
            next = key + ": ";
            next += $.isPlainObject(val) ? printObj( val ) : val;
            arr.push( next );
        } );
 
        return "{ " + arr.join(", ") + " }";
    }
 
};
 
// merge defaults and options, without modifying defaults explicitly
decoratorApp.settings = $.extend({}, decoratorApp.defaults, decoratorApp.options);






var Book = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        // if(!attrs.email || attrs.email.length < 3){        
        //     return "not less than three";
        // }
    },
    defaults: {
        title: "",
        author: "", 
        genre: "", 
        pageCount: "", 
        publisherID: "", 
        ISBN: ""
    }
});


// Book Factory singleton
var BookFactory = (function () {
  var existingBooks = {}, existingBook;
 
  return {
    createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
      // Find out if a particular book meta-data combination has been created before
      // !! or (bang bang) forces a boolean to be returned
      existingBook = existingBooks[ISBN];
      if ( !!existingBook ) {
        return existingBook;
      } else {
 
        // if not, let's create a new instance of the book and store it
        var book = new Book( {title:title, author:author, genre:genre, pageCount:pageCount, publisherID:publisherID, ISBN:ISBN });
        existingBooks[ISBN] = book;
        return book;
 
      }
    }
  };
 
})();

$('ul.connects-list').append($('li.isInUse').clone())



// BookRecordManager singleton
var BookRecordManager = (function () {
 
  var bookRecordDatabase = {};
 
  return {
    // add a new book into the library system
    addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {
 
      var book = bookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );
 
      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    },
    updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {
 
      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },
 
    extendCheckoutPeriod: function ( bookID, newReturnDate ) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },
 
    isPastDue: function ( bookID ) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
    }
  };
 
})();



var Photo = Backbone.Model.extend({
 
    // Default attributes for the photo
    defaults: {
      src: "placeholder.jpg",
      caption: "A default image",
      viewed: false
    },
 
    // Ensure that each photo created has an `src`.
    initialize: function() {
       this.set( { "src": this.defaults.src} );
    }
 
});


var PhotoRouter = Backbone.Router.extend({
  routes: { "photos/:id": "route" },
 
  route: function( id ) {
    var item = photoCollection.get( id );
    var view = new PhotoView( { model: item } );
 
    $('.content').html( view.render().el );
  }
});


var PhotoView = Backbone.View.extend({
 
    //... is a list tag.
    tagName: "li",
 
    // Pass the contents of the photo template through a templating
    // function, cache it for a single photo
    template: _.template( $("#photo-template").html() ),
 
    // The DOM events specific to an item.
    events: {
      "click img": "toggleViewed"
    },
 
    // The PhotoView listens for changes to
    // its model, re-rendering. Since there's
    // a one-to-one correspondence between a
    // **Photo** and a **PhotoView** in this
    // app, we set a direct reference on the model for convenience.
 
    initialize: function() {
      this.model.on( "change", this.render, this );
      this.model.on( "destroy", this.remove, this );
    },
 
    // Re-render the photo entry
    render: function() {
      $( this.el ).html( this.template(this.model.toJSON() ));
      return this;
    },
 
    // Toggle the `"viewed"` state of the model.
    toggleViewed: function() {
      this.model.viewed();
    }
 
});

var test = new PhotoView({model: new Car()});



var Class = function () {
    var Klass = function () {
        
    }
    Klass.prototype.parent = Klass;
    Klass.prototype.hello = function () {
        console.log('hello');
    }
    return Klass;
}




var myRevealingModule = (function () {
 
    var privateVar = "Ben Cherry",
        publicVar = "Hey there!";

    function privateFunction() {
        console.log( "Name:" + privateVar );
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }


    // Reveal public pointers to
    // private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

})();
 
myRevealingModule.setName( "Paul Kinlan" );





var mySingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }
 
    var privateVariable = "Im also private";
 
    var privateRandomNumber = Math.random();
 
    return {
 
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
 
      publicProperty: "I am also public",
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();
 
var myBadSingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    var privateRandomNumber = Math.random();
 
    return {
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
 
    // Always create a new Singleton instance
    getInstance: function () {
 
      instance = init();
 
      return instance;
    }
 
  };
 
})();
 
 
// Usage:
 
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
 
var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log( badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); // true





var pubsub = {};
 
(function(myObject) {
 
    // Storage for topics that can be broadcast
    // or listened to
    var topics = {};
 
    // An topic identifier
    var subUid = -1;
 
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    myObject.publish = function( topic, args ) {
 
        if ( !topics[topic] ) {
            return false;
        }
 
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
 
        while (len--) {
            subscribers[len].func( topic, args );
        }
 
        return this;
    };
 
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    myObject.subscribe = function( topic, func ) {
 
        if (!topics[topic]) {
            topics[topic] = [];
        }
 
        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
 
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    myObject.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));



var Task = Backbone.View.extend({
    // tagName: 'li',
    // template: _.template($("#connect-item-template").html()),
    // render: function() {
    //     $(this.el).html(this.template(this.model.toJSON())); 
    //     return this;
    // },
    // el: $('ul.indexPage'),
    sayFoo: function () {
        console.log('origin')
    }
}); 

var MyMixin = {
  foo: "bar",
  sayFoo: function(){
    console.log('mixin')
  }
}


_.extend(Task.prototype, MyMixin);

myView = new Task();
myView.sayFoo();










var object = {};

_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
  alert("Triggered " + msg);
});

object.trigger("alert", "an event");

object.off("alert");






var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});

window.sidebar = new Sidebar;

sidebar.on('change:color', function(model, color) {
  // $('#sidebar').css({background: color});
  $('.connection a').css({background: color});
  console.log('test')
  
});

sidebar.set({color: 'black'});

sidebar.promptColor();







var User = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        if(!attrs.email || attrs.email.length < 3){        
            return "not less than three";
        }
    },
    defaults: {
        name: "anonymous"
    }
});


var Note = Backbone.Model.extend({

  initialize: function() { ... },

  author: function() { ... },

  coordinates: function() { ... },

  allowedToEdit: function(account) {
    return true;
  }

});

var PrivateNote = Note.extend({

  allowedToEdit: function(account) {
    return account.owns(this);
  }

});


var Library = Backbone.Collection.extend({

  model: function(attrs, options) {
    if (condition) {
      return new PublicDocument(attrs, options);
    } else {
      return new PrivateDocument(attrs, options);
    }
  }

});




var Chapter  = Backbone.Model.extend({});
var chapters = new Backbone.Collection();

chapters.comparator = 'page';

chapters.add(new Chapter({page: 9, title: "The End"}));
chapters.add(new Chapter({page: 5, title: "The Middle"}));
chapters.add(new Chapter({page: 1, title: "The Beginning"}));

alert(chapters.pluck('title'));

var musketeers = chapters.where({title: "The End"});
musketeers[0] ==chapters.models[2]


var Meal = Backbone.Model.extend({
  idAttribute: "_id"
});

var cake = new Meal({ _id: 1, name: "Cake" });
alert("Cake id: " + cake.id);



var Book = Backbone.Model.extend({urlRoot : '/books',idAttribute:"name"});

var solaris = new Book({"name": "1083-lem-solaris"});

alert(solaris.url());

solaris.set({"name":"ted"})
solaris.previous("name")




var Chapter  = Backbone.Model;

var Library = Backbone.Collection.extend({
  modelId: function(attrs) {
    return attrs.page;
  }
});
var chapters = new Library();
chapters.comparator = 'page';

chapters.add(new Chapter({page: 9, title: "The End"}));
chapters.add(new Chapter({page: 5, title: "The Middle"}));
chapters.add(new Chapter({page: 1, title: "The Beginning"}));

chapters.get(1)




var ships = new Backbone.Collection();

ships.on("add", function(ship) {
  console.log("Ahoy " + ship.get("name") + "!");
});

ships.add([
  {name: "Flying Dutchman"},
  {name: "Black Pearl"}
]);



var friends = new Backbone.Collection([
  {name: "Athos",      job: "Musketeer"},
  {name: "Porthos",    job: "Musketeer"},
  {name: "Aramis",     job: "Musketeer"},
  {name: "d'Artagnan", job: "Guard"},
]);

var musketeers = friends.where({job: "Musketeer"});





_.map([1, 2, 3], function(num){ return num * 3; });


window.AppView = Backbone.View.extend({
    el: $("body"),
    initialize: function () {
//         this.friends = new Friends({ view: this });
    },
    events: {
        "click":  "showPrompt"
    },
    showPrompt: function () {
        var username = "ted";
        alert(username);
    }
});
var appview = new AppView;


Backbone.View.extend({
    el: $("body"),
    initialize: function () {
        if (this.model) {
            this.model.on("change", this.render, this);
        }
    },
    events: {
        "click":  "showPrompt"
    },
    showPrompt: function () {
        var username = "ted";
        alert(username);
    },
    render: function () {
        
    }
});



Backbone.View.extend({
 
    initialize: function(){
        this.listenTo(this.model, "change:foo", this.doStuff);
    },
 
    doStuff: function(foo){
        // do stuff in response to "foo" changing
    }
 
    // we don't need this. the default `remove` method calls `stopListening` for us
    // remove: function(){
        // this.stopListening();
        // ...
    //}
})





var DocumentRow = Backbone.View.extend({

  tagName: "li",

  className: "document-row",

  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {

  }

});

var casCookie = "casCert";
var cookieName = "Neo";
var uuidName = "symphoxUuid";
var path = "/";
var domain = "treemall.com.tw";
var ref = document.referrer;
var curUrl = document.URL;
var curUrlCleaned = "";
var pageTitle = document.title;
var uuid = "";
var memNum = "";
var memType = "";
var memAge = "";
var memSex = "";
var utm_source = "";
var utm_medium = "";
var utm_campaign = "";
var canonical = "";
var symphoxUuid = "";
var recommendation = "";
var rootSource = "";
var cartNo="";

var customizeCookie = "symphoxTemp";
var customizeValue = "";

function missionStart(){
    initCustomizeValue();
    generateEDMMsg();
    generateCanonicalMsg();
    generateCleanedCurUrl();
    generateURLSource();
    pathfinder();
    checkCookie();
}

function trim(string){
    return string.replace(/^[\s]+|[\s]+$/g,"").replace(/^　+|　+$/g,"");
}

function getCookieValue(name, cookie){
    var unescapeCookie = decodeURIComponent(cookie);
    return trim(unescapeCookie).substring(name.length+1, unescapeCookie.length);
}

//放客製參數
function setCustomizeValue(name, value){
    customizeValue += name + "=" + value + ",";
    document.cookie = customizeCookie + "=" + encodeURIComponent(customizeValue);
}

//檢查cookie
function checkCookie(){
    var hasCookie = false;
    var hasUuid = false;
    var cookies = document.cookie.split(";");
    for(var i=0;i<cookies.length;i++){
        if(cookies[i].indexOf(cookieName) != -1){
            hasCookie = true;
            var cookieValue = getCookieValue(cookieName, cookies[i]);
            uuid = cookieValue.split(",")[0];
        }
        if(cookies[i].indexOf(casCookie) != -1){
            var cookieValue = getCookieValue(casCookie, cookies[i]);
            memNum = cookieValue.split(",")[0];
            memSex = cookieValue.split(",")[1];
            memAge = cookieValue.split(",")[2];
            memType = cookieValue.split(",")[3];
        }
        if(cookies[i].indexOf(uuidName) != -1){
            hasUuid = true;
            var cookieValue = getCookieValue(uuidName, cookies[i]);
            symphoxUuid = cookieValue.split(",")[0];
        }
        if(cookies[i].indexOf("symphoxRecommendation") != -1){
            var cookieValue = getCookieValue("symphoxRecommendation", cookies[i]);
            recommendation = cookieValue.split(",")[0];
        }
        if(cookies[i].indexOf("cartNo")!=-1){
            var cookieValue = getCookieValue("cartNo", cookies[i]);
            cartNo=cookieValue.split(",")[0];
        }
        //找到就跳出不用跑完
        if(hasCookie && memNum != "" && hasUuid && recommendation != ""){
            break;
        }
    }
    
    if(!hasCookie){
        newCookie();
    }
    if(!hasUuid){
        newUuidCookie();
    }
    backToZion(generateMsg());
}

//初始化客製參數(如果cookie有就從cookie拿)
function initCustomizeValue(){
    var cookies = document.cookie.split(";");
    for(var i=0;i<cookies.length;i++){
        if(cookies[i].indexOf(customizeCookie) != -1){
            customizeValue = getCookieValue(customizeCookie, cookies[i]);
            break;
        }
    }
}

//取客製參數
function getCustomizeValue(name){
    var params = customizeValue.split(",");
    var result = "";
    for(var i=0;i<params.length;i++){
        var tempStr = params[i].split("=")[0];
        if(tempStr == name){
            result = params[i].split("=")[1];
        }
    }
    return result;
}

function generateMsg(event, eventId){
    curUrl = document.URL;
    var orderNum = "";
    if(customizeValue.indexOf("orderNum")!=-1){
        orderNum = getCustomizeValue("orderNum");
    }
//  if(canonical != "" && canonical != "http://www.treemall.com.tw"){
//      curUrl = canonical;
//  }
    
    if(canonical.indexOf("/showroom/product?") != -1){
        curUrl = canonical+"&utm_source="+utm_source+"&utm_medium="+utm_medium+"&utm_campaign="+utm_campaign;
    }
    
    if(event != null && eventId != null) {
        curUrl = curUrl + '#' + eventId + '=' + event;
    }
    else if(event != null){
        curUrl = curUrl + '#event='+event;
    }
    
    var lt = (typeof _tat=='undefined' || _tat == null)?0:(new Date() - _tat)/1000;
    
    var msg = uuid+","+memNum+","+ref+","+curUrl+","+utm_source+","+utm_medium+","+utm_campaign+","+orderNum+","+memSex+","+memAge+","+memType+","+pageTitle+","+symphoxUuid+","+lt+","+recommendation+","+rootSource+","+cartNo;
    msg = encodeURIComponent(msg);
    return msg;
}

function generateEDMMsg(){
    if(curUrl.indexOf("utm_source")!=-1 || curUrl.indexOf("utm_medium")!=-1 || curUrl.indexOf("utm_campaign")!=-1 ||
            curUrl.indexOf("source")!=-1 || curUrl.indexOf("medium")!=-1 || curUrl.indexOf("campaign")!=-1){
        if (curUrl.split("?")[1] === undefined || curUrl.split("?")[1] == "undefined") return;
        var params = curUrl.split("?")[1].split("&");
        for(var i=0;i<params.length;i++){
            var tempStr = params[i].split("=")[0];
            if(tempStr == "utm_source"){
                utm_source = params[i].split("=")[1];
                if(utm_source === undefined || utm_source == "undefined"){
                    utm_source = "";
                }
            }
            if(tempStr == "utm_medium"){
                utm_medium = params[i].split("=")[1];
                if(utm_medium === undefined || utm_medium == "undefined"){
                    utm_medium = "";
                }
            }
            if(tempStr == "utm_campaign"){
                utm_campaign = params[i].split("=")[1];
                if(utm_campaign === undefined || utm_campaign == "undefined"){
                    utm_campaign = "";
                }
            }
            if(tempStr == "source"){
                utm_source = params[i].split("=")[1];
                if(utm_source === undefined || utm_source == "undefined"){
                    utm_source = "";
                }
            }
            if(tempStr == "medium"){
                utm_medium = params[i].split("=")[1];
                if(utm_medium === undefined || utm_medium == "undefined"){
                    utm_medium = "";
                }
            }
            if(tempStr == "campaign"){
                utm_campaign = params[i].split("=")[1];
                if(utm_campaign === undefined || utm_campaign == "undefined"){
                    utm_campaign = "";
                }
            }
        }
    }
}

function generateCanonicalMsg(){
    var links = document.getElementsByTagName("link");
    for(var i=0;i<links.length;i++){
        if(links[i].getAttribute("rel") == "canonical"){
            canonical = links[i].getAttribute("href");
            break;
        }
    }
}

function generateCleanedCurUrl(){
    
    if(curUrl.split("://")[1] === undefined || curUrl.split("://")[1] == "undefined") return;
    var url = curUrl.split("://")[1];
    
    if (url.split("?")[1] === undefined || url.split("?")[1] == "undefined"){
        curUrlCleaned = url;
    }else{
        var params = url.split("?")[1].split("&");
        var querystring = "";
        for(var i=0;i<params.length;i++){
            var tempStr = params[i].split("=")[0];
            if(tempStr != "utm_source" && tempStr != "utm_medium" && tempStr != "utm_campaign" 
                && tempStr != "source" && tempStr != "medium" && tempStr != "campaign"){
                if(querystring == ""){
                    querystring = querystring + params[i];
                }else{
                    querystring = querystring + "&" + params[i];
                }
            }
        }
        if(querystring == ""){
            curUrlCleaned = url.split("?")[0];
        }else{
            curUrlCleaned = url.split("?")[0] + "?" + querystring;
        }
    }
    
}

function generateURLSource(){
    var cookies = document.cookie.split(";");
    var hasSessionSource = false;
    for(var i=0;i<cookies.length;i++){
        if(cookies[i].indexOf("sessionSource") != -1){
            hasSessionSource = true;
            var cookieValue = getCookieValue("sessionSource", cookies[i]);
            rootSource = cookieValue;
            break;
        }
    }
    
    if(!hasSessionSource){
        if(utm_medium != "" && utm_medium == "edm"){
            rootSource = utm_medium;
        }else if(ref != "undefined" && ref != ""){
            if(ref.indexOf("google") != -1){
                rootSource = "google";
            }else if(ref.indexOf("yahoo") != -1){
                rootSource = "yahoo";
            }else if(ref.indexOf("facebook") != -1){
                rootSource = "facebook";
            }else if(ref.indexOf("bing") != -1){
                rootSource = "bing";
            }else if(ref.indexOf("findprice") != -1){
                rootSource = "findprice";
            }else if(ref.indexOf("tw100s") != -1){
                rootSource = "tw100s";
            }else{
                rootSource = "undefined2";
            }
        }else{
            rootSource = "default2";
        }
        
        document.cookie = "sessionSource=" + encodeURIComponent(rootSource) + ";path=" + path + ";domain=" + domain;
        return rootSource;
    }
    
    
}


function uuidGenerator() {
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

//產生Neo
function newCookie(){
    uuid = Math.round(Math.random()*2147483647);
    var cookieValue = uuid;
    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";path=" + path + ";domain=" + domain;
    return cookieValue;
}

function newUuidCookie(){
    symphoxUuid = uuidGenerator();
    var cookieValue = symphoxUuid;
    var expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 24 * 30 * 1000);
    document.cookie = uuidName + "=" + encodeURIComponent(cookieValue) + ";path=" + path + ";domain=" + domain + ";expires=" + expires.toGMTString();
    return cookieValue;
}

function pathfinder(){
    if(utm_medium != "" && utm_campaign != "" && curUrlCleaned != ""){
        var cookieValue = utm_medium + "|" + utm_campaign + "|" + curUrlCleaned;
        document.cookie = "pathFinder=" + encodeURIComponent(cookieValue) + ";path=" + path + ";domain=" + domain;
        return cookieValue;
    }
}

function backToZion(message){
    var http_request = false;
    if (window.XMLHttpRequest) {
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/html');
        }
    }else if (window.ActiveXObject) {
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e) {
                
            }
        }
    }
    
    if (!http_request) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
    
    var http_url = "/zion/treemall";
    
    http_request.open("POST", http_url, true);
    //用post傳參數要加下面這行
    http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http_request.send("msg=" + message);
}











var Book = Backbone.Model.extend({urlRoot : '/books'});

var book = new Book({
  title: "The Rough Riders",
  author: "Theodore Roosevelt",
  id:"ted"
});

book.save();


var Book = Backbone.Model.extend({urlRoot : '/books'});
var solaris = new Book({id: "1083-lem-solaris"});



var AppView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML
  //      content will be rendered.
  el: '[data-role=footer]',
  // It's the first function called when this view it's instantiated.
  initialize: function(){
    this.render();
  },
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions
  //       to push content. Like the Hello World in this case.
  render: function(){
    this.$el.html("Hello World");
  }
});
var test = new AppView();
test.remove();


var Book = Backbone.Model.extend({
    defaults: {
        ID: "",
        BookName: ""
    },
    idAttribute: "ID",
   
    urlRoot: 'http://localhost:51377/api/Books'
});


var BooksCollection = Backbone.Collection.extend({
    model: Book,
});

var book1 = new Book({ ID: 1,  BookName: "Book 1" });
var book2 = new Book({ ID: 2, BookName: "Book 2" });
var collection2 = new BooksCollection([book1, book2]);
collection2.toJSON();

var book3_changed = new Book({ ID: 2, BookName: "Changed Model" });
collection2.add(book3_changed);

collection2.add(book3_changed, { merge: true });


var BooksCollection = Backbone.Collection.extend({
    model: Book,
 
    url: "http://localhost:51377/api/Books",
});
var collection4 = new BooksCollection();
collection4.fetch();
var collection4 = new BooksCollection();
collection4.fetch({
    success: function (collection4, response) {
        // fetch successful, lets iterate and update the values here
        collection4.each(function (item, index, all) {
            item.set("BookName", item.get("BookName") + "_updated"); // lets update all book names here
            item.save();
        });
    }
});





var Book = Backbone.Model.extend({
    defaults: {
        ID: "",
        BookName: ""
    }
});

var Catalog = Backbone.Model.extend({
    defaults: {
        ID: "",
        CatalogName: ""
    },

    // code ommitted for brevity

    bookChanged : function(book) {
        alert(book.get("BookName"));
    }
});
var catalog = new Catalog();

var book = new Book({BookName : "test book1"});                

catalog.listenTo(book, 'changed', catalog.bookChanged);

book.trigger('changed', book);

catalog.stopListening(book);


catalog.listenToOnce(book, 'changed', catalog.bookChanged);









var Book = Backbone.Model.extend({
    defaults: {
        ID: "",
        BookName: ""
    }
});
var BooksCollection = Backbone.Collection.extend({
    model: Book,
 
    url: "http://localhost:51377/api/Books",
});
var bookView = Backbone.View.extend({
    tagname: "li",
    model: Book,
    render: function (){
        this.$el.html('<li>' + this.model.get("BookName") + '</li>');
        return this;
    }
});

var bookListView = Backbone.View.extend({
    model: BooksCollection,

    render: function() {
        this.$el.html(); // lets render this view
        
        var self = this;

        // for(var i = 0; i < this.model.length; ++i) {
        //     // lets create a book view to render
        //     var m_bookView = new bookView({model: this.model.at(i)});

        //     // lets add this book view to this list view
        //     this.$el.append(m_bookView.$el); 
        //     m_bookView.render(); // lets render the book           
        // } 

        _.each(this.model.models, this.renderBook, this);

         return this;
    },
    renderBook:function (book) {
        $(this.el).append(new bookView({model:book}).render().el);
    }
});

var book1 = new Book({ ID: 1, BookName: "Book 1" });
var book2 = new Book({ ID: 2, BookName: "Book 2" });
var book3 = new Book({ ID: 3, BookName: "Book 3" });
var book4 = new Book({ ID: 4, BookName: "Book 4" });
var book5 = new Book({ ID: 5, BookName: "Book 5" });
var bookCollection = new BooksCollection([book1, book2, book3, book4, book5]);
var bookList = null;

$(document).ready(function () {
    bookList = new bookListView({ el: $("#bookList"), model: bookCollection });
    bookList.render();
});

<div id='bookList'>
</div>
















var Todo = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        // if(!attrs.email || attrs.email.length < 3){        
        //     return "not less than three";
        // }
    },
    defaults: function(){
        return {
            title:"",
            order:Todos.nextOrder(),
            done: false
        }
    },
    idAttribute: "order"
});

var TodoList = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Backbone.LocalStorage("todos-backbone"),    

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },
    done: function() {
      return this.where({done: true});
    },
});

var Todos = new TodoList();

// Todos.create({title: this.input.val()});
// Todos.create({title: "ted"});







var TodoView = Backbone.View.extend({
    tagName: 'div',
    // template: _.template($("#item-template").html()),
    render: function() {
        console.log('TodoView');
        // $(this.el).html(this.template(this.model.toJSON())); 
        this.$el.html('<li>' + this.model.get('title') + '</li>');
        return this;
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    // el: $('ul.indexPage')
});   


var AppView = Backbone.View.extend({
    model: TodoList,
    el: $("#todoapp"),
    render: function() {
        console.log('AppView');
        this.$el.html(); // lets render this view
        
        var self = this;

        // for(var i = 0; i < this.model.length; ++i) {
        //     // lets create a book view to render
        //     var m_bookView = new bookView({model: this.model.at(i)});

        //     // lets add this book view to this list view
        //     this.$el.append(m_bookView.$el); 
        //     m_bookView.render(); // lets render the book           
        // } 

        _.each(this.model.models, this.renderTodos, this);

         return this;
    },
    renderTodos:function (todo) {
        $(this.el).append(new TodoView({model:todo}).render().el);
    },
    initialize: function () {
        // this.listenTo(this.model, 'all', this.render);
        this.listenTo(this.model, 'add', this.addOne);
         // this.listenTo(this.model, 'reset', this.addAll);
    },
    addOne: function(todo) {
      var view = new TodoView({model: todo});
      $(this.el).append(view.render().el);
    },
    addAll: function() {
      this.model.each(this.addOne, this);
    },
});


Todos.create({title: "tedtrue",done:true});
Todos.create({title: "bellefalse",done:false});
Todos.create({title: "tedtrue2",done:true});
Todos.create({title: "bellefalse2",done:false});
bookList = new AppView({ model: Todos });
bookList.render();


// Todos.add(book3_changed, { merge: true });


<div id='todoapp'>
</div>


var test = Todos.where({done:true})
_.invoke(test, 'destroy');


Todos.get(1).set({title:"test"})
Todos.get(1).save({title:"test111"})

var test = new Todo({title: "ted12345",done:true});
Todos.add(test);
test.save();


var test = Todos.last()
test.destroy({
    success:function () {            
        window.history.back();
        // alert('Wine deleted successfully');
    }
});
























var Option = Backbone.Model.extend({
    initialize: function () {
        // this.on("invalid",function(model,error){
        //     console.log('v3');
        //     console.log(error);
        // });
    },
    validate: function (attrs) {        
        // if(!attrs.email || attrs.email.length < 3){        
        //     return "not less than three";
        // }
    },
    defaults: function(){
        return {
            title:"",
            order:options.nextOrder(),
            done: false
        }
    },
    idAttribute: "order"
});


var OptionView = Backbone.View.extend({
    tagName: 'option',
    // template: _.template($("#item-template").html()),
    render: function() {
        // console.log('TodoView');
        // $(this.el).html(this.template(this.model.toJSON())); 
        // this.$el.html('<li>' + this.model.get('title') + '</li>');
        this.$el.attr({value:this.model.id});
        this.$el.html(this.model.get('title'));
        return this;
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    // el: $('ul.indexPage')
});   

var OptionList = Backbone.Collection.extend({
    model: Option,
    localStorage: new Backbone.LocalStorage("options-backbone"),    

    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },
    done: function() {
      return this.where({done: true});
    },
});

var options = new OptionList();


var SelectView = Backbone.View.extend({
    model: OptionList,
    el: $("#todoapp"),
    render: function() {
        console.log('AppView');
        this.$el.html(); // lets render this view
        
        var self = this;

        // for(var i = 0; i < this.model.length; ++i) {
        //     // lets create a book view to render
        //     var m_bookView = new bookView({model: this.model.at(i)});

        //     // lets add this book view to this list view
        //     this.$el.append(m_bookView.$el); 
        //     m_bookView.render(); // lets render the book           
        // } 

        _.each(this.model.models, this.renderTodos, this);

         return this;
    },
    renderTodos:function (option) {
        $(this.el).append(new OptionView({model:option}).render().el);
    },
    initialize: function () {
        // this.listenTo(this.model, 'all', this.render);
        this.listenTo(this.model, 'add', this.addOne);
         // this.listenTo(this.model, 'reset', this.addAll);
    },
    addOne: function(option) {
      var view = new OptionView({model: option});
      $(this.el).append(view.render().el);
    },
    addAll: function() {
      this.model.each(this.addOne, this);
    },
});


optionList = new SelectView({ model: options });

for (var i = 0; i < 10; i++) {
    options.create({title: 'for'+i+i+i,done:true});
}



<select id="todoapp">    
    <option value="3">for000</option>
    <option value="4">for111</option>
    <option value="5">for222</option>
</select>



window.Wine = Backbone.Model.extend({
    urlRoot:"../images",
    defaults:function(){
        return {
            "id":test.nextOrder(),
            "title":""
        }
    }
});
 

window.WineCollection = Backbone.Collection.extend({
    model:Wine,
    url:"../images",
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('id') + 1;
    },
});

var test = new window.WineCollection();
test.fetch()

test.last().save({title:"12345"})

http://localhost:3000/sqltodos
http://localhost:3000/About


var foo = function() { 
test.create({title: "testttt" + i,type:"create"});
console.log(i)
}
setInterval(foo,1000);


http://localhost:3000/about_detail/3127
http://localhost:3000/about_detail







var parentFunc = function (x) {
    var count = 0;
    var childFunc = function (y) {
        count++;
        // console.log(count);
        console.log(x + y);
    }
    return childFunc;
}


var test = parentFunc(9);
test(10);


var Func = function (a,b,c) {
    console.log(arguments.length);
}

var myModule = {
 
  myProperty: "someValue",
 
  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },
 
  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },
 
  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },
 
  // override the current configuration
  updateMyConfig: function( newConfig ) {
 
    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};
 
// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();
 
// Outputs: Caching is: enabled
myModule.reportMyConfig();
 
// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});
 
// Outputs: Caching is: disabled
myModule.reportMyConfig();







var Module = {
 
  Config: {    
    language: "tw"
  },
 
  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },
 
  // output a value based on the current configuration
  reportLang: function () {
    console.log(this.Config.language);
  },
 
  // override the current configuration
  updateConfig: function( newConfig ) {
 
    if ( typeof newConfig === "object" ) {
      this.Config = newConfig;      
    }
    console.log( this.Config.language );
  }
};


var FuncModule = function () {};
FuncModule.fn = FuncModule.prototype;
$.extend(FuncModule.fn, Module);
var module_1 = new FuncModule();
var module_2 = new FuncModule();
module_1.updateConfig({language:"en"});
module_2.updateConfig();









var counterModule = (function () {
 
  var totalPrice = 0;
  var basket = [];

    function resetPrice() {      
        totalPrice = 0;
    };

    function resetBasket() {
        basket = [];
    };
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  return {
 
    buyItem: function (item,itemPrice) {
        if(!basket[item]){
            var prices = [];
            basket[item] = {count:0,prices:prices};
        } 
        basket[item].count += 1;
        basket[item].prices.push(itemPrice);
        totalPrice += itemPrice;
    },
 


    nextCustomer: function () {
        resetPrice();
        resetBasket();
    },
    printDetail: function () {
        for(var key in basket){
            var prices = basket[key].prices;
            var printPrices = '';
            var subTotal = 0;
            for(var i = 0; i < prices.length; i++){
                printPrices += numberWithCommas(prices[i]) + '\n';
                subTotal += prices[i];
            }
            console.log(key + ' 數量: ' + basket[key].count + ';\n' + printPrices + '小計: ' + subTotal);            
        }
        console.log('總計: ' + totalPrice);
    },
    

  };
 
})();
 
counterModule.buyItem('belle',3500)
counterModule.printDetail()



var mySingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 
    // Singleton
 
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }
 
    var privateVariable = "Im also private";
 
    var privateRandomNumber = Math.random();
 
    return {
 
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
 
      publicProperty: "I am also public",
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
 
  };
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();

var SingletonTester = (function () {
 
  // options: an object containing configuration options for the singleton
  // e.g var options = { name: "test", pointX: 5};
  function Singleton( options ) {
 
    // set options to the options supplied
    // or an empty object if none are provided
    options = options || {};
 
    // set some properties for our singleton
    this.name = "SingletonTester";
 
    this.pointX = options.pointX || 6;
 
    this.pointY = options.pointY || 10;
 
  }
 
  // our instance holder
  var instance;
 
  // an emulation of static variables and methods
  var _static = {
 
    name: "SingletonTester",
 
    // Method for getting an instance. It returns
    // a singleton instance of a singleton object
    getInstance: function( options ) {
      if( instance === undefined ) {
        instance = new Singleton( options );
      }
 
      return instance;
 
    }
  };
 
  return _static;
 
})();


function recursive(x) {
    var frob = 1;
    if(x > 2){
        frob = recursive(x-1)+recursive(x-2);
    }
    return frob;
}
recursive(5)




function ObserverList(){
  this.observerList = [];
}
 


ObserverList.fn = ObserverList.prototype ;
var foos = {
    add: function ( obj ){
        return this.observerList.push( obj );
    },
    count: function(){
        return this.observerList.length;
    },
    get: function( index ){
        if( index > -1 && index < this.observerList.length ){
            return this.observerList[ index ];
        }
    },
    indexOf: function( obj, startIndex ){
        var i = startIndex;
 
        while( i < this.observerList.length ){
            if( this.observerList[i] === obj ){
                return i;
            }
            i++;
        }
 
        return -1;
    },
    removeAt: function( index ){
        this.observerList.splice( index, 1 );
    }
}
 
$.extend(ObserverList.fn, foos);
 
var observerList = new ObserverList();





var pubsub = {};
 
(function(myObject) {
 
    // Storage for topics that can be broadcast
    // or listened to
    var topics = {};
 
    // An topic identifier
    var subUid = -1;
 
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    myObject.publish = function( topic, args ) {
 
        if ( !topics[topic] ) {
            return false;
        }
 
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
 
        while (len--) {
            subscribers[len].func( topic, args );
        }
 
        return this;
    };
 
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    myObject.subscribe = function( topic, func ) {
 
        if (!topics[topic]) {
            topics[topic] = [];
        }
 
        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
 
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    myObject.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));




getCurrentTime = function (){
 
   var date = new Date(),
         m = date.getMonth() + 1,
         d = date.getDate(),
         y = date.getFullYear(),
         t = date.toLocaleTimeString().toLowerCase();
 
        return (m + "/" + d + "/" + y + " " + t);
};
 
// Add a new row of data to our fictional grid component
function addGridRow( data ) {
 
   // ui.grid.addRow( data );
   console.log( "updated grid component with:" + data );
 
}
 
// Update our fictional grid to show the time it was last
// updated
function updateCounter( data ) {
 
   // ui.grid.updateLastChanged( getCurrentTime() );
   console.log( "data last updated at: " + getCurrentTime() + " with " + data);
 
}
 
// Update the grid using the data passed to our subscribers
gridUpdate = function( topic, data ){
 
  if ( data !== undefined ) {
     addGridRow( data );
     updateCounter( data );
   }
 
};
 
// Create a subscription to the newDataAvailable topic
var subscriber = pubsub.subscribe( "newDataAvailable", gridUpdate );
 
// The following represents updates to our data layer. This could be
// powered by ajax requests which broadcast that new data is available
// to the rest of the application.
 
// Publish changes to the gridUpdated topic representing new entries
pubsub.publish( "newDataAvailable", {
  summary: "Apple made $5 billion",
  identifier: "APPL",
  stockPrice: 570.91
});


http://localhost:3000/testpubsub


var RatingList = Backbone.Collection.extend({
            model: Backbone.Model,      
        })
var ratingList = new RatingList();
ratingList.add({contacts: new Backbone.Model({tel:'0911111111',addr:'taipei',email:'ted@gmail'}), users: new Backbone.Model({name:"ted",id:1})});

http://localhost:3000/testrequire


var db = openDatabase("ratings", "", "Backbone-websql example", 1024*1024); 
var RatingList = Backbone.Collection.extend({
    store: new WebSQLStore(db, "tests"),        
}); 
var test2 = new RatingList();
test2.create({testColumn1:'111',testColumn2:'222'})


jQuery.ajax({
    url: 'about_detail',
//       type: type,
    dataType: "html",      
    // Complete callback (responseText is used internally)
    complete: function( jqXHR, status, responseText ) {
        // Store the response as specified by the jqXHR object
        responseText = jqXHR.responseText;
        console.log(responseText) 
    }
});



(function( $ ) {
 
  var o = $({});
 
  $.subscribe = function() {
    o.on.apply(o, arguments);
  };
 
  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };
 
  $.publish = function() {
    o.trigger.apply(o, arguments);
  };
 
}( jQuery ));

$.subscribe("/some/topic",function(event,a,b,c){
    console.log(event.type,arguments[1]+arguments[2]+arguments[3])
})
$.publish("/some/topic",["a","b","c"])


(function( $ ){
    $.extend($.fn, {
        myplugin: function(){
            // your plugin logic
        }
    });
})( jQuery );



var myApp = myApp || {};
myApp.utils = {};
 
(function () {
  var val = 5;
 
  this.getValue = function () {
      return val;
  };
 
  this.setValue = function( newVal ) {
      val = newVal;
  }
 
  // also introduce a new sub-namespace
  this.tools = {};
 
}).apply( myApp.utils );
 
// inject new behaviour into the tools namespace
// which we defined via the utilities module
 
(function () {
    this.diagnose = function(){
        return "diagnosis";
    }
}).apply( myApp.utils.tools );
 
// note, this same approach to extension could be applied
// to a regular IIFE, by just passing in the context as
// an argument and modifying the context rather than just
// "this"
 
// Usage:
 
// Outputs our populated namespace
console.log( myApp );
 
// Outputs: 5
console.log( myApp.utils.getValue() );
 
// Sets the value of `val` and returns it
myApp.utils.setValue( 25 );
console.log( myApp.utils.getValue() );
 
// Testing another level down
console.log( myApp.utils.tools.diagnose() );







var Participant = function(name) {
    this.name = name;
    this.chatroom = null;
};
 
Participant.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        log.add(from.name + " to " + this.name + ": " + message);
    }
};
 
var Chatroom = function() {
    var participants = {};
 
    return {
 
        register: function(participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },
 
        send: function(message, from, to) {
            if (to) {                      // single message
                to.receive(message, from);    
            } else {                       // broadcast message
                for (key in participants) {   
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    var yoko = new Participant("Yoko");
    var john = new Participant("John");
    var paul = new Participant("Paul");
    var ringo = new Participant("Ringo");
 
    var chatroom = new Chatroom();
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);
 
    yoko.send("All you need is love.");
    yoko.send("I love you John.");
    john.send("Hey, no need to broadcast", yoko);
    paul.send("Ha, I heard that!");
    ringo.send("Paul, what do you think?", paul);
 
    log.show();
}




$(document).ready(function () {


    $.fn.tabs = function (control) {
        var el = $(this);
        control = $(control);

        el.on('click','li',function () {
            var tabName = $(this).attr("data-tab");
            el.trigger("change.tabs",tabName);
        })

        el.on("change.tabs",function (e,tabName) {
            el.find('li').removeClass("active");
            el.find(">[data-tab='" + tabName + "']").addClass('active');
        })
        el.on("change.tabs",function (e,tabName) {
            control.find('>[data-tab]').removeClass("active");
            control.find(">[data-tab='" + tabName + "']").addClass('active');
        })


        var firstName = el.find('li:first').attr('data-tab');
        el.trigger("change.tabs",firstName);

        return this;
    }

    $("ul#tabs").tabs("#tabsContent");

})



function Car( options ) {
 
  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
 
}
 
// A constructor for defining new trucks
function Truck( options){
 
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

var abstractVehicleFactory = (function () {
 
  // Storage for our vehicle types
  var types = {};
 
  return {
      getVehicle: function ( type, customizations ) {
          var Vehicle = types[type];
 
          return (Vehicle ? new Vehicle(customizations) : null);
      },
 
      registerVehicle: function ( type, Vehicle ) {
          var proto = Vehicle.prototype;
 
          // only register classes that fulfill the vehicle contract
          if ( proto.drive && proto.breakDown ) {
              types[type] = Vehicle;
          }
 
          return abstractVehicleFactory;
      },

      getTypes: function () {
          return types;
      }

  };
})();
 

// Car.prototype.drive = function () {
//     console.log('Car drive')
// }
// Car.prototype.breakDown = function () {
//     console.log('Car breakDown')
// }

var Mixin = function () {};
 
Mixin.prototype = {
 
    driveForward: function () {
        console.log( "drive forward" );
    },
 
    driveBackward: function () {
        console.log( "drive backward" );
    },
 
    driveSideways: function () {
        console.log( "drive sideways" );
    },
    drive: function () {
        console.log('drive')
    },
    breakDown: function () {
        console.log('breakDown')
    }
 
};

function augment( receivingClass, givingClass ) {
 
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
 
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
 
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            // receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}
 
 
// Augment the Car constructor to include "driveForward" and "driveBackward"
augment( Car, Mixin, "drive", "breakDown" );
augment( Truck, Mixin, "drive", "breakDown" );
 
// Create a new Car
// var myCar = new Car({
//     model: "Ford Escort",
//     color: "blue"
// });
 
// Usage:
 
abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );
 
// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );
 
// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );







var decoratorApp = decoratorApp || {};
 
// define the objects we're going to use
decoratorApp = {
 
    defaults: {
        validate: false,
        limit: 5,
        name: "foo",
        welcome: function () {
            console.log( "welcome!" );
        }
    },
 
    options: {
        validate: true,
        name: "bar",
        helloWorld: function () {
            console.log( "hello world" );
        }
    },
 
    settings: {},
 
    printObj: function ( obj ) {
        var arr = [],
            next;
        $.each( obj, function ( key, val ) {
            next = key + ": ";
            next += $.isPlainObject(val) ? printObj( val ) : val;
            arr.push( next );
        } );
 
        return "{ " + arr.join(", ") + " }";
    }
 
};

decoratorApp.settings = $.extend({}, decoratorApp.defaults, decoratorApp.options);



function Flyweight (make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
};
 
var FlyWeightFactory = (function () {
    var flyweights = {};
 
    return {
 
        get: function (make, model, processor) {
            if (!flyweights[make + model]) {
                flyweights[make + model] = 
                    new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },
 
        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();
 
function ComputerCollection () {
    var computers = {};
    var count = 0;
 
    return {
        add: function (make, model, processor, memory, tag) {
            computers[tag] = 
                new Computer(make, model, processor, memory, tag);
            count++;
        },
 
        get: function (tag) {
            return computers[tag];
        },
 
        getCount: function () {
            return count;
        }
    };
}
 
var Computer = function (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
    // ...
}
 
// log helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var computers = new ComputerCollection();
    
    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");
 
    log.add("Computers: " + computers.getCount());
    log.add("Flyweights: " + FlyWeightFactory.getCount());
    log.show();
}




var stateManager = {
 
  fly: function () {
 
    var self = this;
 
    $( "#container" )
          .unbind()
          .on( "click", "div.toggle", function ( e ) {
            self.handleClick( $(e.target) );
          });
  },
 
  handleClick: function ( elem ) {
    elem.find( "span" ).toggle( "slow" );
  }
};






var Book = function(title){
    this.title  = title;
}

var Fac = function () {
  var existingBooks = {}, existingBook;
 
  return {
    createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
      // Find out if a particular book meta-data combination has been created before
      // !! or (bang bang) forces a boolean to be returned
      existingBook = existingBooks[title];
      if ( !!existingBook ) {
        return existingBook;
      } else {
 
        // if not, let's create a new instance of the book and store it
        var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
        existingBooks[title] = book;
        return book;
 
      }
    },
    getExistingBooks:function(){
        return existingBooks;
    }
  };
 
}
var test1 = Fac();
test1.createBook('ted');
test1.getExistingBooks();
var test2 = Fac();
test2.createBook('belle');
test2.getExistingBooks();



(function( $ ) {
 
  var o = $({});
 
  $.subscribe = function() {
    o.on.apply(o, arguments);
  };
 
  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };
 
  $.publish = function() {
    o.trigger.apply(o, arguments);
  };
 
}( jQuery ));

$.subscribe("AddToCart",function(event,o,callback){
    // console.log(event.type,arguments[1]+arguments[2]+arguments[3])
    // console.log(event.type);
    // console.log(a);
    // console.log(b);
    // console.log(c);

    callback(null,{items:o.item_id});
})


function addItemToCart(userId,itemId) {
    $.publish("AddToCart",[{user_id:userId,item_id:itemId},function (err, result) {
        if(!err){
            console.log(result.items);
            $.publish("WriteLog",[{level:'debug',message:'This is a test!!',event:'AddToCart',timestamp:getTime()}]);
        }else{
            console.log('error');
        }
    }]);    
}

$.subscribe("WriteLog",function(event,o,callback){    
    console.log('level: ' + o.level + '; message: ' +o.message + '; event: ' + o.event + '; timestamp: ' + o.timestamp);    
})

function getTime(){
    var date = new Date();
    date.setTime(date.getTime());
    return date;
}

$.subscribe("Create_User",function(event,o,callback){    
    o.collection.push(o.user_id);
});

var collection = [];
function addUser(userId) {
    $.publish("Create_User",[{user_id:userId,collection:collection}]);    
}



$(document).ready(function () {


    $.fn.tabs = function (control) {
        var el = $(this);
        control = $(control);

        el.on('click','li',function () {
            var tabName = $(this).attr("data-tab");
            el.trigger("change.tabs",tabName);
        })

        el.on("change.tabs",function (e,tabName) {
            el.find('li').removeClass("active");
            el.find(">[data-tab='" + tabName + "']").addClass('active');
        })
        el.on("change.tabs",function (e,tabName) {
            control.find('>[data-tab]').removeClass("active");
            control.find(">[data-tab='" + tabName + "']").addClass('active');
        })


        var firstName = el.find('li:first').attr('data-tab');
        el.trigger("change.tabs",firstName);

        return this;
    }

    $("ul#tabs").tabs("#tabsContent");

})







// old interface
 
function Shipping() {
    this.request = function(zipStart, zipEnd, weight) {
        // ...
        return "$49.75";
    }
}
 
// new interface
 
function AdvancedShipping() {
    this.login = function(credentials) { /* ... */ };
    this.setStart = function(start) { /* ... */ };
    this.setDestination = function(destination) { /* ... */ };
    this.calculate = function(weight) { return "$39.50"; };
}
 
// adapter interface
 
function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
 
    shipping.login(credentials);
 
    return {
        request: function(zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}
 
// log helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var shipping = new Shipping();
    var credentials = {token: "30a8-6ee1"};
    var adapter = new ShippingAdapter(credentials);
 
    // original shipping object and interface
 
    var cost = shipping.request("78701", "10010", "2 lbs");
    log.add("Old cost: " + cost);
 
    // new shipping object with adapted interface
 
    cost = adapter.request("78701", "10010", "2 lbs");
 
    log.add("New cost: " + cost);
    log.show();
}







// input devices
 
var Gestures = function (output) {
    this.output = output;
 
    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};
 
var Mouse = function (output) {
    this.output = output;
 
    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};
 
// output devices
 
var Screen = function () {
    this.click = function () { log.add("Screen select"); }
    this.move = function () { log.add("Screen move"); }
    this.drag = function () { log.add("Screen drag"); }
    this.zoom = function () { log.add("Screen zoom in"); }
};
 
var Audio = function () {
    this.click = function () { log.add("Sound oink"); }
    this.move = function () { log.add("Sound waves"); }
    this.drag = function () { log.add("Sound screetch"); }
    this.zoom = function () { log.add("Sound volume up"); }
};
 
// logging helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
 
    var screen = new Screen();
    var audio = new Audio();
 
    var hand = new Gestures(screen);
    var mouse = new Mouse(audio);
 
    hand.tap();
    hand.swipe();
    hand.pinch();
 
    mouse.click();
    mouse.move();
    mouse.wheel();
 
    log.show();
}
















var Node = function (name) {
    this.children = [];
    this.name = name;
}
 
Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },
 
    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },
 
    getChild: function (i) {
        return this.children[i];
    },
 
    hasChildren: function () {
        return this.children.length > 0;
    }
}
 
// recursively traverse a (sub)tree
 
function traverse(indent, node) {
    log.add(Array(indent++).join("--") + node.name);
 
    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}
 
// logging helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var tree = new Node("root");
    var left = new Node("left")
    var right = new Node("right");
    var leftleft = new Node("leftleft");
    var leftright = new Node("leftright");
    var rightleft = new Node("rightleft");
    var rightright = new Node("rightright");

    var leftleftleft = new Node("leftleftleft");
    var leftleftright = new Node("leftleftright");
 
    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(right);
 
    left.add(leftleft);
    left.add(leftright);
 
    right.add(rightleft);
    right.add(rightright);

    leftleft.add(leftleftleft);
    leftleft.add(leftleftright);
 
    traverse(1, tree);
 
    log.show();
}



var Mortgage = function(name) {
    this.name = name;
}
 
Mortgage.prototype = {
 
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
}
 
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
 
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
 
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
 
function run() {
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");
 
    alert(result);
}
 





function GeoCoder() {
 
    this.getLatLng = function(address) {
        
        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    };
}
 
function GeoProxy() {
    var geocoder = new GeoCoder();
    var geocache = {};
 
    return {
        getLatLng: function(address) {
            if (!geocache[address]) {
                geocache[address] = geocoder.getLatLng(address);
            }
            log.add(address + ": " + geocache[address]);
            return geocache[address];
        },
        getCount: function() {
            var count = 0;
            for (var code in geocache) { count++; }
            return count;
        }
    };
};
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    var geo = new GeoProxy();
 
    // geolocation requests
 
    geo.getLatLng("Paris");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("London");
    geo.getLatLng("London");
 
    log.add("\nCache size: " + geo.getCount());
    log.show();
}






var Shipping = function() {
    this.company = "";
};
 
Shipping.prototype = {
    setStrategy: function(company) {
        this.company = company;
    },
 
    calculate: function(package) {
        return this.company.calculate(package);
    }
};
 
var UPS = function() {
    this.calculate = function(package) {
        // calculations...
        return "$45.95";
    }
};
 
var USPS = function() {
    this.calculate = function(package) {
        // calculations...
        return "$39.40";
    }
};
 
var Fedex = function() {
    this.calculate = function(package) {
        // calculations...
        return "$43.20";
    }
};
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    var package = { from: "76712", to: "10012", weigth: "lkg" };
 
    // the 3 strategies
 
    var ups = new UPS();
    var usps = new USPS();
    var fedex = new Fedex();
 
    var shipping = new Shipping();
 
    shipping.setStrategy(ups);
    log.add("UPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(usps);
    log.add("USPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(fedex);
    log.add("Fedex Strategy: " + shipping.calculate(package));
 
    log.show();
}


$('.someCheckbox').click(function(){

 if (this.checked)
 {
 $('#input_carModel').val(activeSettings.carModel);
 $('#input_carYear').val(activeSettings.carYear);
 $('#input_carMiles').val(activeSettings.carMiles);
 $('#carTint').val(activeSettings.carTint);
 } else {

 $('#input_carModel').val('');
 $('#input_carYear').val('');
 $('#input_carMiles').val('');
 $('#input_carTint').val('');
 }
});



var defaultSettings = {};
defaultSettings['carModel'] = 'Mercedes';
defaultSettings['carYear'] = 2010;
defaultSettings['carMiles'] = 5000;
defaultSettings['carTint'] = 'Metallic Blue';

 $('.someCheckbox').click(function(){
 var checked = this.checked;
 /*
 What are we repeating?
 1. input_ precedes each field name
 2. accessing the same array for settings
 3. repeating value resets

 What can we do?
 1. programmatically generate the field names
 2. access array by key
 3. merge this call using terse coding (ie. if
checked,
 set a value, otherwise don't)
 */
 $.each(['carModel', 'carYear', 'carMiles','carTint'], function(i,key){
 $('#input_' + v).val(checked ? defaultSettings[key] : '');
 });
});





var MyApp;
(function (MyApp) {
    var Customer = function () {
        function Customer(name) {
            this.name = name;
        }
        Customer.prototype.hello = function () {
            alert("I am " + this.name);
        }
        return Customer;
    }();
    MyApp.Customer = Customer;
})(MyApp || (MyApp = {}));

var kelly = new MyApp.Customer("ted");


class Person {
    constructor(public name)
}

class Employee extends Person{
    constructor(name,public salary){
        super(name);
    }
    show(){
        alert('I make' + this.salary)
    }
}









var MyApp;
(function (MyApp) {
    var Customer = function () {
        function Customer(name) {
            this.name = name;
        }
        Customer.prototype.hello = function () {
            alert("I am " + this.name);
        }
        return Customer;
    }();
    MyApp.Customer = Customer;



    var ExtraSalary = function () {
        function ExtraSalary() {            
        }
        ExtraSalary.prototype.visit = function (emp) {
            emp.setSalary(emp.getSalary() * 1.1);
        }
        return ExtraSalary;
    }();
    MyApp.ExtraSalary = ExtraSalary;



})(MyApp || (MyApp = {}));


var Employee = function (name, salary, vacation) {
    var self = this;
        
    this.accept = function (visitor) {
        visitor.visit(self);
    };
 
    this.getName = function () {
        return name;
    };
 
    this.getSalary = function () {
        return salary;
    };
 
    this.setSalary = function (sal) {
        salary = sal;
    };
 
    this.getVacation = function () {
        return vacation;
    };
 
    this.setVacation = function (vac) {
        vacation = vac;
    };
};
 

 
var ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
        
    var employees = [
        new Employee("John", 10000, 10),
        new Employee("Mary", 20000, 21),
        new Employee("Boss", 250000, 51)
    ];
 
    // var visitorSalary = new ExtraSalary();
    var visitorSalary = new MyApp.ExtraSalary();
    var visitorVacation = new ExtraVacation();
        
    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];
            
        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        log.add(emp.getName() + ": $" + emp.getSalary() +
            " and " + emp.getVacation() + " vacation days");
    }
 
    log.show();
}





// The constructor to decorate
function MacBook() {
 
  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };
 
}
 
// Decorator 1
function memory( macbook ) {
 
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };
 
}
 
// Decorator 2
function engraving( macbook ){
 
  var v = macbook.cost();
  macbook.cost = function(){
    return v + 200;
  };
 
}
 
// Decorator 3
function insurance( macbook ){
 
  var v = macbook.cost();
  macbook.cost = function(){
     return v + 250;
  };
 
}
 
var mb = new MacBook();
memory( mb );
engraving( mb );
insurance( mb );
 
// Outputs: 1522
console.log( mb.cost() );
 
// Outputs: 11.6
console.log( mb.screenSize() );








var PhotoRouter = Backbone.Router.extend({
  routes: { "photos/:id": "route" },
 
  route: function( id ) {
    var item = photoCollection.get( id );
    var view = new PhotoView( { model: item } );
 
    $('.content').html( view.render().el );
  }
});


var PhotoView = Backbone.View.extend({
 
    //... is a list tag.
    tagName: "li",
 
    // Pass the contents of the photo template through a templating
    // function, cache it for a single photo
    template: _.template( $("#photo-template").html() ),
 
    // The DOM events specific to an item.
    events: {
      "click img": "toggleViewed"
    },
 
    // The PhotoView listens for changes to
    // its model, re-rendering. Since there's
    // a one-to-one correspondence between a
    // **Photo** and a **PhotoView** in this
    // app, we set a direct reference on the model for convenience.
 
    initialize: function() {
      this.model.on( "change", this.render, this );
      this.model.on( "destroy", this.remove, this );
    },
 
    // Re-render the photo entry
    render: function() {
      $( this.el ).html( this.template(this.model.toJSON() ));
      return this;
    },
 
    // Toggle the `"viewed"` state of the model.
    toggleViewed: function() {
      this.model.viewed();
    }
 
});



$.get( url, data, callback, dataType );
$.post( url, data, callback, dataType );
$.getJSON( url, data, callback );
$.getScript( url, callback );


// $.get()
$.ajax({
  url: url,
  data: data,
  dataType: dataType
}).done( callback );
 
// $.post
$.ajax({
  type: "POST",
  url: url,
  data: data,
  dataType: dataType
}).done( callback );
 
// $.getJSON()
$.ajax({
  url: url,
  dataType: "json",
  data: data,
}).done( callback );
 
// $.getScript()
$.ajax({
  url: url,
  dataType: "script",
}).done( callback );



var callback = function (jqXHR) {
    responseText = jqXHR.responseText;
    console.log(responseText);
}
$.get( '/sqltodos', 'json', callback, 'json' );

$.get( "/sqltodos", function( data ) {
  console.log(data);
}, "json" );



$( "input" ).attr({ "type": "text", "id":"sample"})



(function( $ ){
  $.fn.myPluginName = function () {
    // our plugin logic
  };
})( jQuery );


(function( $ ){
    $.extend($.fn, {
        myplugin: function(){
            // your plugin logic
        }
    });
})( jQuery );




CONFIG = {initial:'ted'}
$.fn.plugin = function(CONFIG){
     CONFIG = $.extend({
         content: 'Hello world!'
     }, CONFIG);
     console.log(CONFIG);
}
$('input').plugin(CONFIG)









var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
 
};



// Book Factory singleton
var bookFactory = (function () {
  var existingBooks = {}, existingBook;
 
  return {
    createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {
 
      // Find out if a particular book meta-data combination has been created before
      // !! or (bang bang) forces a boolean to be returned
      existingBook = existingBooks[ISBN];
      if ( !!existingBook ) {
        return existingBook;
      } else {
 
        // if not, let's create a new instance of the book and store it
        var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
        existingBooks[ISBN] = book;
        return book;
 
      }
    }
  };
 
})();

var BookRecordManager = (function () {
 
  var bookRecordDatabase = {};
 
  return {
    // add a new book into the library system
    addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {
 
      var book = bookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );
 
      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    },
    updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {
 
      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },
 
    extendCheckoutPeriod: function ( bookID, newReturnDate ) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },
 
    isPastDue: function ( bookID ) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
    }
  };
 
})();


Date.parse( '2017/01/17 13:52' )




var Photo = Backbone.Model.extend({
 
    // Default attributes for the photo
    defaults: {
      src: "placeholder.jpg",
      caption: "A default image",
      viewed: false
    },
 
    // Ensure that each photo created has an `src`.
    initialize: function() {
       this.set( { "src": this.defaults.src} );
    }
 
});







var Photo = Backbone.Model.extend({
 
    // Default attributes for the photo
    defaults: {
      src: "placeholder.jpg",
      caption: "A default image",
      viewed: false
    },
 
    // Ensure that each photo created has an `src`.
    initialize: function() {
        console.log(this.defaults.src)
        this.set( { "src": "test"} );
        this.set( { "src": this.defaults.src} );
    }
 
});
var test = new Photo({src:"123"});
test.toJSON();









var AppCollection;
(function (AppCollection) {
    var Customer = function () {
        function Customer(name) {
            this.name = name;
        }
        Customer.prototype.hello = function () {
            alert("I am " + this.name);
        }
        return Customer;
    }();
    MyApp.Customer = Customer;


    var Photos = Backbone.Collection.extend({
    });

    AppCollection.Photos = Photos;


})(AppCollection || (AppCollection = {}));

var App = {};
App.photos = new AppCollection.Photos([
        { id: 1, name: "My dog", filename: "IMG_0392.jpg" },
        { id: 2, name: "Our house", filename: "IMG_0393.jpg" },
        { id: 3, name: "My favorite food", filename: "IMG_0394.jpg" },                
]);

$.each(App.photos.toJSON(),function(index,val){
    console.log(val);
})
App.photos.get(1).toJSON();


var photo = App.photos.select(function(photo) {
  return photo.get('filename').match(/^IMG/);
});


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////





// var ContactModel = Backbone.Model.extend({
//     defaults: {
//         name:'',
//         email:''
//    },
// })

// var contactModel = new ContactModel({name:"ted",email:"ted@flaps.com.tw"})

var contactModel = new Backbone.Model({name:"ted",email:"ted@flaps.com.tw"})
var ContactView = Backbone.View.extend({
  template: _.template($("#template-contact").html()),

  render: function() {
    // This is a dictionary object of the attributes of the models.
    // => { name: "Jason", email: "j.smith@gmail.com" }
    var dict = this.model.toJSON();

    // Pass this object onto the template function.
    // This returns an HTML string.
    var html = this.template(dict);

    // Append the result to the view's element.
    $(this.el).append(html);

    // ...
  },
  el: $('#contact'),
  initialize : function(){
        this.listenTo(this.model, 'change:name', this.showChangedName);
    },
    showChangedName : function(){
        // we are using the same main view template here though 
        // another subtemplate for only the address part can 
        // anyway be used here
        var html = this.template(this.model.toJSON());

        $(this.el).html(html);
    }
});

var contactView = new ContactView({model:contactModel});
contactView.render();



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


App = {};

App.Views = {};
App.Mixins = {};
App.Views.Menu = Backbone.View.extend({
  // I need to know how to toggle, open, and close!
    toggle: function() { console.log('Menu') },  
});


App.Mixins.Navigation = {

  toggle: function() { console.log('Navigation') },

  open: function() { console.log('open Navigation') },

  close: function() { /* ... */ }

};


_.extend(App.Views.Menu.prototype, App.Mixins.Navigation);

App.Views.Tabs = Backbone.View.extend({
  // I too need to know how to toggle, open, and close!
});

_.extend(App.Views.Tabs.prototype, App.Mixins.Navigation);







////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


var Person = Backbone.Model.extend({
   defaults: {
        'name': 'John Doe',
        'address': {
            'street': '1st Street',
            'city': 'Austin',
            'state': 'TX',
            'zipCode': 78701
        },
        'a':1,
        'b':2,        
        'c':3,        
   },
   validate: function(attributes) {
        console.log('validate');
        // if(isNaN(attributes.address.zipCode)) return "Address ZIP code must be a number!";

        var errors = [];

        if(attributes.a < 0) {
            errors.push({
                'message': 'Form field a is messed up!',
                'class': 'a'
            });
        }
        if(attributes.b < 0) {
            errors.push({
                'message': 'Form field b is messed up!',
                'class': 'b'
            });
        }
        
        if(attributes.c < 0) {
            // this.trigger('invalid:a', 'Form field a is messed up!', this);
            this.trigger('invalid:c', 'Form field c is messed up!');
        }

        if(errors.length) {
            return errors;
        }
    },
    initialize: function() {
        console.log('initialize');
        // this.set( { "src": this.defaults.src} );
        this.on('invalid:c', function(error) {            
            console.log(error);
        });
    }

});

var person = new Person();
person.set('name', 'ted', { validate: true });
person.set({'name': 'ted',a:10}, { validate: true });

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


var address = $.extend(true, {}, person.get('address'));



var Hotel = Backbone.Model.extend({
    defaults: {
        "availableRooms": ["a"],
        "rooms": {
            "a": {
                "size": 1200,
                "bed": "queen"
            },
            "b": {
                "size": 900,
                "bed": "twin"
            },
            "c": {
                "size": 1100,
                "bed": "twin"
            }
        },

        getRooms: function() {
            var rooms = $.extend(true, {}, this.get("rooms")),
             newRooms = {};

            // transform rooms from an array back into an object
            _.each(rooms, function(room) {
                newRooms[room.name] = {
                    "size": room.size,
                    "bed": room.bed
                }
            });
        },

        getRoomsByBed: function(bed) {
            return _.where(this.getRooms(), { "bed": bed });
        }
    }
});




var View = Backbone.View.extend({
    initialize: function(options) {
        this.model.on('change', this.render, this);
    },

    template: _.template($('#template').html()),

    render: function() {
        this.$el.html(template(this.model.toJSON());
        $('#a', this.$el).html(this.model.get(‘a’));
        $('#b', this.$el).html(this.model.get(‘b’));
    }
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

var AlertView = Backbone.View.extend({
    set: function(typeOfError, message) {
        var alert = $('.in-page-alert').length ? $('.in-page-alert'): $('.body-alert');
        alert
            .removeClass('error success warning')
            .addClass(typeOfError)
            .html(message)
            .fadeIn()
            .delay(5000)
            .fadeOut();
    }
});

var alert = new AlertView();
alert.set('TYPE-OF-ERROR', 'error');


this.model.on('error', function(model, error) {
    alert.set('TYPE-OF-ERROR', error);
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


var pubsub = _.extend({}, Backbone.Events);
pubsub.on('some:channel', function () {
    console.log('channel ', arguments);
    pubsub.off('some:channel');
});
pubsub.trigger('some:channel', 'Dude...');


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

var Book = Backbone.Model.extend({
    defaults: {
        _id: "",
        path: "",
        name:"",
    },
    idAttribute: "_id",
   
    
});


var BooksCollection = Backbone.Collection.extend({
    model: Book,
    url:'/api/test123',
    parse: function(response){
        return response.photos;
    }
});

var bookCollection = new BooksCollection()
bookCollection.fetch()



var obj = bookCollection.where({_id:"587d9d26a1c73225b4291483"})[0];
obj.save({path:'/ted2'}, {
    wait:true,
    success:function(model, response) {
        console.log('Successfully saved!');
    },
    error: function(model, error) {     
        console.log('error.responseText');
    }})



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


var BookView = Backbone.View.extend({
  template: _.template($("#template-book").html()),

  render: function() {
    // This is a dictionary object of the attributes of the models.
    // => { name: "Jason", email: "j.smith@gmail.com" }
    var dict = this.model.toJSON();

    // Pass this object onto the template function.
    // This returns an HTML string.
    var html = this.template(dict);

    // Append the result to the view's element.
    $(this.el).append(html);

    // ...
  },
  el: $('#book'),
  initialize : function(){
        this.listenTo(this.model, 'change:path', this.showChangedPath);
    },
    showChangedPath : function(){
        console.log('showChangedPath');
        // we are using the same main view template here though 
        // another subtemplate for only the address part can 
        // anyway be used here
        var html = this.template(this.model.toJSON());

        $(this.el).html(html);
    }
});

var bookView = new BookView({model:bookCollection.where({_id:"587d9d26a1c73225b4291483"})[0]});

bookView.render();


var callback = {
    wait:true,
    success:function(model, response) {
        console.log('Successfully saved!');
    },
    error: function(model, error) {     
        console.log('error.responseText');
    }}
// obj.save({path:'/ted1010'}, callback)
obj.save({path:'/ted7',token:'abc'}, callback)


obj.destroy({_id:obj.get('_id')},{
    wait:true,
    success:function(model, response) {
        console.log('Successfully saved!');
    },
    error: function(model, error) {     
        console.log('error.responseText');
    }})
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

http://localhost:8080/debug?port=5858

node --debug meadowlark.js

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

http://localhost:3000/snapshot

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

http://localhost:3000/demo_1

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

http://localhost:3000/getAllUsers
http://localhost:3000/users

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

sudo npm install -g ws

sudo npm install -g node-inspector

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
