self.addEventListener('install', evt => {
    console.log('service installed');
});
//how to install services worker

//How to activate services (event listener)
self.addEventListener('activate', evt => {
    console.log('Event service worker activated');
});
