export interface Product {
  id: number;
  name: string;
  description: string;
  category: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  price: number,
  postedBy: string,
  imageIds: [
  ],
  isLive: boolean,
  isExpired: boolean,
  isUpcoming: boolean;
}
