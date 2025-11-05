import { Question, AnswerKey } from './types';

export const PASSAGE = {
  title: 'Park the Car Permanently',
  paragraphs: [
    { id: 'A', content: "More than a million people are likely to be disappointed by their experience of the Government's attempts to improve the democratic process. They may have signed an online petition against road pricing, but ministers are determined to push ahead with plans to make it more expensive to drive. The Government is convinced that this is the only way to reduce congestion and the environmental damage caused by motoring." },
    { id: 'B', content: "Why wait until you are forced off the road by costly charges? You may enjoy the convenience of your car, but the truth is that for huge numbers of people, owning a car makes little financial sense. You'd be far better off giving it up and relying on other forms of transport. \"I'm 47 and I've never owned a car, despite having a job that requires me to travel all over the South-East to visit clients,\" says Donnachadh McCarthy, an environmental expert who specialises in advising people how to be greener. \"A car is a huge financial commitment, as well as being a psychological addiction. Not owning a vehicle is far more practical than most people realise.\"" },
    { id: 'C', content: "It may seem as if cars have never been cheaper. After all, it is now possible to buy a brand new car for less than £4,800 - the Perodua Kelisa, if you're interested. There are plenty of decent vehicles you can buy straight from the showroom for between £5,000 and £7,000. Of course, if you buy second-hand, the prices will be even lower. However, the falling purchase price of cars masks the fact that it has never been more expensive to own and run a vehicle. The estimate is that the cost of running a car rose by more than ten per cent last year alone. The annual cost of running your own vehicle is pul at an average of £5,539, or £107 a week. While drivers who do less or more than the average mileage each year will spend correspondingly less or more, many of the costs of ear ownership are fixed - and therefore unavoidable." },
    { id: 'D', content: "Depreciation - the fact that your vehicle loses a large chunk of its resale value each year - is one problem, accounting for £2,420 a year. The cost of finance packages, which most people have to resort to to pay for at least part of the price of a new car, has also been rising - to an average of £1,040 a year. Then there's insurance, maintenance, tax, and breakdown insurance, all of which will cost you broadly the same amount, however many miles you do. Only fuel costs are truly variable. While petrol prices are the most visible indicator of the cost of running a car, for the typical driver they account for less than one fifth of the real costs each year. In other words, leaving aside all the practical and psychological barriers to giving up your car, in financial terms, doing so makes sense for many people." },
    { id: 'E', content: "Take the cost of public transport, for example. In London, the most expensive city in the UK, the most expensive annual travel card, allowing travel in any zone at any time, costs just over £1,700. You could give up your car and still have thousands of pounds to spare to spend on occasional car hire. In fact, assuming that you have the most expensive travel card in London, you could hire a cheap car from a company, such as easyCar for about 30 weeks a year, and still be better off overall than if you own your own vehicle. Not that car hire is necessarily the most cost-effective option for people who are prepared to do without a car but may still need to drive occasionally." },
    { id: 'F', content: "Streetcar, one of several \"car clubs\" with growing numbers of members, reckons that using its vehicles twice a week, every week, for a year, would cost you just £700. Streetcar's model works very similarly to those of its main rivals, Citycarclub and Whizzgo. These three companies, which now operate in 20 of Britain's towns and cities, charge their members a refundable deposit - £150 at Streetcar - and then provide them with an electronic smart card. This enables members to get into the vehicles, which are left parked in set locations, and the keys are then found in the glove compartment. Members pay an hourly rate for the car - £4.95 is the cost at Streetcar - and return it to the same spot, or to a different designated parking place." },
    { id: 'G', content: "Car sharing is an increasingly popular option for people making the same journeys regularly - to and from work, for example. Many companies run schemes that help colleagues who live near to each other and work in the same place to contact each other so they can share the journey to work. Liftshare and Carshare are two national organisations that maintain online databases of people who would be prepared to team up. Other people may be able to replace part or all of their journey to work - or any journeys, for that matter - with low-cost transport such as a bicycle, or even by just walking. The more you can reduce your car use, however you gain access to it, the more you will save." }
  ]
};

export const QUESTIONS: Question[] = [
  {
    id: '14-17',
    type: 'heading_matching',
    title: 'Questions 14-17',
    instructions: 'The text has 7 paragraphs (A - G). Which paragraph does each of the following headings best fit?',
    paragraphRange: 'A - G',
    headings: [
      { value: 'i', label: "Don't wait!" },
      { value: 'ii', label: "Team up" },
      { value: 'iii', label: "Join a club" },
      { value: 'iv', label: "Use public transport" },
    ],
    questions: [
      { id: '14', prompt: "Don't wait!" },
      { id: '15', prompt: "Team up" },
      { id: '16', prompt: "Join a club" },
      { id: '17', prompt: "Use public transport" },
    ]
  },
  {
    id: '18-22',
    type: 'multi_select',
    title: 'Questions 18-22',
    instructions: 'According to the text, FIVE of the following statements are true. Write the corresponding letters in answer boxes 18 to 22 in any order.',
    maxSelection: 5,
    questions: [
      {
        id: '18-22',
        prompt: '',
        options: [
          { value: 'A', label: 'McCarthy claims people can become addicted to using cars.' },
          { value: 'B', label: 'The cost of using a car rose by over ten per cent last year.' },
          { value: 'C', label: 'Most British people borrow money to help buy cars.' },
          { value: 'D', label: 'Many people need cars to drive in London occasionally.' },
          { value: 'E', label: 'Streetcar operates in over 20 cities in Britain.' },
          { value: 'F', label: "Streetcar's cars must be left at specific locations." },
          { value: 'G', label: 'Car sharing is becoming more popular with people who live and work near each other.' },
          { value: 'H', label: 'The government wants to encourage people to go to work on foot or by bicycle.' }
        ]
      }
    ]
  },
  {
    id: '23-26',
    type: 'single_choice',
    title: 'Questions 23-26',
    instructions: 'For each question, only ONE of the choices is correct. Write the corresponding letter in the appropriate box on your answer sheet.',
    questions: [
      {
        id: '23',
        prompt: 'According to the information given in the text, choose the correct answer or answers from the choices given. The government has decided',
        options: [
          { value: 'A', label: 'not to follow protestors\' suggestions.' },
          { value: 'B', label: 'to become more democratic.' },
          { value: 'C', label: 'to go ahead with charging drivers to use roads.' },
          { value: 'D', label: 'Both A and C' },
        ],
      },
      {
        id: '24',
        prompt: 'Cars are often',
        options: [
          { value: 'A', label: 'relatively cheap in Britain.' },
          { value: 'B', label: 'relatively expensive to operate in Britain.' },
          { value: 'C', label: 'sold second-hand in Britain.' },
          { value: 'D', label: 'Both A and B' },
          { value: 'E', label: 'Both A and C' },
        ],
      },
      {
        id: '25',
        prompt: 'Fuel costs',
        options: [
          { value: 'A', label: 'make up about 20% of the cost of running a car.' },
          { value: 'B', label: 'are related to the amount drivers pay for their cars.' },
          { value: 'C', label: 'depend on how far you drive.' },
          { value: 'D', label: 'Both A and C' },
          { value: 'E', label: 'Both B and C' },
        ]
      },
      {
        id: '26',
        prompt: 'Using public transport',
        options: [
          { value: 'A', label: 'will save money for British motorists, except in London.' },
          { value: 'B', label: 'and renting a car part of the time can save money.' },
          { value: 'C', label: 'costs Londoners about £1,700 a year.' },
        ]
      }
    ]
  }
];

export const ANSWER_KEY: AnswerKey = {
  '14': 'B',
  '15': 'G',
  '16': 'F',
  '17': 'E',
  '18-22': ['A', 'B', 'C', 'F', 'G'],
  '23': 'D',
  '24': 'E',
  '25': 'D',
  '26': 'B',
};