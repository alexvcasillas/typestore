export type DescriptionModel = {
  identifier: string;
  model: Model;
  initialState?: Model;
  lifecycles?: Lifecycles;
};

export type StoreModel = {
  identifier: string;
  model: Model;
};

export type Model = {
  [x: string]: any;
};

export type Lifecycles = {
  beforeCreate?: Function;
  afterCreate?: Function;
};
