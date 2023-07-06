<template>
    <div class="background-login">
        <div class="h-full flex items-center">
            <div class="sm:w-auto md:w-7/12 lg:w-1/2 xl:w-1/3 2xl:w-1/3">
                <div :class="{'ms-14': isLargeScreen, 'ms-4': !isLargeScreen}" class="flex flex-col gap-4">
                    <h2 class="text-2xl font-bold text-white">Inicia sesión con tu cuenta</h2>
                    <div>
                        <label for="username" class="block text-white">Usuario</label>
                        <input type="text" id="username" class="w-full border border-white rounded px-3 py-2 bg-transparent text-white placeholder:text-white" placeholder="John.snow@gmail.com">
                    </div>

                    <div>
                        <label for="password" class="block text-white">Contraseña</label>
                        <input type="password" id="password" class="w-full border border-white rounded px-3 py-2 bg-transparent text-white placeholder:text-white" placeholder="*********">
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
                        <div class="flex items-center">
                            <input type="checkbox" id="rememberMe" class="mr-2">
                            <label for="rememberMe" class="text-white">Recuérdame</label>
                        </div>

                        <div class="text-center sm:text-right">
                            <a href="/recoveryPassword" class="text-white">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>

                    <button class="bg-blue-900 hover:bg-blue-800 text-green-700 hover:text-green-800 font-bold py-3 px-4 rounded">
                        Iniciar sesión
                    </button>

                    <p class="text-center text-white text-sm">
                        ¿No tienes cuenta? <a href="#">Haz clic aquí</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLargeScreen: false,
    };
  },
  mounted() {
    this.isLargeScreen = window.innerWidth > 768;
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isLargeScreen = window.innerWidth > 768;
    },
  },
};
</script>