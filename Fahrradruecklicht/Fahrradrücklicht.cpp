#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 


int main() 
{
    uBit.init();
    uBit.display.setDisplayMode(DISPLAY_MODE_GREYSCALE);
    while ( true ) {
        if ( uBit.io.P12.isTouched() ) {
            uBit.display.print(MicroBitImage("0,0,255,255,0\n0,255,0,0,0\n0,255,0,0,0\n0,255,0,0,0\n0,0,255,255,0\n"));
            uBit.rgb.setColour(MicroBitColor(255, 0, 0, 255));
            uBit.soundmotor.soundOn(261.626); uBit.sleep(500); uBit.soundmotor.soundOff();
        } else if ( uBit.io.P0.isTouched() ) {
            uBit.display.print(MicroBitImage("0,255,255,255,0\n0,255,0,0,0\n0,255,255,255,0\n0,255,0,0,0\n0,255,255,255,0\n"));
            uBit.rgb.setColour(MicroBitColor(255, 255, 51, 255));
            uBit.soundmotor.soundOn(329.628); uBit.sleep(500); uBit.soundmotor.soundOff();
        } else if ( uBit.io.P1.isTouched() ) {
            uBit.display.print(MicroBitImage("0,0,255,255,255\n0,255,0,0,0\n0,255,0,255,255\n0,255,0,0,255\n0,0,255,255,255\n"));
            uBit.rgb.setColour(MicroBitColor(0, 153, 0, 255));
            uBit.soundmotor.soundOn(391.995); uBit.sleep(500); uBit.soundmotor.soundOff();
        } else if ( uBit.io.P16.isTouched() ) {
            uBit.display.print(MicroBitImage("0,0,255,0,0\n0,255,0,255,0\n0,255,255,255,0\n0,255,0,255,0\n0,255,0,255,0\n"));
            uBit.rgb.setColour(MicroBitColor(51, 51, 255, 255));
            uBit.soundmotor.soundOn(440); uBit.sleep(500); uBit.soundmotor.soundOff();
        }
        uBit.sleep(1);
    }
    release_fiber();
}
