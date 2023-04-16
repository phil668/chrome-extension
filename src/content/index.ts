console.info('chrome-ext template-vue-ts content script')

const image = document.createElement('img')

image.src = chrome.runtime.getURL('img/logo-16.png')

document.body.appendChild(image)

export {}
