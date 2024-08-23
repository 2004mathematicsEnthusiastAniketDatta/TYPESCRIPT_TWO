"use strict";
// ts transpiles the typescript code into javascript code
/*The memory layout of a JavaScript program typically consists of the following components:

1. Call Stack

    A region of memory that stores information about the active subroutines (functions) of a program.
    Each entry in the call stack is called a stack frame, which contains:
        Function parameters
        Local variables
        Return address

2. Heap

    A region of memory where dynamic memory allocation takes place.
    Objects, arrays, and functions are stored in the heap.
    The heap is divided into generations based on object lifetime:
        Young generation (newly created objects)
        Old generation (long-lived objects)

3. Web APIs

    A region of memory that stores Web API objects, such as:
        DOM (Document Object Model) nodes
        Event listeners
        Timer handlers

4. Global Object

    A region of memory that stores the global object (e.g., window in browsers or global in Node.js).
    The global object contains:
        Global variables
        Built-in functions and objects (e.g., Math, Date)

5. Execution Context

    A region of memory that stores the current execution context of a program.
    The execution context contains:
        The current function being executed
        The scope chain (a list of objects that contain variables and functions)

Here's a simple diagram to illustrate the memory layout:

          +---------------+
          |  Call Stack  |
          +---------------+
                  |
                  |
                  v
          +---------------+
          |     Heap     |
          |  (Objects,   |
          |   Arrays,     |
          |   Functions)  |
          +---------------+
                  |
                  |
                  v
          +---------------+
          |  Web APIs    |
          |  (DOM, Event  |
          |   Listeners,  |
          |   Timer Handlers)|
          +---------------+
                  |
                  |
                  v
          +---------------+
          | Global Object |
          |  (window,     |
          |   global)     |
          +---------------+
                  |
                  |
                  v
          +---------------+
          | Execution    |
          |  Context     |
          |  (Scope Chain,|
          |   Current     |
          |   Function)   |
          +---------------+

Note that this is a simplified representation, and the actual memory layout may vary depending on the JavaScript engine and environment. */
