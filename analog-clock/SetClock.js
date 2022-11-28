const SetClock = () => {

    let now = new Date();
    let nowHours = now.getHours() * 30;
    let nowMinutes = now.getMinutes() * 6;
    let nowSeconds = now.getSeconds() * 6;

    document.querySelectorAll(".hour").forEach(function (container) {
        container.style.cssText = `--deg: ${nowHours}`;
    });

    document.querySelectorAll(".minute").forEach(function (container) {
        container.style.cssText = `--deg: ${nowMinutes}`;
    });

    document.querySelectorAll(".second").forEach(function (container) {
        container.style.cssText = `--deg: ${nowSeconds}`;
    });
};

export default SetClock;