import React, { useState } from "react";
import Styles from "./Request.module.scss";
import * as S from "./styles";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import { useFetch } from "../../../hooks";
import { ROUTES } from "../../../constants/routes/routes";
import { getUrlWithParams } from "../../../utils/urls";
import { formatDate } from "../../../utils/FormatData";
import { Pagination } from "../../shared/Pagination";

const Request = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dataFetch = getUrlWithParams(ROUTES.ORDERS.GET, {
    id_cliente: 6,
    currentPage,
  });

  const { data } = useFetch(dataFetch);

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={Styles.request_page_wrap}>
      <div className={Styles.table_container}>
        <div style={{ display: "block", padding: 0 }}>
          <S.TableStyles>
            <TableContainer component={Paper}>
              <Table
                // style={{
                //     width: 600,
                // }}
                size="small"
              >
                <TableHead style={{ background: "#0D3840" }}>
                  <TableRow>
                    <TableCell align="center">PEDIDO</TableCell>
                    <TableCell align="center">DATA</TableCell>
                    <TableCell align="center">PRODUTO</TableCell>
                    <TableCell align="center">VALOR</TableCell>
                    <TableCell align="center">PAGAMENTO</TableCell>
                    <TableCell align="center">STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.items.map((row, idx) => (
                    <TableRow key={row.id_order}>
                      <TableCell align="center">{row.id_order}</TableCell>
                      <TableCell align="center">
                        {formatDate(row.createdAt)}
                      </TableCell>
                      <TableCell align="center">{row.nome}</TableCell>
                      <TableCell align="center">{row.valor}</TableCell>
                      <TableCell align="center">{row.metodo_pgto}</TableCell>
                      <TableCell align="center">
                        <span className={"status" + (idx + 1)}>{row.status}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination
                onChange={handlePagination}
                currentPage={currentPage}
                pageSize={data?.paging.pageCount}
              />
            </TableContainer>
          </S.TableStyles>
        </div>
      </div>
    </div>
  );
};

export default Request;
