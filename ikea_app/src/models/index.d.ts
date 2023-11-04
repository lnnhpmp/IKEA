import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBed = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bed, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly depth?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBed = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bed, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly depth?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bed = LazyLoading extends LazyLoadingDisabled ? EagerBed : LazyBed

export declare const Bed: (new (init: ModelInit<Bed>) => Bed) & {
  copyOf(source: Bed, mutator: (draft: MutableModel<Bed>) => MutableModel<Bed> | void): Bed;
}