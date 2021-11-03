import { createContext, FC, useState } from "react";
import { RequestObject } from "../models/RequestObject";
import { Resource } from "../models/Resource";
import { asyncDelay } from "../utils/async-delay";

interface ContextProps {
  data: Resource[];
  isLoading: boolean;
  error: string | null;
  sendRequest: (requestObject: RequestObject) => void;
}

const Context = createContext<ContextProps>({
  data: [],
  isLoading: false,
  error: null,
  sendRequest: (requestObject: RequestObject) => {},
});

export const ContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequestHandler = async ({ url, method, itemId }: RequestObject) => {
    setIsLoading(true);
    await asyncDelay(1000);
    try {
      setError(null);
      const response = await fetch(url, { method });

      if (!response.ok) throw Error("Oops! Something went wrong...");
      if (method === "DELETE") {
        setError(null);
        setIsLoading(false);
        setData((prevData) => {
          return prevData.filter((resource) => resource.id !== itemId);
        });

        return;
      }

      const data = await response.json();

      setData(data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setIsLoading(false);
        setError(error.message);
      }
    }
  };

  const contextValue: ContextProps = {
    data,
    isLoading,
    error,
    sendRequest: sendRequestHandler,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
