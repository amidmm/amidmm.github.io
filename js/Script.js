jQuery(document).ready(function(n){var t=2.02248875*n(window).height()/n(window).width(),i;n("#rest").css("height",n(window).width()*4*t-n(".picContainer").height()*t/3+"px");n("#pic1-6").css("left",n("#pic1-5").width()+"px");n("#pic1-6").css("height",n(window).height()*1.1+"px");n("#pic1-5").css("height",n(window).height()*1.1+"px");n("#pic1-7").css("height",n(window).height()*1.1+"px");i=0;n(window).scroll(function(){var i=n(this).scrollTop(),u=n("#myPic").offset(),f=n(window).height(),r;i<=n(window).width()*t/2?(n.scrollify.enable(),n(".pic1").css("display","block"),n(".pic2").css("display","none"),n(".pic3").css("display","none"),n("#pic1-1").css("transform","translateX("+i+"px)"),n("#pic1-2").css("transform","translateX(-"+i+"px)"),n("#pic1-3").css("transform","translateX("+i+"px)"),n("#pic1-4").css("transform","translateX(-"+i+"px)"),n("#pic1-5").css("transform","translateY("+i+"px)"),n("#pic1-6").css("transform","translateY(-"+i+"px)"),n("#pic1-7").css("transform","translateY("+i+"px)"),n("#myPic").css("transform","translateX("+Math.min(i,n(window).width()/2)+"px)")):i<=n(window).width()*t?n.scrollify.enable():i<=n(window).width()*2*t?(n(".pic1").css("display","block"),n(".pic2").css("display","none"),n(".pic3").css("display","none"),n("#pic1-1").css("transform","translateX("+i/2+"px)"),n("#pic1-2").css("transform","translateX(-"+i/2+"px)"),n("#pic1-3").css("transform","translateX("+i/2+"px)"),n("#pic1-4").css("transform","translateX(-"+i/2+"px)"),n("#pic1-5").css("transform","translateY("+i/2+"px)"),n("#pic1-6").css("transform","translateY(-"+i/2+"px)"),n("#pic1-7").css("transform","translateY("+i/2+"px)"),n("#myPic").fadeIn("slow")):i<n(window).width()*3*t?(n(".pic1").css("display","none"),n(".pic2").css("display","block"),n(".pic3").css("display","none"),n("#myPic").fadeOut("slow")):(r=i-n(window).width()*3*t,n("#fPic").css("transform","translateY(-"+r+"px)"),n("#sPic").css("transform","translateY(-"+r+"px)"),n("#tPic").css("transform","translateY(-"+r+"px)"),n(".pic1").css("display","none"),n(".pic2").css("display","none"),n(".pic3").css("display","block"))});n("#popup").click(function(){n(this).css("display","none")})});