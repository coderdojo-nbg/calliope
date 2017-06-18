#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 


int main() 
{
    uBit.init();
    
    while ( true ) {
        if ( uBit.io.P12.isTouched() ) {
            uBit.soundmotor.soundOn(261.626); uBit.sleep(2000); uBit.soundmotor.soundOff();
            uBit.soundmotor.soundOn(329.628); uBit.sleep(2000); uBit.soundmotor.soundOff();
            uBit.soundmotor.soundOn(391.995); uBit.sleep(2000); uBit.soundmotor.soundOff();
            uBit.soundmotor.soundOn(523.251); uBit.sleep(2000); uBit.soundmotor.soundOff();
        } else if ( uBit.io.P0.isTouched() ) {
            uBit.soundmotor.soundOn(391.995); uBit.sleep(2000); uBit.soundmotor.soundOff();
            uBit.soundmotor.soundOn(493.883); uBit.sleep(2000); uBit.soundmotor.soundOff();
            uBit.soundmotor.soundOn(587.33); uBit.sleep(2000); uBit.soundmotor.soundOff();
            uBit.soundmotor.soundOn(783.991); uBit.sleep(2000); uBit.soundmotor.soundOff();
        }
        uBit.sleep(1);
    }
    release_fiber();
}
