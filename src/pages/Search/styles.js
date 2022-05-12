import styled from "styled-components";

export const CatalogStyle = styled.div`
        .filter_item2{
          display: none !important;
        }

        .filter_list{
            display: flex;
            justify-content: space-around;
            width: 100%;

            @media (max-width: 500px) {
              flex-direction: column;

              .filter_item .Dropdown-root {
                width: 100%;
              }

              .filter_item2{
                width: 100%;
                margin: 0 auto;
                display: flex;
                padding: 8px;
                align-items: center;
                justify-content: center;
                display: block !important;
              }
            }

            .filter_item2{
                display: block;
                margin: 10px 0;
                .Dropdown-root {
                    width: 100%;
                    border-radius: 25px;

                    .Dropdown-control {
                        display:flex;
                        padding: 9px 28px;
                        background: transparent;
                        border: none;
                        background: #0D3840;
                        border-radius: 25px;

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
            }
            }
        }

        .filter_item3{
          display: block;
          margin: 10px 0;
          border: none;


          .Dropdown-root {
            width: 100%;
            border: none;


            .Dropdown-control {
                  display:flex;
                  align-items: center;
                  padding: 0 10px;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  background: transparent;
                  border: none;
                  background: transparent;
                  border-radius: 25px;

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
                  font-size: 20px;
                }
            }
      }
      }
  }



      @media (min-width: 768px) and (max-width: 1024px) {
        .filter_item{
          display: none;
        }

        .filter_item2{
          display: block;
        }
      }


        .filter_item {
            margin: 10px 0;
            .Dropdown-root {
                width: 238px;
                border-radius: 25px;

                .Dropdown-control {
                    display:flex;
                    padding: 9px 28px;
                    background: transparent;
                    border: none;
                    background: #0D3840;
                    border-radius: 25px;



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
        }
    }
}`;

export const WrapperLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
