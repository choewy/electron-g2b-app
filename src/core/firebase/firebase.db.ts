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
} from '@firebase/firestore';
import { firebaseApp } from './firebase.app';
import { FirebaseKeywordDataType, FirebaseKeywordDataOmitType } from './types';

export class FirebaseDB {
  private readonly PATH_OF_KEYWORDS = 'keywords';

  constructor(private readonly db: Firestore) {}

  private parseSnapshotToType<T>(
    snapshot: QuerySnapshot<FirebaseKeywordDataType>,
  ) {
    return snapshot.docs.map((doc) => doc.data()) as T[];
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
        query<FirebaseKeywordDataType>(
          this.keywordsCollection,
          where('uid', '==', uid),
        ),
      ),
    );
  }

  async insertKeyword(
    uid: string,
    row: FirebaseKeywordDataOmitType,
  ): Promise<DocumentReference<FirebaseKeywordDataType>> {
    return addDoc(this.keywordsCollection, Object.assign({ uid }, row));
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
