// import './style.css';
import Alpine from 'alpinejs';
import { icons } from './icons';

declare global {
  interface Window {
    Alpine: typeof Alpine;
    iconComponent: (
      iconName?: string,
      tailwindClasses?: string
    ) => {
      iconName: string;
      tailwindClasses: string;
      readonly icon: string;
    };
  }
}

if (typeof window !== 'undefined') {
  window.Alpine = Alpine;

  window.iconComponent = (
    iconName = 'logo',
    tailwindClasses = ''
  ) => ({
    iconName,
    tailwindClasses,


    get icon() {
      const iconFn = icons[this.iconName];
      if (!iconFn) return '';
      return iconFn(this.tailwindClasses);
    }
  });

  Alpine.start();
}












  // <div x-data="{
  //           results: [
  //             { id: '001', title: '150+', text: 'Cases Won' },
  //             { id: '002', title: '98%', text: 'Success Rate' },
  //             { id: '003', title: '15+', text: 'Years Experience' },
  //             { id: '004', title: '$50M+', text: 'Recovered in Settlements' },
  //           ]
  //         }">

  //         <template x-for="result in results" :key="result.id">
  //           <div class="">
  //             <div class="" x-text="result.title"></div>
  //             <div class="" x-text="result.text"></div>
  //           </div>
  //         </template>
