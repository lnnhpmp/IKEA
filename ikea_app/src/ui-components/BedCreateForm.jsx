/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Bed } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BedCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    width: "",
    height: "",
    depth: "",
  };
  const [width, setWidth] = React.useState(initialValues.width);
  const [height, setHeight] = React.useState(initialValues.height);
  const [depth, setDepth] = React.useState(initialValues.depth);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWidth(initialValues.width);
    setHeight(initialValues.height);
    setDepth(initialValues.depth);
    setErrors({});
  };
  const validations = {
    width: [],
    height: [],
    depth: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          width,
          height,
          depth,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Bed(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BedCreateForm")}
      {...rest}
    >
      <TextField
        label="Width"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={width}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              width: value,
              height,
              depth,
            };
            const result = onChange(modelFields);
            value = result?.width ?? value;
          }
          if (errors.width?.hasError) {
            runValidationTasks("width", value);
          }
          setWidth(value);
        }}
        onBlur={() => runValidationTasks("width", width)}
        errorMessage={errors.width?.errorMessage}
        hasError={errors.width?.hasError}
        {...getOverrideProps(overrides, "width")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={height}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              width,
              height: value,
              depth,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Depth"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={depth}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              width,
              height,
              depth: value,
            };
            const result = onChange(modelFields);
            value = result?.depth ?? value;
          }
          if (errors.depth?.hasError) {
            runValidationTasks("depth", value);
          }
          setDepth(value);
        }}
        onBlur={() => runValidationTasks("depth", depth)}
        errorMessage={errors.depth?.errorMessage}
        hasError={errors.depth?.hasError}
        {...getOverrideProps(overrides, "depth")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
