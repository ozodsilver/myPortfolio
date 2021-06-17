
	document.querySelector('.menu').onclick = function(){
		document.querySelector('.chapMenu').classList.toggle('qaytish');
		

		if(document.querySelector('.menu>i').className === 'fa fa-bars fa-3x'){
document.querySelector('.menu>i').className = 'fa fa-close fa-3x' ;


		}	
	
else if(document.querySelector('.menu>i').className === 'fa fa-close fa-3x'){
document.querySelector('.menu>i').className = 'fa fa-bars fa-3x' ;

		}

	}


// loader

var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});




// texnologiyalar uchun fullscreen qilamiz
document.getElementById('html').onclick = function(){
  document.getElementById('html').requestFullscreen();
}




function modal(){
  const modal = document.querySelector('.u-modal');
 

modal.style.display = 'flex';


}



function modal2(){
  const modal2 = document.querySelector('.u-modal2');
 

modal2.style.display = 'flex';


}

function closee(){
  let closee = document.getElementById('closee');
 document.querySelector('.u-modal').style.display = 'none';

}


function closee2(){
  let closee2 = document.getElementById('closee2');
 document.querySelector('.u-modal2').style.display = 'none';

}




// iframelar menyusi

document.getElementById('lessonHtml').onclick = function(){
  document.querySelector('.lesson1').style.display = 'block';

}


document.querySelector('.lesson1>i').onclick = function(){
  document.querySelector('.lesson1').style.cssText = 'color:red;display:none';
}


// css

document.getElementById('lessonCss').onclick = function(){
  document.querySelector('.lesson2').style.display = 'block';

}


document.querySelector('.lesson2>i').onclick = function(){
  document.querySelector('.lesson2').style.cssText = 'color:red;display:none';
}



function deta(){
  document.getElementById('men').classList.toggle('haqida');
  document.querySelector('.me').style.display = 'block';
}


document.getElementById('yop').onclick = function(){
  document.querySelector('.me').style.display = "none";
   document.getElementById('men').classList.toggle('haqida');
}