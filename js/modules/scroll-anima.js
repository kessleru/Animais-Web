export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40% 0px',
      }
    );
  }

  init() {
    if (this.sections.length) {
      this.sections.forEach((section) => this.observer.observe(section));
    }
    return this;
  }

  stop() {
    this.sections.forEach((section) => this.observer.unobserve(section));
  }
}
