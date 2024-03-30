import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { getLastSixMessages } from '@/firebase';

interface Message {
  id: string;
  userName: string;
  email: string;
  content: string;
  createdAt: {
    toDate: () => Date;
  };
}

interface MessagesContextType {
  messages: Message[];
  loading: boolean;
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  getMessages?: () => Promise<void>;
}

interface MessagesProviderProps {
  children: ReactNode;
}

const defaultValue: MessagesContextType = {
  messages: [],
  loading: true,
};

const MessagesContext = createContext<MessagesContextType>(defaultValue);

export const useMessages = () => useContext(MessagesContext);

export const MessagesProvider = ({ children }: MessagesProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);

  const getMessages = async () => {
    try {
      setLoading(true);
      const data = await getLastSixMessages();
      setMessages(data);
    } catch (error) {
      console.error('Mesajlar getirilirken hata oluştu: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <MessagesContext.Provider value={{ messages, loading, getMessages }}>
      {!loading && children}
    </MessagesContext.Provider>
  );
};
