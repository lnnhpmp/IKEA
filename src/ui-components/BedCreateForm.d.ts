/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BedCreateFormInputValues = {
    width?: number;
    height?: number;
    depth?: number;
};
export declare type BedCreateFormValidationValues = {
    width?: ValidationFunction<number>;
    height?: ValidationFunction<number>;
    depth?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BedCreateFormOverridesProps = {
    BedCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    width?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    depth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BedCreateFormProps = React.PropsWithChildren<{
    overrides?: BedCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BedCreateFormInputValues) => BedCreateFormInputValues;
    onSuccess?: (fields: BedCreateFormInputValues) => void;
    onError?: (fields: BedCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BedCreateFormInputValues) => BedCreateFormInputValues;
    onValidate?: BedCreateFormValidationValues;
} & React.CSSProperties>;
export default function BedCreateForm(props: BedCreateFormProps): React.ReactElement;
