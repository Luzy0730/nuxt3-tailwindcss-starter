export const getCurrentTime = () => {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let currentTime = {
        year,
        month,
        day,
        hour,
        minute,
        second,
        weekday: weekday[time.getDay()],
    };
    return currentTime;
};

const sayHello = (_hello: string) => {
    const hour = new Date().getHours();
    let hello = _hello;
    if (hour < 6) {
        hello = "凌晨好";
    } else if (hour < 9) {
        hello = "早上好";
    } else if (hour < 12) {
        hello = "上午好";
    } else if (hour < 14) {
        hello = "中午好";
    } else if (hour < 17) {
        hello = "下午好";
    } else if (hour < 19) {
        hello = "傍晚好";
    } else if (hour < 22) {
        hello = "晚上好";
    } else {
        hello = "夜深了";
    }
    // @ts-ignore
    ElMessage({
        dangerouslyUseHTMLString: true,
        message: `<strong>${hello}</strong> 欢迎来到我的主页`,
    });
};

// 防抖
let timeout: any;

function debounce(func: Function, wait = 300, immediate = false) {
    // 清除定时器
    if (timeout !== null) {
        clearTimeout(timeout);
    }
    // 立即执行
    if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(function () {
            timeout = null;
        }, wait);
        if (callNow) typeof func === "function" && func();
    } else {
        timeout = setTimeout(function () {
            typeof func === "function" && func();
        }, wait);
    }
}

export const useUtils = () => ({
    sayHello, getCurrentTime, debounce
})