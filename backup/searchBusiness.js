import { fetchData } from "../api";
import { apiRouteList } from "../utils/api-routes";

export const searchBusiness = async (e, filter, setBusinesses) => {
  e.preventDefault();
  var dataForServer = Object.assign({}, filter);
  delete dataForServer.grouping;
  dataForServer.active = true;

  fetchData(`${apiRouteList.business}getBusinessesBySearch`, "POST", { data: dataForServer })
    .then((dataFromServer) => {
      setBusinesses(dataFromServer);
    })
    .catch((err) => {
      console.log(err);
    });
};
