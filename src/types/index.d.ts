declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare module '*.json' {
  const value: any;
  export default value;
}

interface User {
  id: string;
  username: string;
  email: string;
}

interface WhiteboardSession {
  id: string;
  name: string;
  participants: User[];
  createdAt: Date;
  updatedAt: Date;
}

interface DrawingAction {
  type: 'DRAW' | 'UNDO' | 'REDO';
  data: any; 
  userId: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}


