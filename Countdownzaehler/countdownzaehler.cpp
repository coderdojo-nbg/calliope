#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 

double Sekunden = 20;

void animation_einer_sekunde() {
    uBit.sleep(250);
    uBit.display.print(MicroBitImage("255,255,255,255,255\n255,0,0,0,255\n255,0,0,0,255\n255,0,0,0,255\n255,255,255,255,255\n"));
    uBit.sleep(250);
    uBit.display.print(MicroBitImage("0,0,0,0,0\n0,255,255,255,0\n0,255,0,255,0\n0,255,255,255,0\n0,0,0,0,0\n"));
    uBit.sleep(250);
    uBit.rgb.setColour(MicroBitColor(0, 153, 0, 255));
    uBit.display.print(MicroBitImage("0,0,0,0,0\n0,0,0,0,0\n0,0,255,0,0\n0,0,0,0,0\n0,0,0,0,0\n"));
    uBit.sleep(250);
    uBit.soundmotor.soundOn(261.626); uBit.sleep(125); uBit.soundmotor.soundOff();
}

int main() 
{
    uBit.init();
    uBit.display.setDisplayMode(DISPLAY_MODE_GREYSCALE);
    while (1) {
        if ( uBit.buttonA.isPressed() == true ) {
            break;
        }
        uBit.sleep(100);
    }
    for (int k0 = 0; k0 < Sekunden; k0 += 1) {
        animation_einer_sekunde();
    }
    uBit.display.print(MicroBitImage("0,0,0,0,0\n0,255,0,255,0\n0,0,0,0,0\n0,255,0,255,0\n255,0,255,0,255\n"));
    uBit.rgb.setColour(MicroBitColor(255, 0, 0, 255));
    for (int k1 = 0; k1 < 10; k1 += 1) {
        uBit.soundmotor.soundOn(261.626); uBit.sleep(250); uBit.soundmotor.soundOff();
        uBit.sleep(100);
    }
    uBit.rgb.off();
    release_fiber();
}
