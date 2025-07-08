"use client";

// MultiSelectWithChips.tsx
import React, { FC, useState } from "react";
import {
  Autocomplete,
  Checkbox,
  Chip,
  TextField,
  Box,
  AutocompleteRenderInputParams,
} from "@mui/material";

/** 選択肢の型定義 */
export interface Option {
  id: string;          // uuid
  name: string;
}

import { ARTIST_OPTIONS } from "@/data/artistOptions";
import DebugJson from "@/components/DebugJson";

/** ROCK IN JAPAN FESTIVAL 2025 の出演アーティスト一覧 */


/** メインコンポーネント */
const MultiSelectWithChips: FC = () => {
  const [value, setValue] = useState<Option[]>([]);

  return (
    <Box sx={{ width: 360 }}>
      <Autocomplete<Option, true, false, false>
        multiple
        disableCloseOnSelect
        options={ARTIST_OPTIONS}
        // filterSelectedOptions
        getOptionLabel={(option) => option.name}
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        isOptionEqualToValue={(o, v) => o.id === v.id}
        /* チェックボックス付きメニュー行 */
        /* 1. renderOption ─ key を分離してから渡す */
        renderOption={(props, option, { selected }) => {
          // props.key を取り出し、残りを rest に
          const { key, ...rest } = props;
          return (
            <li key={key} {...rest}>
              <Checkbox size="small" sx={{ mr: 1 }} checked={selected} />
              {option.name}
            </li>
          );
        }}

        /* 2. renderTags ─ key の重複をなくす */
        renderTags={(selected, getTagProps) =>
          selected.map((option, index) => {
            const tagProps = getTagProps({ index }); // これに key が入っている
            return (
              <Chip
                {...tagProps} 
                label={option.name}
                size="small"
                key={tagProps.key} // 指定しないと lint error
              />
            );
          })
        }
        /* 入力欄 */
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField
            {...params}
            label="アーティストを選択"
          />
        )}
      />

      {/* デバッグ用表示 */}
      <DebugJson value={value} />
    </Box>
  );
};

export default MultiSelectWithChips;
