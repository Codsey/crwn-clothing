import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import {
  CollectionPageContainer,
  TitleCotnainer,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <CollectionPageContainer>
      <TitleCotnainer>{title}</TitleCotnainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
