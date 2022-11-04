/**
 * Javascript behind the scene
 * 
 * The high-level javascript code we write is converted in machine code
 * This is done in the environment created by javascript engine called Execution Context
 * 
 * The execution content contains the code that's currently running and everything that helps in its execution
 * 
 * During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.
 * The are two kinds of Execution Context:
 * 
 * Global Execution Content and Function Execution Context
 * 
 * Global Execution Context is the defualt Execution Context that the engine creates whenever it recieves a script file.
 * It is where all javascript code that is not inside of a function gets executed.
 * And there can only be one GEC for every javascript file
 * 
 * Function Execution Context is created whenever a function is called to evaluate and execute the code within that function
 * There can be more than one FEC in the run-time of a script
 *
 * The creation of an Execution Context (GEC or FEC) happens in two phases:
 * 
 * Creation Phase
 * Execution Phase
 */