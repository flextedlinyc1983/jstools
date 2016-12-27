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