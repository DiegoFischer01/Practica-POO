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
    getNombre(): string {
        return this.Nombre;
    }

    getApellido(): string {
        return this.Apellido;
    }

    getDni(): number {
        return this.Dni;
    }




    getAltura(): number | undefined {     //Prestar atencion a esta definicion number | (alt+124) undefined.  
        return this.Altura;
    }

    //: number | undefined: Esto es la declaración del tipo de retorno del método. Significa que este método puede devolver un valor de tipo number o undefined.
    // number: Si la propiedad Altura ha sido asignada un valor numérico, el método devolverá ese valor.
    // undefined: Si la propiedad Altura no ha sido asignada (es decir, es opcional y no se le ha dado un valor), el método devolverá undefined.

    getPeso(): number | undefined {     //Prestar atencion a esta definicion number | (alt+124) undefined.  
        return this.Peso;
    }



    //Metodos:
    Saludar(): void {
        console.log(`Hola, mi nombre es ${this.Nombre} ${this.Apellido}, y mi Dni es ${this.Dni}.`);
    }

    Datoscompletos(): void {
        console.log(`Hola, mi nombre es ${this.Nombre} ${this.Apellido}, y mi Dni es ${this.Dni}, mido ${this.Altura}, y peso ${this.Peso}.`);
    }
}

const Persona1: Persona = new Persona("Joaquin", "Fernandez", 36500700, 174, 85);
Persona1.Saludar(); 
Persona1.Datoscompletos();
