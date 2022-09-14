import { memo } from "react";
import Geosuggest, { Suggest } from "react-geosuggest";
import { Suggestion } from "../../types";

interface Props {
  placeholder: string;
  onSuggestSelect(data: Suggestion | Suggest): void;
}

const SearchField = ({ placeholder, onSuggestSelect }: Props) => (
  <Geosuggest placeholder={placeholder} onSuggestSelect={onSuggestSelect} />
);

export default memo(SearchField);
