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
    <div className=" justify-items-center mt-6  mb-5">
      <Stack>
        <Pagination
          className="text-lg font-medium "
          sx={{
            "& .MuiPaginationItem-root": {
              color: "black",
              fontSize: "1.5rem", // Adjust the color for the pagination items
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "black",
              fontSize: "1.5rem", // Adjust the color for the ellipsis (...)
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "gray", // Change the background of selected page
              color: "white",
              fontSize: "2rem", // Change the text color of selected page
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "gray",
              fontSize: "2rem", // Hover effect for pages
            },
          }}
          variant="outlined"
          color="standard"
          count={totalPages - 1}
          defaultPage={index}
          boundaryCount={2}
          page={index}
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      </Stack>

      <div>
        <p className="text-lg font-medium  text-black dark:text-white border-black dark:border-white mb-5 mt-4">
          Mostrando {numberElements} entradas de {totalElements}
        </p>
      </div>
    </div>
  );
};
export default BottomButtonsPages;
