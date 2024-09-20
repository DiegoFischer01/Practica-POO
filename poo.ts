
class Persona {

    //Propiedades:
    private Nombre: string;
    private Apellido: string;
    private Dni: number;
    private Altura?: number;
    private Peso?: number;

    constructor(Nombre: string, Apellido: string, Dni: number, Altura?: number, Peso?: number) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Dni = Dni;
        this.Altura = Altura; // Asignar Altura
        this.Peso = Peso;     // Asignar Peso
    }

    //Getter:
    public getNombre(): string {
        return this.Nombre;
    }

    //Setter nombre:
    // public setNombre(nuevoNombre:string){
    //     return this.Nombre=nuevoNombre;
    // }

    //o validado un poco mejor seria:
    public setNombre(nuevoNombre: string) {
    if (nuevoNombre.length >= 2) {
        this.Nombre = nuevoNombre;
        } else {
        throw new Error(`Ingrese un nombre con más letras.`);
        }
    }


    public getApellido(): string {
        return this.Apellido;
    }

    public getDni(): number {
        return this.Dni;
    }


    /********************************************************************************************************************* */
    public getAltura(): number | undefined {     //Prestar atencion a esta definicion number | (alt+124) undefined.  
        return this.Altura;
    }

    //: number | undefined: Esto es la declaración del tipo de retorno del método. Significa que este método puede devolver un valor de tipo number o undefined.
    // number: Si la propiedad Altura ha sido asignada un valor numérico, el método devolverá ese valor.
    // undefined: Si la propiedad Altura no ha sido asignada (es decir, es opcional y no se le ha dado un valor), el método devolverá undefined.

    public getPeso(): number | undefined {     //Prestar atencion a esta definicion number | (alt+124) undefined.  
        return this.Peso;
    }
    /* **************************************************************************************************************** */

    
    //Metodos:
    Saludar(): void {
        console.log(`Hola, mi nombre es ${this.Nombre} ${this.Apellido}, y mi Dni es ${this.Dni}.`);
    }

    Datoscompletos(): void {
        console.log(`Hola, mi nombre es ${this.Nombre} ${this.Apellido}, y mi Dni es ${this.Dni}, mido ${this.Altura}, y peso ${this.Peso}.`);
    }
}

export const Persona1: Persona = new Persona("Joaquin", "Fernandez", 36500700, 174, 85);
Persona1.Saludar(); 
Persona1.Datoscompletos();

const Persona2: Persona = new Persona("Diego", "Fischer",36572530);
Persona2.Saludar();
Persona2.Datoscompletos();


console.log(Persona2.getNombre()); // Asi se usa el get.


// Esto esta mal, son MALAS PRACTICAS. Por eso se pone PRIVATE, para que no puedan acceder de estas formas.
// console.log(Persona2["Nombre"]); //Con esta sintaxis pude acceder al nombre.
// console.log(Persona2.Nombre);

Persona1.setNombre("Guille");
console.log(Persona1.getNombre());
Persona1.setNombre("mia");
console.log(Persona1.getNombre());
Persona1.Datoscompletos();