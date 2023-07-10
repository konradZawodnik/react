import { SyntheticEvent } from "react";
import { ItemInterface } from "../List";

type ListItemProps = {
  handleDelete: (e: SyntheticEvent, item: ItemInterface) => void;
  items: Array<ItemInterface>;
};

const ListItem = ({ handleDelete, items }: ListItemProps): any => {
  return items.map((item) => (
    <li key={item.id} data-testid="deleteListElementsListItem">
      <div>
        <span>{item.name}</span>{" "}
        <button
          aria-label="Usuń członka"
          className="Button"
          onClick={(e) => handleDelete(e, item)}
        >
          Usuń członka
        </button>
      </div>
    </li>
  ));
};

export default ListItem;
