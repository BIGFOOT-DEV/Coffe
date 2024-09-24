let toggleNavBarStatus = false;

let toggleNav = function() {
    let getBurgMenu = document.getElementById('toggleMenu');
    let burgBut = document.getElementById('burgBut');

    if (toggleNavBarStatus === false){
        getBurgMenu.classList.remove('hidden');
        getBurgMenu.classList.add('block');
        burgBut.src = '/media/icons/dump/icon items/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
        
        toggleNavBarStatus = true;
    }
    
    
    else if (toggleNavBarStatus === true) { 
        getBurgMenu.classList.remove('block');
        getBurgMenu.classList.add('hidden');
        burgBut.src = '/media/icons/dump/icon items/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
        
        toggleNavBarStatus = false;
    }
    

}