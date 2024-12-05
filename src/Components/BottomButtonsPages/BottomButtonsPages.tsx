import * as React from "react";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type Props = {
  index: number;
  totalPages: number;
  numberElements: number;
  pageSize: number;
  totalElements: number;
  onFoward: () => void;
  onMovingIndexPosition: (currentIndex: number) => void;
};
export const BottomButtonsPages = (props: Props) => {
  const {
    index,
    totalPages,
    numberElements,
    pageSize,
    totalElements,
    onFoward,
    onMovingIndexPosition,
  } = props;
  // Start from page 0 (or 1, if your API expects it)
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    onMovingIndexPosition(value);
  };

  return (
    <div>
      <Stack>
        <Pagination
          count={totalPages - 1}
          defaultPage={index}
          boundaryCount={2}
          page={index}
          onChange={handleChange}
        />
      </Stack>

      <div>
        Mostrando {numberElements} entradas de {totalElements}
      </div>
    </div>
  );
};
export default BottomButtonsPages;
