#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 

double wartezeit = 500;

int main() 
{
    uBit.init();
    
    while ( true ) {
        uBit.rgb.setColour(MicroBitColor(255, 0, 0, 255));
        uBit.sleep(50);
        uBit.rgb.off();
        uBit.sleep(wartezeit);
        if ( uBit.buttonA.isPressed() ) {
            wartezeit = wartezeit - 50;
            if ( wartezeit < 300 ) {
                wartezeit = 300;
            }
        }
        if ( uBit.buttonB.isPressed() ) {
            wartezeit = wartezeit + 50;
            if ( wartezeit > 1500 ) {
                wartezeit = 1500;
            }
        }
        uBit.sleep(1);
    }
    release_fiber();
}
