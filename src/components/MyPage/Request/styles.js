import styled from "styled-components";

export const TableStyles = styled.div`
  .MuiPaper-root {
    margin-bottom: 66px;
    background: transparent;
  }

  table {
    border-collapse: collapse;

    th {
      background: #0d3840;
      border-bottom: 0;
      color: white;

      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
    }

    td {
      padding: 10px;
      background: #01191e;
      border-bottom: 1px solid #0d3840;
      color: white;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;

      span.status1 {
        color: #34a853;
      }

      span.status2 {
        color: #4285f4;
      }

      span.status3 {
        color: #db2b2f;
      }

      span.status4 {
        color: #f08428;
      }
    }

    thead {
      th:first-child {
        border-radius: 10px 0 0 0;
      }

      th:last-child {
        border-radius: 0 10px 0 0;
      }
    }

    tbody {
      padding: 10px;

      tr {
        :last-child {
          td {
            border-bottom: 0;

            :first-child {
              border-radius: 0 0 0 10px;
            }

            :last-child {
              border-radius: 0 0 10px 0;
            }
          }
        }
      }
    }
  }
`;
