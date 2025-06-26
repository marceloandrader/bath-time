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
      title: 'Gather Supplies',
      duration: 30,
      image: '/pictograms/gather-supplies.png'
    },
    {
      title: 'Wet Body and Hair',
      duration: 60,
      image: '/pictograms/wet-body-hair.png'
    },
    {
      title: 'Shampoo Hair',
      duration: 90,
      image: '/pictograms/shampoo-hair.png'
    },
    {
      title: 'Rinse Hair',
      duration: 60,
      image: '/pictograms/rinse-hair.png'
    },
    {
      title: 'Apply Conditioner',
      duration: 30,
      image: '/pictograms/apply-conditioner.png'
    },
    {
      title: 'Rinse Conditioner',
      duration: 60,
      image: '/pictograms/rinse-conditioner.png'
    },
    {
      title: 'Wash Body',
      duration: 120,
      image: '/pictograms/wash-body.png'
    },
    {
      title: 'Rinse Body',
      duration: 60,
      image: '/pictograms/rinse-body.png'
    },
    {
      title: 'Wash Face (Optional)',
      duration: 60,
      image: '/pictograms/wash-face.png'
    },
    {
      title: 'Shave (Optional)',
      duration: 120,
      image: '/pictograms/shave.png'
    },
    {
      title: 'Final Rinse',
      duration: 30,
      image: '/pictograms/final-rinse.png'
    },
    {
      title: 'Exit Shower & Dry',
      duration: 60,
      image: '/pictograms/exit-dry.png'
    }
  ];

  return {
    steps
  };
};