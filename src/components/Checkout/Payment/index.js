import React, { useEffect, useState } from "react";
import Progress from "../Progress";
import { getImg } from "../../../utils/Helper";
import Styles from "./Payment.module.scss";
import styled from "styled-components";

const options = [];

const CatalogStyle = styled.div`
	.Dropdown-root {
		border-radius: 25px;
		height: 46px;
    
		.Dropdown-control {
			display:flex;
			padding: 6px 9px;
			background: transparent;
			border: none;
			background: #01191E;
			border-radius: 10px;
			max-height: 46px;

			.Dropdown-arrow-wrapper {
				margin-left: 6px;
				align-self: center;

				i {
					font-size: 25px;
				}
			}
		}

		.Dropdown-menu {
			border-radius: 4px;
		}

		.Dropdown-placeholder  {
			width: 100%;
			font-size: 22px;
		}
	}
}`;

const Payment = () => {
  const [data, setData] = useState({
    progress: 18,
    time: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setData((state) => ({
        progress: state.progress <= 0 ? 0 : state.progress - 1,
      }));
    }, 1000);

    return clearInterval(data.timer);
  }, []);

  return (
    <CatalogStyle>
      <div className={Styles.payment_wrap}>
        <div className={Styles.payment_title}>
          Seu pedido está sendo processado.
        </div>
        <div className={Styles.payment_content_head}>
          <div className={Styles.payment_no}>Nº Pedido</div>
          <div className={Styles.payment_type}>Forma de Pagamento</div>
        </div>
        <div className={Styles.payment_content_body}>
          <div className={Styles.payment_no}>01543</div>
          <div className={Styles.payment_type}>Pix</div>
        </div>
        <div className={Styles.payment_process_container}>
          {data.state.progress !== 0 && (
            <div className={Styles.payment_process_title}>
              Aguardando pagamento
            </div>
          )}
          {data.state.progress === 0 && (
            <div className={Styles.payment_0process_title}>
              Pagamento expirado!
            </div>
          )}
          <div className={Styles.payment_progress}>
            <Progress time={data.state.time} progress={data.state.progress} />
          </div>
          {data.state.progress !== 0 && (
            <div>
              <button className={Styles.payment_btn}>Pagar agora</button>
            </div>
          )}
        </div>
      </div>
    </CatalogStyle>
  );
};

export default Payment;
