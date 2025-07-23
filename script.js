window.ymHelper = {
    isReady: false,
    callbacks: []
};

function onMetrikaReady(callback) {
    if (window.ymHelper.isReady) {
        if (typeof callback === 'function') {
            callback();
        }
    } else {
        window.ymHelper.callbacks.push(callback);
    }
}

const metrikaCheckInterval = setInterval(function() {
    if (typeof ym === 'function'){
        
        clearInterval(metrikaCheckInterval);
    
        window.ymHelper.isReady = true;
        window.ymHelper.callbacks.forEach(function(callback) {
            if (typeof callback === 'function') {
                callback();
            }
        });

        window.ymHelper.callbacks = [];
    }
}, 100);


/*example*/
function ymReachGoal(goal){
	onMetrikaReady(function() {
		ym(XXXXXX, 'reachGoal', goal);
	});
}