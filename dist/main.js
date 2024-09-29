let toggleNavBarStatus = false;

let toggleNav = function() {
    const getBurgMenu = document.getElementById('toggleMenu');
    const burgBut = document.getElementById('burgBut');

    // Check the current state of the navbar
    if (toggleNavBarStatus === false) {
        getBurgMenu.classList.remove('hidden'); // Ensure it's not hidden
        requestAnimationFrame(() => {
            getBurgMenu.classList.remove('translate-x-full'); // Slide in
            getBurgMenu.classList.add('translate-x-0'); // Move to original position
        });
        
        // Change button icon
        burgBut.src = '/media/icons/dump/icon items/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
        toggleNavBarStatus = true;
    } else if (toggleNavBarStatus === true) {
        // Slide out
        getBurgMenu.classList.remove('translate-x-0'); // Move out
        getBurgMenu.classList.add('translate-x-full'); // Apply slide-out

        // Change button icon back
        burgBut.src = '/media/icons/dump/icon items/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';

        // Hide the menu after the animation completes
        setTimeout(() => {
            getBurgMenu.classList.add('hidden'); // Add hidden class after slide-out
        }, 700); // Match the duration of the transition (0.7s)

        toggleNavBarStatus = false;
    }
};

// Attach the toggle function to the button click event
document.getElementById('burgBut').addEventListener('click', toggleNav);