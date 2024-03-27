import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { getData } from '@/firebase';

interface Message {
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
      const data = await getData('messages');
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
    <MessagesContext.Provider value={{ messages, loading }}>
      {!loading && children}
    </MessagesContext.Provider>
  );
};
