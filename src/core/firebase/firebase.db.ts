import {
  addDoc,
  collection,
  CollectionReference,
  DocumentReference,
  Firestore,
  getDocs,
  query,
  QuerySnapshot,
  where,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
} from '@firebase/firestore';
import { DateTime } from 'luxon';
import { firebaseApp } from './firebase.app';
import {
  FirebaseKeywordDataType,
  FirebaseKeywordDataOmitType,
  FirebaseKeywordType,
} from './types';

export class FirebaseDB {
  private readonly PATH_OF_KEYWORDS = 'keywords';

  constructor(private readonly db: Firestore) {}

  private parseSnapshotToType<T extends {}>(snapshot: QuerySnapshot<T>) {
    return snapshot.docs.map((doc) =>
      Object.assign<T, { id: string }>(doc.data(), { id: doc.id }),
    ) as Array<T & { id: string }>;
  }

  private get keywordsCollection() {
    return collection(
      this.db,
      this.PATH_OF_KEYWORDS,
    ) as CollectionReference<FirebaseKeywordDataType>;
  }

  async findKeywordById(docId: string) {
    return doc(
      this.db,
      this.PATH_OF_KEYWORDS,
      docId,
    ) as DocumentReference<FirebaseKeywordDataType>;
  }

  async findKeywordsByUid(uid: string) {
    return this.parseSnapshotToType<FirebaseKeywordDataType>(
      await getDocs<FirebaseKeywordDataType>(
        query(
          this.keywordsCollection,
          where('uid', '==', uid),
          orderBy('createdAt', 'desc'),
        ),
      ),
    );
  }

  async findKeywordsByUidAndType(uid: string, type: FirebaseKeywordType) {
    return this.parseSnapshotToType<FirebaseKeywordDataType>(
      await getDocs<FirebaseKeywordDataType>(
        query(
          this.keywordsCollection,
          where('uid', '==', uid),
          where('type', '==', type),
          orderBy('createdAt', 'desc'),
        ),
      ),
    );
  }

  async insertKeyword(
    uid: string,
    row: FirebaseKeywordDataOmitType,
  ): Promise<DocumentReference<FirebaseKeywordDataType>> {
    const createdAt = DateTime.local().toISO({ includeOffset: false });
    return addDoc(
      this.keywordsCollection,
      Object.assign(row, { uid, createdAt }),
    );
  }

  async updateKeyword(
    doc: DocumentReference<FirebaseKeywordDataType>,
    row: Partial<FirebaseKeywordDataOmitType>,
  ): Promise<void> {
    return updateDoc(doc, row);
  }

  async deleteKeyword(
    doc: DocumentReference<FirebaseKeywordDataType>,
  ): Promise<void> {
    return deleteDoc(doc);
  }
}

export const firebaseDB = new FirebaseDB(firebaseApp.db);
