#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 

double Anzahl_Hoelzchen = 12;
double nim_Mensch = 0;
double nim_Calliope = 0;
bool Spieler_Mensch = true;

double zahle_Tastendruecke() {
    while ( ! uBit.buttonB.isPressed() ) {
        if ( uBit.buttonA.isPressed() ) {
            nim_Mensch += 1;
            uBit.sleep(400);
        }
        if ( nim_Mensch == 3 ) {
            break;
        }
    }
    return nim_Mensch;
}

int main() 
{
    uBit.init();
    
    uBit.display.scroll(ManagedString(Anzahl_Hoelzchen));
    while ( true ) {
        nim_Mensch = 0;
        uBit.rgb.setColour(MicroBitColor(255, 255, 0, 255));
        Spieler_Mensch = true;
        nim_Mensch = zahle_Tastendruecke();
        Anzahl_Hoelzchen = Anzahl_Hoelzchen - nim_Mensch;
        uBit.display.scroll(ManagedString(Anzahl_Hoelzchen));
        uBit.rgb.off();
        if ( Anzahl_Hoelzchen <= 0 ) {
            break;
        }
        uBit.sleep(1000);
        uBit.rgb.setColour(MicroBitColor(51, 51, 255, 255));
        Spieler_Mensch = false;
        nim_Calliope = (uBit.random(3 - 1 + 1) + 1);
        Anzahl_Hoelzchen = Anzahl_Hoelzchen - nim_Calliope;
        uBit.display.scroll(ManagedString(Anzahl_Hoelzchen));
        uBit.rgb.off();
        uBit.sleep(1000);
        if ( Anzahl_Hoelzchen <= 0 ) {
            break;
        }
        uBit.sleep(1);
    }
    if ( Spieler_Mensch ) {
        uBit.display.print(MicroBitImage("0,0,0,0,0\n0,255,0,255,0\n0,0,0,0,0\n255,0,0,0,255\n0,255,255,255,0\n"));
    } else {
        uBit.display.print(MicroBitImage("0,0,0,0,0\n0,255,0,255,0\n0,0,0,0,0\n0,255,255,255,0\n255,0,0,0,255\n"));
    }
    release_fiber();
}
