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
        if ( uBit.display.readLightLevel() < 30 ) {
            uBit.rgb.setColour(MicroBitColor(255, 255, 255, 255));
        } else {
            uBit.rgb.off();
        }
        uBit.sleep(1);
    }
    release_fiber();
}
