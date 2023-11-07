<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
<template>
    <header class="header flex justify-between p-5">
        <div class="header__left flex">
            <div class="menu__logo">
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div class="header__search">
                <form action="" class="relative">
                    <input type="text" placeholder="Search for anything..."
                        class="header__search--keyword left-0 pl-3 outline-none">
                    <label for="search__submit" class="header__search--submit absolute right-3">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </label>
                    <input type="submit" id="search__submit" hidden value="tìm">
                    <ion-icon name="search-outline"></ion-icon>
                </form>
            </div>
        </div>

        <div class="header__right flex">
            <div class="language mr-5">
                <div class="rounded-full"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png" alt=""></div>
            </div>
            <div class="mode">
                <div class="nightMode"><ion-icon name="moon-outline"></ion-icon></div>
            </div>
            <div class="mail">
                <a href="">
                    <ion-icon name="mail-outline"></ion-icon>
                </a>
            </div>
            <div class="notifi">
                <ion-icon name="notifications-outline"></ion-icon>
            </div>
            <div class="mr-5">
                <a href="" class="navigate__link navigate__link--learning"><ion-icon name="menu-outline"></ion-icon></a>
            </div>
            <div class="header__user">
                <img src="../../assets/images/client/avatars/avatar.png" alt="">
            </div>
            <div class="setting">
                <a href=""><ion-icon name="settings-outline"></ion-icon></a>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderAdminScreen'
}
</script>