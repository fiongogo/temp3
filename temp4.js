var should = require('should');
var promise = require("bluebird");


var timeOut = (result, time) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(result);
            resolve(result);
        }, time);

    });
}




var timeOutAlways = (process, interval) => {
    setTimeout(() => {
        times++;
        console.log(process);
        console.log(times);
        timeOutAlways(process, interval);
    }, interval);
}


var times1 = 0;
var timeOutAlwaysPromise1 = (process, interval) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            times1++;
            console.log(process);
            console.log(times1);
            if (times1 < 5) {
                timeOutAlways(process, interval);
            } else {
                resolve(times1);
            }

        }, interval);
    });
}


var timeOutAlwaysPromise2 = (process, interval) => {
    var times = 0;
    var timeOutFn = (resolve) => {
        setTimeout(() => {
            times++;
            console.log(process);
            console.log(times);
            if (times < 6) {
                timeOutFn(resolve);
            } else {
                resolve(times);
            }

        }, interval);
    }
    return new Promise((resolve, reject) => {
        timeOutFn(resolve);
    })
}


describe("promise test", () => {

    var result = "";
    // it('test promise1', () => {
    //     return timeOut("step1 ok", 500).then((data) => {
    //         result = data;
    //         result.should.equal("step1 ok")
    //     }).then((data) => {
    //         result = data;
    //         return timeOut("step2 ok", 1000)
    //     }).then((data)=>{
    //         result = data;
    //         timeOut("step3 ok", 100)
    //     })
    // })

    // it('test promise2', () => {
    //     result.should.equal("step3 ok")
    // })

    // it('test promise3', () => {
    //     return timeOut("step1 ok", 500).then((data) => {
    //         result = data;
    //         result.should.equal("step1 ok")
    //         timeOutAlways("step1", 100);
    //     })
    // })


    // it('test promise4', () => {
    //     return timeOut("step1 ok", 500).then((data) => {
    //         result = data;
    //         result.should.equal("step1 ok")
    //         timeOutAlways("step2",100);
    //     })
    // })

    // it('test promise5', () => {
    //     return timeOutAlwaysPromise1("step1", 500).then((data) => {
    //         result = data;
    //         result.should.equal(5)
    //     })
    // })


    it('test promise6', () => {
        return timeOutAlwaysPromise2("step6", 100).then((data) => {
            result = data;
            result.should.equal(6)
        })
    })

    it('test promise7', () => {

        result.should.equal(6)

    })

})
