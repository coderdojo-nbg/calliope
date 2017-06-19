#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 

double Startzeit = 0;
double Endzeit = 0;

int main() 
{
    uBit.init();
    
    while (1) {
        if ( uBit.buttonA.isPressed() == true ) {
            break;
        }
        uBit.sleep(100);
    }
    Startzeit = ( uBit.systemTime() - initTime );
    uBit.rgb.setColour(MicroBitColor(51, 255, 51, 255));
    uBit.soundmotor.soundOn(261.626); uBit.sleep(125); uBit.soundmotor.soundOff();
    while (1) {
        if ( uBit.buttonB.isPressed() == true ) {
            break;
        }
        uBit.sleep(100);
    }
    Endzeit = ( uBit.systemTime() - initTime );
    uBit.rgb.setColour(MicroBitColor(255, 0, 0, 255));
    uBit.soundmotor.soundOn(261.626); uBit.sleep(125); uBit.soundmotor.soundOff();
    Endzeit = Endzeit - Startzeit;
    Endzeit = round(Endzeit / ((float) 1000));
    uBit.display.scroll(ManagedString(Endzeit));
    uBit.rgb.off();
    release_fiber();
}
