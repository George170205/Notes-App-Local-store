const persona = {
  nombre: "Laura",
  edad: 28,
  saludar: function() {
    console.log("¡Hola, mi nombre es " + this.nombre + "!");
  }
};

persona.saludar(); // Imprime: ¡Hola, mi nombre es Laura!
