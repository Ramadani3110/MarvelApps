<template>
    <div class="navbar bg-transparent fixed z-50">
        <div class="navbar-start">
            <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'index.character'}">About</router-link></li>
                <li><router-link :to="{name: 'index.comic'}" exactActiveClass="active-link">Comic</router-link></li>
                <li><router-link :to="{name: 'index.series'}" exactActiveClass="active-link">Series</router-link></li>
            </ul>
            </div>
            <a class="ps-2 text-xl font-bold">MarvelsApp</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'index.character'}" exactActiveClass="active-link">Character</router-link></li>
                <li><router-link :to="{name: 'index.comic'}" exactActiveClass="active-link">Comic</router-link></li>
                <li><router-link :to="{name: 'index.series'}" exactActiveClass="active-link">Series</router-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <button class="btn btn-circle dark:btn-info" onclick="my_modal_1.showModal()">
                <box-icon name='info-circle'></box-icon>
            </button>
            <dialog id="my_modal_1" class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">About This Apps</h3>
                    <p class="py-4">Press ESC key or click the button below to close</p>
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