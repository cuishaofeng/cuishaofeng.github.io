function myWheel(obj,callBack){
		
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		
			obj.addEventListener('DOMMouseScroll',fn1);
			
		}else{
			obj.addEventListener('mousewheel',fn1);
		}
	
	
		function fn1(ev){
			var down = true;
			
			//down = ev.wheelDelta?(ev.wheelDelta>0?true:false):(ev.detail < 0?true:false);
			if(ev.wheelDelta){
				if(ev.wheelDelta>0){
					down=true;
				}else{
					down=false;
				}
			}else{
				if(ev.detail<0){
					down=true;
				}else{
					down=false;
				}
			}
			callBack && typeof callBack === 'function' && callBack(down);
		}
	}