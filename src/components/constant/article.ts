export interface Articles {
  id: number;
  title: string;
  subtitle: string;
  article: string;
  name:string;
  span:string;
  image:string;
}

export const articles: Articles[] = [
  {
    id: 1,
    title: 'Powerful',
    span:'acquisition & retention',
    subtitle: 'Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.',
    article: 'It’s like Klaviyo for direct mail. The results are absolutely insane.',
    name:'Ash Melwani, CMO',
    image:'/assets/images/obvi.png'
  },
  {
    id: 2,
    title: 'Fight back',
    span:'against iOS updates, jacked-up CPCs & spam folders',
    subtitle: 'Deliver your message to all of your customers — for less than the cost of a click.',
    article: 'PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.',
    name:'Leah Keith, GM',
    image:'/assets/images/as.png'
  },
  {
    id: 3,
    title: 'Done for',
    span:"you",
    subtitle: 'From design & strategy to stamp-licking, our ecom experts help you every step of the way.',
    article: 'The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.',
    name:'Holly Davies, Marketing Director',
    image:'/assets/images/paragon.png'
  },
];
