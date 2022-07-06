class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer mt-5 pt-5 pb-5 border-top">
            <div class="logo-footer">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src="/assets/images/FoodZero.png" width="50" />
                </a>
                <h5 class="footer-msj text-white text-center mt-4">Somos los mejores en gastronomía Chilena</h5>
            </div>
            
            <div class="copyright">
                <h5 class="mb-0">by ALfredo López Nunes</h5>
                <ul class="rrss-list mt-3">
                    <li class="ms-3">
                        <a href="https://cl.linkedin.com/in/alfredo-lopez-nunes-4aba50108" target="_blank" title="Ver LinkedIn">
                            <img src="../../../assets/images/linkedin.png" />
                        </a>
                    </li>
                    <li class="ms-3">
                        <a href="https://github.com/alfredolopeznunes" target="_blank" title="Ver Github" >
                            <img src="../../../assets/images/github.png" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>`;
    }
}

customElements.define('footer-template', Footer);