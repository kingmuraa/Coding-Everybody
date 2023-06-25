var Links = {
    SetColor: function LinksSetColor(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     console.log(alist[i]);
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    SetColor: function BodySetColor(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    
    SetBackgourndColor: function BodySetBackgourndColor(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'Night'){
        Body.SetBackgourndColor('black');
        Body.SetColor('white');
        Links.SetColor('#FFC107');
        self.value = 'Day'
        
    } else{
        Body.SetBackgourndColor('white');
        Body.SetColor('black');
        Links.SetColor('#007BFF');
        self.value = 'Night'
    }
}
