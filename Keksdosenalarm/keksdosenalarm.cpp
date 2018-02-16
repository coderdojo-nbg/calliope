#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 

int main() 
{
    uBit.init();
    
    uBit.accelerometer.updateSample();
    while ( true ) {
        if ( (uBit.accelerometer.getGesture() == MICROBIT_ACCELEROMETER_EVT_TILT_UP) ) {
            uBit.display.print(MicroBitImage("255,0,0,0,255\n0,255,0,255,0\n0,0,0,0,0\n255,255,255,255,255\n255,0,255,0,255\n"));
            uBit.soundmotor.soundOn(2500); uBit.sleep(100); uBit.soundmotor.soundOff();
        } else {
            uBit.display.clear();
        }
        uBit.sleep(1);
    }
    release_fiber();
}
