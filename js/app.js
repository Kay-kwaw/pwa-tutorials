//how to register a service worker
if ('serviceWorker' in navigator) {
    //Async tasks //promising tasks 
 navigator.serviceWorker.register('/sw.js')
 .then((reg) => console.log('service worker registered', reg))
 .catch((err) => console.log('service worker not registered', err));
 //Async task
}
//An object in js that represents the browser and information about it