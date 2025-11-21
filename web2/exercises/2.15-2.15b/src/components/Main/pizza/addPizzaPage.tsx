import type{ Pizza  , PizzeriaContext} from "../../../types";
import { useOutletContext } from "react-router-dom";


const AddPizzaPage = () => {
  const { addPizza }: PizzeriaContext = useOutletContext();
}


