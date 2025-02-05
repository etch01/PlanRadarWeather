import { WeatherData } from "../../redux/Interfaces/weatherInterface";
import { CityType } from "../HomeScreen/types";
import { ParamListBase, NavigationProp   } from "@react-navigation/native";

export interface WeatherDetailsProps{
    route: Route;
    navigation : NavigationProp<ParamListBase>;
}

type Route = {
    params:{
        city: CityType;
        isHistory: boolean; 
        weather?: WeatherData;
        createdAt?: string;
    },
    weatherImage:{
        width:100,
        height: 100
    }
}