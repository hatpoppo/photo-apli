export type FilterTypes = "all" | "active" | "completed";

export interface PhotoItem {
  label: string;
  completed: boolean;
}

export interface Store {
  photo: {
    [id: string]: PhotoItem;
  };
  filter: FilterTypes;
}
