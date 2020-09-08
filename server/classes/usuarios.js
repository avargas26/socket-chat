class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    //obtener persona por id
    getPersona(id) {
        let persona = this.personas.filter(p => {
            return p.id === id
        })[0];

        return persona;
    }

    //obtebner todas las personas
    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(p => {
            return p.sala === sala
        });
        return personasEnSala;
    }

    borrarPersona(id) {
        let PersonaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(p => p.id != id);
        return PersonaBorrada;
    }
}

module.exports = {
    Usuarios
}