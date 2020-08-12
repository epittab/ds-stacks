#include <stdio.h>

typedef struct node {

    int data;
    struct node *next;
    
} node;

int main(void){

    struct node x;

    x.data = 4;
    int *p = &x.data;

    printf("The data point %i is held at memory location %p\n", x.data, p);
    return 0;
}