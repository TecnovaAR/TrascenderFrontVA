<template>
    <div class="background-login">
        <div class="h-full flex items-center">
            <div class="sm:w-auto md:w-7/12 lg:w-1/2 xl:w-1/3 2xl:w-1/3">
                <div class="flex flex-col gap-4 ms-14">
                    <h2 class="text-2xl font-bold text-white">Ingresa el código</h2>
                    <div>
                        <label for="username" class="block text-white">Código</label>
                        <input type="text" id="codePassword" class="w-full border border-white rounded px-3 py-2 bg-transparent text-white placeholder:text-white" placeholder="ABCD-1234">
                    </div>

                    <button @click="FunctionChangePassword" class="bg-blue-900 hover:bg-blue-800 text-green-700 hover:text-green-800 font-bold py-3 px-4 rounded">
                        Cambiar contraseña
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        FunctionChangePassword(){
            window.location.href = '/changePassword';
        }
    }
}
</script>
