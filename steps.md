<!-- Descrizione:
Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
 Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Mostriamo il countdown dei 30 secondi in pagina
Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt :faccia_leggermente_sorridente:
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
 -->

 # Simon Says
 ## FASE 1- PRELIMINARE
 - Collegare gli elementi del DOM.
 - Creare un array `extractedNumbers`.
 - Creare una variabile vuota `toInject` da iniettare poi nel DOM.
 - Creare una variabile `countdownSeconds` contenente i secondi del countdown.
 - Creare una variabile `seconds` contenente i secondi da dare come argomento all'intervallo.


 ## FASE 1b - FUNZIONI
 ### Funzione 1 - Generare array di numeri random differenti
  - Creare una funzione `randomGenerator` che accetta un parametro `numbers`:
    - Creare una variabile d'appoggio `generatedNumbers`.
    - Creare una variabile d'appoggio `randomNumber`.
    - **CICLO DO-WHILE**:
        - **DO** genera `randomNumber` e lo mette in `generatedNumbers`
        - **FINO A QUANDO** `generatedNumbers` include `randomNumber` && `generatedNumbers` contiene `numbers` di numeri.
    - *Ritorna* un array `generatedNumbers`.
 ### Funzione 2 - Controllare quanti numeri sono presenti in un array
  - Creare una funzione `howManyInIt` che accetta 2 array come parametri `array1`, `array2`:
 - **CICLO FOR** per tanti numeri quanti sono in `array1`:
    - Creo un array `rightNumbers`.
    - Per ogni ciclo prendo un numero indice di `array2`.
    - **SE** il numero è presente in `array1`:
        - Pusha il numero dentro `rightNumbers`.
- *Ritorno* `rightNumbers`.

## FASE 2 - SVOLGIMENTO
- **CICLO FOR** che gira il valore di `generatedNumbers` e che per ogni giro:
    - Genera una stringa contenente l'elemento indice di `generatedNumbers`
    - Aggiunge la stringa a `toInject`.
- Iniettare in pagina `toInject`.
- Creare una variabile `countdown` in cui:
    - Fa partire un'intervallo di `seconds` e ad ogni secondo:
    - Visualizza in pagina il valore di `countdownSeconds` diminuito di 1 ad ogni giro.
    - **SE** se `countdownSeconds` è identico a 0:
        - Aggiungere la classe `d-none` agli elementi contenente il numero.
        - Rimuovere la classe `d-none` dagli input in pagina.
        - Rimuovere la classe `d-none` dal pulsante calcola.
        - Fermare l'intervallo.
- **AL CLICK** del pulsante calcola.
    - Prendere gli input dell'utente e metterli in array `userInput`.
    - Verificare i numeri di `userInput` con `howManyInIt`.
    - Stampare in pagina il risultato di `howManyInIt` e la sua lunghezza.


