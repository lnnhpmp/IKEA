/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Bed } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BedUpdateFormInputValues = {
    width?: number;
    height?: number;
    depth?: number;
};
export declare type BedUpdateFormValidationValues = {
    width?: ValidationFunction<number>;
    height?: ValidationFunction<number>;
    depth?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BedUpdateFormOverridesProps = {
    BedUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    width?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    depth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BedUpdateFormProps = React.PropsWithChildren<{
    overrides?: BedUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bed?: Bed;
    onSubmit?: (fields: BedUpdateFormInputValues) => BedUpdateFormInputValues;
    onSuccess?: (fields: BedUpdateFormInputValues) => void;
    onError?: (fields: BedUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BedUpdateFormInputValues) => BedUpdateFormInputValues;
    onValidate?: BedUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BedUpdateForm(props: BedUpdateFormProps): React.ReactElement;
