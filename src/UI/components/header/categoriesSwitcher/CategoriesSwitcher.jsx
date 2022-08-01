import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import SwitcherItem from "./SwitcherItem";
import {GET_CATEGORIES_QUERY} from "../../../../graphQL/Queries";

const CategoriesSwitcher = () => {

  const {categoryName} = useParams();
  const {data, loading, error} = useQuery(GET_CATEGORIES_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>


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
