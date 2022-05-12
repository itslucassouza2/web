import React, { useEffect, useState } from "react";

import Card from "../../components/Home/Card";
import Styles from "./Search.module.scss";
import Dropdown from "react-dropdown";
import { useFetch } from "../../hooks/useFetch";
import { ROUTES } from "../../constants/routes/routes";
import { getUrlWithParams } from "../../utils/urls";
import { categories, paises, Tipo, plataformas, orderOptions } from "./mock";
// import Sort from "../../components/MyPage/Sort";
import { useHistory, useLocation } from "react-router-dom";
import { Base } from "../../components/shared/Base";
import { Loading } from "../../components/shared/Loading";
import { Pagination } from "../../components/shared/Pagination";

import "./search.css";
import * as S from "./styles";

const removeEmptyValues = (values) => {
  return Object.entries(values)
    .filter(([_, value]) => !!value.value)
    .reduce((acc, [key, value]) => {
      return (acc = { ...acc, [key]: value });
    }, {});
};

const formatFetchValues = (values) => {
  return Object.entries(values).reduce((acc, [key, brand]) => {
    return (acc = { ...acc, [key]: brand.value });
  }, {});
};

const formatFetchLabels = (values) => {
  return Object.entries(values).reduce((acc, [key, item]) => {
    return (acc = { ...acc, [key]: item.label });
  }, {});
};

const INITIAL_STATE = {
  marca: { label: "", value: "" },
  tipo: { label: "", value: "" },
  plataforma: { label: "", value: "" },
  pais: { label: "", value: "" },
};

const INITIAL = { label: "", value: "" };

const filterValues = [
  "marca",
  "tipo",
  "plataforma",
  "pais",
  "classificar",
  "currentPage",
  "sh",
];

export default function Search() {
  const params = useLocation();
  const history = useHistory();

  const [
    brandValue,
    typeValue,
    plataformValue,
    countryValue,
    sortValue,
    pageValue,
    searchValue,
  ] = filterValues.map((item) => new URLSearchParams(params.search).get(item));

  const [filters, setFilters] = useState(INITIAL_STATE);
  const [filterKeys, setFilterKeys] = useState([]);

  useEffect(() => {
    const brand = categories.find(({ label }) => label === brandValue);
    const country = paises.find(({ label }) => label === countryValue);
    const platform = plataformas.find(({ label }) => label === plataformValue);
    const type = Tipo.find(({ label }) => label === typeValue);
    const sort = orderOptions.find(({ label }) => label === sortValue);

    const filterValues = {
      marca: brand,
      pais: country,
      plataforma: platform,
      tipo: type,
      classificar: { value: sort?.value },
      currentPage: { value: pageValue },
      sh: { value: searchValue },
    };

    const filters = Object.entries(filterValues).reduce((acc, [key, value]) => {
      return (acc = { ...acc, [key]: value ?? INITIAL });
    }, {});
    setFilters(filters);
    const values = formatFetchLabels(filters);
    setFilterKeys(Object.keys(values).filter((key) => !!values[key]));
  }, [
    brandValue,
    typeValue,
    plataformValue,
    countryValue,
    sortValue,
    pageValue,
    searchValue,
  ]);

  const selectOptions = [
    {
      name: "Marca",
      value: filters.marca.label || "Marca",
      options: categories,
    },
    {
      name: "Tipo",
      value: filters.tipo.value || "Tipo",
      options: Tipo,
    },
    {
      name: "Plataforma",
      value: filters.plataforma.value || "Plataforma",
      options: plataformas,
    },
    {
      name: "Pais",
      value: filters.pais.value || "Pais",
      options: paises,
    },
  ];

  const validFilters = removeEmptyValues(filters);
  const validFiltersWithLabel = Object.entries(validFilters).filter(
    ([_, value]) => !!value.label
  );

  const { data, isLoading } = useFetch(
    getUrlWithParams(ROUTES.SEARCH.CATEGORY, {
      sh: "",
      ...formatFetchValues(validFilters),
    })
  );

  const handleResetFilters = () => history.push(ROUTES.SEARCH.CATEGORY);

  const handleResetFilter = (field) => {
    const filterState = { ...filters, [field]: { label: "", value: "" } };
    const valid = removeEmptyValues(filterState);
    const url = getUrlWithParams(ROUTES.SEARCH.CATEGORY, {
      ...formatFetchLabels(valid),
    });
    history.push(url);
  };

  const handleRouteChange = (newFilters) => {
    const valid = removeEmptyValues(newFilters);

    const filtersWithoutLabel = Object.entries(valid)
      .filter(([_, filter]) => !filter.label)
      .reduce(
        (acc, [key, filter]) => (acc = { ...acc, [key]: filter.value }),
        {}
      );

    const url = getUrlWithParams(ROUTES.SEARCH.CATEGORY, {
      ...formatFetchLabels(valid),
      ...filtersWithoutLabel,
    });
    history.push(url);
  };

  console.log(filters);

  const onChange = (e, field) => {
    const filterState = { ...filters, [field]: e };
    handleRouteChange(filterState);
  };

  const handleChangeKeys = (label) => {
    const keyExists = filterKeys.includes(label);
    if (!keyExists) {
      setFilterKeys((prevState) => [...prevState, label]);
    }
  };

  const handlePagination = (currentPage) => {
    const page = { ...filters, currentPage: { value: currentPage } };
    handleRouteChange(page);
  };

  return (
    <S.CatalogStyle>
      <Base>
        <div className={Styles.product_catalog_container}>
          <div className={Styles.product_catalog_wrap}>
            <div className={Styles.catalog_title}>Catálogo de Produtos</div>
            <div className={Styles.catalog_drop}>
              <span>Ordernar por:</span>
              <div className="filter_item3">
                <Dropdown
                  arrowClosed={<i className="fa fa-angle-down" />}
                  arrowOpen={<i className="fa fa-angle-up" />}
                  options={orderOptions}
                  onChange={(e) => onChange(e, "classificar")}
                  value={filters?.classificar?.value || "Ordenar"}
                  placeholder={orderOptions[0]}
                  className={Styles.dropdown}
                  controlClassName={Styles.control}
                  menuClassName={Styles.menu}
                  arrowClassName={Styles.arrow}
                />
              </div>
            </div>
            <div className={Styles.filter_wrap}>
              <div className={Styles.filter_header}>
                <div className={Styles.header_left}>
                  <ul>
                    {validFiltersWithLabel.map(([key, value]) => (
                      <li onClick={() => handleResetFilter(key)}>
                        {value.label}&nbsp;&nbsp;
                        <i className="fa fa-times"></i>
                      </li>
                    ))}
                    {!!validFiltersWithLabel.length && (
                      <li onClick={handleResetFilters}>Limpar Filtros</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="filter_list">
                <div className="filter_item2">
                  {/*<Dropdown
                    arrowClosed={<i className="fa fa-angle-down" />}
                    arrowOpen={<i className="fa fa-angle-up" />}
                    options={filterOptions}
                    onChange={(e) => { handleChangeKeys(e.label.toLowerCase()); console.log(e); }}
                    value="Filtros"
                    placeholder={filterOptions[0]}
                    className={Styles.dropdown}
                    controlClassName={Styles.control}
                    menuClassName={Styles.menu}
                    arrowClassName={Styles.arrow}
                  />*/}

                  <button
                    className={Styles.dropdown_mobile}
                    onClick={(e) => {
                      const filters = document.querySelector("[data-filters]");

                      if (
                        !e.target.classList.contains("dropdown_mobile--active")
                      ) {
                        e.target.classList.add("dropdown_mobile--active");
                        filters.classList.add(
                          "product_catalog_filters--active"
                        );
                      } else {
                        e.target.classList.remove("dropdown_mobile--active");
                        filters.classList.remove(
                          "product_catalog_filters--active"
                        );
                      }
                    }}
                  >
                    Filtros
                  </button>
                </div>

                {/*{filterKeys?.map((key) => {
                  const filterIndex = selectOptions.findIndex(
                    (opt) => opt.name.toLowerCase() === key
                  );
                  const filterOption = selectOptions[filterIndex];

                  return (
                    <div className="filter_item2">
                      <Dropdown
                        arrowClosed={<i className="fa fa-angle-down" />}
                        arrowOpen={<i className="fa fa-angle-up" />}
                        options={filterOption.options}
                        onChange={(e) =>
                          onChange(e, filterOption.name.toLowerCase())
                        }
                        value={filterOption.value}
                        placeholder={filterOption.options[0]}
                        className={Styles.dropdown}
                        controlClassName={Styles.control}
                        menuClassName={Styles.menu}
                        arrowClassName={Styles.arrow}
                      />
                    </div>
                  );
                })}*/}

                <div className={Styles.product_catalog_filters} data-filters>
                  {selectOptions.map((option) => (
                    <div className="filter_item">
                      <Dropdown
                        arrowClosed={<i className="fa fa-angle-down" />}
                        arrowOpen={<i className="fa fa-angle-up" />}
                        options={option.options}
                        onChange={(e) => onChange(e, option.name.toLowerCase())}
                        value={option.value}
                        placeholder={option.options[0]}
                        className={Styles.dropdown}
                        controlClassName={Styles.control}
                        menuClassName={Styles.menu}
                        arrowClassName={Styles.arrow}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={Styles.product_recommend_list}>
              {isLoading ? (
                <S.WrapperLoading>
                  <Loading />
                </S.WrapperLoading>
              ) : (
                data?.items?.map((product) => (
                  <Card
                    id={product.id_product}
                    key={product.id_product}
                    cardimage={product?.mid_img_src ? product?.mid_img_src : ""}
                    title={product.nome}
                    price={product.preco}
                    item={product}
                    discount={product.desconto}
                    countries={product?.paises_produtos_id_pais}
                    categories={product?.categorias_produtos_id_cat}
                  />
                ))
              )}
              {!data?.items.length && !isLoading && (
                <span>Itens não encontrados</span>
              )}
            </div>
            {!!data?.items.length && (
              <Pagination
                onChange={handlePagination}
                currentPage={Number(filters?.currentPage?.value) || 1}
                pageCount={data?.paging.pageCount}
              />
            )}
          </div>
        </div>
      </Base>
    </S.CatalogStyle>
  );
}
