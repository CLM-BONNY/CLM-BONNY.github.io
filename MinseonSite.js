window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".section").length;
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
    if($html.is(":animated")) return;
    if(e.originalEvent.deltaY > 0){
        if(page== lastPage) return;
        page++;
    }else if(e.originalEvent.deltaY < 0){
        if(page == 1) return;
        page--;
    }
    var posTop = (page-1) * $(window).height();
    $html.animate({scrollTop : posTop});
});

$(function(){
    $('#esfjText').click(function(){
        $('#esfjText').hide();
        $('#esfjPop').show();
    });
});

$(function(){
    $('#esfjPop').mouseleave(function(){
        $('#esfjPop').hide();
        $('#esfjText').show();
    });
});

$(function(){
    $('#foodText').click(function(){
        $('#foodText').hide();
        $('#foodPop').show();
    });
});

const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
    const wrap = one('#foodPop') // .slide 선택
    const target = wrap.children[0] // .slide ul 선택
    const len = target.children.length // .slide li 갯수
    // .slide ul의 너비 조정
    target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s;`
    // .slide li의 너비 조정
    Array.from(target.children)
        .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
    let pos = 0
    setInterval(() => {
        pos = (pos + 1) % len // 장면 선택
        target.style.marginLeft = `${-pos * 100}%` // 장면 전환
    }, 3000) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
}
window.onload = function () { slide() }

$(function(){
    $('#foodPop').click(function(){
        $('#foodPop').hide();
        $('#foodText').show();
    });
});

$(function(){
    $('#songText').click(function(){
        $('#songText').hide();
        $('#songPop').show();
    });
});

$(function(){
    $('#songPop').click(function(){
        $('#songPop').hide();
        $('#songText').show();
    });
});


$(function(){
    $('#manduText').click(function(){
        $('#manduText').hide();
        $('#manduPop').show();
    });
});

$(function(){
    $('#manduPop').mouseleave(function(){
        $('#manduPop').hide();
        $('#manduText').show();
    });
});

$(function(){
    $('#planText').click(function(){
        $('#planText').hide();
        $('#vacationPlan').show();
    });
});

$(function(){
    $('#vacationPlan').click(function(){
        $('#vacationPlan').hide();
        $('#myPlan').show();
    });
});

$(function(){
    $('#myPlan').click(function(){
        $('#myPlan').hide();
        $('#planText').show();
    });
});














