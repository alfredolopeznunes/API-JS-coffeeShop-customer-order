
/* Pinta banner principal y textos */
const pintarBanner = (titulo, mensaje = '', adicional = '', claseBanner) => {
    const bannerPrincipal = document.querySelector('.banner-principal');

    bannerPrincipal.classList.add(claseBanner);

    bannerPrincipal.insertAdjacentHTML("beforeend", `
    <div class="texto-banner text-white">
        <div class="banner-llamado">
            <h2>${titulo}</h2>
            ${mensaje !== '' ? '<p class="mt-4">'+ mensaje +'</p>' : ''}
        </div>
    </div>
    ${adicional}`);
}


export { pintarBanner }