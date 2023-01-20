import axios from "axios";
import { useQuery } from "react-query";
import { api } from "./api";

export const getSymbols = () => api.get<{ name: string }[]>("symbols").then((res) => res);
