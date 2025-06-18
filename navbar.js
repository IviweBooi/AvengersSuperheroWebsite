// This function opens abd closes the side bar.
function viewSideBar(){

    const sideBar = document.querySelector('#side-bar');
    const menuIcon = document.querySelector('#menu-icon');
    const xIcon = document.querySelector('#x-icon');
    if (sideBar.style.display == 'none'){
        sideBar.style.display = 'flex';
        menuIcon.style.display = 'none';
        xIcon.style.display = 'flex';
    }else{
        sideBar.style.display = 'none';
        menuIcon.style.display = 'flex';
        xIcon.style.display = 'none';
    }
}