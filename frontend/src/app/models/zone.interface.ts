export type Point = [number, number];

export type Zone = {
  id?: number;
  name: string;
  points: [Point, Point, Point, Point];
};
