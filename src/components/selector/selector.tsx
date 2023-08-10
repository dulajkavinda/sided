import React from "react";
import Select from "react-select";
import { dropdownOptons, getDropdonwOption } from "@/utils";
import { LOCAL_STORAGE_KEY_CHANNEL } from "@/pages";
import useLocalStorage from "@/hooks/useLocalStorage";

interface ISelectorProps {
  setChannel: (channel: string) => void;
  setPage: (page: number) => void;
  channel: string;
}

const Selector = (props: ISelectorProps) => {
  const { setChannel, setPage, channel } = props;

  const [storedChannel, setStoredChannel] = useLocalStorage<string>(
    LOCAL_STORAGE_KEY_CHANNEL,
    channel
  );

  return (
    <Select
      defaultValue={getDropdonwOption(storedChannel)}
      onChange={(e: any) => {
        if (e?.value) {
          // setPage page to 1 before
          // channel is changed
          setPage(1);
          setChannel(e.value);
          setStoredChannel(e.value);
        }
      }}
      options={dropdownOptons}
      styles={{
        menu: (provided) => ({
          ...provided,
          backgroundColor: "#21262d",
        }),
        container: (baseStyles) => ({
          ...baseStyles,
          width: "10em",
          color: "red",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "#7d8590",
          fontWeight: 600,
          fontSize: "1.1em",
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? "#7d8590" : "#7d8590",
          cursor: "pointer",
          backgroundColor: state.isSelected
            ? "#35393f"
            : state.isFocused
            ? "#35393f"
            : "#21262d",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          height: "3em",
          border: "none",
          backgroundColor: "#010409",
          outline: "3px solid #21262d",
          borderRadius: "12px",
          cursor: "pointer",
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "#21262d",
          width: "4px",
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          color: state.isFocused ? "#35393f" : "#7d8590",
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 4,
        colors: {
          ...theme.colors,
          primary50: "#161b22",
          primary75: "#35393f",
          primary: "#161b22",
        },
      })}
    />
  );
};

Selector.propTypes = {};

export default Selector;
