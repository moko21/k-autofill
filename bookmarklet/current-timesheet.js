javascript:(function(){function%20_asyncToGenerator(a){return%20function(){var%20b=a.apply(this,arguments);return%20new%20Promise(function(d,c){function%20a(g,h){try{var%20e=b[g](h);var%20f=e.value}catch(a){c(a);return}if(e.done){d(f)}else{return%20Promise.resolve(f).then(function(b){a('next',b)},function(b){a('throw',b)})}}return%20a('next')})}}(function(b,c){let%20a=c;a=document.createElement('script');a.src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';a.onload=function(){b(jQuery.noConflict(true))};document.body.appendChild(a)}(function(a){let%20b=(()=%3E{var%20c=_asyncToGenerator(function*(){try{const%20c=a('a:contains(%22My%20Account%22)',top.frames[0].document.body);c.click()}catch(a){console.log(a)}yield%20d(500);try{const%20e=a('span:contains(%22My%20Timesheet%22)',top.frames[1].document.body);e.click()}catch(a){console.log(a)}yield%20d(500);try{const%20b=a('span:contains(%22My%20Current%20Timesheet%22)',top.frames[1].document.body);console.log(b);b.click()}catch(a){console.log(a)}});return%20function%20a(){return%20c.apply(this,arguments)}})();function%20d(a){return%20new%20Promise(resolve=%3EsetTimeout(resolve,a))}b();return%20this}))}())