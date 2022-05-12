import React from "react";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 30px;

  .MuiPagination-root {
    color: #fff;

    .MuiPaginationItem-ellipsis {
      color: #fff;
    }

    .MuiPagination-ul {
      li {
        button {
          color: #fff;
          background: none;
        }
      }
    }

    .Mui-selected {
      border: none;
      color: #f15a24 !important;
    }
  }

  @media (max-width: 765px) {
    .MuiPagination-ul {
      li:nth-child(7),
      li:nth-child(6) {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 8px;
    margin-top: 16px;
  }
`;

export const Pagination = ({ onChange, currentPage, pageCount }) => {
  return (
    <Wrapper>
      <Stack spacing={2}>
        <MuiPagination
          count={pageCount}
          showFirstButton
          showLastButton
          variant="outlined"
          color="primary"
          onChange={(_, page) => onChange(page)}
          page={currentPage}
        />
      </Stack>
    </Wrapper>
  );
};
