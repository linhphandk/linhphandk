export enum ScrollSection {
  HERO = "HERO",
  ABOUT = "ABOUT",
  EXPERIENCE = "EXPERIENCE",
  SKILLS = "SKILLS"
}
type ScrollMap = Map<ScrollSection, HTMLElement>;

class ScrollManager {
  private scrollMap: ScrollMap;
  constructor(scrollMap: ScrollMap) {
    this.scrollMap = scrollMap;
  }

  public scrollTo(scrollSection: ScrollSection): void {
    const targetElement: HTMLElement | undefined = this.scrollMap.get(scrollSection);
    if (targetElement != null) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(scrollSection.toString() + " not found")
    }
  }

}

export default ScrollManager;
