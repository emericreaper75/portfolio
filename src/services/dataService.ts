import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  getDoc
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { Project, BlogPost, Message } from '../types';

const PROJECTS_COLLECTION = 'projects';
const BLOG_COLLECTION = 'blogPosts';
const MESSAGES_COLLECTION = 'messages';

export const ProjectService = {
  async getAll(): Promise<Project[]> {
    try {
      const q = query(collection(db, PROJECTS_COLLECTION), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, PROJECTS_COLLECTION);
      return [];
    }
  },

  async create(project: Omit<Project, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
        ...project,
        createdAt: Date.now()
      });
      return docRef.id;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, PROJECTS_COLLECTION);
      return '';
    }
  }
};

export const BlogService = {
  async getAll(): Promise<BlogPost[]> {
    try {
      const q = query(collection(db, BLOG_COLLECTION), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, BLOG_COLLECTION);
      return [];
    }
  }
};

export const ContactService = {
  async submitMessage(message: Omit<Message, 'id' | 'read' | 'createdAt'>): Promise<void> {
    const path = MESSAGES_COLLECTION;
    try {
      await addDoc(collection(db, path), {
        ...message,
        read: false,
        createdAt: serverTimestamp() // Note: firestore rules expect request.time
      });
    } catch (error) {
       // Note: the rules expect createdAt == request.time, so we use serverTimestamp()
       // or we might need to adjust logic if serverTimestamp() doesn't match request.time perfectly in some contexts
       // but request.time IS the server timestamp at request.
       handleFirestoreError(error, OperationType.CREATE, path);
    }
  }
};
