import { View } from "react-native";
import React from "react";

import { HelperText, TextInput, useTheme } from "react-native-paper";
import { useForm, Controller, Control } from "react-hook-form";

type ControlledInputProps = {
  control: Control;
  name: string;
} & React.ComponentProps<typeof TextInput>;

const ControlledInput = ({
  control,
  name,
  ...textInputProps
}: ControlledInputProps) => {
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid },
      }) => (
        <View style={{ flex: 1 }}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...textInputProps}
            style={{ backgroundColor: theme.colors.background }}
            error={invalid}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message}
          </HelperText>
        </View>
      )}
    />
  );
};

export default ControlledInput;
