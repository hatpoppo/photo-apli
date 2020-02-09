export type FilterTypes = "all" | "active" | "completed";

export interface PhotoItem {
  title: string;
  image: any;
  kind: string;
  complete: boolean;
}

export interface Store {
  photos: {
    [id: string]: PhotoItem;
  };
  filter: FilterTypes;
}
