var app = new Vue({ 
    el: '#app',
    data: {
        mostrar: 0,
        imgs: [
            ['./assets/bajo.jpg', "Tocar el bajo"],
            ['./assets/programar.jpg', "Programar"],
            ['./assets/videojuegos.jpg', "Jugar Videojuegos"],
        ]
        ,
        isHidden: false
    }
});

var shr = new Vue({
    el: '#share',
    data: {
      image: '',
      nombre_pasatiempo: ''
    },
    methods: {
        subirPasatiempo(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.colocarImagen(files[0]);
        },
        colocarImagen(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
  
            reader.onload = (e) => {
                vm.image = e.target.result;
                if (vm.nombre_pasatiempo == '') {
                    vm.nombre_pasatiempo = "Se te olvido escribir el nombre lol";
                }
            };
            reader.readAsDataURL(file);
        },
        borrarPasatiempo: function (e) {
            this.image = '';
            this.nombre_pasatiempo = '';
        }
    }
})