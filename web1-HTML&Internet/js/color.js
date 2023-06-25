var Links = {
    SetColor: function LinksSetColor(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            console.log(alist[i]);
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    SetColor: function BodySetColor(color){
        document.querySelector('body').style.color = color;
    },

    SetBackgourndColor: function BodySetBackgourndColor(color){
    document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(this.value === 'Night'){
        this.value = 'Day'
        Body.SetBackgourndColor('black');
        Body.SetColor('white');
        Links.SetColor('#FFC107');
        
    } else{
        this.value = 'Night'
        Body.SetBackgourndColor('white');
        Body.SetColor('black');
        Links.SetColor('#007BFF');
    }
}