let calculator = {
    // ваш код
    read(a, b) {
        this.a = a;

        console.log(this.a);
        this.b = b;

        console.log(this.b);
    },

    sum() {
        console.log(this.a + this.b);
        return this.a + this.b;
    },

    mul() {
        console.log(this.a * this.b);
        return this.a * this.b;
    }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
