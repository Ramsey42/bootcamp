import {Base64} from "js-base64";

export const base64EncodedString = (data) => {
    return "data:image/jpeg;base64," + Base64.btoa(data);
};

export const decodeBase64 = (base64EncodedString) => {
    const imageData = Base64.atob(base64EncodedString);
    const byteArray = new Uint8Array(imageData.length);
    for (let i = 0; i < imageData.length; i++) {
        byteArray[i] = imageData.charCodeAt(i);
    }

    return new Promise((resolve) => {
        const image = new Image();
        image.src = `data:image/jpeg;base64,${base64EncodedString}`;
        image.onload = () => resolve(image);
    });
};

export const dataUrlToBlob = (dataUrl) => {
    const parts = dataUrl.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const byteCharacters = atob(parts[1]);
    const byteArrays = [];
    for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
    }
    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: contentType });
};
