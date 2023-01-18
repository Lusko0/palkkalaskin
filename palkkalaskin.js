function Laske() {
    const työttömyysvakuutus = 0.019;
    const työeläkevakuutus = 0.0635;
    const b = Number(document.getElementById('brutto').value);
    const v = Number(document.getElementById('veropros').value);
    const veroprs = v / 100;
    const verot = b * veroprs;
    const num1 = b * työttömyysvakuutus;
    const num2 = b * työeläkevakuutus;
    const Vastaus = b - verot - num1 - num2;
    document.getElementById("palkka").innerHTML = Vastaus;
}