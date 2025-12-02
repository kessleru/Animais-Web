export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
  }

  // Recebe um elemento do dom, com número em seu texto
  // Incrementa a partir de 0 até o seu número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 70);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar  número para cada
  // número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // Função que ocorre quando as mutações ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o mutationObserver para verificar quando a classe 'ativo' é adicionado ao target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation.bind(this));
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
