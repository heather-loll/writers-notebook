type Tip = {
  num?: number;
  title: string;
  text: string;
  quote: string;
  quoteSource: string;
};

type CategorizedTips = {
  name: string;
  data: Tip[];
}[];
