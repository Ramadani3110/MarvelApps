<template>
    <div class="navbar bg-transparent fixed z-50 backdrop-blur-sm">
        <div class="navbar-start">
            <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><router-link :to="{name: 'home'}" exactActiveClass="active">Home</router-link></li>
                <li><router-link :to="{name: 'index.character'}" exactActiveClass="active">About</router-link></li>
                <li><router-link :to="{name: 'index.comic'}" exactActiveClass="active">Comic</router-link></li>
                <li><router-link :to="{name: 'index.series'}" exactActiveClass="active">Series</router-link></li>
            </ul>
            </div>
            <a class="ps-2 text-xl font-bold hover:text-red-800">MarvelsApp</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><router-link :to="{name: 'home'}" exactActiveClass="active">Home</router-link></li>
                <li><router-link :to="{name: 'index.character'}" exactActiveClass="active">Character</router-link></li>
                <li><router-link :to="{name: 'index.comic'}" exactActiveClass="active">Comic</router-link></li>
                <li><router-link :to="{name: 'index.series'}" exactActiveClass="active">Series</router-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <button class="btn btn-circle dark:btn-info" onclick="my_modal_1.showModal()">
                <box-icon name='info-circle'></box-icon>
            </button>
            <dialog id="my_modal_1" class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">About Me</h3>
                    <div class="w-auto h-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-md">
                        <div class="pt-5 text-center">
                            <p class="font-bold">Politeknik Negeri Cilacap</p>
                        </div>
                        <div class="flex flex-row justify-between items-center pt-2 p-6 shadow-lg">
                            <div class="flex flex-col">
                                <p class="text-sm font-bold">NPM :</p>
                                <p class="text-sm">230109050</p>
                                <p class="text-sm font-bold">Name :</p>
                                <p class="text-sm">Muhamad Ramadani</p>
                                <p class="text-sm font-bold">Class :</p>
                                <p class="text-sm">D4-Rekayasa Keamanan Siber</p>
                            </div>
                            <figure class="flex flex-col items-center gap-2">
                                <img class="w-20 rounded-md" src="../assets/r.jpg" alt="orang">
                                <p class="text-xs">2024</p>
                            </figure>
                        </div>

                    </div>
                    <div class="modal-action">
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
</template>

<style>
.navbar .navbar-start .active,
.navbar .navbar-center .active{
    color: rgb(153 27 27) !important;
    font-weight: bold;
    background: none !important;
}
.navbar .navbar-center .active::after{
    content: '';
    position: absolute;
    background-color: rgb(153 27 27) !important;
    height: 2px;
    width: 100%; /* change width to 100% to span the full width */
    left: 0; /* adjust left position to 0 */
    bottom: -2px;
}
</style>