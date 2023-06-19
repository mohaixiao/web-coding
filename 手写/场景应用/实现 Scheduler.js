class Schedular {
    constructor(limit) {
        this.limit = limit; // maxCount
        this.queue = []; // 队列
        this.runCounts = 0; // 运行数
    }
    add(time, order) {
        const mypromise = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(order); //执行order
                    resolve();
                }, time);
            })
        }
        this.queue.push(mypromise);
    }
    taskStart() {
        for (let i = 0; i < this.limit; i++) {
            this.request();
        }
    }
    request() {
        if (!this.queue || !this.queue.length || this.runCounts >= this.limit) return;
        this.runCounts++;
        this.queue.shift()().then((res) => {
            this.runCounts--;
            this.request();
        })
    }
}
const scheduler = new Schedular(2)
const addTask = (time, order) => {
    scheduler.add(time, order)
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
scheduler.taskStart()