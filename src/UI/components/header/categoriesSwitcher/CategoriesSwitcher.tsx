import React, {useEffect} from "react";
import styled from "styled-components";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import SwitcherItem from "./SwitcherItem";
import {GET_CATEGORIES_QUERY} from "../../../../graphQL/Queries";
import CategoryPreloader from "../../preloader/CategoryPreloader";

type dataType = {
  categories: {name: string}[]
}

const CategoriesSwitcher = () => {

  const {categoryName} = useParams();
  const {pathname} = useLocation();
  const {data, loading, error} = useQuery<dataType>(GET_CATEGORIES_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (categoryName === undefined && !pathname.includes("/cart") && data) {
      navigate(`/category/${data.categories[0].name}`);
    }
  }, [categoryName, data, loading, navigate, pathname]);

  if (loading) return <CategoryPreloader />;
  if (error || !data) return <pre>{error?.message ? error.message : "Server error"}</pre>

  return (
    <SwitcherWrapper>
      {data.categories.map( ({name}) => {
        return <SwitcherItem key={name} name={name} active={categoryName === name} />
      })}
    </SwitcherWrapper>
  );
}

const SwitcherWrapper = styled.nav`
  display: flex;
  height: 100%;
  min-width: 200px;
`;

export default CategoriesSwitcher;
