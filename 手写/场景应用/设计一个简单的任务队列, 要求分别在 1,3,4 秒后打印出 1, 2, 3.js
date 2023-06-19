new Quene()
.task(1000, () => {
    console.log(1)
})
.task(2000, () => {
    console.log(2)
})
.task(1000, () => {
    console.log(3)
})
.start()

function Quene() { ... } //补全代码

function Queue() {
    this.quene = [];
  }
  
  
  Queue.prototype.task = function (time, callback) {
    this.quene.push({ time, callback });
    return this;
  };
  
  Queue.prototype.start = function () {
    const quene = this.quene;
    let result = Promise.resolve();
  
    quene.forEach((item) => {
      result = result.then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(item.callback());
          }, item.time);
        });
      });
    });
  
    return result;
  };
  
  //test
  new Queue()
    .task(1000, () => {
      console.log(1)
    })
    .task(2000, () => {
      console.log(2)
    })
    .task(1000, () => {
      console.log(3)
    })
    .start()

    
    class TaskQueue {
        constructor() {
          this.queue = []
        }
        add(time, fn, ...args) {
          let p = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(fn(...args))
              }, time);
            })
          }
          this.queue.push(p)
          return this
        }
        async execute() {
          let results = []
          while(this.queue.length) {
            await this.queue.shift()().then(res => results.push(res))
          }
          return results
        }
      }
  
      let q =new TaskQueue()
      console.log(q.add(1000, () => {
        console.log(1)
        return '1'
      }).add(2000, () => {
        console.log(2)
        return '2'
      }).add(1000, () => {
        console.log(3)
        return '3'
      }).execute().then(res => console.log(res)));