class UniversalSexCalculator {

    get name1() {
        return document.querySelector("#name1").value;
    }

    get name2() {
        return document.querySelector("#name2").value;
    }

    get scenario() {
        return document.querySelector("#scenario").value;
    }

    static random(seed) {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    static PROBABILITIES = [
        (seed) => (95 + (Math.floor(this.random(seed) * 10) / 10)).toFixed(1) + "%",
        (seed) => (62 + (Math.floor(this.random(seed) * 10) / 10)).toFixed(1) + "%",
        (seed) => (98 + (Math.floor(this.random(seed) * 10) / 10)).toFixed(1) + "%",
        (seed) => (74 + (Math.floor(this.random(seed) * 10) / 10)).toFixed(1) + "%",
        (seed) => (99.1 + (Math.floor(this.random(seed) * 10) / 10)).toFixed(1) + "%",
        () => "RUN",
        (seed) => (2.8 + (Math.floor(this.random(seed) * 10) / 10)).toFixed(1) + "%",
        (seed) => (Math.floor(this.random(seed) * (99 - 1)) + 1).toFixed(1) + "%"
    ];

    get probability() {
        if ([this.name1.toLowerCase(), this.name2.toLowerCase()].some(name => name.match("jay"))) return "0.0%";
        else return UniversalSexCalculator.PROBABILITIES[this.scenario](this.name1.length + this.name2.length);
    }

    display(value) {
        let color = "red";
        if (value == "RUN") color = "darkred";
        else if (Number(value.slice(0, -1)) > 66) color = "limegreen";
        else if (Number(value.slice(0, -1)) > 33) color = "orange";

        return `<b style="color: ${color};">${value}</b>`;
    }

    calculate(manualValue) {
        if (!manualValue) {
            if (!this.name1 || this.name1 == "") return alert("Please provide the name of Person A.");
            if (!this.name2 || this.name2 == "") return alert("Please provide the name of Person B.");
            if (this.scenario == "") return alert("Please specify a scenario.");
            document.querySelector("#probability").innerHTML = this.display(this.probability);
        }
        document.querySelector("#probability").innerHTML = this.display(manualValue);
    }

}

const sexCalculator = new UniversalSexCalculator();
sexCalculator.calculate("0.0%");
document.querySelector("#calculate").onclick = () => sexCalculator.calculate();