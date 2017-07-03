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
        uBit.rgb.setColour(MicroBitColor(255, 0, 0, 255));
        uBit.sleep(100);
        uBit.rgb.off();
        uBit.sleep(900);
        uBit.sleep(1);
    }
    release_fiber();
}
