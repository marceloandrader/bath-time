import type { PageLoad } from './$types';

export const prerender = true;

export interface Step {
  title: string;
  duration: number;
  image: string;
}

export const load: PageLoad = async () => {
  const steps: Step[] = [
    {
      title: 'Prepararse para ducharse',
      duration: 3,
      image: '/pictogramas/ducha.png'
    },
    {
      title: 'Mojarse cabello y cuerpo',
      duration: 3,
      image: '/pictogramas/mojar.png'
    },
    {
      title: 'Poner Shampoo',
      duration: 3,
      image: '/pictogramas/shampoo.png'
    },
    {
      title: 'Lavar Pelo',
      duration: 3,
      image: '/pictogramas/lavar.png'
    },
    {
      title: 'Poner Rinse',
      duration: 3,
      image: '/pictogramas/acondicionador.png'
    },
    {
      title: 'Enjuagar Rinse',
      duration: 3,
      image: '/pictogramas/lavar.png'
    },
    {
      title: 'Enjabonar Cuerpo',
      duration: 3,
      image: '/pictogramas/enjabonar-cuerpo.png'
    },
    {
      title: 'Lavar Cuerpo',
      duration: 3,
      image: '/pictogramas/lavar.png'
    },
    {
      title: 'Lavar Cara',
      duration: 3,
      image: '/pictogramas/cara.png'
    },
    {
      title: 'Enjuague Final',
      duration: 3,
      image: '/pictogramas/final.png'
    },
    {
      title: 'Salir y Secar',
      duration: 3,
      image: '/pictogramas/secarse.png'
    }
  ];

  return {
    steps
  };
};
