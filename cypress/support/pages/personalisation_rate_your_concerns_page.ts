import BasePage from "../utils/basePage";
import 'cypress-xpath';

 const FIRST_CONCERN_RANGE_SLIDER_PARENT = '#ion-r-0';
 const SECOND_CONCERN_RANGE_SLIDER_PARENT = '#ion-r-1';
 const SLIDER_ELEMENT = '.range-slider';
 const SLIDER_KNOB_HANDLE = '.range-knob-handle';


const SCROLLER_PARENT = '//app-onboarding[@class=\'ion-page can-go-back\']//ion-content[@class=\'md content-ltr hydrated\']';
const SCROLLER_ELEMENT = '.inner-scroll.scroll-y';



const NEXT_BTN = 'form.ng-dirty > .ion-color';


export class Personalisation_concerns_rating_page extends BasePage {
    constructor() {
        super();
    }

    setFirstRangeSliderValue(desiredValue) {
        const FIRST_RANGE_SLIDER = cy.get(FIRST_CONCERN_RANGE_SLIDER_PARENT).shadow().find(SLIDER_ELEMENT);
        const min = 0;
        const max = 6;
        const range = max - min;
        const valuePercent = (desiredValue - min) / range;
        const thumbPercent = valuePercent * 100;
        const thumbPosition = thumbPercent.toFixed(2) + '%';

        FIRST_RANGE_SLIDER.trigger('pointerdown', { button: 0 });
        FIRST_RANGE_SLIDER.trigger('pointermove', { clientX: 0, clientY: 0, force: true });
        FIRST_RANGE_SLIDER.trigger('pointermove', { clientX: 300, clientY: 0, force: true, pointerType: 'touch' });
        FIRST_RANGE_SLIDER.trigger('pointerup', { force: true });
        FIRST_RANGE_SLIDER.invoke('val', desiredValue);
        FIRST_RANGE_SLIDER.find(SLIDER_KNOB_HANDLE).invoke('attr', 'style', `left: ${thumbPosition}`);

        cy.get(FIRST_CONCERN_RANGE_SLIDER_PARENT).shadow().find('.range-knob-handle').click({force:true});
    }


    setSecondRangeSliderValue(desiredValue) {
        const SECOND_RANGE_SLIDER = cy.get(SECOND_CONCERN_RANGE_SLIDER_PARENT).shadow().find(SLIDER_ELEMENT);
        const min = 0;
        const max = 6;
        const range = max - min;
        const valuePercent = (desiredValue - min) / range;
        const thumbPercent = valuePercent * 100;
        const thumbPosition = thumbPercent.toFixed(2) + '%';

        SECOND_RANGE_SLIDER.trigger('pointerdown', { button: 0 });
        SECOND_RANGE_SLIDER.trigger('pointermove', { clientX: 0, clientY: 0, force: true });
        SECOND_RANGE_SLIDER.trigger('pointermove', { clientX: 300, clientY: 0, force: true, pointerType: 'touch' });
        SECOND_RANGE_SLIDER.trigger('pointerup', { force: true });
        SECOND_RANGE_SLIDER.invoke('val', desiredValue);
        SECOND_RANGE_SLIDER.find('.range-knob-handle').invoke('attr', 'style', `left: ${thumbPosition}`);

        cy.get(SECOND_CONCERN_RANGE_SLIDER_PARENT).shadow().find('.range-knob-handle').click({force:true});
    }
     setSliderValue(sliderParentSelector, desiredValue) {
        const slider = cy.get(sliderParentSelector).shadow().find(SLIDER_ELEMENT);
        const min = 0;
        const max = 6;
        const range = max - min;
        const valuePercent = (desiredValue - min) / range;
        const thumbPercent = valuePercent * 100;
        const thumbPosition = thumbPercent.toFixed(2) + '%';

        slider.trigger('pointerdown', { button: 0 });
        slider.trigger('pointermove', { clientX: 0, clientY: 0, force: true });
        slider.trigger('pointermove', { clientX: 300, clientY: 0, force: true, pointerType: 'touch' });
        slider.trigger('pointerup', { force: true });
        slider.invoke('val', desiredValue);
        slider.find('.range-knob-handle').invoke('attr', 'style', `left: ${thumbPosition}`);

        cy.get(sliderParentSelector).shadow().find('.range-knob-handle').click({force:true});
    }


    clickOnNextButton(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.get(NEXT_BTN).click();
 }

}