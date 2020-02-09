export type FilterTypes = "all" | "active" | "completed";

export interface PhotoItem {
  label: string;
  image: any;
  kind: string;
  completed: boolean;
}

export interface Store {
  photos: {
    [id: string]: PhotoItem;
  };
  filter: FilterTypes;
}
