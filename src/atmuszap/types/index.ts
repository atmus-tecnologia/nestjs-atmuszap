import { AxiosError } from "axios";

export type ApiResult = {
  status: 'SUCCESS' | number;
  error: boolean | string;
  response: {
    message: string | string[];
  };
};
export type AtmusZapResponseError = AxiosError<ApiResult>;
