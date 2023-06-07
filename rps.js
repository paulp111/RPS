'use strict'

let zaehlerSpieler = 0;
let zaehlerComputer = 0;

function computerAuswahl() {
    let zufall = Math.floor(Math.random() * 3);
    if (zufall === 0) return 'Schere';
    if (zufall === 1) return 'Stein';
    if (zufall === 2) return 'Papier';
}

function spielRunde(spieler, computer) {
    if (spieler === 'Stein') {
        if (computer === 'Schere') return 1;
        if (computer === 'Stein') return 2;
        if (computer === 'Papier') return 0;
    }
    if (spieler === 'Schere') {
        if (computer === 'Schere') return 2;
        if (computer === 'Stein') return 0;
        if (computer === 'Papier') return 1;
    }
    if (spieler === 'Papier') {
        if (computer === 'Schere') return 0;
        if (computer === 'Stein') return 1;
        if (computer === 'Papier') return 2;
    }
}

function resetRPS() {
    zaehlerSpieler = 0;
    zaehlerComputer = 0;
    document.getElementById('zaehler').innerText = 'Gewinne: Spieler (' + zaehlerSpieler + ') - Computer (' + zaehlerComputer + ')';
}

function spielerAuswahl(auswahl) {
    const computer = computerAuswahl();
    const ergebnis = spielRunde(auswahl, computer);

    document.getElementById('spielerAuswahl').innerText = 'Spieler: ' + auswahl;
    document.getElementById('computerAuswahl').innerText = 'Computer: ' + computer;

    if (ergebnis === 0) {
        document.getElementById('ergebnis').innerText = 'Computer gewinnt';
        zaehlerComputer++;
    } else if (ergebnis === 1) {
        document.getElementById('ergebnis').innerText = 'Spieler gewinnt';
        zaehlerSpieler++;
    } else if (ergebnis === 2) {
        document.getElementById('ergebnis').innerText = 'Unentschieden';
    }

    document.getElementById('zaehler').innerText = 'Gewinne: Spieler (' + zaehlerSpieler + ') - Computer (' + zaehlerComputer + ')';

    if (zaehlerComputer >= 5 || zaehlerSpieler >= 5) {
        if (zaehlerComputer >= 5) {
            alert('Computer hat gewonnen');
        }
        if (zaehlerSpieler >= 5) {
            alert('Spieler hat gewonnen');
        }
        resetRPS();
    }
}
