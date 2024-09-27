let ladder = {
    currentStep: 0,
    up: function () {
        this.currentStep++;
        return this;
        },
    down: function () {
        this.currentStep--;
        return this;
        },
    showStep: function () {
        console.log(this.currentStep);
        return this;
    }
};

ladder.up().up().down().showStep(); // 1